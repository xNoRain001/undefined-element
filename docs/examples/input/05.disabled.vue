<template>
  <div class="my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        text-[14px] font-normal
      "
      v-model="value"
      disabled
    >
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('This is disabled input')
</script>
