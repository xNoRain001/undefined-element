<template>
  <div 
    ref="sliderContainerRef" 
    class="u-carousel-slider absolute left-0 w-full h-full"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue'

import { carouselKey } from '../../const/keys'

import type { Ref } from 'vue'

const sliderContainerRef = ref<HTMLElement | null>(null)

const { 
  index, 
  updateIndex
} = inject(carouselKey) as {
  index: Ref<number>
  updateIndex: Function
}
</script>
