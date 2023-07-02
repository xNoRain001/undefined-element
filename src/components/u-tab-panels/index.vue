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
import { pannelsKey } from '../../keys'

const props = withDefaults(defineProps<{
  modelValue: string,
  pannelStyle?: { [propName: string]: string | number }
  pannelClass?: string
}>(), {
  pannelStyle: () => ({}),
  pannelClass: ''
})
const { modelValue, pannelStyle, pannelClass } = toRefs(props)

provide(pannelsKey, modelValue)
</script>
