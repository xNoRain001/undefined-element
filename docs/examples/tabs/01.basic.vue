<template>
  <div class="w-full">
    <u-tabs 
      v-model="tab"
      :style="{
        height: '40px',
        display: 'flex'
      }"
      tabClass="
        text-[14px] text-[#303133] font-medium flex items-center border-x-0
        border-t-0 border-b-transparent border-solid border-[2px] ml-[40px]
        hover:text-[#409efe] first-of-type:ml-0
      "
      activeTabClass="!border-b-[#409eff] text-[#409eff]"
      >
      <u-tab name="1">
        <div>User</div>
      </u-tab> 
      <u-tab name="2">
        <div>Config</div>
      </u-tab> 
      <u-tab name="3">
        <div>Role</div>
      </u-tab> 
      <u-tab name="4">
        <div>Task</div>
      </u-tab> 
    </u-tabs>

    <u-tab-panels 
      v-model="tab" 
      :panelStyle="{ padding: '32px' }"
      panelClass="text-[#6b778c] text-[32px] font-semibold"
    >
      <u-tab-panel name="1">
        <div>User</div>
      </u-tab-panel>
      <u-tab-panel name="2">
        <div>Config</div>
      </u-tab-panel>
      <u-tab-panel name="3">
        <div>Role</div>
      </u-tab-panel>
      <u-tab-panel name="4">
        <div>Task</div>
      </u-tab-panel>
    </u-tab-panels>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tab = ref('1')
</script>
