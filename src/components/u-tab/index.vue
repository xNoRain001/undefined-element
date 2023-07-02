<template>
  <div 
    @click="updateActiveTab" 
    class="u-tab" 
    :style="name === modelValue ? activeTabStyle : {}"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, useAttrs, watch } from 'vue'
import { tabsKey } from '../../keys'
import type { Ref } from 'vue'

const { name } = useAttrs()

// TODO: declare better type
const { modelValue, updateModel, activeTabStyle } = inject(tabsKey) as {
  modelValue: Ref<string>
  updateModel: Function,
  activeTabStyle: {}
}

const updateActiveTab = () => {
  if (name === modelValue.value) {
    return
  }

  updateModel(name)
}
</script>

<style>
.u-tab {
  cursor: pointer;
}
</style>
