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
import { ref, onMounted } from 'vue'

const tooltip = ref<HTMLElement | null>(null)
const tooltipContainer = ref<HTMLElement | null>(null)

const displayTooltip = (
  target: HTMLElement,
  width: number
) => {
  const { bottom, left, right } = target.getBoundingClientRect()
  const _left = left + (right - left) / 2 - width / 2

  tooltip.value!.style.cssText = `
    opacity: 1;
    top: ${ bottom }px;
    left: ${ _left }px;
  `
}

const hideTooltip = () => {
  tooltip.value!.style.opacity = '0'
}

const addEventListeners = (target: HTMLElement) => {
  // TODO: dynamic content
  const width = tooltip.value!.clientWidth

  target.addEventListener('mouseenter', () => {
    displayTooltip(target, width)
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
