<template>
  <div class="u-expansion">
    <div @click="clickHandler" class="u-expansion-header">
      <slot name="header"></slot>
    </div>
    <div 
      ref="expansionContent" 
      :style="{ 
        height: modelValue 
          ? `${ expansionContent?.scrollHeight }px` || '100%' 
          : '0' 
      }" 
      class="u-expansion-content"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const { modelValue } = toRefs(props)
const expansionContent = ref<HTMLElement | null>(null)

const clickHandler = () => {
  emit('update:modelValue', !modelValue.value)
}
</script>

<style scoped>
.u-expansion-header {
  cursor: pointer;
}

.u-expansion-content {
  transition: height var(--u-transition-duration);
  overflow-y: hidden;
}
</style>
