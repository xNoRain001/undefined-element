<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[56px] px-[12px] rounded-[4px]
        before:border before:border-solid before:border-[rgba(0,0,0,.23)]
        hover:before:border-[rgba(0,0,0,.87)]
      "
      focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
      inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
      v-model="value"
    >
      <template #append>
        <u-icon name="close" width="16" height="16" clearable></u-icon>
      </template>
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('This is clearable input')
</script>
