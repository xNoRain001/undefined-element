<template>
  <div 
    class="u-scroll-area" 
    :style="{
      width,
      height
    }"
    @mousedown="mousedownHandler"
    @mousemove="mousemoveHandler"
    @mouseup="mouseupHandler"
  >
    <div 
      @scroll="scrollHandler" 
      ref="container" 
      class="u-scroll-area-container"
    >
      <div class="u-scroll-area-content">
        <slot></slot>
      </div>
    </div>
    <div class="u-scroll-area-bar-y" ref="barY">
      <div 
        ref="thumbY" 
        class="u-scroll-area-thumb-y" 
        :style="{ height: `${ thumbHeight }px` }"
      ></div>
    </div>
    <div class="u-scroll-area-bar-x" ref="barX">
      <div 
        ref="thumbX" 
        class="u-scroll-area-thumb-x" 
        :style="{ width: `${ thumbWidth }px` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted } from 'vue'

const props = withDefaults(defineProps<{ 
  width?: string,
  height?: string
}>(), {
  width: '100%',
  height: '100%'
})
const { width, height } = toRefs(props)
const barX = ref<HTMLElement | null>(null)
const barY = ref<HTMLElement | null>(null)
const thumbX = ref<HTMLElement | null>(null)
const thumbY = ref<HTMLLIElement | null>(null)
const container = ref<HTMLElement | null>(null)
const thumbHeight = ref(0)
const thumbWidth = ref(0)

const initThumbSize = () => {
  const { 
    scrollWidth,
    clientWidth,
    scrollHeight, 
    clientHeight
  } = container.value as HTMLElement

  if (scrollHeight > clientHeight) {
    thumbHeight.value = clientHeight * (clientHeight / scrollHeight)
  }

  if (scrollWidth > clientWidth) {
    thumbWidth.value = clientWidth * (clientWidth / scrollWidth)
  }
}

const scrollHandler = (e: Event) => {
  const { 
    scrollTop,
    scrollLeft,
    scrollHeight, 
    clientHeight,
    scrollWidth,
    clientWidth
  } = e.currentTarget as HTMLElement
  const scrollAreaHeight = scrollHeight - clientHeight
  const scrollAreaWidth = scrollWidth - clientWidth
  const thumnScrollableWidth = clientWidth - thumbWidth.value
  const thumnScrollableHeight = clientHeight - thumbHeight.value
  const offsetX = Number((scrollLeft / scrollAreaWidth * thumnScrollableWidth).toFixed(2))
  const offsetY = Number((scrollTop / scrollAreaHeight * thumnScrollableHeight).toFixed(2))

  thumbX.value!.style.left = `${ offsetX }px`
  thumbY.value!.style.top = `${ offsetY }px`
}

let dragging = false
let prevOffset = 0

const mousedownHandler = (e: MouseEvent) => {
  const {target} = e

  if (target === thumbX.value || target === thumbY.value) {
    dragging = true
    prevOffset = e.clientX
  }

  if (target === barX.value || target === barY.value) {
  }
}

const mousemoveHandler = (e: MouseEvent) => {
  if (!dragging) {
    return
  }

  const { clientX } = e
  const offset = clientX - prevOffset

  thumbX.value!.style.left = `${ parseInt(thumbX.value!.style.left) || 0 + offset }px`
  prevOffset = clientX
}

const mouseupHandler = () => {
  dragging = false
}

onMounted(() => {
  initThumbSize()
})
</script>

<style>
.u-scroll-area {
  position: relative;
}

.u-scroll-area-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.u-scroll-area-container::-webkit-scrollbar {
  display: none;
}

.u-scroll-area-bar-x,
.u-scroll-area-bar-y {
  position: absolute;
  right: 0;
  bottom: 0;
}

.u-scroll-area-bar-x {
  left: 0;
  height: 6px;
}
.u-scroll-area-bar-y {
  top: 0;
  width: 6px;
}

.u-scroll-area-thumb-x,
.u-scroll-area-thumb-y {
  background-color: rgba(144, 147, 153, .3);
  border-radius: 4px;
  display: none;
  position: absolute;
  cursor: pointer;
  transition: background-color .3s;
}

.u-scroll-area-thumb-x {
  height: 100%;
}

.u-scroll-area-thumb-y {
  width: 100%;
}

.u-scroll-area-thumb-x:hover,
.u-scroll-area-thumb-y:hover {
  background-color: rgba(144, 147, 153, .5);
}

.u-scroll-area:hover .u-scroll-area-thumb-x,
.u-scroll-area:hover .u-scroll-area-thumb-y {
  display: block;
}
</style>
