<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
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

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[30px] h-[30px] ml-[16px] first:ml-0 flex items-center cursor-pointer"
          >
            <div 
              class="w-full h-[2px] bg-white transition-opacity duration-300"
              :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
            ></div>
          </div>
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
