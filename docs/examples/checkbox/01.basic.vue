<template>
  <u-checkbox v-model="value">
    <template #default="{ checked }">
      <div 
        class="
          w-[20px] h-[20px] border-[2px] border-solid
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center hover:border-red-500 duration-300 transition-colors
          mr-[8px]
        "
        :class="checked ? 'bg-red-500 border-red-500' : ''"
      >
        <Transition>
          <u-icon 
            v-if="checked" 
            name="done" 
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </Transition>
      </div>
    </template>

    <template #after>
      <span>label</span>
    </template>
  </u-checkbox>

  <u-checkbox 
    class="ml-[16px]"
    v-model="value" 
  >
    <template #default="{ checked }">
      <div 
        class="
          w-[20px] h-[20px] border-[2px] border-solid rounded-full
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center hover:border-green-500 duration-300 transition-colors
          mr-[8px]
        "
        :class="checked ? 'border-green-500' : ''"
      >
        <Transition>
          <div 
            v-if="checked" 
            class="w-[10px] h-[10px] bg-green-500 rounded-full"
          ></div>
        </Transition>
      </div>
    </template>

    <template #after>
      <span>label</span>
    </template>
  </u-checkbox>

  <u-checkbox 
    class="ml-[16px]"
    v-model="value" 
  >
    <template #default="{ checked }">
      <div 
        class="
          w-[20px] h-[20px] border-[2px] border-solid rounded-full
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center hover:border-blue-500 duration-300 transition-[all]
          mr-[8px]
        "
        :class="checked ? 'bg-blue-500 border-blue-500' : ''"
      >
        <Transition name="u-animate-opacity">
          <u-icon 
            v-if="checked" 
            name="done" 
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </Transition>
      </div>
    </template>

    <template #after>
      <span>label</span>
    </template>
  </u-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value =ref(false)
</script>
