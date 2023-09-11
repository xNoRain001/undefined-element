<template>
  <div class="vp-raw my-[16px]">
    <u-tabs v-model="activeTab" class="h-[40px] flex">
      <u-tab 
        :name="name" 
        :key="name" 
        v-for="{ label, name } in tabs"
        class="
          font-medium flex items-center border-x-0 relative
          border-t-0 border-b-transparent border-solid border-[2px] px-[16px]
          hover:text-[--primary-color]
        "
        :class="name === activeTab 
          ? 'text-[--primary-color]' 
          : ''
        "
      >
        <div >{{ label }}</div>
      </u-tab> 
    </u-tabs>

    <u-tab-panels 
      v-model="activeTab" 
    >
      <u-tab-panel 
        :name="name" 
        :key="name" 
        v-for="{ label, name } in tabs"
        class="p-[32px] text-[32px] font-semibold"
      >
        <div>{{ label }}</div>
      </u-tab-panel>
    </u-tab-panels>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref('home')
const tabs = [
  {
    label: 'Home',
    name: 'home'
  },
  {
    label: 'Feature',
    name: 'feature'
  },
  {
    label: 'About us',
    name: 'aboutUs'
  }
]
</script>
