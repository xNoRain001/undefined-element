<template>
  <div class="u-skeleton">
    <div v-if="modelValue">
      <slot name="skeleton-items"></slot>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { skeletonKey } from '../../const/keys'

const props = withDefaults(defineProps<{
  animate?: boolean
  modelValue: boolean,
}>(), {
  animate: true
})
const { animate, modelValue } = toRefs(props)

provide(skeletonKey, animate)
</script>
