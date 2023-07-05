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
  const scrollHeight = `${ contentRef.value?.scrollHeight }px`
  const _expanded = expanded.value
  
  return {
    ...contentStyle,
    // for dynamic height
    height: _expanded ? '100%' : '0',
    '--u-expansion-height-start': _expanded ? '0' : scrollHeight,
    '--u-expansion-height-end': _expanded ? scrollHeight : '0'
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
  contentRef.value?.classList.add('u-animate-expansion')
  setTimeout(() => {
    contentRef.value?.classList.remove('u-animate-expansion')
  }, 300) 
})
</script>

<style scoped>
.u-expansion-item-header {
  cursor: pointer;
}

.u-expansion-item-content {
  overflow-y: hidden;
}
</style>
