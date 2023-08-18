<template>
  <div 
    @click="scrollToTop" 
    ref="scrollerRef" 
    class="
      u-scroller opacity-0 duration-[var(--u-transition-duration)] 
      transition-opacity
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'

import { throttle } from '../../utils'

const props = withDefaults(defineProps<{ 
  to?: number,
  duration?: number,
  scrollOffset?: number,
  scrollTarget?: string
}>(), {
  to: 0,
  duration: 300,
  scrollOffset: 150,
  scrollTarget: '',
})
const scrollerRef = ref<HTMLElement | null>(null)
const _scrollTarget = ref<HTMLElement | null>(null)
const { to, duration, scrollOffset, scrollTarget } = toRefs(props)

const getScrollTarget = () => {
  let scrollTarget = scrollerRef.value as HTMLElement

  while (!scrollTarget.classList.contains('u-scroll-area-container')) {
    scrollTarget = scrollTarget.parentNode as HTMLElement
  }

  return scrollTarget
}

const scrollToTop = () => {
  const _to = to.value
  const _duration = duration.value
  const scrollTarget = _scrollTarget.value as HTMLElement
 
  if (_duration) {
    animateScroller(scrollTarget, _to, _duration)
  } else {
    scrollTarget.scrollTop = _to
  }

  // TODO:
  // scrollTarget.scrollTo({
  //   top: _to,
  //   behavior: "smooth"
  // })
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

const updateVisibility = () => {
  const scrollTarget = _scrollTarget.value as HTMLElement

  const onScroll = () => {
    if (scrollTarget.scrollTop >= scrollOffset.value) {
      scrollerRef.value?.classList.replace('opacity-0', 'opacity-100')
    } else {
      scrollerRef.value?.classList.replace('opacity-100', 'opacity-0')
    }
  }

  scrollTarget.addEventListener('scroll', throttle(
    onScroll, 
    300, 
    { trailing: true }
  ))

  onScroll()
}

onMounted(() => {
  watch(scrollTarget, v => {
    _scrollTarget.value = v
    ? document.querySelector(v)
    : getScrollTarget()
  }, { immediate: true })

  updateVisibility()
})
</script>
