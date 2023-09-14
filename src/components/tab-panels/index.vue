<template>
  <div class="u-tab-panels">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'

import { panelsKey } from '../../const/keys'

const props = defineProps<{ modelValue: string }>()
const { modelValue } = toRefs(props)

provide(panelsKey, modelValue)
</script>
