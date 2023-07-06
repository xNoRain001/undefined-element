<template>
  <div class="u-slider">
    <div
      ref="trackRef" 
      class="u-slider-track"
      :class="trackClass"
      :style="trackStyle"
    >
      <div 
        class="u-slider-track-selection" 
        :class="selectionClass"
        :style="_selectionStyle"
      ></div>
      <div 
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

const props = withDefaults(defineProps<{
  min?: number,
  max?: number,
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
  modelValue, 
  trackClass, 
  thumbClass,
  trackStyle,
  thumbStyle,
  selectionClass,
  selectionStyle
} = toRefs(props)
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const offset = ref(Number((modelValue.value / max.value * 100).toFixed(2)))
const trackRef = ref<HTMLElement | null>(null)
const _selectionStyle = computed(() => ({ 
  ...selectionStyle.value,
  width: `${ offset.value }%` 
}))
const _thumbStyle = computed(() => ({ 
  ...thumbStyle.value,
  left: `${ offset.value }%` 
}))
let dragging = false
let prevOffset = 0

const updateDragState = () => dragging = !dragging

const updateOffset = (e: MouseEvent) => {
  const { clientX, clientY } = e
  const _offset = offset.value + Number(((clientX - prevOffset) / trackRef.value!.clientWidth * 100).toFixed(2))
  const _max = max.value

  if (_offset > min.value && _offset < _max) {
    offset.value = _offset
    emit('update:modelValue', Number((offset.value / 100 * _max).toFixed(2)))
    prevOffset = clientX
  }
}

const addGlobalEventListener = () => {
  const { body } = document

  body.addEventListener('mousemove', mousemoveHandler)
  body.addEventListener('mouseup', updateDragState)
}

const removeGlobalEventListener = () => {
  const { body } = document
  
  body.removeEventListener('mousemove', mousemoveHandler)
  body.removeEventListener('mouseup', updateDragState)
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

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
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

