<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis numquam rem aspernatur sequi recusandae iure et expedita soluta voluptatum velit nihil placeat, ab perspiciatis quaerat voluptatem non ducimus nam.
      </div>
      <u-scroller :to="100" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>

<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>
