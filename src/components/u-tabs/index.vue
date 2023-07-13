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

import { tabsKey } from '../../const/keys'

const props = withDefaults(defineProps<{
  style?: { [propName: string]: string | number },
  class?: string,
  tabStyle?: { [propName: string]: string | number },
  tabClass?: string,
  modelValue: string,
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
  style, 
  class: tabsClass,
  tabStyle, 
  tabClass, 
  modelValue, 
  activeTabClass 
} = toRefs(props)
const updateModel = (name: string) => emit('update:modelValue', name)

provide(tabsKey, {
  tabStyle,
  tabClass,
  modelValue,
  updateModel,
  activeTabClass
})
</script>
