<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox v-model="value">
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid
            border-gray-500 rounded-[2px] flex justify-center
            items-center hover:border-red-500 duration-300 transition-colors
            mr-[8px]
          "
          :class="checked ? 'bg-red-500 border-red-500' : ''"
        >
          <u-icon 
            v-if="checked" 
            :def="matDone"
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </div>
      </template>

      <template #after>
        <span>red</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      class="ml-[16px]"
      v-model="value" 
    >
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-gray-500 flex justify-center
            items-center hover:border-green-500 duration-300 transition-colors
            mr-[8px]
          "
          :class="checked ? 'border-green-500' : ''"
        >
          <div 
            v-if="checked" 
            class="w-[10px] h-[10px] bg-green-500 rounded-full"
          ></div>
        </div>
      </template>

      <template #after>
        <span>green</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      class="ml-[16px]"
      v-model="value" 
    >
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-gray-500 flex justify-center
            items-center hover:border-blue-500 duration-300
            transition-colors
            mr-[8px]
          "
          :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
        >
          <u-icon 
            v-if="checked" 
            :def="matDone"
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </div>
      </template>

      <template #after>
        <span>blue</span>
      </template>
    </u-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matDone } from 'undefined-element-icons/src/material-icons/filled'

const value =ref(false)
</script>
