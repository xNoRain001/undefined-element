<template>
  <div 
    class="u-scroll-area" 
    :style="scrollAreaStyle"
  >
    <div 
      @scroll="onScroll" 
      ref="containerRef" 
      class="u-scroll-area-container"
    >
      <div class="u-scroll-area-content">
        <slot></slot>
      </div>
    </div>
    <div class="u-scroll-area-bar-x" ref="barXRef" @click="onClickBar">
      <div 
        ref="thumbXRef" 
        class="u-scroll-area-thumb-x" 
        :style="{ width: `${ thumbWidth }px` }"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      ></div>
    </div>
    <div class="u-scroll-area-bar-y" ref="barYRef" @click="onClickBar">

      <div 
        ref="thumbYRef" 
        class="u-scroll-area-thumb-y" 
        :style="{ height: `${ thumbHeight }px` }"
        @mousedown="onMousedown"
        @mousemove="onMousemove"
        @mouseup="onMouseup"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted } from 'vue'

const props = withDefaults(defineProps<{ 
  width?: string,
  height?: string
}>(), {
  width: '100%',
  height: '100%'
})
const { width, height } = toRefs(props)
const scrollAreaStyle = computed(() => ({ 
  width: width.value, 
  height: height.value
}))
const barXRef = ref<HTMLElement | null>(null)
const barYRef = ref<HTMLElement | null>(null)
const thumbXRef = ref<HTMLElement | null>(null)
const thumbYRef = ref<HTMLLIElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const thumbHeight = ref(0)
const thumbWidth = ref(0)

// TODO: update thumb size when DOM Tree change.
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

const onScroll = (e: Event) => {
  const { 
    scrollTop,
    scrollLeft,
    scrollWidth,
    scrollHeight, 
    clientWidth,
    clientHeight
  } = e.currentTarget as HTMLElement
  const { 
    style: thumbXStyle, 
    clientWidth: thumbWidth 
  } = thumbXRef.value as HTMLElement
  const { 
    style: thumbYStyle, 
    clientHeight: thumbHeight 
  } = thumbYRef.value as HTMLElement
  const scrollAreaHeight = scrollHeight - clientHeight
  const scrollAreaWidth = scrollWidth - clientWidth
  const thumnScrollableWidth = clientWidth - thumbWidth
  const thumnScrollableHeight = clientHeight - thumbHeight
  const offsetX = scrollLeft / scrollAreaWidth * thumnScrollableWidth
  const offsetY = scrollTop / scrollAreaHeight * thumnScrollableHeight

  thumbXStyle.left = `${ offsetX }px`
  thumbYStyle.top = `${ offsetY }px`
}

let dragging = false
let prevOffset = 0

const onMousedown = (e: MouseEvent) => {
  const { target, clientX, clientY } = e
  dragging = true
  prevOffset = target === thumbXRef.value as HTMLElement ? clientX : clientY
}

const onMousemove = (e: MouseEvent) => {
  if (!dragging) {
    return
  }
  const _thumbXRef = thumbXRef.value as HTMLElement
  const direction = e.target === _thumbXRef ? 'left' : 'top'
  const isHorizontal = direction === 'left'
  const { clientX, clientY } = e
  const offset = isHorizontal
    ? clientX - prevOffset
    : clientY - prevOffset
  const { clientWidth: thumbWidth, clientHeight: thumbHeight } = isHorizontal 
    ? thumbXRef.value as HTMLElement
    : thumbYRef.value as HTMLElement
  const { clientWidth: barWidth, clientHeight: barHeight } = isHorizontal
    ? barXRef.value as HTMLElement
    : barYRef.value as HTMLElement
  const rate = isHorizontal
    ? offset / (barWidth - thumbWidth)
    : offset / (barHeight - thumbHeight)
  const _containerRef = containerRef.value as HTMLElement
  const { 
    scrollWidth, 
    scrollHeight,
    clientWidth: containerWidth,
    clientHeight: containerHeight
  } = _containerRef
  const scrollOffset = isHorizontal
    ? (scrollWidth - containerWidth) * rate
    : (scrollHeight - containerHeight) * rate
  _containerRef.scrollTo({
    [isHorizontal ? 'left' : 'top']: scrollOffset,
    behavior: 'instant'
  })
}

const onMouseup = (e: MouseEvent) => {
  dragging = false
}

const getNewThumbOffsetStrategies = {
  top (
    layerX: number, 
    layerY: number, 
    oldOffset: number, 
    thumbWidth: number, 
    thumbHeight: number, 
    barWidth: number, 
    barHeight: number
  ) {
    let newOffset = 0

    if (layerY > (oldOffset + thumbHeight)) {
      // scroll down
      newOffset = oldOffset + (layerY - oldOffset - thumbHeight / 2)
      const maxTop = barHeight - thumbHeight

      // remaining space less than the thumb height
      if (newOffset > maxTop) {
        newOffset = maxTop
      }
    } else {
      // scroll up
      if (layerY > thumbHeight) {
        // remaining space greater than the thumb height, keep the center of the 
        // thumb on layerY
        newOffset = (layerY - thumbHeight / 2)
      } else {
        // remaining space less than the thumb height
        newOffset = 0
      }
    }

    return newOffset
  },

  left (
    layerX: number, 
    layerY: number, 
    oldOffset: number, 
    thumbWidth: number, 
    thumbHeight: number, 
    barWidth: number, 
    barHeight: number
  ) {
    let newOffset = 0

    if (layerX > (oldOffset + thumbWidth)) {
      newOffset = oldOffset + (layerX - oldOffset - thumbWidth / 2)
      const maxLeft = barWidth - thumbWidth

      if (newOffset > maxLeft) {
        newOffset = maxLeft
      }
    } else {
      if (layerX > thumbWidth) {
        newOffset = (layerX - thumbWidth / 2)
      } else {
        newOffset = 0
      }
    }

    return newOffset
  }
}

const getNewScrollOffsetStrategies = {
  top (
    newOffset: number, 
    thumbWidth: number, 
    thumbHeight: number,
    barWidth: number,
    barHeight: number,
    scrollWidth: number,
    scrollHeight: number,
    containerWidth: number,
    containerHeight: number
  ) {
    const rate = newOffset / (barHeight - thumbHeight)
    return (scrollHeight - containerHeight) * rate
  },

  left (
    newOffset: number, 
    thumbWidth: number, 
    thumbHeight: number,
    barWidth: number,
    barHeight: number,
    scrollWidth: number,
    scrollHeight: number,
    containerWidth: number,
    containerHeight: number
  ) {
    const rate = newOffset / (barWidth - thumbWidth)
    return (scrollWidth - containerWidth) * rate
  },
}

const getNewScrollOffset = (
  target: HTMLElement, 
  layerX: number, 
  layerY: number
) => {
  const _barXRef = barXRef.value as HTMLElement
  const direction = target === _barXRef ? 'left' : 'top'
  const isHorizontal = direction === 'left'
  const thumb = isHorizontal
    ? thumbXRef.value as HTMLElement
    : thumbYRef.value as HTMLElement
  const bar = isHorizontal
    ? _barXRef
    : barYRef.value as HTMLElement
  const { style: { top, left } } = thumb
  const oldOffset = isHorizontal
    ? (parseInt(left) || 0)
    : (parseInt(top) || 0)
  // don't use thumbHeight, because content is dynamic, thumbHeight just
  // for initialization.
  const { clientWidth: thumbWidth, clientHeight: thumbHeight } = thumb
  const { clientWidth: barWidth , clientHeight: barHeight } = bar
  const newOffset = getNewThumbOffsetStrategies[direction](
    layerX, layerY, oldOffset, thumbWidth, thumbHeight, barWidth, barHeight
  )
  const _containerRef = containerRef.value as HTMLElement
  const { 
    scrollWidth,
    scrollHeight, 
    clientWidth: containerWidth,
    clientHeight: containerHeight 
  } = _containerRef
  const newScrollOffset = getNewScrollOffsetStrategies[direction](
    newOffset, thumbWidth, thumbHeight, barWidth, barHeight, 
    scrollWidth, scrollHeight, containerWidth, containerHeight
  )

  return newScrollOffset
}

const onClickBar = (e: Event) => {
  const { target, layerX, layerY, currentTarget }: { 
    target: HTMLElement, 
    layerX: number,
    layerY: number,
    currentTarget: HTMLElement
  } = e as any

  if (target !== currentTarget) {
    return
  }

  const _barXRef = barXRef.value as HTMLElement
  const direction = target === _barXRef ? 'left' : 'top'
  const isHorizontal = direction === 'left'
  const thumb = isHorizontal
    ? thumbXRef.value as HTMLElement
    : thumbYRef.value as HTMLElement
  const bar = isHorizontal
    ? _barXRef
    : barYRef.value as HTMLElement
  const { style: { top, left } } = thumb
  const oldOffset = isHorizontal
    ? (parseInt(left) || 0)
    : (parseInt(top) || 0)
  // don't use thumbHeight, because content is dynamic, thumbHeight just
  // for initialization.
  const { clientWidth: thumbWidth, clientHeight: thumbHeight } = thumb
  const { clientWidth: barWidth , clientHeight: barHeight } = bar
  const newOffset = getNewThumbOffsetStrategies[direction](
    layerX, layerY, oldOffset, thumbWidth, thumbHeight, barWidth, barHeight
  )
  const _containerRef = containerRef.value as HTMLElement
  const { 
    scrollWidth,
    scrollHeight, 
    clientWidth: containerWidth,
    clientHeight: containerHeight 
  } = _containerRef
  const newScrollOffset = getNewScrollOffsetStrategies[direction](
    newOffset, thumbWidth, thumbHeight, barWidth, barHeight, 
    scrollWidth, scrollHeight, containerWidth, containerHeight
  )

  // don't update thumb offset, because when update container scroll offset,
  // it will execute onScroll function to update thumb offset.
  _containerRef.scrollTo({
    [isHorizontal ? 'left' : 'top']: newScrollOffset,
    behavior: 'smooth'
  })
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
  transition: background-color var(--u-transition-duration);
}

.u-scroll-area-thumb-x {
  height: 100%;
  left: 0;
}

.u-scroll-area-thumb-y {
  width: 100%;
  top: 0;
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
