<template>
  <div class="my-[16px]">
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      selection
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full"></div>
      </template>
    </u-slider>

    <!-- <div class="relative h-full before:content-[''] before:w-0
      before:border-[6px] before:border-solid
      before:border-b-transparent before:border-x-transparent
      before:absolute before:bottom-0 before:left-1/2 
      before:-translate-x-1/2 before:border-[--primary-color]
    ">
      <div class="
          px-[8px] absolute rounded-[4px] bg-red-400 
          text-[12px] text-white bottom-full left-1/2 -translate-x-1/2
        ">
        {{ modelValue }}
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
