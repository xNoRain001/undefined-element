<template>
  <div class="w-full relative">
    <div class="scroll-target w-full h-[400px] overflow-y-scroll">
      <div v-for="i in 100" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
    </div>

    <u-scroller scrollTarget=".scroll-target" :duration="300" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </div>
</template>
