<template>
  <div 
    tabindex="-1"
    @click="updateActiveTab" 
    class="u-tab" 
    :style="tabStyle"
    :class="_tabClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed, useAttrs } from 'vue'
import { tabsKey } from '../../keys'
import type { Ref } from 'vue'

const { name } = useAttrs()
const actived = computed(() => name === modelValue.value)

// TODO: declare better type
const { 
  modelValue, 
  updateModel, 
  tabStyle, 
  tabClass, 
  activeTabClass 
} = inject(tabsKey) as {
  modelValue: Ref<string>
  updateModel: Function,
  tabStyle: Ref<{ [propName: string]: string | number }>,
  tabClass: Ref<string>,
  activeTabClass: Ref<string>
}

const updateActiveTab = () => {
  if (name === actived.value) {
    return
  }

  updateModel(name)
}

const _tabClass = computed(() => {
  return `${ tabClass.value }${ actived.value ? ` ${ activeTabClass.value }` : '' }`
})
</script>

<style>
.u-tab {
  cursor: pointer;
}
</style>
