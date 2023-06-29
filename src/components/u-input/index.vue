<template>
  <div 
    ref="inputContainer"
    class="u-input-container" 
    :class="disabled ? 'u-disabled' : ''" 
    @click="foucsHelper"
  >
    <slot name="prefix"></slot>
    <input 
      :autofocus="autofocus ? true : false"
      :readonly="readonly ? true : false"
      :disabled="disabled ? true : false"
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="inputHandler"  
      class="u-input"
      ref="input" 
      type="text" 
    />
    <slot name="suffix"></slot>
  </div>
</template>

<script lang="ts" setup>
import { noop, debounce as debounceFn } from '../../utils'
import { ref, toRefs, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string,
  placeholder?: string,
  debounce?: string | number,
  readonly?: boolean,
  disabled?: boolean,
  clearable?: boolean,
  autofocus?: boolean,
  type?: 'text' | 'password' | 'textareae' | 'mail' | 'search' | 'tel' | 'file' 
  | 'number' | 'url' | 'time' | 'date'
}>(), {
  placeholder: '',
  debounce: 0,
  readonly: false,
  disabled: false,
  clearable: false,
  autofocus: false,
  type: 'text'
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { 
  debounce, 
  readonly,
  disabled,
  modelValue, 
  placeholder,
} = toRefs(props)
const input = ref<HTMLElement | null>(null)
const inputContainer = ref<HTMLElement | null>(null)

const foucsHelper = () => input.value!.focus()

const handler = (e: Event) => emit(
  'update:modelValue', 
  (e.target as HTMLInputElement).value
)

const debouncedInputHandler = debounce.value
  ? debounceFn(handler, Number(debounce.value))
  : handler

const inputHandler = readonly.value ? noop : debouncedInputHandler

const clearContents = () => emit('update:modelValue', '')

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
  cursor: text;
}

.u-input-container.u-disabled {
  cursor: not-allowed;
}

.u-input {
  width: 100%;
}

.u-input:focus {
  outline: none;
}
</style>
