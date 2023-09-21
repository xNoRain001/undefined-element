<template>
  <div ref="carouselRef" class="u-carousel relative overflow-hidden">
    <slot name="sliders"></slot>

    <div class="u-carousel-prev" @click="onPrev">
      <slot name="prev"></slot>
    </div>

    <div class="u-carousel-next" @click="onNext">
      <slot name="next"></slot>
    </div>

    <div class="u-carousel-navigation">
      <slot name="navigation" :total="counter"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, provide } from 'vue'

import { carouselKey } from '../../const/keys'

const emit = defineEmits<{ 'update:modelValue': [number] }>()
const props = defineProps<{ modelValue: number }>()
const { modelValue } = toRefs(props)
const counter = ref(0)
const animationName = ref<'u-slide-left' | 'u-slide-right'>('u-slide-left')
const carouselRef = ref<HTMLElement | null>(null)

const updateModelValue = (value: number) => emit('update:modelValue', value)

const updateAnimationName = (value: 'u-slide-left' | 'u-slide-right') => animationName.value = value

const updateCounter = (value: number) => counter.value = value

provide(carouselKey, {
  counter,
  modelValue,
  carouselRef,
  updateCounter,
  updateModelValue,
  updateAnimationName
})

const onPrev = () => {
  const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const temp = modelValue.value - 1
  const newIndex = temp < 0 ? sliders.length - 1 : temp

  animationName.value = 'u-slide-right'
  updateModelValue(newIndex)
}

const onNext = () => {
  const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const temp = modelValue.value + 1
  const newIndex = temp === sliders.length ? 0 : temp
  
  animationName.value = 'u-slide-left'
  updateModelValue(newIndex)
}

watch(modelValue, (newIndex, oldIndex) => {
  const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const _animationName = animationName.value
  
  sliders[oldIndex].classList.remove('z-10')
  sliders[newIndex].classList.add(_animationName, 'z-10')
  sliders[newIndex].classList.replace('opacity-0', 'opacity-100')
  
  setTimeout(() => {
    sliders[newIndex].classList.remove(_animationName)
    sliders[oldIndex].classList.replace('opacity-100', 'opacity-0')
  }, 300)
})
</script>
