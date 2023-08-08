<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      horizontal 
      class="w-full h-[400px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-full h-[13px] flex justify-center items-center">
          <div class="
            w-full border-[1px] border-solid border-[#dcdfe6] border-b-0 
            border-x-0
          "></div>
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
