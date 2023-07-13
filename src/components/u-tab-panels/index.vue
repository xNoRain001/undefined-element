<template>
  <div 
    class="u-tab-panels" 
    :style="panelStyle"
    :class="panelClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { panelsKey } from '../../const/keys'

const props = withDefaults(defineProps<{
  modelValue: string,
  panelStyle?: { [propName: string]: string | number }
  panelClass?: string
}>(), {
  panelStyle: () => ({}),
  panelClass: ''
})
const { modelValue, panelStyle, panelClass } = toRefs(props)

provide(panelsKey, modelValue)
</script>
