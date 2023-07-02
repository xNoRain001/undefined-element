<template>
  <div 
    ref="tabs" 
    class="u-tabs"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'
import { tabsKey } from '../../keys'

const props = withDefaults(defineProps<{
   modelValue: string,
   activeTabStyle?: {}
}>(), {
  activeTabStyle: () => ({})
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { modelValue, activeTabStyle } = toRefs(props)
const updateModel = (name: string) => emit('update:modelValue', name)

provide(tabsKey, {
  modelValue,
  updateModel,
  activeTabStyle
})
</script>
