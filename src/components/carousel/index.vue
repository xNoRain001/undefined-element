<template>
  <div ref="carouselRef" class="u-carousel relative overflow-hidden">
    <slot></slot>

    <div class="u-carousel-prev" @click="onPrev">
      <Transition name="u-fade">
        <slot name="prev" v-if="loop || modelValue !== 0"></slot>
      </Transition>
    </div>

    <div class="u-carousel-next" @click="onNext">
      <Transition name="u-fade">
        <slot name="next" v-if="loop || modelValue !== counter - 1"></slot>
      </Transition>
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
const props = withDefaults(defineProps<{ 
  loop?: boolean,
  modelValue: number
}>(), {
  loop: false
})
const { loop, modelValue } = toRefs(props)
const counter = ref(0)
const animationName = ref<'u-slide-left' | 'u-slide-right'>('u-slide-left')
const carouselRef = ref<HTMLElement | null>(null)

const updateCounter = (value: number) => counter.value = value

const updateModelValue = (value: number) => emit('update:modelValue', value)

provide(carouselKey, {
  counter,
  modelValue,
  updateCounter
})

const onPrev = () => {
  let temp = modelValue.value - 1

  if (temp < 0) {
    if (!loop.value) {
      return
    } 

    temp = counter.value - 1
  }

  animationName.value = 'u-slide-right'
  updateModelValue(temp)
}

const onNext = () => {
  let temp = modelValue.value + 1
  const _counter = counter.value

  if (temp === _counter) {
    if (!loop.value) {
      return
    } 

    temp = 0
  }

  animationName.value = 'u-slide-left'
  updateModelValue(temp)
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
