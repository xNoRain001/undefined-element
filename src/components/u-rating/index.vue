<template>
  <div 
    ref="rating" 
    class="u-rating" 
    @click="clickHandler" 
    @mousemove="mousemoveHandler"
  >
    <div 
      v-for="i in max" 
      :key="i" 
      :data-key="i"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import throttle from '../../utils/throttle'

const props = defineProps<{ 
  max: number, 
  modelValue: number,
  activeColor: string,
  defaultColor: string
}>()
const { max, modelValue, activeColor, defaultColor } = toRefs(props)
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const rating = ref<HTMLElement | null>(null)
let practicalScore = modelValue.value
let currentScore = practicalScore

const getScore = (target: HTMLElement) => {
  let score = '0'

  while (
    target !== rating.value && 
    !(score = target.getAttribute('data-key') as string)
  ) {
    target = target.parentNode as HTMLElement
  }

  return Number(score)
}

const fillIcons = (score, iconContainers) => {
  for (let i = 0; i <= score - 1; i++) {
    iconContainers[i].querySelector('svg')!.setAttribute('fill', activeColor.value)
  }
}

const unfillIcons = (score, iconContainers) => {
  for (let i = score; i <= max.value - 1; i++) {
    iconContainers[i].querySelector('svg')!.setAttribute('fill', defaultColor.value)
  }
}

const updateScore = () => {
  practicalScore = currentScore
  emit('update:modelValue', practicalScore)
}

const clickHandler = (e: Event) => {
  if (e.target === rating.value) {
    return
  }

  updateScore()
}

const restoreFilledIcons = (iconContainers: HTMLCollection) => {
  fillIcons(practicalScore, iconContainers)
  unfillIcons(practicalScore, iconContainers)
}

const mousemoveHandler = throttle((e: MouseEvent) => {
  const { target, currentTarget } = e
  const iconContainers = (currentTarget as HTMLElement).children

  // @ts-ignore
  if (target === currentTarget && practicalScore) {
    restoreFilledIcons(iconContainers)
    return
  }

  const score = getScore(target as HTMLElement)

  // score: 1-5
  // HTMLCollection: 0-4
  fillIcons(score, iconContainers)
  unfillIcons(score, iconContainers)
  currentScore = score
}, 200)
</script>

<style scoped>
.u-rating {
  display: flex;
}

.u-rating > div > *[data-active="true"] {
  fill: red
}
</style>
