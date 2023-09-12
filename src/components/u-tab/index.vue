<template>
  <div 
    @click="onClick" 
    class="u-tab cursor-pointer" 
    :data-active="actived ? 'true' : 'false'"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed, useAttrs, onMounted } from 'vue'

import { tabsKey } from '../../const/keys'

import type { Ref } from 'vue'

const { name } = useAttrs()
const actived = computed(() => name === modelValue.value)
// TODO: declare better type
const { 
  modelValue, 
  updateModel,
  updateIndicatorStyle
} = inject(tabsKey) as {
  tabsRef: Ref<HTMLElement | null>,
  updateModel: Function,
  modelValue: Ref<string>,
  indicatorRef: Ref<HTMLElement | null>,
  updateIndicatorStyle: Function
}

const onClick = (e: Event) => {
  if (actived.value) {
    return
  }

  updateIndicatorStyle(e.currentTarget as HTMLElement)
  updateModel(name)
}
</script>
