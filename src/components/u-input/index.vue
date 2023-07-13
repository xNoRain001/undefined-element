<template>
  <div class="u-input-wrapper" ref="inputWrapperRef">
    <div class="u-input-before">
      <slot name="before"></slot>
    </div>

    <div 
      tabindex="-1"
      class="u-input-container" 
      :style="_inputStyle"
      :class="_inputClass"
      @click="foucsHelper"
      @focus="containerFocusHandler"
      @blur="containerBlurHandler"
      @mouseenter="mouseenterHandler"
      @mouseleave="mouseleaveHandler"
    >
      <slot name="prepend"></slot>

      <input 
        :autofocus="autofocus ? true : false"
        :readonly="readonly ? true : false"
        :disabled="disabled ? true : false"
        :placeholder="placeholder" 
        :value="modelValue" 
        :style="_placeholderStyle"
        @input="_inputHandler"  
        @focus="focusHandler"
        @blur="blurHandler"
        class="u-input"
        ref="inputRef" 
        :type="_type" 
      />

      <slot name="append"></slot>
    </div>

    <div class="u-input-after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted } from 'vue'

import { useAddEventListener, useGenBorderVariables } from '../../composables'
import { noop, debounce as debounceFn } from '../../utils'

const props = withDefaults(defineProps<{
  type?: 'text' | 'password' | 'textareae' | 'mail' | 'search' | 'tel' | 'file' 
  | 'number' | 'url' | 'time' | 'date',
  debounce?: number,
  readonly?: boolean,
  disabled?: boolean,
  autofocus?: boolean,
  modelValue: string,
  inputStyle?: { [propName: string]: string | number },
  inputClass?: string,
  placeholder?: string,
  placeholderStyle?: { [propName: string]: string | number },
  hoveredInputStyle?: { [propName: string]: string | number }
  focusedInputStyle?: { [propName: string]: string | number },
  focusedInputClass?: string,
  hoveredInputClass?: string
}>(), {
  type: 'text',
  debounce: 0,
  readonly: false,
  disabled: false,
  autofocus: false,
  inputClass: '',
  inputStyle: () => ({}),
  placeholder: '',
  placeholderStyle: () => ({}),
  // TODO: focusedPlaceholderStyle and hoveredPlaceholderStyle
  focusedInputStyle: () => ({}),
  hoveredInputStyle: () => ({}),
  focusedInputClass: '',
  hoveredInputClass: ''
})
const emit = defineEmits<{ 
  'blur': [e: Event],
  'focus': [e: Event],
  'clear': [value: string],
  'update:modelValue': [value: string]
}>()
const { 
  type,
  debounce, 
  readonly,
  disabled,
  autofocus,
  modelValue, 
  inputStyle,
  inputClass,
  placeholder,
  placeholderStyle,
  focusedInputClass,
  hoveredInputClass,
  focusedInputStyle,
  hoveredInputStyle
} = toRefs(props)
const visible = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const inputWrapperRef = ref<HTMLElement | null>(null)
const focusedInputContainer = ref(false)
const hoveredInputContainer = ref(false)
const _type = computed(() => {
  return type.value === 'password' && visible.value
    ? 'text'
    : type.value
})
const _placeholderStyle = computed(() => {
  const { color, fontSize, fontWeight } = placeholderStyle.value

  return {
    '--u-input-placeholder-color': color,
    '--u-input-placeholder-fontSize': fontSize,
    '--u-input-placeholder-fontWeight': fontWeight,
  }
})
const focused = computed(() => {
  return !readonly.value && 
    !disabled.value &&
    (focusedInput.value || focusedInputContainer.value)
})
const _inputStyle = computed(() => {
  const style = {
    ...inputStyle.value, 
    ...(
      focused.value
        ? focusedInputStyle.value
        : hoveredInputContainer.value
          ? hoveredInputStyle.value
          : {}
    )
  }

  useGenBorderVariables(style)

  return style
})
const _inputClass = computed(() => `
  ${ inputClass.value }
  ${ focused.value ? focusedInputClass.value : '' }
  ${ hoveredInputContainer.value ? hoveredInputClass.value : '' }
  ${ disabled.value ? 'u-disabled' : '' }
`)

const foucsHelper = (e: Event) => {
  const { target, currentTarget } = e

  // if target is not input and container contains target, autofocus.
  if (target === currentTarget) {
    inputRef.value!.focus()
  } 
}

const containerFocusHandler = () => focusedInputContainer.value = true

const containerBlurHandler = () => setTimeout(
  () => focusedInputContainer.value = false
)

const mouseenterHandler = () => hoveredInputContainer.value = true

const mouseleaveHandler = () => hoveredInputContainer.value = false

const focusHandler = (e: Event) => {
  focusedInput.value = true
  emit('focus', e)
}

const blurHandler = (e: Event) => {
  setTimeout(() => {
    focusedInput.value = false
    emit('blur', e)
  })
}

const inputHandler = (e: Event) => emit(
  'update:modelValue', 
  (e.target as HTMLInputElement).value
)

const _inputHandler = computed(() => {
  const _debounce = debounce.value

  return readonly.value 
    ? noop 
    : _debounce
      ? debounceFn(inputHandler, _debounce)
      : inputHandler
})

const clearContent = () => {
  const oldValue = modelValue.value
  emit('update:modelValue', '')
  emit('clear', oldValue)
}

const updateVisible = () => visible.value = !visible.value

onMounted(() => {
  const _inputWrapperRef = inputWrapperRef.value as HTMLElement

  useAddEventListener(_inputWrapperRef, '*[clearable]', 'click', clearContent)
  useAddEventListener(_inputWrapperRef, '*[visible]', 'click', updateVisible)
})
</script>

<style scoped>
.u-input-wrapper {
  display: flex;
  align-items: center;
}

.u-input-container {
  display: flex;
  align-items: center;
  position: relative;
  border: none !important;
  transition-property: background-color;
  transition-duration: var(--u-transition-duration);
}

/* handle text jitter */
.u-input-container::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: 
    var(--u-input-container-before-border);
  border-top-right-radius: 
    var(--u-input-container-before-border-top-right-radius);
  border-top-left-radius: 
    var(--u-input-container-before-border-top-left-radius);
  border-bottom-right-radius: 
    var(--u-input-container-before-border-bottom-right-radius);
  border-bottom-left-radius: 
    var(--u-input-container-before-border-bottom-left-radius);
  z-index: -1;
  /* transition-property: border-color;
  transition-duration: var(--u-transition-duration); */
}

.u-input-container.u-disabled,
.u-input-container.u-disabled > .u-input {
  cursor: not-allowed;
}

.u-input {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.u-input:focus {
  outline: none;
}

.u-input::placeholder {
  color: var(--u-input-placeholder-color);
  font-size: var(--u-input-placeholder-fontSize);
  font-weight: var(--u-input-placeholder-fontWeight);
}

.u-input-before,
.u-input-after {
  height: 100%;
}
</style>
