<template>
  <div class="w-full">
    <u-toggle 
      v-model="value"
      class="w-[52px] h-[20px] px-[10px]"
      thumbClass="
        w-[20px] h-[20px] rounded-full bg-white left-0
      "
      :thumbStyle="{ 
        boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
      }"
      trackClass="!w-[32px] !h-[14px] rounded-full bg-gray-500 opacity-30"
      activeThumbClass="left-[32px] !bg-green-500"
      activeTrackClass="!bg-green-500 "
    >
      <u-icon 
        :name="value ? 'done' : 'close'"
        width="16"
        height="16"
        :color="value ? 'white' : 'black'"
      ></u-icon>
    </u-toggle>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>
