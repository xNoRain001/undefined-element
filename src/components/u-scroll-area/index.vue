<template>
  <div 
    class="u-scroll-area" 
    :style="scrollAreaStyle"
    ref="scrollAreaRef"
  >
    <div 
      @scroll.self="onScroll" 
      ref="containerRef" 
      class="u-scroll-area-container"
    >
      <div 
        class="u-scroll-area-content"
        ref="contentRef"
      >
        <slot></slot>
      </div>
    </div>
    <div 
      class="u-scroll-area-bar-x" 
      ref="barXRef" 
      @click.self="onClickBar"
    >
      <div 
        ref="thumbXRef" 
        class="u-scroll-area-thumb-x" 
        :style="thumbXStyle"
        @mousedown="onMousedown"
        @mousemove.stop="onMousemove"
        @mouseup="onMouseup"
      ></div>
    </div>
    <div 
      class="u-scroll-area-bar-y" 
      ref="barYRef" 
      @click.self="onClickBar"
    >
      <div 
        ref="thumbYRef" 
        class="u-scroll-area-thumb-y" 
        :style="thumbYStyle"
        @mousedown="onMousedown"
        @mousemove.stop="onMousemove"
        @mouseup="onMouseup"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed, onMounted } from 'vue'

const props = withDefaults(defineProps<{ 
  width?: string,
  height?: string,
  resize?: boolean,
  hidden?: boolean,
  persistent?: boolean,
}>(), {
  width: '100%',
  height: '100%',
  resize: true,
  hidden: false,
  persistent: false
})
const { width, height, resize, hidden, persistent } = toRefs(props)
const scrollAreaStyle = computed(() => ({ 
  width: width.value, 
  height: height.value
}))
const barXRef = ref<HTMLElement | null>(null)
const barYRef = ref<HTMLElement | null>(null)
const thumbXRef = ref<HTMLElement | null>(null)
const thumbYRef = ref<HTMLLIElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const scrollAreaRef = ref<HTMLElement | null>(null)

const onScroll = (e: Event) => {
  const { 
    scrollTop,
    scrollLeft,
    scrollWidth,
    scrollHeight, 
    clientWidth,
    clientHeight
  } = e.target as HTMLElement
  const { style: thumbXStyle } = thumbXRef.value as HTMLElement
  const thumbXWidth = parseInt(thumbXStyle.width)
  const { style: thumbYStyle } = thumbYRef.value as HTMLElement
  // don't use clientHeight because result is 0 when thumb hide.
  const thumbYHeight = parseInt(thumbYStyle.height)
  const maxScrollTop = scrollHeight - clientHeight
  const maxScrollLeft = scrollWidth - clientWidth
  const maxLeft = clientWidth - thumbXWidth
  const maxTop = clientHeight - thumbYHeight
  const left = scrollLeft / maxScrollLeft * maxLeft
  const top = scrollTop / maxScrollTop * maxTop

  thumbXStyle.left = `${ left }px`
  thumbYStyle.top = `${ top }px`
}

let dragging = false
let prevOffset = 0

// body mousemove event callback
const _onMousemove = (e: MouseEvent) => {
  onMousemove(e)

  if (!persistent.value) {
    resetThumbBehavior()
    showThumbs()
  }
}

// body mouseup event callback
const _onMouseup = (e: MouseEvent) => {
  onMouseup()
  const { body } = document
  body.removeEventListener('mousemove', _onMousemove)
  body.removeEventListener('mouseup', _onMouseup)

  if (!persistent.value) {
    resetThumbBehavior = initThumbBehavior()
    const { pageX, pageY } = e
    // TODO: optimize
    const inner = document
      .elementsFromPoint(pageX, pageY)
      .includes(containerRef.value as HTMLElement)

    if (!inner) {
      hideThumbs()
    }
  }
}

const onMousedown = (e: MouseEvent) => {
  const { body } = document
  const { target, clientX, clientY } = e
  dragging = true
  prevOffset = target === thumbXRef.value as HTMLElement ? clientX : clientY
  body.addEventListener('mousemove', _onMousemove)
  body.addEventListener('mouseup', _onMouseup)
  containerRef.value!.style.userSelect = 'none' 
}

const onMousemove = (e: MouseEvent) => {
  if (!dragging) {
    return
  }

  // necessary
  e.preventDefault()

  const _thumbXRef = thumbXRef.value as HTMLElement
  const direction = e.target === _thumbXRef ? 'left' : 'top'
  const isHorizontal = direction === 'left'
  const { clientX, clientY } = e
  const offset = isHorizontal
    ? clientX - prevOffset
    : clientY - prevOffset  
  const { clientWidth: thumbXWidth, clientHeight: thumbYHeight } = isHorizontal 
    ? thumbXRef.value as HTMLElement
    : thumbYRef.value as HTMLElement
  const { clientWidth: barXWidth, clientHeight: barYHeight } = isHorizontal
    ? barXRef.value as HTMLElement
    : barYRef.value as HTMLElement
  const rate = isHorizontal
    ? offset / (barXWidth - thumbXWidth)
    : offset / (barYHeight - thumbYHeight)
  const _containerRef = containerRef.value as HTMLElement
  const { 
    scrollTop,
    scrollLeft,
    scrollWidth, 
    scrollHeight,
    clientWidth: containerWidth,
    clientHeight: containerHeight,
  } = _containerRef
  const maxScrollOffset = isHorizontal
    ? scrollWidth - containerWidth
    : scrollHeight - containerHeight
  const scrollOffset = isHorizontal
    ? scrollLeft + maxScrollOffset * rate
    : scrollTop + maxScrollOffset * rate

  if (scrollOffset >= maxScrollOffset) {
    return
  }
    
  prevOffset = isHorizontal ? clientX : clientY
  
  _containerRef.scrollTo({
    [isHorizontal ? 'left' : 'top']: scrollOffset,
    // @ts-ignore
    behavior: 'instant'
  })
}

const onMouseup = () => {
  dragging = false
  containerRef.value!.style.userSelect = 'auto'
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

const onClickBar = (e: Event) => {
  const { target, layerX, layerY }: { 
    target: HTMLElement, 
    layerX: number,
    layerY: number
  } = e as any

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
  // or thumbHeight
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

const showThumbs = () => {
  thumbXRef.value!.style.display = 'block'
  thumbYRef.value!.style.display = 'block'
}

const hideThumbX = () => thumbXRef.value!.style.display = 'none'

const hideThumbY = () => thumbYRef.value!.style.display = 'none'

const hideThumbs = () => {
  hideThumbX()
  hideThumbY()
}

const initThumbBehavior = () => {
  let timer = 0

  const _setTimeout = () => setTimeout(() => {
    // hidden thumb can be visiable just by scroll, need to intercept 
    // hideThumbs because you can't know behavior is scroll or drag.
    if (!dragging) {
      hideThumbs()
    }

    timer = 0
  }, 2000)

  const onScroll = () => {
    if (!timer) {
      showThumbs()
      timer = _setTimeout()
    } else {
      clearTimeout(timer)
      timer = _setTimeout()
    }
  }

  const _scrollAreaRef = scrollAreaRef.value as HTMLElement
  const _containerRef = containerRef.value as HTMLElement

  if (persistent.value) {
    showThumbs()
  } else if (hidden.value) {
    containerRef.value!.addEventListener('scroll', onScroll)
  } else {
    _scrollAreaRef.addEventListener('mouseenter', showThumbs)
    _scrollAreaRef.addEventListener('mouseleave', hideThumbs)
  }

  return () => {
    _scrollAreaRef.removeEventListener('mouseenter', showThumbs)
    _scrollAreaRef.removeEventListener('mouseleave', hideThumbs)
    _containerRef.removeEventListener('scroll', onScroll)
  }
}

const contentRef = ref<HTMLElement | null>(null)
const thumbXWidth = ref(0)
const thumbYHeight = ref(0)
const thumbXStyle = computed(() => ({ width: `${ thumbXWidth.value }px` }))
const thumbYStyle = computed(() => ({ height: `${ thumbYHeight.value }px` }))

const initResizeObserver = () => {
  const _contentRef = contentRef.value as HTMLElement
  const _containerRef = containerRef.value as HTMLElement

  const updateThumbSize = () => {
    const { 
      scrollWidth,
      clientWidth,
      scrollHeight,
      clientHeight
    } = _containerRef

    if (scrollHeight > clientHeight) {
      thumbYHeight.value = clientHeight * (clientHeight / scrollHeight)
    } else {
      hideThumbY()
    }

    if (scrollWidth > clientWidth) {
      thumbXWidth.value = clientWidth * (clientWidth / scrollWidth)
    } else {
      hideThumbX()
    }
  }

  const resizeObserver = new ResizeObserver(updateThumbSize)

  watch(
    resize, 
    value => resizeObserver[value ? 'observe' : 'unobserve'](_contentRef), 
    { immediate: true }
  )
}

let resetThumbBehavior = () => {}

onMounted(() => {
  resetThumbBehavior = initThumbBehavior()
  initResizeObserver()
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
  display: block !important;
}
</style>
