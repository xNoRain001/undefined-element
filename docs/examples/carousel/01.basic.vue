<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="index"
      class="h-[300px]"
    >
      <template #sliders>
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
      </template>

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
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
            <div 
              v-for="i in total" 
              class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0"
              :class="i === index + 1 ? '' : 'opacity-50'"
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

const index = ref(0)
</script>
