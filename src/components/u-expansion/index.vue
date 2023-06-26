<template>
  <div class="u-expansion">
    <div @click="expanded = !expanded">
      <slot name="default"></slot>
    </div>
    <div ref="expansionPannel" class="u-expansion-panel">
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const expanded = ref(false)
const expansionPannel = ref<HTMLElement | null>(null)

watch(expanded, newValue => {
  const _expansionPannel = expansionPannel.value as HTMLElement
  _expansionPannel.style.height = newValue 
    ? `${ _expansionPannel.scrollHeight }px` 
    : '0'
})
</script>

<style scoped>
.u-expansion-panel {
  height: 0;
  transition: height .3s;
  overflow-y: hidden;
}
</style>
