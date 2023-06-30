<template>
  <div class="u-expansion">
    <div @click="clickHandler">
      <slot name="default"></slot>
    </div>
    <div ref="expansionPannel" class="u-expansion-panel">
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const { modelValue } = toRefs(props)
const expansionPannel = ref<HTMLElement | null>(null)

const clickHandler = () => {
  emit('update:modelValue', !modelValue.value)
}

watch(modelValue, newValue => {
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
