<template>
  <div 
    class="u-checkbox cursor-pointer inline-flex items-center" 
    @click="updateModel"
  >
    <slot name="before" :checked="checked"></slot>
    <slot :checked="checked"></slot>
    <slot name="after" :checked="checked"></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, inject, computed } from 'vue'

import { noop } from '../../utils'
import { checkboxGroupKey } from '../../const/keys'

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()
const props = withDefaults(defineProps<{ 
  value?: any,
  disabled?: boolean,
  modelValue?: boolean
}>(), {
  value: false,
  disabled: false
})

const { 
  parentModel, 
  updateParentModel 
} = inject(checkboxGroupKey, {
  parentModel: null,
  updateParentModel: noop
})
const { 
  value,
  disabled,
  modelValue, 
} = toRefs(props)
const checked = computed(() => {
  return parentModel
    ? parentModel.includes(value.value)
    : modelValue.value
})

const updateModel = () => {
  if (disabled.value) {
    return
  }

  if (parentModel) {
    updateParentModel(value.value)
  } else {
    emit('update:modelValue', !modelValue.value)
  }
}
</script>
