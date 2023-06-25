<template>
  <div @click="foucsHelper" >
    <slot name="prefix"></slot>
    <input 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"  
      style="width: 100%;"
      ref="input" 
      type="text" 
    />
    <slot name="suffix"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

const props = defineProps<{
  modelValue?: string,
  placeholder?: string
}>()
const { modelValue, placeholder } = toRefs(props)
const input = ref<HTMLElement | null>(null)

const foucsHelper = () => input.value!.focus()
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
