<template>
  <div 
    class="u-tab-panels" 
    :style="pannelStyle"
    :class="pannelClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { panelsKey } from '../../keys'

const props = withDefaults(defineProps<{
  modelValue: string,
  pannelStyle?: { [propName: string]: string | number }
  pannelClass?: string
}>(), {
  pannelStyle: () => ({}),
  pannelClass: ''
})
const { modelValue, pannelStyle, pannelClass } = toRefs(props)

provide(panelsKey, modelValue)
</script>
