<template>
  <div class="my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      inputClass="placeholder:text-[--primary-color-light]"
      placeholder="Write your story!"
    >
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
