<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      vertical
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
          absolute top-[16px] left-1/2 -translate-x-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute bottom-[16px] left-1/2 -translate-x-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowDown" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute right-[16px] top-1/2 -translate-y-1/2 z-20 flex flex-col">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[16px] h-[16px] rounded-full bg-white mt-[16px] first:mt-0 transition-opacity duration-300 cursor-pointer"
            :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowUp,
  matKeyboardArrowDown
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>
