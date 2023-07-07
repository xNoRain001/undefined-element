<template>
  <svg 
    class="u-icon" 
    viewBox="0 0 24 24" 
    :width="width" 
    :height="height" 
    :fill="color"
  >
    <path 
      v-for="{ d, style, transform } in segments" 
      :d="d" 
      :style="style" 
      :transform="transform"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import * as icons from '../../assets/icons'

const props = withDefaults(defineProps<{ 
  name: string,
  color?: string,
  width?: string | number,
  height?: string | number,
}>(), {
  color: '#000',
  width: 24,
  height: 24,
})

const { name } = toRefs(props)
const _name = name.value
const def = icons[`mat${ _name[0].toUpperCase() }${ _name.slice(1) }`]
const segments: { 
  d: string, 
  style?: string, 
  transform?: string
}[] = []

def.split('&&').map(path => {
  const [ d, style, transform ] = path.split('@@')
  segments.push({ style, d, transform })
})
</script>

<style scoped>
.u-icon {
  display: inline-block;
  cursor: pointer;
}
</style>
