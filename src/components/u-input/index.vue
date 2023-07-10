<template>
  <div class="u-input-wrapper" >
    <div class="u-input-before">
      <slot name="before"></slot>
    </div>

    <div 
      tabindex="-1"
      ref="inputContainer"
      class="u-input-container" 
      :style="_inputStyle"
      :class="disabled ? 'u-disabled' : ''"
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
        @input="inputHandler"  
        @focus="focusHandler"
        @blur="blurHandler"
        class="u-input"
        ref="input" 
        type="text" 
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

import { noop, debounce as debounceFn } from '../../utils'

const props = withDefaults(defineProps<{
  type?: 'text' | 'password' | 'textareae' | 'mail' | 'search' | 'tel' | 'file' 
  | 'number' | 'url' | 'time' | 'date',
  debounce?: string | number,
  readonly?: boolean,
  disabled?: boolean,
  clearable?: boolean,
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
  clearable: false,
  autofocus: false,
  inputClass: '',
  inputStyle: () => ({ 
    height: '56px',
    borderRadius: '4px',
    padding: '0 12px',
    color: 'rgba(0, 0, 0, .87)',
    fontSize: '14px',
    fontWeight: '400px',
    border: '1px solid rgba(0, 0, 0, .23)'
  }),
  placeholder: '',
  placeholderStyle: () => ({ 
    color: '#a8abb2',
    fontSize: '14px',
    fontWeight: '400px'
  }),
  // TODO: focusedPlaceholderStyle and hoveredPlaceholderStyle
  focusedInputStyle: () => ({ border: '2px solid rgb(25, 118, 210)' }),
  hoveredInputStyle: () => ({ border: '1px solid rgba(0, 0, 0, .87)' }),
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
  clearable,
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
const input = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const inputContainer = ref<HTMLElement | null>(null)
const focusedInputContainer = ref(false)
const hoveredInputContainer = ref(false)

const foucsHelper = (e: Event) => {
  const { target, currentTarget } = e

  // if target is not input and container contains target, autofocus.
  if (target === currentTarget) {
    input.value!.focus()
  } 
}

const containerFocusHandler = () => focusedInputContainer.value = true

const containerBlurHandler = () => focusedInputContainer.value = false

const mouseenterHandler = () => hoveredInputContainer.value = true

const mouseleaveHandler = () => hoveredInputContainer.value = false

const focusHandler = (e: Event) => {
  focusedInput.value = true
  emit('focus', e)
}

const blurHandler = (e: Event) => {
  focusedInput.value = false
  emit('blur', e)
}

const focusedInputOrInputContainer = computed(() => {
  return !readonly.value && 
    !disabled.value &&
    (focusedInput.value || focusedInputContainer.value)
})

const _inputStyle = computed(() => {
  const style = {
    ...inputStyle.value, 
    ...(
      focusedInputOrInputContainer.value
        ? focusedInputStyle.value
        : hoveredInputContainer.value
          ? hoveredInputStyle.value
          : {}
    )
  }

  const { border } = style
  style['--input-container-border'] = border
  delete style.border

  return style
})

const _inputClass = computed(() => {
  return `
    ${ inputClass.value }
    ${ focusedInputOrInputContainer.value ? focusedInputClass.value : '' }
    ${ hoveredInputContainer.value ? hoveredInputClass.value : '' }
  `
})

const _placeholderStyle = computed(() => {
  const { color, fontSize, fontWeight } = placeholderStyle.value
  const res: { [propName: string]: string | number } = {
    '--u-placeholder-color': color,
    '--u-placeholder-fontSize': fontSize,
    '--u-placeholder-fontWeight': fontWeight,
  }

  return res
})

const handler = (e: Event) => emit(
  'update:modelValue', 
  (e.target as HTMLInputElement).value
)

const debouncedInputHandler = debounce.value
  ? debounceFn(handler, Number(debounce.value))
  : handler

const inputHandler = readonly.value ? noop : debouncedInputHandler

const clearContents = () => {
  const oldValue = modelValue.value
  emit('update:modelValue', '')
  emit('clear', oldValue)
}

const addEventListenerForClearable = () => {
  const icons = inputContainer.value!.querySelectorAll('*[clearable]')

  for (let i = 0, l = icons.length; i < l; i++) {
    icons[i].addEventListener('click', clearContents)
  }
}

onMounted(() => {
  addEventListenerForClearable()
})
</script>

<style scoped>
.u-input-wrapper {
  display: flex;
  align-items: center;
}

.u-input-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
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
  border: var(--input-container-border);
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
  color: var(--u-placeholder-color);
  font-size: var(--u-placeholder-fontSize);
  font-weight: var(--u-placeholder-fontWeight);
}

.u-input-before,
.u-input-after {
  height: 100%;
}
</style>
