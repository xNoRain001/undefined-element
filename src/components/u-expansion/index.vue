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

import { expansionKey } from '../../const/keys'

const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
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
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
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
  min,
  max, 
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
  const { length } = expanded

  if (index >= 0 && length > min.value) {
    expanded.splice(index, 1)
  } else {
    if (length === max.value) {
      expanded.shift()
    }

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
