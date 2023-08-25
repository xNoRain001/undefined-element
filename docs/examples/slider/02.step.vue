<template>
  <div class="w-full">
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="50"
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value }}
        </div>
      </template>
    </u-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
