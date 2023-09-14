<template>
  <div 
    ref="ratingRef"
    class="u-rating flex" 
    @click="clickHandler" 
    @mousemove="mousemoveHandler"
    @mouseleave="mouseleaveHandler"
  >
    <div 
      class="u-rating-icon-container cursor-pointer"
      v-for="i in Number(max)" 
      :key="i" 
      :data-index="i - 1"
      :style="{ color: i <= modelValue ? activeColor : color }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

import { throttle } from '../../utils'

const props = withDefaults(defineProps<{ 
  max: number, 
  color?: string,
  modelValue: number,
  activeColor?: string
}>(), {
  color: '#000',
  activeColor: '#eab308'
})
const { max, color, modelValue, activeColor } = toRefs(props)
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const ratingRef = ref<HTMLElement | null>(null)

const fillIcons = (endIndex: number) => {
  const { children } = ratingRef.value as HTMLElement

  for (let i = 0; i <= endIndex; i++) {
    (children[i] as HTMLElement).style.color = activeColor.value
  }

  for (let i = endIndex + 1, l = children.length; i < l; i++) {
    (children[i] as HTMLElement).style.color = color.value
  }
}

const getIndex = (target: HTMLElement) => {
  while (target.tagName !== 'DIV') {
    target = target.parentNode as HTMLElement
  }

  return Number(target.getAttribute('data-index'))
}

const clickHandler = (e: Event) => {
  const { target, currentTarget }: {
    target: HTMLElement,
    currentTarget: HTMLElement
  } = e as any

  if (target === currentTarget) {
    return
  }

  const index = getIndex(target)
  emit('update:modelValue', index + 1)
}

const mousemoveHandler = throttle((e: MouseEvent) => {
  const { target, currentTarget }: {
    target: HTMLElement,
    currentTarget: HTMLElement
  } = e as any

  if (target === currentTarget) {
    fillIcons(modelValue.value - 1)
    return
  }

  const index = getIndex(target) 
  fillIcons(index)
}, 100)

const mouseleaveHandler = () => fillIcons(modelValue.value - 1)
</script>
