<template>
  <div 
    class="u-tab-panel" 
    :style="{ display: name === modelValue ? 'block' : 'none' }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, useAttrs, watch } from 'vue'
import { pannelsKey } from '../../keys'
import type { Ref } from 'vue'

const { name } = useAttrs()

const modelValue = inject(pannelsKey) as Ref<string>

console.log(modelValue.value)
</script>
