<template>
  <div 
    class="u-tabs"
    :style="style"
    :class="tabsClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'
import { tabsKey } from '../../keys'

const props = withDefaults(defineProps<{
   modelValue: string,
   style?: { [propName: string]: string | number },
   class?: string,
   tabStyle?: { [propName: string]: string | number },
   tabClass?: string,
   activeTabClass?: string
}>(), {
  style: () => ({}),
  class: '',
  tabStyle: () => ({}),
  tabClass: '',
  activeTabClass: ''
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { 
  modelValue, 
  style, 
  class: tabsClass,
  tabStyle, 
  tabClass, 
  activeTabClass 
} = toRefs(props)
const updateModel = (name: string) => emit('update:modelValue', name)

provide(tabsKey, {
  modelValue,
  updateModel,
  tabStyle,
  tabClass,
  activeTabClass
})
</script>
