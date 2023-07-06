<template>
  <!-- @mousedown="mousedownHandler"
  @mousemove="mousemoveHandler"
  @mouseup="mouseupHandler" -->
  <div 
    class="u-scroll-area" 
    :style="{
      width,
      height
    }"
  >
    <div 
      @scroll="scrollHandler" 
      ref="containerRef" 
      class="u-scroll-area-container"
    >
      <div class="u-scroll-area-content">
        <slot></slot>
      </div>
    </div>
    <div class="u-scroll-area-bar-x" ref="barXRef" @click="clickBarXHandler">
      <div 
        ref="thumbXRef" 
        class="u-scroll-area-thumb-x" 
        :style="{ width: `${ thumbWidth }px` }"
      ></div>
    </div>
    <div class="u-scroll-area-bar-y" ref="barYRef" @click="clickBarYHandler">
      <div 
        ref="thumbYRef" 
        class="u-scroll-area-thumb-y" 
        :style="{ height: `${ thumbHeight }px` }"
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
const barXRef = ref<HTMLElement | null>(null)
const barYRef = ref<HTMLElement | null>(null)
const thumbXRef = ref<HTMLElement | null>(null)
const thumbYRef = ref<HTMLLIElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const thumbHeight = ref(0)
const thumbWidth = ref(0)

const initThumbSize = () => {
  const { 
    scrollWidth,
    clientWidth,
    scrollHeight, 
    clientHeight
  } = containerRef.value as HTMLElement

  if (scrollHeight > clientHeight) {
    thumbHeight.value = clientHeight * (clientHeight / scrollHeight)
  }

  if (scrollWidth > clientWidth) {
    thumbWidth.value = clientWidth * (clientWidth / scrollWidth)
  }
}

let flag = false

const scrollHandler = (e: Event) => {
  if (flag) {
    return
  }

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

  thumbXRef.value!.style.left = `${ offsetX }px`
  thumbYRef.value!.style.top = `${ offsetY }px`
}

let dragging = false
let prevOffset = 0

const mousedownHandler = (e: MouseEvent) => {
  const {target} = e

  if (target === thumbXRef.value || target === thumbYRef.value) {
    dragging = true
    prevOffset = e.clientX
  }

  if (target === barXRef.value || target === barYRef.value) {
  }
}

const mousemoveHandler = (e: MouseEvent) => {
  if (!dragging) {
    return
  }

  const { clientX } = e
  const offset = clientX - prevOffset

  thumbXRef.value!.style.left = `${ parseInt(thumbXRef.value!.style.left) || 0 + offset }px`
  prevOffset = clientX
}

const mouseupHandler = () => {
  dragging = false
}

const clickBarYHandler = (e: Event) => {
  const { target, layerY }: { target: HTMLElement, layerY: number } = e as any

  const _barYRef = barYRef.value

  if (target !== _barYRef) {
    return
  }

  const _thumbYRef = thumbYRef.value as HTMLElement
  const { style } = _thumbYRef
  const oldTop = (parseInt(style.top) || 0)
  const { clientHeight } = _thumbYRef // or thumbHeight
  const { clientHeight: barHeight } = barYRef.value as HTMLElement
  let newTop = 0

  if (layerY > (oldTop + clientHeight)) {
    // scroll down
    newTop = oldTop + (layerY - clientHeight / 2)

    const maxTop = barHeight - clientHeight

    // remaining space less than the thumb height
    if (newTop > maxTop) {
      newTop = maxTop
    }
  } else {
    // scroll up
    if (layerY > clientHeight) {
      // remaining space greater than the thumb height, keep the center of the 
      // thumb on layerY
      newTop = (layerY - clientHeight / 2)
    } else {
      // remaining space less than the thumb height
      newTop = 0
    }
  }

  style.top = `${ newTop }px`

  const rate = Number((newTop / (barHeight - clientHeight)).toFixed(2))
  const _containerRef = containerRef.value as HTMLElement
  const { scrollHeight, clientHeight: containerHeight } = _containerRef

  flag = true
  _containerRef.scrollTop = (scrollHeight - containerHeight) * rate
  setTimeout(() => flag = false)
}

// TODO: unknown bug
const clickBarXHandler = (e: Event) => {
  const { target, layerX }: { target: HTMLElement, layerX: number } = e as any
  const _barXRef = barXRef.value

  if (target !== _barXRef) {
    return
  }

  const _thumbXRef = thumbXRef.value as HTMLElement
  const { style } = _thumbXRef
  const oldLeft = (parseInt(style.left) || 0)
  const { clientWidth } = _thumbXRef // or thumbWidth
  const { clientWidth: barWidth } = barXRef.value as HTMLElement
  let newLeft = 0

  if (layerX > (oldLeft + clientWidth)) {
    // scroll right
    newLeft = oldLeft + (layerX - clientWidth / 2)

    const maxLeft = barWidth - clientWidth

    // remaining space less than the thumb width
    if (newLeft > maxLeft) {
      newLeft = maxLeft
    }
  } else {
    // scroll left
    if (layerX > clientWidth) {
      // remaining space greater than the thumb width, keep the center of the 
      // thumb on layerX
      newLeft = (layerX - clientWidth / 2)
    } else {
      // remaining space less than the thumb width
      newLeft = 0
    }
  }

  style.left = `${ newLeft }px`

  const rate = Number((newLeft / (barWidth - clientWidth)).toFixed(2))
  const _containerRef = containerRef.value as HTMLElement
  const { scrollWidth, clientWidth: containerWidth } = _containerRef

  flag = true
  _containerRef.scrollLeft = (scrollWidth - containerWidth) * rate
  setTimeout(() => flag = false)
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
