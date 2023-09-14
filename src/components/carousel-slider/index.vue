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
import { ref, inject, useAttrs, computed } from 'vue'

import { carouselKey } from '../../const/keys'

import type { Ref } from 'vue'

const { name } = useAttrs()
const sliderContainerRef = ref<HTMLElement | null>(null)
const { 
  index, 
  modelValue,
  updateIndex,
  updateModelValue
} = inject(carouselKey) as {
  index: Ref<number>,
  modelValue: Ref<string>,
  updateIndex: Function,
  updateModelValue: Function
}

const activeClass = name === modelValue.value ? 'z-10' : ''
</script>
