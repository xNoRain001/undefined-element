<template>
  <div 
    class="u-expansion-item"
    :class="itemClass"
    :style="itemStyle"
  >
    <div 
      @click="clickHandler" 
      class="u-expansion-item-header"
      :class="_headerClass"
      :style="headerStyle"
    >
      <slot name="header"></slot>
    </div>
    <div 
      ref="contentRef" 
      :style="_contentStyle" 
      class="u-expansion-item-content"
      :class="contentClass"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, computed, watch } from 'vue'

import { expansionKey } from '../../keys'
import { genCSSVariables } from '../../utils'
import { useAddAnimation } from '../../composables' 

import type { Ref } from 'vue'

const { name } = useAttrs()
const { 
  modelValue, 
  updateModel, 
  itemStyle,
  itemClass,
  headerStyle, 
  headerClass, 
  activeHeaderClass,
  contentStyle,
  contentClass 
} = inject(expansionKey) as {
  modelValue: string[],
  updateModel: Function,
  itemStyle: Ref<{ [propName: string]: string | number }>,
  itemClass: Ref<string>,
  headerStyle: Ref<{ [propName: string]: string | number }>,
  headerClass: Ref<string>,
  activeHeaderClass: Ref<string>,
  contentStyle: Ref<{ [propName: string]: string | number }>,
  contentClass: Ref<string>,
}
const contentRef = ref<HTMLElement | null>(null)
const expanded = computed(() => modelValue.includes(name))
const _contentStyle = computed(() => {
  const _contentRef = contentRef.value
  const value1 = '0'
  const value2 = `${ _contentRef ? `${ _contentRef.scrollHeight }px` : '100%' }`
  // 100% for dynamic height
  const styleValue = expanded.value ? '100%' : '0'
  const { startValue, endValue } = genCSSVariables(
    styleValue === '100%' ? value2 : value1, 
    value1, 
    value2
  )

  return {
    ...contentStyle,
    height: styleValue,
    '--u-expansion-item-height-start': startValue,
    '--u-expansion-item-height-end': endValue
  }
})
const _headerClass = computed(() => {
  return `${ headerClass.value }${ 
    expanded.value 
      ? ` ${ activeHeaderClass.value }` 
      : '' 
  }`
})

const clickHandler = () => updateModel(name)

watch(expanded, () => {
  useAddAnimation(contentRef.value as HTMLElement, 'u-animate-expansion-item')
  
  // const { classList } = contentRef.value as HTMLElement

  // classList.add('u-animate-expansion-item')
  // setTimeout(() => {
  //   classList.remove('u-animate-expansion-item')
  // }, 300) 
})

// This is a possible solution to replace animation，but need to resolve
// browser rendering queue.
// watch(expanded, v => {
//   height.value = `${ contentRef.value?.scrollHeight }px`

//   if (v) {
//     setTimeout(() => {
//       height.value = '100%'
//     }, 300)
//   } else {
//     height.value = '0'
//   }
// })
</script>

<style scoped>
.u-expansion-item-header {
  cursor: pointer;
}

.u-expansion-item-content {
  overflow-y: hidden;
}
</style>
