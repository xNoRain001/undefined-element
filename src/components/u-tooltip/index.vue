<template>
  <div ref="containerRef">
    <Teleport to="body">
      <Transition name="u-animate-opacity">
        <div 
          v-if="visible" 
          ref="tooltipRef" 
          class="u-tooltip"
          :style="tooltipStyle"
        >
          <slot></slot>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed, onMounted } from 'vue'

import { genCSSVariables } from '../../utils'
import { tooltipPosition } from '../../const/strategies'

const props = withDefaults(defineProps<{ 
  target?: string,
  position?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  target: '',
  position: 'bottom'
})
const visible = ref(false)
const parent = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const { target, position } = toRefs(props)

const addEventsListener = (target: HTMLElement) => {
  target.addEventListener('mouseenter', () => visible.value = true)
  target.addEventListener('mouseleave', () => visible.value = false)
}

const tooltipStyle = computed(() => {
  // TODO: fix callback execute twice
  const _tooltipRef = tooltipRef.value

  if (_tooltipRef) {
    const { clientWidth, clientHeight } = _tooltipRef
    const _position = position.value
    const { top, right, bottom, left } = parent.value!.getBoundingClientRect()
    const centerX = left + (right - left) / 2 - clientWidth / 2
    const centerY = top + (bottom - top) / 2 - clientHeight / 2
    const { top: _top, left: _left } = tooltipPosition[_position](
      clientWidth, clientHeight, top, right, bottom, left, centerX, centerY
    )
    const { startValue, endValue } = genCSSVariables(visible.value, '0', '1')

    return {
      top: `${ _top }px`,
      left: `${ _left }px`,
      '--u-animate-opacity-start': startValue,
      '--u-animate-opacity-end': endValue
    }
  }
})

onMounted(() => {
  // for dynamic target
  watch(target, (v) => {
    parent.value = v 
      ? document.querySelector(v) as HTMLElement 
      : containerRef.value!.parentNode as HTMLElement

    addEventsListener(parent.value)
  }, { immediate: true })
})
</script>

<style scoped>
.u-tooltip {
  overflow-y: hidden;
  position: absolute;
}
</style>
