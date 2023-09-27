<template>
  <div class="vp-raw my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--u-primary-border-color] 
        text-[14px] font-normal
      "
      v-model="value" 
      :options="options"
      disabled
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--u-primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--u-primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--u-primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>
