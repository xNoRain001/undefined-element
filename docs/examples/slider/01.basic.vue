<template>
  <div class="my-[16px]">
    <!-- <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full"></div>
      </template>
    </u-slider> -->

    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
      </div>

      <!-- before:content-[''] 
      before:border-[6px] before:border-solid
      before:border-b-transparent before:border-x-transparent
      before:absolute before:bottom-0 before:left-1/2 
      before:-translate-x-1/2 before:border-red-500 -->
      <div class="
          px-[8px] absolute rounded-[4px] bg-[--primary-color]
          text-[12px] text-white -top-full left-1/2 -translate-x-1/2
      ">
        {{ value }}
      </div>
    </u-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
