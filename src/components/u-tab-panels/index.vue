<template>
  <div class="u-tab-panels" :style="pannelStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'
import { pannelsKey } from '../../keys'

const props = withDefaults(defineProps<{
  modelValue: string,
  pannelStyle?: {}
}>(), {
  pannelStyle: () => ({})
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { modelValue, pannelStyle } = toRefs(props)
const updateModel = (name: string) => emit('update:modelValue', name)

provide(pannelsKey, modelValue)
</script>
