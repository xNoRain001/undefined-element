<template>
  <div class="w-full">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
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
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
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
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
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
      </u-checkbox>
    </u-checkbox-group>

    <div class="mt-[16px]">checked: {{ selection }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
