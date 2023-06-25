<template>
  <div v-if="modelValue" class="u-dialog">
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const { modelValue } = toRefs(props)
</script>