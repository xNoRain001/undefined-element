<template>
  <div class="vp-raw my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--u-primary-border-color] rounded-[4px]"
      selectionClass="bg-[--u-primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--u-primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--u-primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--u-primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--u-primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const value = reactive({ min: 20, max: 80 })
</script>
