<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      :autoplay="true"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation>
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            :data-index="0"
            :class="value === 0 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-red-500 opacity-50 transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
          <div 
            :data-index="1"
            :class="value === 1 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-green-500 opacity-50 ml-[16px] transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
          <div 
            :data-index="2"
            :class="value === 2 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-blue-500 opacity-50 ml-[16px] transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>
