<template>
  <div class="u-skeleton">
    <div v-if="modelValue">
      <slot name="skeleton-items"></slot>
    </div>
    <div v-else>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()
const { modelValue } = toRefs(props)
</script>
