<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>

    <u-scroller 
      scrollTarget=".content-container" 
      :duration="300" 
      class="absolute right-[20px] bottom-[20px]"
    >
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
