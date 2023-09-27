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
    >
      <template #append>
        <u-icon 
          v-show="value.length" 
          :def="matClose" 
          clearable
        ></u-icon>
      </template>
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('This is clearable input')
</script>
