<template>
  <div class="u-carousel-control">
    <div class="u-carousel-control-prev" @click="onPrev">
      <slot name="prev"></slot>
    </div>
    
    <div class="u-carousel-control-next" @click="onNext">
      <slot name="next"></slot>
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
  carouselRef,
  updateModelValue,
  updateAnimationName
} = inject(carouselKey) as {
  index: Ref<number>
  updateIndex: Function,
  carouselRef: Ref<HTMLElement | null>,
  updateModelValue: Function,
  updateAnimationName: Function
}

const onPrev = () => {
  const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const temp = index.value - 1
  const newIndex = temp < 0 ? sliders.length - 1 : temp

  updateAnimationName('u-slide-right')
  updateIndex(newIndex)
  updateModelValue(sliders[newIndex].getAttribute('name'))
}

const onNext = () => {
  const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const temp = index.value + 1
  const newIndex = temp === sliders.length ? 0 : temp
  
  updateAnimationName('u-slide-left')
  updateIndex(newIndex)
  updateModelValue(sliders[newIndex].getAttribute('name'))
}
</script>
