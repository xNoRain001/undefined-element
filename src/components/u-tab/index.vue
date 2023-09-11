<template>
  <div 
    @click="onClick" 
    class="u-tab cursor-pointer" 
    :data-active="actived ? 'true' : 'false'"
  >
    <slot></slot>

    <div 
      class="
        absolute left-0 right-0 bottom-0 h-[2px] bg-[--primary-color]
      "
      :class="indicatorClass"  
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, computed, useAttrs } from 'vue'

import { tabsKey } from '../../const/keys'

import type { Ref } from 'vue'

const { name } = useAttrs()
const actived = computed(() => name === modelValue.value)
// TODO: declare better type
const { 
  modelValue, 
  updateModel
} = inject(tabsKey) as {
  updateModel: Function,
  modelValue: Ref<string>
}

let isRight = false

const onClick = (e: Event) => {
  if (actived.value) {
    return
  }

  const currentTarget = e.currentTarget as HTMLElement
  const parent = currentTarget.parentNode as HTMLElement
  const children = Array.from(parent.children)
  const prevActiveTab = parent.querySelector('div[data-active="true"]') as HTMLElement
  const prevActiveIndex = children.indexOf(prevActiveTab)
  const activeIndex = children.indexOf(currentTarget)

  if (activeIndex > prevActiveIndex) {
    isRight = true
  } else {
    isRight = false
  }

  updateModel(name)
}

const indicatorClass = computed(() => actived.value
  ? `opacity-100 ${ isRight ? 'u-slide-right' : 'u-slide-left' }`
  : 'opacity-0'
)
</script>
