<template>
  <div class="u-expansion-item">
    <div 
      @click="clickHandler" 
      class="u-expansion-item-header"
      :class="_headerClass"
      :style="headerStyle"
    >
      <slot name="header"></slot>
    </div>
    <div 
      ref="content" 
      :style="{ 
        ...contentStyle,
        height: modelValue.includes(name)
          ? `${ content?.scrollHeight }px` || '100%' 
          : '0' 
      }" 
      class="u-expansion-item-content"
      :class="contentClass"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, inject } from 'vue'
import { expansionKey } from '../../keys'
import type { Ref } from 'vue'

const { name } = useAttrs()
const { 
  modelValue, 
  updateModel, 
  headerStyle, 
  headerClass, 
  activeHeaderClass,
  contentStyle,
  contentClass 
} = inject(expansionKey) as {
  modelValue: Ref<string>
  updateModel: Function,
  headerStyle: Ref<{ [propName: string]: string | number }>,
  headerClass: Ref<string>,
  activeHeaderClass: Ref<string>,
  contentStyle: Ref<{ [propName: string]: string | number }>,
  contentClass: Ref<string>,
}
const content = ref<HTMLElement | null>(null)

const clickHandler = () => {
  updateModel(name)
}

const expanded = computed(() => modelValue.includes(name))

const _headerClass = computed(() => {
  return `${ headerClass.value }${ expanded.value ? ` ${ activeHeaderClass.value }` : '' }`
})
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
