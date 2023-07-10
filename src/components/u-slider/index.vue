<template>
  <div class="u-slider">
    <div
      ref="trackRef" 
      class="u-slider-track"
      :class="trackClass"
      :style="trackStyle"
    >
      <div 
        ref="selectionRef"
        class="u-slider-track-selection" 
        :class="selectionClass"
        :style="_selectionStyle"
      ></div>
      <div 
        ref="thumbRef"
        class="u-slider-track-thumb" 
        :class="thumbClass"
        :style="_thumbStyle"
        @mousedown="mousedownHandler"
        @mousemove="mousemoveHandler"
        @mouseup="mouseupHandler"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue'

import { throttle } from '../../utils'
import { useAddAnimation } from '../../composables';

const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
  step?: number,
  modelValue: number,
  trackClass?: string,
  thumbClass?: string,
  trackStyle?: { [propName: string]: string | number }
  thumbStyle?: { [propName: string]: string | number }
  selectionClass?: string,
  selectionStyle?: { [propName: string]: string | number }
}>(), {
  min: 0,
  max: 100,
  step: 1,
  trackClass: '',
  thumbClass: '',
  trackStyle: () => ({}),
  thumbStyle: () => ({}),
  selectionClass: '',
  selectionStyle: () => ({})
})
const { 
  min,
  max, 
  step,
  modelValue, 
  trackClass, 
  thumbClass,
  trackStyle,
  thumbStyle,
  selectionClass,
  selectionStyle
} = toRefs(props)
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const leftStart = ref(0)
const leftEnd = ref(0)
const widthStart = ref(0)
const widthEnd = ref(0)
const offset = ref(Number((modelValue.value / max.value * 100).toFixed(2)))
const thumbRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const selectionRef = ref<HTMLElement | null>(null)
const _selectionStyle = computed(() => ({ 
  ...selectionStyle.value,
  width: `${ offset.value }%`,
  '--u-width-start': `${ widthStart.value }%`, 
  '--u-width-end': `${ widthEnd.value }%`, 
}))
const _thumbStyle = computed(() => ({ 
  ...thumbStyle.value,
  left: `${ offset.value }%`,
  '--u-left-start': `${ leftStart.value }%`,
  '--u-left-end': `${ leftEnd.value }%`
}))
let dragging = false
let prevOffset = 0

const updateDragState = () => dragging = !dragging

const updateOffset = (e: MouseEvent) => {
  const { clientX, clientY } = e
  let _offset = offset.value + ((clientX - prevOffset) / trackRef.value!.clientWidth * 100)
  const _max = max.value

  if (_offset > min.value && _offset < _max) {
    offset.value = _offset

    let value = offset.value / 100 * _max
    const _step = step.value
    const mod = value % _step

    if (mod > _step / 2) {
      value += (_step - mod)
    } else {
      value -= mod
    }

    emit('update:modelValue', value)
    prevOffset = clientX
  }
}

const addGlobalEventListener = () => {
  const { body } = document

  body.addEventListener('mousemove', mousemoveHandler)
  body.addEventListener('mouseup', mouseupHandler)
}

const removeGlobalEventListener = () => {
  const { body } = document
  
  body.removeEventListener('mousemove', mousemoveHandler)
  body.removeEventListener('mouseup', mouseupHandler)
}

const mousedownHandler = (e: MouseEvent) => {
  prevOffset = e.clientX
  updateDragState()
  addGlobalEventListener()
}

const mousemoveHandler = throttle((e: MouseEvent) => {
  if (!dragging) {
    return
  }

  updateOffset(e)
}, 10)

const _updateOffset = () => {
  const newOffset = modelValue.value / max.value * 100
  const oldOffset = offset.value

  if (oldOffset < newOffset) {
    leftStart.value = widthStart.value = oldOffset
    leftEnd.value = widthEnd.value = newOffset
  } else {
    leftStart.value = widthStart.value = oldOffset
    leftEnd.value = widthEnd.value = newOffset
  }
  
  useAddAnimation(thumbRef.value as HTMLElement, 'u-animate-left')
  useAddAnimation(selectionRef.value as HTMLElement, 'u-animate-width')
  offset.value = newOffset 
}

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
  _updateOffset()
}
</script>

<style scoped>
.u-slider {
  cursor: pointer;
}

.u-slider-track {
  position: relative;
}

.u-slider-track > .u-slider-track-selection,
.u-slider-track > .u-slider-track-thumb {
  position: absolute;
}
</style>

