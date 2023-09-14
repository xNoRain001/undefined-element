<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      class="
        h-[300px] border border-solid border-[--primary-border-color]
      ">
      <u-carousel-control>
        <template #prev>
          <button class="
            absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
            rounded-full z-30 transition-colors duration-300
          ">
            <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
          </button>
        </template>
        <template #next>
          <button class="
            absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
            rounded-full z-30 transition-colors duration-300
          ">
            <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
          </button>
        </template>
      </u-carousel-control>

      <u-carousel-slider name="a">
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider name="b">
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider name="c">
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
    </u-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref('a')
</script>
