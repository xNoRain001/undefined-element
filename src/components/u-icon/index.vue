<template>
  <svg 
    class="u-icon inline-block cursor-pointer" 
    viewBox="0 0 24 24" 
    :width="width" 
    :height="height" 
    :fill="color"
  >
    <path 
      v-for="{ d, style, transform } in paths" 
      :d="d" 
      :style="style" 
      :transform="transform"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

import icons from '../../assets/icons'

const props = withDefaults(defineProps<{ 
  name: string,
  type?: 'outlined' | 'filled' | 'rounded' | 'sharp'
  color?: string,
  width?: string | number,
  height?: string | number,
}>(), {
  type: 'filled',
  color: '#000',
  width: 24,
  height: 24,
})

const { name, type, color, width, height } = toRefs(props)
const prefixesMap = {
  filled: 'mat',
  sharp: 'sharp',
  rounded: 'round',
  outlined: 'outlined'
}

// foo_bar -> FooBar
const formattedName = (name: string) => {
  let res = ''
  const segments = name.split('_')

  for (let i = 0, l = segments.length; i < l; i++) {
    const segment = segments[i]
    res += `${ segment[0].toUpperCase() }${ segment.slice(1) }`
  }

  return res
}

const getDef = (): string => {
  const _name = formattedName(name.value)
  const _type = type.value

  return icons[_type][`${ prefixesMap[_type] }${ _name }`] || ''
}

type Paths = { 
  d: string, 
  style?: string, 
  transform?: string
}[]

const genPaths = (
  def: string, 
  res: Paths
) => {
  def.split('&&').forEach(path => {
    const [ d, style, transform ] = path.split('@@')
    res.push({ style, d, transform })
  })
}

const paths = computed(() => {
  const res: Paths = []
  const def = getDef()

  genPaths(def, res)

  return res
})
</script>
