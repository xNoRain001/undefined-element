<template>
  <div 
    class="u-range cursor-pointer w-full flex items-center"
    @mousedown="onClick"
    @mouseup="onMouseup"
  >
    <div
      ref="trackRef" 
      class="u-range-track relative flex items-center w-full"
      :class="trackClass"
    >
      <div 
        ref="selectionRef"
        class="u-range-track-selection absolute h-full" 
        :style="{ width, left: flag ? rightThumbLeft : leftThumbLeft }"
        :class="selectionClass"
      ></div>

      <div 
        ref="leftThumbRef"
        class="u-range-track-thumb-left absolute -translate-x-1/2" 
        :style="{ left: leftThumbLeft }"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      >
        <slot name="left-thumb"></slot>
      </div>

      <div 
        ref="rightThumbRef"
        class="u-range-track-thumb-right absolute -translate-x-1/2" 
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
const v = max.value - min.value
const _leftThumbLeft = leftThumbValue / v * 100
const _rightThumbLeft = rightThumbValue / v * 100
const leftThumbLeft = ref(`${ _leftThumbLeft }%`)
const rightThumbLeft = ref(`${ _rightThumbLeft }%`)
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
// boundary
let flag = false

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
    'transition-[left]', 
    'duration-[--u-transition-duration]'
  ]
  const selectionClassListTokens = [
    'transition-[width]', 
    'duration-[--u-transition-duration]'
  ]
  
  thumbClassList.add(...thumbClassListTokens)
  selectionClassList.add(...selectionClassListTokens)

  const v = max.value - min.value
  const { min: leftThumbValue, max: rightThumbValue } = modelValue.value
  
  if (isLeftThumb) {
    leftThumbLeft.value = `${ leftThumbValue / v * 100 }%`
  } else {
    rightThumbLeft.value = `${ rightThumbValue / v * 100 }%`
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

const onUpdate = (e: MouseEvent | Event, isClick = false) => {
  const { pageX } = e as any
  const offset = isLeftThumb ? pageX - x1 : pageX - x2
  const flostLeftThumbLeft = parseFloat(leftThumbLeft.value)
  const floatRightThumbLeft = parseFloat(rightThumbLeft.value)
  const newValue = 
    parseFloat(`${ isLeftThumb ? flostLeftThumbLeft : floatRightThumbLeft }`) + 
    offset / trackRef.value!.clientWidth * 100

  if (newValue < 0 || newValue > 100) {
    return
  }

  flag = flostLeftThumbLeft >= floatRightThumbLeft ? true : false

  const value = Math.round(newValue / 100 * (max.value - min.value))

  updateModelValue(value)

  if (isLeftThumb) {
    leftThumbLeft.value = `${ newValue }%`
    x1 = pageX
    width.value = `${ Math.abs(floatRightThumbLeft - newValue) }%`
  } else {
    rightThumbLeft.value = `${ newValue }%`
    x2 = pageX
    width.value = `${ Math.abs(newValue - flostLeftThumbLeft) }%`
  }
}

const onMousemove = (e: MouseEvent) => {
  if (!dragging) {
    return
  }

  e.stopPropagation()
  onUpdate(e)
}

const onMouseup = (e: Event) => {
  e.stopPropagation()
  dragging = false
  addAnimation()
  after()
}

const onClick = (e: Event) => {
  dragging = true
  onUpdate(e, isClick)
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
