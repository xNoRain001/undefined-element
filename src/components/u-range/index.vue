<template>
  <div 
    class="u-range cursor-pointer w-full flex items-center"
    @mousedown="onClick"
    @mouseup="onMouseup"
  >
    <div
      ref="trackRef" 
      class="u-slider-track relative flex items-center w-full"
      :class="trackClass"
    >
      <div 
        ref="selectionRef"
        class="u-slider-track-selection absolute h-full" 
        :style="{ width, left: leftThumbLeft }"
        :class="selectionClass"
      ></div>

      <div 
        ref="leftThumbRef"
        class="u-slider-track-thumb-left absolute -translate-x-1/2" 
        :style="{ left: leftThumbLeft }"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      >
        <slot name="left-thumb"></slot>
      </div>

      <div 
        ref="rightThumbRef"
        class="u-slider-track-thumb-right absolute -translate-x-1/2" 
        :style="{ left: rightThumbLeft }"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      >
        <slot name="right-thumb"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'

import { throttle } from '../../utils'

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
  step?: number,
  modelValue: {
    min: number,
    max: number
  },
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
const { min: leftThumbValue, max: rightThumbValue } = modelValue.value
const _leftThumbLeft = leftThumbValue / (max.value - min.value) * 100
const _rightThumbLeft = rightThumbValue / (max.value - min.value) * 100
const leftThumbLeft = ref(`${ _leftThumbLeft }%`)
const rightThumbLeft = ref(`${ _rightThumbLeft }%`)
// 100 - _leftThumbLeft - (100 - _rightThumbValue) = _rightThumbLeft - _leftThumbLeft
const width = ref(`${ _rightThumbLeft - _leftThumbLeft }%`)
const trackRef = ref<HTMLElement | null>(null)
const selectionRef = ref<HTMLElement | null>(null)
const leftThumbRef = ref<HTMLElement | null>(null)
const rightThumbRef = ref<HTMLElement | null>(null)

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

let x1 = 0
let x2 = 0
let dragging = false
let isLeftThumb = false

const onMousedown = (e: MouseEvent) => {
  const { pageX, currentTarget } = e

  e.stopPropagation()
  dragging = true
  isLeftThumb = currentTarget === leftThumbRef.value ? true : false

  if (isLeftThumb) {
    x1 = pageX
  } else {
    x2 = pageX
  }

  before()
}

const updateModelValue = (value: number) => {
  const _step = step.value
  const mod = value % _step

  value -= mod

  if (mod >= _step / 2) {
    value += _step
  }

  modelValue.value[isLeftThumb ? 'min' : 'max'] = value
}

const addAnimation = () => {
  const _leftThumbRef = leftThumbRef.value as HTMLElement
  const _rightThumbRef = rightThumbRef.value as HTMLElement
  const { classList: thumbClassList} = isLeftThumb
    ? _leftThumbRef
    : _rightThumbRef
  const { classList: selectionClassList } = selectionRef.value as HTMLElement
  const thumbClassListTokens = [
    isLeftThumb ? 'transition-[left]' : 'transition-[right]', 
    'duration-[--u-transition-duration]'
  ]
  const selectionClassListTokens = [
    'transition-[width]', 
    'duration-[--u-transition-duration]'
  ]
  
  thumbClassList.add(...thumbClassListTokens)
  selectionClassList.add(...selectionClassListTokens)

  const _min = min.value
  const _max = max.value
  const { min: leftThumbValue, max: rightThumbValue } = modelValue.value
  
  if (isLeftThumb) {
    leftThumbLeft.value = `${ leftThumbValue / (_max - _min) * 100 }%`
  } else {
    rightThumbLeft.value = `${ rightThumbValue / (_max - _min) * 100 }%`
  }

  setTimeout(() => {
    thumbClassList.remove(...thumbClassListTokens)
    selectionClassList.remove(...selectionClassListTokens)

    if (isLeftThumb) {
      x1 = _leftThumbRef.getBoundingClientRect().x
    } else {
      x2 = _rightThumbRef.getBoundingClientRect().x
    }
  }, 300)
}

const onUpdate = (e: MouseEvent | Event) => {
  const { pageX } = e as any
  const offset = isLeftThumb ? pageX - x1 : pageX - x2
  const newValue = parseFloat(isLeftThumb ? leftThumbLeft.value : rightThumbLeft.value) + 
    offset / trackRef.value!.clientWidth * 100

  if (newValue < 0 || newValue > 100) {
    return
  }

  const value = Math.round(newValue / 100 * (max.value - min.value))

  updateModelValue(value)

  if (isLeftThumb) {
    leftThumbLeft.value = `${ newValue }%`
    x1 = pageX
    width.value = `${ parseFloat(rightThumbLeft.value) - newValue }%`
  } else {
    rightThumbLeft.value = `${ newValue }%`
    x2 = pageX
    width.value = `${ newValue - parseFloat(leftThumbLeft.value) }%`
  }
}

const onMousemove = throttle((e: MouseEvent) => {
  if (!dragging) {
    return
  }

  e.stopPropagation()
  onUpdate(e)
}, 10)

const onMouseup = (e: Event) => {
  e.stopPropagation()
  dragging = false
  addAnimation()
  after()
}

const onClick = (e: Event) => {
  dragging = true
  onUpdate(e)
}

watch(modelValue, () => {
  if (dragging) {
    return
  }

  addAnimation()
})

onMounted(() => {
  x1 = leftThumbRef.value!.getBoundingClientRect().x
  x2 = rightThumbRef.value!.getBoundingClientRect().x
})
</script>
