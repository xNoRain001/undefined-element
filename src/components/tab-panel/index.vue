<template>
  <div class="u-tab-panel" :class="name === modelValue ? 'block' : 'hidden'">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, useAttrs } from 'vue'

import { panelsKey } from '../../const/keys'

import type { Ref } from 'vue'

const modelValue = inject(panelsKey) as Ref<string>
const { name } = useAttrs()
</script>
