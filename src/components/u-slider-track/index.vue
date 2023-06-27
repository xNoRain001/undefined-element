<template>
  <div
    ref="sliderTrack" 
    class="u-slider-track"
    @mousedown="mousedownHandler($event)"
    @mouseup="mouseupHandler"
  >
    <div :style="{ width: `${ offset }%` }">
      <slot name="selection"></slot>
    </div>
    <div class="u-slider-track-thumb" :style="{ left: `${ offset }%` }">
      <slot name="thumb"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import throttle from '../../utils/throttle'
import { ref, toRefs, onMounted } from 'vue'

const props = defineProps<{ 
  modelValue: number,
  min?: number,
  max?: number
}>()
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const { min, max, modelValue } = toRefs(props)
const _min = min?.value || 0
const _max = max?.value || 100
const sliderTrack = ref<HTMLElement | null>(null)
let offset = modelValue.value / _max * 100
let prevOffset = 0
let dragging = false
let sliderTrackWidth = 0

const updateDragState = () => dragging = !dragging

const updateOffset = (e: MouseEvent) => {
  const { clientX, clientY } = e
  const _offset = offset + (clientX - prevOffset) / sliderTrackWidth * 100
  
  if (_offset > 0 && _offset < 100) {
    offset = _offset
    emit('update:modelValue', offset / 100 * _max)
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
}, 25)

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
}

onMounted(() => {
  sliderTrackWidth = sliderTrack.value!.clientWidth
})
</script>

<style scoped>
.u-slider-track {
  position: relative;
  display: flex;
  align-items: center;
}

.u-slider-track > .u-slider-track-thumb {
  position: absolute;
}
</style>
