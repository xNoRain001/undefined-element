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
      v-model="value"
      readonly
    >
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('readonly text')
</script>
