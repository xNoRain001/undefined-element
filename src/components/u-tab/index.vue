<template>
  <div 
    tabindex="-1"
    @click="updateActiveTab" 
    class="u-tab cursor-pointer" 
    :style="tabStyle"
    :class="_tabClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed, useAttrs } from 'vue'

import { tabsKey } from '../../const/keys'

import type { Ref } from 'vue'

const { name } = useAttrs()
const actived = computed(() => name === modelValue.value)
// TODO: declare better type
const { 
  tabStyle, 
  tabClass, 
  modelValue, 
  updateModel, 
  activeTabClass 
} = inject(tabsKey) as {
  tabStyle: Ref<{ [propName: string]: string | number }>,
  tabClass: Ref<string>,
  updateModel: Function,
  modelValue: Ref<string>,
  activeTabClass: Ref<string>
}

const updateActiveTab = () => {
  if (name === actived.value) {
    return
  }

  updateModel(name)
}

const _tabClass = computed(() => {
  return `${ tabClass.value }${ 
    actived.value ? ` ${ activeTabClass.value }` : '' 
  }`
})
</script>
