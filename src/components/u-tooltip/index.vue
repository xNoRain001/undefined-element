<template>
  <div ref="tooltipContainer">
    <Teleport to="body">
      <div ref="tooltip" class="u-tooltip">
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted } from 'vue'

const props = withDefaults(defineProps<{ 
  position?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  position: 'bottom'
})
const { position } = toRefs(props)
const tooltip = ref<HTMLElement | null>(null)
const tooltipContainer = ref<HTMLElement | null>(null)
console.log(position.value)

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
      ? top
      : bottom

  tooltip.value!.style.cssText = `
    opacity: 1;
    top: ${ _top }px;
    left: ${ _left }px;
  `
}

const hideTooltip = () => {
  tooltip.value!.style.opacity = '0'

  setTimeout(() => {
    tooltip.value!.style.cssText = `
      top: 0;
      left: 0;
    `
  }, 300)
}

const addEventListeners = (target: HTMLElement) => {
  // TODO: dynamic content
  const { clientWidth, clientHeight } = tooltip.value as HTMLElement
  
  target.addEventListener('mouseenter', () => {
    displayTooltip(target, clientWidth, clientHeight)
  })

  target.addEventListener('mouseleave', () => {
    hideTooltip()
  })
}

onMounted(() => {
  const parent = tooltipContainer.value!.parentNode as HTMLElement
  addEventListeners(parent)
})
</script>

<style scoped>
.u-tooltip {
  opacity: 0;
  transition: opacity .3s;
  overflow-y: hidden;
  position: absolute;
}
</style>
