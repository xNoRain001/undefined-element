<template>
  <div ref="containerRef">
    <Teleport to="body">
      <div ref="tooltipRef" class="u-tooltip">
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, reactive, onMounted, watch } from 'vue'

const props = withDefaults(defineProps<{ 
  position?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  position: 'bottom'
})
const { position } = toRefs(props)
const tooltipRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const displayTooltip = (
  target: HTMLElement,
  width: number,
  height: number
) => {
  const _position = position.value
  const { top, right, bottom, left } = target.getBoundingClientRect()
  const _left = _position === 'left' 
    ? left - width 
    : _position === 'right'
      ? right
      : left + (right - left) / 2 - width / 2 // center
  const _top = _position === 'top' 
    ? top - height 
    : /^left|right$/.test(_position)
      ? top + (bottom - top) / 2 - height / 2 // center
      : bottom

  const { style } = tooltipRef.value as HTMLElement

  style.cssText = `
    z-index: 99;
    opacity: 1;
    top: ${ _top }px;
    left: ${ _left }px;
  `
}

const hideTooltip = () => {
  const { style } = tooltipRef.value as HTMLElement

  style.zIndex = '0'
  style.opacity = '0'
}

const addEventListeners = (target: HTMLElement) => {
  // TODO: dynamic content
  const { clientWidth, clientHeight } = tooltipRef.value as HTMLElement
  
  target.addEventListener('mouseenter', () => {
    displayTooltip(target, clientWidth, clientHeight)
  })

  target.addEventListener('mouseleave', () => {
    hideTooltip()
  })
}

onMounted(() => {
  addEventListeners(containerRef.value!.parentNode as HTMLElement)
})
</script>

<style scoped>
.u-tooltip {
  opacity: 0;
  transition: opacity var(--u-transition-duration);
  overflow-y: hidden;
  position: absolute;
}
</style>
