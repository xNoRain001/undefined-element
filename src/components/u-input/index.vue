<template>
  <div class="u-input-container" @click="foucsHelper">
    <slot name="prefix"></slot>
    <input 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="debouncedInputHandler"  
      class="u-input"
      ref="input" 
      type="text" 
    />
    <slot name="suffix"></slot>
  </div>
</template>

<script lang="ts" setup>
import debounceFn from '../../utils/debounce'
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string,
  placeholder?: string,
  debounce?: string | number,
}>(), {
  debounce: 0
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { modelValue, placeholder, debounce } = toRefs(props)
const input = ref<HTMLElement | null>(null)

const foucsHelper = () => input.value!.focus()

const inputHandler = (e: Event) => emit(
  'update:modelValue', 
  (e.target as HTMLInputElement).value
)

const debouncedInputHandler = debounce.value
  ? debounceFn(inputHandler, Number(debounce.value))
  : inputHandler
</script>

<style scoped>
.u-input-container {
  cursor: text;
}

.u-input {
  width: 100%;
}

.u-input:focus {
  outline: none;
}
</style>
