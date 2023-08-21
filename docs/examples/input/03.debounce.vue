<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[56px] px-[12px] rounded-[8px]
        before:border-solid before:border before:border-[rgba(0,0,0,.23)] 
        hover:before:border-[rgba(0,0,0,.87)] text-[rgba(0,0,0,.87)] 
        text-[14px] font-normal
      "
      focusedBorderClass="before:border-[2px] before:!border-[rgb(25,118,210)]"
      v-model="value"
      :debounce="300"
    >
    </u-input>

    <div class="mt-[16px]">value: {{ value }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
