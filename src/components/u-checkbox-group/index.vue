<template>
  <div class="u-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { checkboxGroupKey } from '../../const/keys'

const props = defineProps<{ modelValue: boolean[] }>()
const { modelValue } = toRefs(props)

const updateModel = (value: any) => {
  const _modelValue = modelValue.value
  const index = _modelValue.indexOf(value)

  if (index >= 0) {
    _modelValue.splice(index, 1)
  } else {
    _modelValue.push(value)
  }
}

provide(checkboxGroupKey, {
  modelValue: modelValue.value,
  updateModel,
})
</script>
