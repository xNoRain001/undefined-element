<template>
  <div 
    class="u-expansion"
    :style="style"
    :class="expansionClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { expansionKey } from '../../keys'

const props = withDefaults(defineProps<{
  style?: { [propName: string]: string | number },
  class?: string,
  modelValue: string[],
  itemStyle?: { [propName: string]: string | number },
  itemClass?: string,
  headerStyle?: { [propName: string]: string | number },
  headerClass?: string,
  contentStyle?: { [propName: string]: string | number },
  contentClass?: string,
  activeHeaderClass?: string
}>(), {
  style: () => ({}),
  class: '',
  itemStyle: () => ({}),
  itemClass: '',
  headerStyle: () => ({}),
  headerClass: '',
  contentStyle: () => ({}),
  contentClass: '',
  activeHeaderClass: ''
})
const { 
  style,
  class: expansionClass,
  modelValue,
  itemStyle,
  itemClass,
  headerStyle, 
  headerClass, 
  contentStyle, 
  contentClass,
  activeHeaderClass
} = toRefs(props)

const updateModel = (name: string) => {
  const expanded = modelValue.value
  const index = expanded.indexOf(name)

  if (index >= 0) {
    expanded.splice(index, 1)
  } else {
    expanded.push(name)
  }
}

provide(expansionKey, {
  itemStyle,
  itemClass,
  modelValue: modelValue.value,
  updateModel,
  headerStyle,
  headerClass,
  contentStyle,
  contentClass,
  activeHeaderClass,
})
</script>
