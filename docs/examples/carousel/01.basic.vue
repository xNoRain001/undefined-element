<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      class="
        h-[300px] border border-solid border-[--primary-border-color]
      ">
      <u-carousel-navigation>
        <template #left>
          <button class="
            absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
            rounded-full z-30 transition-colors duration-300
          ">
            <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
          </button>
        </template>
        <template #right>
          <button class="
            absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
            rounded-full z-30 transition-colors duration-300
          ">
            <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
          </button>
        </template>
      </u-carousel-navigation>

      <u-carousel-slider>
        <div class="h-full bg-red-500"></div>
      </u-carousel-slider>
      <u-carousel-slider>
          <div class="h-full bg-green-500"></div>
      </u-carousel-slider>
      <u-carousel-slider>
          <div class="h-full bg-blue-500"></div>
      </u-carousel-slider>
    </u-carousel>
  </div>
</template>

<script lang="ts" setup>
import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'
</script>
