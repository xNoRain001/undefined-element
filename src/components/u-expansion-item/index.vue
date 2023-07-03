<template>
  <div class="u-expansion-item">
    <div 
      @click="clickHandler" 
      class="u-expansion-item-header"
      :class="headerClass"
      :style="headerStyle"
    >
      <slot name="header"></slot>
    </div>
    <div 
      ref="expansionContent" 
      :style="{ 
        ...contentStyle,
        height: modelValue.includes(name)
          ? `${ expansionContent?.scrollHeight }px` || '100%' 
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
  contentStyle,
  contentClass 
} = inject(expansionKey) as {
  modelValue: Ref<string>
  updateModel: Function,
  headerStyle: {},
  headerClass: Ref<string>,
  contentStyle: {},
  contentClass: Ref<string>,
}
const expansionContent = ref<HTMLElement | null>(null)

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
