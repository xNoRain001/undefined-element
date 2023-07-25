<template>
  <div class="u-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean[]
}>()
</script>
