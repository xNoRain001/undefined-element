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
      <slot name="header" :expanded="expanded"></slot>
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
import { ref, inject, computed, useAttrs } from 'vue'

import { expansionKey } from '../../const/keys'

import type { Ref } from 'vue'

const name = useAttrs().name as string
const { 
  itemStyle,
  itemClass,
  modelValue, 
  updateModel, 
  headerStyle, 
  headerClass, 
  contentStyle,
  contentClass, 
  activeHeaderClass
} = inject(expansionKey) as {
  itemStyle: Ref<{ [propName: string]: string | number }>,
  itemClass: Ref<string>,
  modelValue: string[],
  updateModel: Function,
  headerStyle: Ref<{ [propName: string]: string | number }>,
  headerClass: Ref<string>,
  contentStyle: Ref<{ [propName: string]: string | number }>,
  contentClass: Ref<string>,
  activeHeaderClass: Ref<string>
}
const expanded = computed(() => modelValue.includes(name))
const contentRef = ref<HTMLElement | null>(null)
const _contentStyle = computed(() => {
  const _contentRef = contentRef.value

  if (_contentRef) {
    const height = expanded.value ? `${ _contentRef.scrollHeight }px` : '0'
   
    return {
      ...contentStyle,
      height
    }
  }
})
const _headerClass = computed(() => `${ headerClass.value }${ 
  expanded.value 
    ? ` ${ activeHeaderClass.value }` 
    : '' 
}`)

const clickHandler = () => updateModel(name)
</script>

<style scoped>
.u-expansion-item-header {
  cursor: pointer;
}

.u-expansion-item-content {
  overflow-y: hidden;
  transition: height var(--u-transition-duration);
}
</style>
