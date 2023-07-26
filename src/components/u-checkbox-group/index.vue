<template>
  <div class="u-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { checkboxGroupKey } from '../../const/keys'

const props = withDefaults(defineProps<{ 
  min?: number,
  max?: number,
  race?: false,
  modelValue: boolean[] 
}>(), {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  race: false
})
const { min, max, race, modelValue } = toRefs(props)

const updateModel = (value: any) => {
  const _modelValue = modelValue.value
  const index = _modelValue.indexOf(value)
  const { length } = _modelValue

  if (index >= 0) {
    if (length > min.value) {
      _modelValue.splice(index, 1)
    }
  } else if (length < max.value) {
    _modelValue.push(value)
  } else if (race.value) {
    _modelValue.shift()
    _modelValue.push(value)
  }
}

provide(checkboxGroupKey, {
  parentModel: modelValue.value,
  updateParentModel: updateModel,
})
</script>
