<template>
  <div class="my-[16px] vp-raw">
    <u-input
      class="h-[32px] text-[14px]"
      containerClass="
        w-full h-full py-px px-[11px] before:border before:border-solid 
        before:border-[#dcdfe6] before:rounded-[4px] before:rounded-tl-none
        before:rounded-bl-none hover:before:border-[#c0c4cc] 
      "
      focusedContainerClass="before:!border-[#409eff]"
      placeholder="Please input"
      inputClass="placeholder:text-[#a8abb2]"
      v-model="value"
    >
      <template #before>
        <div class="
          h-full px-[20px] border border-solid border-[#dcdfe6] 
          rounded-[4px] rounded-tr-none rounded-tl-none
          border-r-0 text-[#909399] bg-[#f5f7fa] flex justify-center 
          items-center
        ">Http://</div>
      </template>
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
