<template>
  <div 
    class="u-skeleton-item" 
    :style="{
      '--u-left-start': '-100%',
      '--u-left-end': '100%',
    }
  "></div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import { skeletonKey } from '../../const/keys'

import type { Ref } from 'vue'

const animate = inject(skeletonKey) as Ref<boolean>
</script>

<style scoped>
.u-skeleton-item {
  position: relative;
}

.u-skeleton-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  z-index: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.5), rgba(255,255,255,0));
  animation: u-animate-left 1.5s linear .5s infinite;
}
</style>
