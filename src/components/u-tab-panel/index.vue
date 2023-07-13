<template>
  <div 
    class="u-tab-panel" 
    :style="panelStyle"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed, useAttrs } from 'vue'

import { panelsKey } from '../../const/keys'

import type { Ref } from 'vue'

const modelValue = inject(panelsKey) as Ref<string>
const { name } = useAttrs()
const panelStyle = computed(() => ({ 
  display: name === modelValue.value ? 'block' : 'none' 
}))
</script>
