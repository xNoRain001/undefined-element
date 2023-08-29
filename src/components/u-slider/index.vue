<template>
  <div 
    class="u-slider cursor-pointer w-full flex items-center"
    @mousedown="onClick"
    @mouseup="onMouseup"
    @touchstart="onClick"
    @touchend="onMouseup"
  >
    <div
      ref="trackRef" 
      class="u-slider-track relative flex items-center w-full"
      :class="trackClass"
    >
      <div 
        ref="selectionRef"
        class="u-slider-track-selection absolute h-full" 
        :style="{ width: left }"
        :class="selectionClass"
      ></div>

      <div 
        ref="thumbRef"
        class="u-slider-track-thumb absolute -translate-x-1/2" 
        :style="{ left }"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
        @touchstart="onMousedown"
        @touchmove="onMousemove"
        @touchend="onMouseup"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted, nextTick } from 'vue'

import { throttle } from '../../utils'

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
  step?: number,
  modelValue: number,
  trackClass?: string,
  selectionClass?: string
}>(), {
  min: 0,
  max: 100,
  step: 1,
  trackClass: '',
  selectionClass: ''
})
const { 
  min,
  max, 
  step,
  modelValue, 
  trackClass, 
  selectionClass
} = toRefs(props)
const left = ref(`${ modelValue.value / (max.value - min.value) * 100 }%`)
const thumbRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const selectionRef = ref<HTMLElement | null>(null)

const { body } = document

const before = () => {
  body.classList.add('select-none')
  body.addEventListener('mousemove', onMousemove)
  body.addEventListener('mouseup', onMouseup)
  body.addEventListener('touchmove', onMousemove)
  body.addEventListener('touchend', onMouseup)
}

const after = () => {
  body.classList.remove('select-none')
  body.removeEventListener('mousemove', onMousemove)
  body.removeEventListener('mouseup', onMouseup)
  body.removeEventListener('touchmove', onMousemove)
  body.removeEventListener('touchend', onMouseup)
}

let x = 0
let dragging = false

const onMousedown = (e: MouseEvent | TouchEvent) => {
  e.stopPropagation()
  x = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX
  dragging = true
  before()
}

const updateModelValue = (value: number) => {
  const _step = step.value
  const mod = value % _step

  value -= mod

  if (mod >= _step / 2) {
    value += _step
  }

  emit('update:modelValue', value)
}

const addAnimation = () => {
  const { classList: thumbClassList} = thumbRef.value as HTMLElement
  const { classList: selectionClassList } = selectionRef.value as HTMLElement
  const thumbClassListTokens = [
    'transition-[left]', 
    'duration-[--u-transition-duration]'
  ]
  const selectionClassListTokens = [
    'transition-[width]', 
    'duration-[--u-transition-duration]'
  ]
  
  thumbClassList.add(...thumbClassListTokens)
  selectionClassList.add(...selectionClassListTokens)
  
  left.value = `${ modelValue.value / (max.value - min.value) * 100 }%`

  setTimeout(() => {
    thumbClassList.remove(...thumbClassListTokens)
    selectionClassList.remove(...selectionClassListTokens)
    // update last position
    x = thumbRef.value!.getBoundingClientRect().x
  }, 300)
}

const onUpdate = (e: MouseEvent | Event | TouchEvent) => {
  const pageX = (e as any).pageX || (e as TouchEvent).touches[0].pageX
  const offset = pageX - x
  const newLeft = parseFloat(left.value) + 
    offset / trackRef.value!.clientWidth * 100

  if (newLeft < 0 || newLeft > 100) {
    return
  }

  const value = Math.round(newLeft / 100 * (max.value - min.value))

  updateModelValue(value)
  left.value = `${ newLeft }%`
  x = pageX
}

const onMousemove = throttle((e: MouseEvent | TouchEvent) => {
  if (!dragging) {
    return
  }

  e.stopPropagation()
  onUpdate(e)
}, 10)

const onMouseup = (e: MouseEvent | TouchEvent) => {
  e.stopPropagation()
  dragging = false
  addAnimation()
  after()
}

const onClick = (e: Event) => {
  dragging = true
  onUpdate(e)
}

// modify value outside the component, such as reset slider.
watch(modelValue, () => {
  if (dragging) {
    return
  }

  addAnimation()
})

// for update slider by click
onMounted(() => x = thumbRef.value!.getBoundingClientRect().x)
</script>
