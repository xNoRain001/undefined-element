<template>
  <div 
    class="u-tabs"
    :style="tabsStyle"
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
   tabsStyle?: { [propName: string]: string | number },
   tabsClass?: string,
   tabStyle?: { [propName: string]: string | number },
   tabClass?: string,
   activeTabClass?: string
}>(), {
  tabsStyle: () => ({}),
  tabsClass: '',
  tabStyle: () => ({}),
  tabClass: '',
  activeTabClass: ''
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { 
  modelValue, 
  tabsStyle, 
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
