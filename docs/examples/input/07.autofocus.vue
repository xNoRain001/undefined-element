<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--u-primary-border-color] 
        hover:before:border-[--u-primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--u-primary-color]"
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
