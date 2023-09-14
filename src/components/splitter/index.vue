<template>
  <div 
    ref="container" 
    class="u-splitter-container flex"
    :style="{ flexDirection: horizontal ? 'column' : 'row' }"
  >
    <div 
      :class="beforeClass" 
      class="u-splitter-before overflow-auto" 
      ref="before" 
      :style="_beforeStyle"
    >
      <slot name="before"></slot>
    </div>
    <div 
      ref="splitter"
      class="u-splitter cursor-move select-none"
      :style="{ cursor: dragging ? 'pointer' : 'move' }"
      @mousedown="mousedownHandler($event)"
      @mouseup="mouseupHandler"
    >
      <slot name="splitter"></slot>
    </div>
    <div 
      class="u-splitter-after overflow-auto basis-0 grow"
      :class="afterClass"
      :style="afterStyle"
    >
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import throttle from '../../utils/throttle'
import { ref, toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{ 
  min?: number,
  max?: number,
  modelValue: number,
  horizontal?: boolean,
  afterStyle?: { [propName: string]: string | number },
  afterClass?: string,
  beforeStyle?: { [propName: string]: string | number },
  beforeClass?: string
}>(), {
  min: 20,
  max: 80,
  horizontal: false,
  afterStyle: () => ({}),
  afterClass: '',
  beforeStyle: () => ({}),
  beforeClass: ''
})
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const { 
  min, 
  max, 
  modelValue, 
  horizontal,
  afterStyle,
  afterClass,
  beforeStyle,
  beforeClass
} = toRefs(props)
const before = ref<HTMLElement | null>(null)
const dragging = ref(false)
const splitter = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const _beforeStyle = computed(() => {
  return {
    ...beforeStyle,
    ...(
      horizontal.value 
        ? { height: `${ modelValue.value }%` } 
        : { width: `${ modelValue.value }%` }
    )
  }
})
let prevOffset = 0

const updateDragState = () => dragging.value = !dragging.value

const updateOffset = (e: MouseEvent) => {
  let offset = 0
  const _modelValue = modelValue.value
  const _horizontal = horizontal.value
  const { clientX, clientY } = e
  const { clientWidth, clientHeight } = container.value as HTMLElement

  if (_horizontal) {
    offset = _modelValue + (clientY - prevOffset) / clientHeight * 100
  } else {
    offset = _modelValue + (clientX - prevOffset) / clientWidth * 100
  }

  if (offset > min.value && offset < max.value) {
    emit('update:modelValue', offset)
    prevOffset = _horizontal ? clientY : clientX
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
  const { clientX, clientY } = e
  prevOffset = horizontal.value ? clientY : clientX
  updateDragState()
  addGlobalEventListener()
}

const mousemoveHandler = throttle((e: MouseEvent) => {
  if (!dragging.value) {
    return
  }

  updateOffset(e)
}, 10)

const mouseupHandler = () => {
  updateDragState()
  removeGlobalEventListener()
}
</script>
