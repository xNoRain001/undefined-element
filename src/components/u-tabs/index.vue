<template>
  <div ref="tabs" class="u-tabs" @click="updateActiveKey($event)">
    <slot></slot>
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
  updateTabpanelAttr(activeKey.value, '')
})

const initActiveKey = () => {
  const activeTab = tabs.value!.querySelector('.u-tab[data-active="true"]') as HTMLElement
  activeKey.value = activeTab.getAttribute('data-key') as string
}

const updateTabpanelAttr = (activeKey: string, prevActiveKey: string) => {
  const tabpanels = tabs.value!.parentNode!.querySelector('.u-tab-panels') as HTMLElement
  const activeTabpanel = tabpanels.querySelector(`.u-tab-panel[data-key="${ activeKey }"]`) as HTMLElement
  const prevActiveTabpanel = tabpanels.querySelector(`.u-tab-panel[data-key="${ prevActiveKey }"]`)
  
  activeTabpanel.setAttribute('data-active', 'true')
  prevActiveTabpanel?.setAttribute('data-active', 'false')
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
  updateTabpanelAttr(activeKey.value, prevActiveKey.value)
}
</script>

<style>
.u-tab-panels .u-tab-panel > * {
  display: none;
}

.u-tab-panels .u-tab-panel[data-active="true"] > * {
  display: block;
}
</style>