<template>
  <div 
    tabindex="-1"
    ref="inputContainer"
    class="u-input-container" 
    :class="disabled ? 'u-disabled' : ''"
    :style="focusedStyle"
    @click="foucsHelper"
    @focus="containerFocusHandler"
    @blur="containerBlurHandler"
  >
    <slot name="prefix"></slot>
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
    <slot name="suffix"></slot>
  </div>
</template>

<script lang="ts" setup>
import { noop, debounce as debounceFn } from '../../utils'
import { ref, toRefs, onMounted, computed, watch } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string,
  placeholder?: string,
  debounce?: string | number,
  readonly?: boolean,
  disabled?: boolean,
  clearable?: boolean,
  autofocus?: boolean,
  focusedBorderColor?: string,
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
  focusedBorderColor: ''
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
  focusedBorderColor
} = toRefs(props)
const input = ref<HTMLElement | null>(null)
const inputContainer = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const focusedInputContainer = ref(false)

const foucsHelper = (e: Event) => {
  const { target, currentTarget } = e

  if (target === currentTarget) {
    input.value!.focus()
  } 
}

const containerFocusHandler = () => {
  console.log('@')
  focusedInputContainer.value = true
}

const containerBlurHandler = () => {
  focusedInputContainer.value = false
}

const focusHandler = (e: Event) => {
  focusedInput.value = true
  emit('focus', e)
}

const blurHandler = (e: Event) => {
  focusedInput.value = false
  emit('blur', e)
}

const focused = computed(() => {
  return !readonly.value && 
    !disabled.value &&
    (focusedInput.value || focusedInputContainer.value)
})

const focusedStyle = computed(() => {
  return {
    borderColor: focused.value ? focusedBorderColor.value : ''
  }
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
  const oldValue = modelValue?.value
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
.u-input-container {
  display: flex;
  align-items: center;
}

.u-input-container.u-disabled {
  cursor: not-allowed;
}

.u-input {
  width: 100%;
  height: 100%;
}

.u-input:focus {
  outline: none;
}
</style>
