<template>
  <div ref="containerRef">
    <Teleport to="body">
      <div ref="tooltipRef" class="u-tooltip" :style="{
        ...tooltipStyle,
        top
      }">
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted, watch } from 'vue'

import { genCSSVariables } from '../../utils'
import { useAddAnimation } from '../../composables'

const props = withDefaults(defineProps<{ 
  position?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  position: 'bottom'
})
const { position } = toRefs(props)
const tooltipRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const parent = ref<HTMLElement | null>(null)
const visible = ref(false)
const top = ref('0')
// TODO: waiting
let waiting = false
let proxyTop = '0'

const addEventListeners = (target: HTMLElement) => {
  target.addEventListener('mouseenter', () => visible.value = true)
  target.addEventListener('mouseleave', () => visible.value = false)
}

const positionStrategies = {
  top (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: centerX,
      top: top - clientHeight
    }
  },

  right (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: right,
      top: centerY
    }
  },

  bottom (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: centerX,
      top: bottom
    }
  },

  left (
    clientWidth: number, 
    clientHeight: number, 
    top: number, 
    right: number, 
    bottom: number, 
    left: number, 
    centerX: number, 
    centerY: number
  ) {
    return {
      left: left - clientWidth,
      top: centerY
    }
  }
}

const tooltipStyle = computed(() => {
  const _visible = visible.value
  const value1 = '1'
  const value2 = '0'
  const opacityValue = _visible ? '1' : '0'
  const { startValue, endValue } = genCSSVariables(opacityValue, value1, value2)
  const style = {
    left: '',
    zIndex: '99',
    opacity: opacityValue,
    '--u-tooltip-opacity-start': startValue,
    '--u-tooltip-opacity-end': endValue
  }

  const _tooltipRef = tooltipRef.value

  if (!_tooltipRef) {
    proxyTop = '0'
    style.left = '0'
  } else {
    const { clientWidth, clientHeight } = _tooltipRef
    const _position = position.value
    const { top, right, bottom, left } = parent.value!.getBoundingClientRect()
    const centerX = left + (right - left) / 2 - clientWidth / 2
    const centerY = top + (bottom - top) / 2 - clientHeight / 2
    const { top: _top, left: _left } = positionStrategies[_position](
      clientWidth, clientHeight, top, right, bottom, left, centerX, centerY
    )

    proxyTop = `${ _top }px`
    style.left = `${ _left }px`
  }

  return style
})

watch(visible, v => {
  useAddAnimation(tooltipRef.value as HTMLElement, 'u-animate-tooltip')
  
  if (!v) {
    setTimeout(() => {
      top.value = '-100%'
    }, 300)
  } else {
    top.value = proxyTop
  }
})

onMounted(() => {
  parent.value = containerRef.value!.parentNode as HTMLElement
  addEventListeners(parent.value)
})
</script>

<style scoped>
.u-tooltip {
  overflow-y: hidden;
  position: absolute;
}
</style>
