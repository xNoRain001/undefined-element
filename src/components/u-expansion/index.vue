<template>
  <div class="u-expansion">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { expansionKey } from '../../const/keys'

const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
  modelValue: string[]
}>(), {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER
})
const {
  min,
  max, 
  modelValue
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
  modelValue: modelValue.value,
  updateModel,
})
</script>
