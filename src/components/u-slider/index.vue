<template>
  <div class="u-slider cursor-pointer">
    <div
      ref="trackRef" 
      class="u-slider-track relative"
      :class="trackClass"
      :style="trackStyle"
    >
      <div 
        ref="selectionRef"
        class="u-slider-track-selection absolute" 
        :class="selectionClass"
        :style="_selectionStyle"
      ></div>

      <div 
        ref="thumbRef"
        class="u-slider-track-thumb absolute" 
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

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
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
const offset = ref(Number((modelValue.value / max.value * 100).toFixed(2)))
const animate = ref(false)
const thumbRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const selectionRef = ref<HTMLElement | null>(null)
const _selectionStyle = computed(() => ({ 
  ...selectionStyle.value,
  width: `${ offset.value }%`,
  ...(animate.value ? { transition: 'width var(--u-transition-duration)' } : {})
}))
const _thumbStyle = computed(() => ({ 
  ...thumbStyle.value,
  left: `${ offset.value }%`,
  ...(animate.value ? { transition: 'left var(--u-transition-duration)' } : {})
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
  offset.value = newOffset 
  animate.value = true
  setTimeout(() => animate.value = false, 300)
}

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
  _updateOffset()
}
</script>
