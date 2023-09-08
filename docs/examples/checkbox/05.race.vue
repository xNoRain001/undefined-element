<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
      :max="1"
      race
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
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
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
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
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
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
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>

<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled';
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
