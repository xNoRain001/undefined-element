<template>
  <div 
    ref="sliderContainerRef" 
    class="u-carousel-slider absolute left-0 w-full h-full"
    :class="sliderClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'

import { carouselKey } from '../../const/keys'

import type { Ref } from 'vue'

const sliderContainerRef = ref<HTMLElement | null>(null)
const { 
  counter, 
  modelValue,
  updateCounter
} = inject(carouselKey) as { 
  counter: Ref<number>,
  modelValue: Ref<number>,
  updateCounter: Function
}

const index = counter.value
const sliderClass = index === modelValue.value ? 'z-10 opacity-100' : 'opacity-0'

updateCounter(index + 1)
</script>
