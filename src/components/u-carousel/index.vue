<template>
  <div ref="carouselRef" class="u-carousel relative overflow-hidden">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, provide, onMounted } from 'vue'

import { carouselKey } from '../../const/keys'

const index = ref(0)
const carouselRef = ref<HTMLElement | null>(null)

const updateIndex = (value: number) => index.value = value

provide(carouselKey, {
  index,
  updateIndex,
  carouselRef
})

onMounted(() => {
  watch(index, (newIndex, oldIndex) => {
    console.log(newIndex, oldIndex);
    
    const sliders = carouselRef.value!.querySelectorAll('.u-carousel-slider')

    if (oldIndex === undefined) {
      sliders[newIndex].classList.add('z-10')

      return
    }

    const animationName = newIndex > oldIndex ? 'u-slide-left' : 'u-slide-right'
    
    sliders[newIndex].classList.add('z-20', animationName)

    setTimeout(() => {
      sliders[newIndex].classList.remove(animationName)
      sliders[oldIndex].classList.remove('z-10', 'z-20')
    }, 300)
  }, { immediate: true })
})
</script>
