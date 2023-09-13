<template>
  <div class="u-carousel-navigation">
    <div class="u-carousel-control-prev" @click="onPrev">
      <slot name="left"></slot>
    </div>
    
    <div class="u-carousel-control-next" @click="onNext">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import { carouselKey } from '../../const/keys'

import type { Ref } from 'vue'

const { 
  index, 
  updateIndex,
  carouselRef
} = inject(carouselKey) as {
  index: Ref<number>
  updateIndex: Function,
  carouselRef: Ref<HTMLElement | null>
}

const onPrev = () => {
  const { length } = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const newIndex = index.value - 1

  updateIndex(newIndex < 0 ? length : newIndex)
}

const onNext = () => {
  const { length } = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const newIndex = index.value + 1
  
  updateIndex(newIndex >= length ? 0 : newIndex)
}
</script>
