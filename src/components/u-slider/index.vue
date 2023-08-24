<template>
  <div class="u-slider cursor-pointer w-full">
    <div
      ref="trackRef" 
      class="u-slider-track relative flex items-center"
      :class="trackClass"
    >
      <div 
        ref="selectionRef"
        class="u-slider-track-selection absolute h-full" 
        style="width: 0;"
        :class="selectionClass"
      ></div>

      <div 
        ref="thumbRef"
        class="u-slider-track-thumb absolute -translate-x-1/2" 
        style="left: 0;"
        :class="thumbClass"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      >
        <slot name="thumb"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

import { throttle } from '../../utils'

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
  step?: number,
  modelValue: number,
  trackClass?: string,
  thumbClass?: string,
  selectionClass?: string
}>(), {
  min: 0,
  max: 100,
  step: 1,
  trackClass: '',
  thumbClass: '',
  selectionClass: ''
})
const { 
  min,
  max, 
  step,
  modelValue, 
  trackClass, 
  thumbClass,
  selectionClass
} = toRefs(props)
const thumbRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const selectionRef = ref<HTMLElement | null>(null)

const { body } = document

const before = () => {
  body.classList.add('select-none')
  body.addEventListener('mousemove', onMousemove)
  body.addEventListener('mouseup', onMouseup)
}

const after = () => {
  body.classList.remove('select-none')
  body.removeEventListener('mousemove', onMousemove)
  body.removeEventListener('mouseup', onMouseup)
}

let x = 0 
let dragging = false

const onMousedown = (e: MouseEvent) => {
  x = e.pageX
  dragging = true
  before()
}

const onUpdate = (e: MouseEvent) => {
  const { pageX } = e
  const offset = pageX - x
  const { style } = thumbRef.value as HTMLElement
  const value = parseInt(style.left) + offset
  const _min = min.value
  const _max = max.value
  const { clientWidth } = trackRef.value as HTMLElement

  if (value < 0 || value > clientWidth) {
    return
  }

  const _value = `${ value }px`

  x = pageX
  emit('update:modelValue', Math.round(value / clientWidth * (_max - _min)))
  style.left = selectionRef.value!.style.width = _value
}

const onMousemove = throttle((e: MouseEvent) => {
  if (!dragging) {
    return
  }

  e.stopPropagation()
  onUpdate(e)
}, 10)

const onMouseup = () => {
  dragging = false
  after()
}
</script>
