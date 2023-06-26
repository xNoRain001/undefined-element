<template>
  <div
    ref="sliderInner" 
    class="u-slider-inner"
    @mousedown="mousedownHandler($event)"
    @mousemove="mousemoveHandler($event)"
    @mouseup="mouseupHandler"
  >
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps<{ 
  modelValue: number,
  min?: number,
  max?: number
}>()
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const { min, max, modelValue } = toRefs(props)
const _max = ref(0)

let prevOffset = 0
let dragging = false
const slider = ref<HTMLElement | null>(null)
const sliderInner = ref<HTMLElement | null>(null)
const sliderWidth = ref(0)

const initMax = () => {
  sliderWidth.value = getSliderWidth()
  _max.value = max?.value || sliderWidth.value
}

const initOffset = () => {
  // const offset = Math.floor(Number((modelValue.value / _max.value)) * sliderWidth.value)
  // sliderInner.value!.style.left = `${ offset }px`
  // console.log((offset / sliderWidth.value) * _max.value)
}

const getSliderWidth = () => getSlider().clientWidth

const getSlider = () => {
  let slider = sliderInner.value as HTMLElement

  while (!slider.classList.contains('u-slider')) {
    slider = slider.parentNode as HTMLElement
  }

  return slider
}

const updateDragState = () => dragging = !dragging

const updateOffset = (e: MouseEvent) => {
  const { clientX, clientY } = e
  const offset = modelValue.value + (clientX - prevOffset)
  
  if (offset > 0 && offset < sliderWidth.value) {
    emit('update:modelValue', offset)
    prevOffset = clientX
    sliderInner.value!.style.left = `${ offset }px`
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

const mousemoveHandler = (e: MouseEvent) => {
  if (!dragging) {
    return
  }

  updateOffset(e)
}

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
}

onMounted(() => {
  initMax()
  initOffset()
})
</script>

<style scoped>
.u-slider-inner {
  position: absolute;
  user-select: none;
}
</style>
