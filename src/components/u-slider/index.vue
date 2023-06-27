<template>
  <div
    ref="slider" 
    class="u-slider"
    @mousedown="mousedownHandler($event)"
    @mouseup="mouseupHandler"
  >
    <div :style="{ width: `${ offset }%` }">
      <slot name="track"></slot>
    </div>
    <div class="thumb" :style="{ left: `${ offset }%` }">
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
const slider = ref<HTMLElement | null>(null)
let offset = modelValue.value / _max * 100
let prevOffset = 0
let dragging = false
let sliderWidth = 0

const updateDragState = () => dragging = !dragging

const updateOffset = (e: MouseEvent) => {
  const { clientX, clientY } = e
  const _offset = offset + (clientX - prevOffset) / sliderWidth * 100
  
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
}, 50)

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
}

onMounted(() => {
  sliderWidth = slider.value!.clientWidth
})
</script>

<style scoped>
.u-slider {
  position: relative;
  display: flex;
  align-items: center;
}

.u-slider > .thumb {
  position: absolute;
}
</style>
