<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center relative">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
          <div class="
            w-[40px] h-[40px] bg-[rgb(25,118,210)] rounded-full absolute
            flex justify-center items-center top-1/2 -translate-y-1/2
            cursor-move
          ">
            <u-icon class="!cursor-move" name="drag_indicator" color="white"></u-icon>
          </div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>
