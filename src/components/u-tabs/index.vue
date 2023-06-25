<template>
  <div ref="tabs" class="u-tabs" @click="updateActiveKey($event)">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const tabs = ref<null | HTMLElement>(null)
const activeKey = ref('')
const prevActiveKey = ref('')

onMounted(() => {
  initActiveKey()
  updateTabAttr(activeKey.value, '')
  updateTabPannelAttr(activeKey.value, '')
})

const initActiveKey = () => {
  const activeTab = tabs.value!.querySelector('.u-tab[data-active="true"]') as HTMLElement
  activeKey.value = activeTab.getAttribute('data-key') as string
}

const updateTabPannelAttr = (activeKey: string, prevActiveKey: string) => {
  const tabPannels = tabs.value!.parentNode!.querySelector('.u-tab-pannels') as HTMLElement
  const activeTabPannel = tabPannels.querySelector(`.u-tab-pannel[data-key="${ activeKey }"]`) as HTMLElement
  const prevActiveTabPannel = tabPannels.querySelector(`.u-tab-pannel[data-key="${ prevActiveKey }"]`)
  
  activeTabPannel.setAttribute('data-active', 'true')
  prevActiveTabPannel?.setAttribute('data-active', 'false')
}

const getActiveKey = (target: HTMLElement) => {
  const _tabs = tabs.value as HTMLElement
  let key: string | null = ''
  
  while (
    !(key = target.getAttribute('data-key')) && 
    target !== _tabs
  ) {
    target = target.parentNode as HTMLElement
  }

  return key === null ? '' : key
}

const updateTabAttr = (activeKey: string, prevActiveKey: string) => {
  const _tabs = tabs.value as HTMLElement
  const activeTab = _tabs.querySelector(`.u-tab[data-key="${ activeKey }"]`) as HTMLElement
  const prevActiveTab = _tabs.querySelector(`.u-tab[data-key="${ prevActiveKey }"]`)
  
  activeTab.setAttribute('data-active', 'true')
  prevActiveTab?.setAttribute('data-active', 'false')
}

const updateActiveKey = (e: Event) => {
  const target = e.target as HTMLElement
  const _activeKey = getActiveKey(target)

  if (!_activeKey || activeKey.value === _activeKey) {
    return
  }
  
  prevActiveKey.value = activeKey.value
  activeKey.value = _activeKey

  updateTabAttr(activeKey.value, prevActiveKey.value)
  updateTabPannelAttr(activeKey.value, prevActiveKey.value)
}
</script>

<style>
.u-tab-pannels .u-tab-pannel > * {
  display: none;
}

.u-tab-pannels .u-tab-pannel[data-active="true"] > * {
  display: block;
}
</style>