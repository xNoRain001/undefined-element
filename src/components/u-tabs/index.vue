<template>
  <div ref="tabsRef" class="u-tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { tabsKey } from '../../const/keys'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { modelValue } = toRefs(props)

const updateModel = (name: string) => emit('update:modelValue', name)

provide(tabsKey, {
  modelValue,
  updateModel
})
</script>
