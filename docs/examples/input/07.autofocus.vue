<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedBorderClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      autofocus
    >
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
