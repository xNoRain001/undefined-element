<template>
  <div ref="container" class="u-splitter-container">
    <div ref="before" :style="{ width: `${ modelValue }%` }">
      <slot name="before"></slot>
    </div>
    <div 
      ref="splitter"
      class="u-splitter"
      @mousedown="mousedownHandler($event)"
      @mouseup="mouseupHandler"
    >
      <slot name="splitter"></slot>
    </div>
    <div class="u-splitter-after">
      <slot name="after"></slot>
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
const { modelValue, min, max } = toRefs(props)
const _min = min?.value || 10
const _max = max?.value || 90
const before = ref<HTMLElement | null>(null)
const splitter = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
let prevOffset = 0
let dragging = false
let containerWidth = 0

const initContainerWidth = () => containerWidth = container.value!.clientWidth

const updateDragState = () => dragging = !dragging

const updateOffset = (e: MouseEvent) => {
  const { clientX, clientY } = e
  const offset = Number((modelValue.value + (clientX - prevOffset) / containerWidth * 100).toFixed(2))
  
  if (offset > _min && offset < _max) {
    emit('update:modelValue', offset)
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
  initContainerWidth()
})
</script>

<style scoped>
.u-splitter-container {
  display: flex;
  justify-content: space-between;
}

.u-splitter {
  cursor: move;
  user-select: none;
}

.u-splitter-after {
  width: 0;
  flex-grow: 1;
}
</style>