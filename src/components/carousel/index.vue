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
const carouselRef = ref<HTMLElement | null>(null)

const updateIndex = (value: number) => index.value = value

const updateModelValue = (value: string) => emit('update:modelValue', value)

provide(carouselKey, {
  index,
  modelValue,
  updateIndex,
  carouselRef,
  updateModelValue
})

watch(index, (newIndex, oldIndex) => {
  const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')
  const animationName = newIndex > oldIndex ? 'u-slide-left' : 'u-slide-right'

  sliders[oldIndex].classList.remove('z-10')
  sliders[newIndex].classList.add(animationName, 'z-10')

  setTimeout(() => {
    sliders[newIndex].classList.remove(animationName)
  }, 300)
})
</script>
