<template>
  <div 
    class="u-input-container" 
    :class="disabled ? 'u-disabled' : ''" 
    @click="foucsHelper"
  >
    <slot name="prefix"></slot>
    <input 
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
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string,
  placeholder?: string,
  debounce?: string | number,
  readonly?: boolean,
  disabled?: boolean
}>(), {
  debounce: 0,
  readonly: false,
  disabled: false
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

const foucsHelper = () => input.value!.focus()

const handler = (e: Event) => emit(
  'update:modelValue', 
  (e.target as HTMLInputElement).value
)

const debouncedInputHandler = debounce.value
  ? debounceFn(handler, Number(debounce.value))
  : handler

const inputHandler = readonly.value ? noop : debouncedInputHandler
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
