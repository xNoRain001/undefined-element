<template>
  <div ref="carouselRef" class="u-carousel relative overflow-hidden">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, provide } from 'vue'

import { carouselKey } from '../../const/keys'

const emit = defineEmits<{ 'update:modelValue': [string] }>()
const props = defineProps<{ modelValue: string }>()
const { modelValue } = toRefs(props)
const index = ref(0)
const animationName = ref<'u-slide-left' | 'u-slide-right'>('u-slide-left')
const carouselRef = ref<HTMLElement | null>(null)

const updateIndex = (value: number) => index.value = value

const updateModelValue = (value: string) => emit('update:modelValue', value)

const updateAnimationName = (value: 'u-slide-left' | 'u-slide-right') => animationName.value = value

provide(carouselKey, {
  index,
  modelValue,
  updateIndex,
  carouselRef,
  updateModelValue,
  updateAnimationName
})

watch(index, (newIndex, oldIndex) => {
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
