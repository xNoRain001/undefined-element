<template>
  <div 
    ref="carouselRef" 
    class="u-carousel relative overflow-hidden"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
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

    <div class="u-carousel-navigation" @click="onClick">
      <slot name="navigation" :total="counter"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, provide, onMounted } from 'vue'

import { carouselKey } from '../../const/keys'
import { useGetIndex } from '../../composables'

let timer = 0
const emit = defineEmits<{ 'update:modelValue': [number] }>()
const props = withDefaults(defineProps<{ 
  loop?: boolean,
  autoplay?: number | boolean,
  vertical?: boolean, 
  modelValue: number,
}>(), {
  loop: false,
  autoplay: false,
  vertical: false
})
const { loop, autoplay, vertical, modelValue } = toRefs(props)
const counter = ref(0)
const animationName = ref<
  'u-slide-left' | 
  'u-slide-right' | 
  'u-slide-down' | 
  'u-slide-up'
>('u-slide-left')
const carouselRef = ref<HTMLElement | null>(null)

const updateCounter = (value: number) => counter.value = value

const updateModelValue = (value: number) => emit('update:modelValue', value)

provide(carouselKey, {
  counter,
  modelValue,
  updateCounter
})

const onPrev = () => {
  const newIndex = modelValue.value - 1
  const isBoundary = newIndex === -1

  if (isBoundary && !loop.value) {
    return
  }

  animationName.value = vertical.value ? 'u-slide-down' : 'u-slide-right'
  updateModelValue(isBoundary ? counter.value - 1 : newIndex)
}

const onNext = () => {
  const newIndex = modelValue.value + 1
  const isBoundary = newIndex === counter.value 

  if (isBoundary && !loop.value) {
    return
  }

  animationName.value = vertical.value ? 'u-slide-up' : 'u-slide-left'
  updateModelValue(isBoundary ? 0 : newIndex)
}

const onClick = (e: Event) => {
  const { 
    target, currentTarget 
  }: { target: HTMLElement, currentTarget: HTMLElement} = e as any

  if (target === currentTarget) {
    return
  }

  const index = useGetIndex(target, currentTarget)
  const _modelValue = modelValue.value

  if (index !== _modelValue) {
    animationName.value = vertical.value 
      ? index > _modelValue 
        ? 'u-slide-up' 
        : 'u-slide-down'
      : index > _modelValue 
        ? 'u-slide-left' 
        : 'u-slide-right'

    updateModelValue(index)
  }
}

const onMouseenter = () => {
  if (timer) {
    clearInterval(timer)
  }
}

const onMouseleave = () => {
  const _autoplay = autoplay.value

  if (_autoplay) {
    timer = setInterval(() => onNext(), 3000)
  }
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

onMounted(() => {
  const _autoplay = autoplay.value

  if (_autoplay) {
    timer = setInterval(() => onNext(), 3000)
  }
})
</script>
