<template>
  <div 
    ref="sliderContainerRef" 
    class="u-carousel-slider absolute left-0 w-full h-full"
    :class="activeClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, useAttrs } from 'vue'

import { carouselKey } from '../../const/keys'

import type { Ref } from 'vue'

const { name } = useAttrs()
const sliderContainerRef = ref<HTMLElement | null>(null)
const { modelValue } = inject(carouselKey) as { modelValue: Ref<string> }
const activeClass = name === modelValue.value ? 'z-10 opacity-100' : 'opacity-0'
</script>
