<template>
  <div class="u-input-wrapper">
    <slot name="before"></slot>
    <div 
      tabindex="-1"
      ref="inputContainer"
      class="u-input-container" 
      :class="disabled ? 'u-disabled' : ''"
      :style="dynamicInputStyle"
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
        @input="inputHandler"  
        @focus="focusHandler"
        @blur="blurHandler"
        class="u-input"
        ref="input" 
        type="text" 
      />
      <slot name="append"></slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>

<script lang="ts" setup>
import { noop, merge, debounce as debounceFn } from '../../utils'
import { ref, toRefs, computed, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string,
  placeholder?: string,
  debounce?: string | number,
  readonly?: boolean,
  disabled?: boolean,
  clearable?: boolean,
  autofocus?: boolean,
  inputStyle?: {
    common?: { [propName: string]: string | number },
    source?: { [propName: string]: string | number },
    focused?: { [propName: string]: string | number },
    hovered?: { [propName: string]: string | number }
  },
  type?: 'text' | 'password' | 'textareae' | 'mail' | 'search' | 'tel' | 'file' 
  | 'number' | 'url' | 'time' | 'date'
}>(), {
  placeholder: '',
  debounce: 0,
  readonly: false,
  disabled: false,
  clearable: false,
  autofocus: false,
  type: 'text',
  inputStyle: () => ({}),
})
const emit = defineEmits<{ 
  'update:modelValue': [value: string],
  'focus': [e: Event],
  'blur': [e: Event],
  'clear': [value: string]
}>()
const { 
  debounce, 
  readonly,
  disabled,
  modelValue, 
  placeholder,
  inputStyle,
} = toRefs(props)
const input = ref<HTMLElement | null>(null)
const inputContainer = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
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

const dynamicInputStyle = computed(() => {
  const _inputStyle = merge({ 
    common: { padding: '0 8px' },
    source: { border: '2px solid rgba(0, 0, 0, .4)' },
    focused: { border: '2px solid #3b82f6' },
    hovered: { border: '2px solid black' }
  }, inputStyle.value)
  const { focused, hovered, source, common } = _inputStyle

  return JSON.parse(JSON.stringify(Object.assign(
    common as any, 
    focusedInputOrInputContainer.value
      ? focused
      : hoveredInputContainer.value
        ? hovered
        : source
  )))
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
  const icons = inputContainer.value!.querySelectorAll('*[data-clearable]')

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
}

.u-input-container.u-disabled,
.u-input-container.u-disabled > .u-input {
  cursor: not-allowed;
}

.u-input {
  width: 100%;
  height: 100%;
}

.u-input:focus {
  outline: none;
}
/* 
.u-input:disabled {
  background-color: none;
} */
</style>
