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
import { ref, inject, computed } from 'vue'
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
  return {
    ...contentStyle,
    height: expanded.value
      ? `${ contentRef.value?.scrollHeight }px` 
      : '0'
  }
})
const _headerClass = computed(() => {
  return `${ headerClass.value }${ expanded.value ? ` ${ activeHeaderClass.value }` : '' }`
})

const clickHandler = () => {
  updateModel(name)
}
</script>

<style scoped>
.u-expansion-item-header {
  cursor: pointer;
}

.u-expansion-item-content {
  transition: height var(--u-transition-duration);
  overflow-y: hidden;
}
</style>
