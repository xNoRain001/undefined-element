<template>
  <div
    ref="inner" 
    class="u-slider-inner"
    @mousedown="mousedownHandler($event)"
    @mousemove="mousemoveHandler($event)"
    @mouseup="mouseupHandler"
  >
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue';

const props = defineProps<{ modelValue: number }>()
const { modelValue } = toRefs(props)

let prevOffset = 0
let dragging = false
const inner = ref<HTMLElement | null>(null)
const offset = ref(0)

const updateDragState = () => dragging = !dragging

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
  // emit('update:modelValue')
}

const mousemoveHandler = (e: MouseEvent) => {
  if (!dragging) {
    return
  }

  const { clientX, clientY } = e
  
  modelValue.value += clientX - prevOffset
  prevOffset = clientX
  inner.value!.style.left = `${ modelValue.value }px`
}

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
}
</script>

<style scoped>
.u-slider-inner {
  position: absolute;
  user-select: none;
}
</style>
