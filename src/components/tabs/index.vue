<template>
  <div ref="tabsRef" class="u-tabs relative">
    <slot></slot>

    <div 
      ref="indicatorRef"
      class="
        u-tabs-indicator absolute bottom-0 transition-[width_transform] 
        duration-[--u-transition-duration]
      "
      :class="indicatorClass"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, provide, onMounted } from 'vue'

import { tabsKey } from '../../const/keys'

const props = withDefaults(defineProps<{ 
  modelValue: string,
  indicatorClass?: string
}>(), {
  indicatorClass: ''
})
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const { modelValue, indicatorClass } = toRefs(props)
const tabsRef = ref<HTMLElement | null>(null)
const indicatorRef = ref<HTMLElement | null>(null)

const updateModel = (name: string) => emit('update:modelValue', name)

const updateIndicatorStyle = (tab: HTMLElement) => {
  const { left, width } = tab.getBoundingClientRect()
  const offset = left - tabsRef.value!.getBoundingClientRect().left

  indicatorRef.value!.style.cssText = `
    width: ${ width }px; 
    transform: translateX(${ offset }px);
  `
}

provide(tabsKey, {
  modelValue,
  updateModel,
  updateIndicatorStyle
})

onMounted(() => {
  updateIndicatorStyle(
    tabsRef.value!.querySelector('div[data-active="true"]') as HTMLElement
  )
})
</script>
