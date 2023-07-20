<template>
  <div @click="scrollToTop" ref="scrollerRef" class="u-scroller">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<{ 
  scrollTarget?: HTMLElement | string,
  duration?: number 
}>(), {
  scrollTarget: '',
  duration: 0
})
const scrollerRef = ref<HTMLElement | null>(null)
const { duration, scrollTarget } = toRefs(props)

const getScrollTarget = () => {
  let scrollTarget = scrollerRef.value as HTMLElement

  while (!scrollTarget.classList.contains('u-scroll-area-container')) {
    scrollTarget = scrollTarget.parentNode as HTMLElement
  }

  return scrollTarget
}

const scrollToTop = () => {
  const _duration = duration.value
  const _scrollTarget = scrollTarget.value
  const __scrollTarget = _scrollTarget
    ? document.querySelector(_scrollTarget as string) as HTMLElement
    : getScrollTarget()

  if (_duration) {
    animateScroller(__scrollTarget, 0, _duration)
  } else {
    __scrollTarget.scrollTop = 0
  }
}

const animateScroller = (el: HTMLElement, to: number, duration: number) => {
  const prevTime = performance.now()
  const pos = el.scrollTop

  requestAnimationFrame(nowTime => {
    const frameTime = nowTime - prevTime
    const newPos = pos - (pos - to) * frameTime / Math.max(frameTime, duration)

    el.scrollTop = newPos <= to ? to : newPos

    if (newPos > to) {
      animateScroller(el, to, duration - frameTime)
    }
  })
}

</script>