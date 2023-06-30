<template>
  <div 
    class="u-input-wrapper" 
    :style="{ '--input-wrapper-height': dynamicInputStyle.height }"
  >
    <div class="u-input-before">
      <slot name="before"></slot>
    </div>
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
        :style="{ 
          '--placeholder-color': dynamicInputStyle.placeholderColor
        }"
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
import { noop, merge, debounce as debounceFn } from '../../utils'
import { ref, toRefs, computed, onMounted, watch } from 'vue'

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
  // inputStyle: () => ({}),
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
  const _inputStyle = inputStyle?.value || { 
    common: { padding: '0 8px', placeholderColor: '#dcdfe6' },
    source: { border: '2px solid rgba(0, 0, 0, .4)' },
    focused: { border: '2px solid #3b82f6' },
    hovered: { border: '2px solid black' }
  }
  const { focused, hovered, source, common } = _inputStyle
  const __inputStlye = JSON.parse(JSON.stringify(Object.assign(
    common as any, 
    focusedInputOrInputContainer.value
      ? focused
      : hoveredInputContainer.value
        ? hovered
        : source
  )))
  const { border, borderTop, borderBottom, borderLeft, boderRight } = __inputStlye

  __inputStlye['--input-container-border'] = border ||
    borderTop ||
    boderRight ||
    borderBottom ||
    borderLeft
  delete __inputStlye.border
  delete __inputStlye.borderBottom
  delete __inputStlye.boderRight
  delete __inputStlye.borderLeft
  delete __inputStlye.top

  return __inputStlye
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
  transition-property: border-color;
  transition-duration: var(--u-transition-duration);
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
  color: var(--placeholder-color);
}

.u-input-before,
.u-input-after {
  height: var(--input-wrapper-height);
}
</style>
