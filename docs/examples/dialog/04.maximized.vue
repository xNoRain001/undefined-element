<template>
  <div class="flex items-center flex-wrap">
    <button @click="updateVisible" class="btn">Drawer</button>
  </div>

  <u-dialog v-model="visible" position="bottom" :maximized="full">
    <div 
      class="bg-white p-[24px]"
      :class="full ? 'w-full h-screen' : 'w-[500px]'"
    >
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Center</div>
        <div class="flex items-center">
          <div 
            @click="updateFull"
            class="
              w-[16px] h-[16px] border-[2px] border-solid border-gray-500 
              border-x-0 border-t-0 mr-[13px] cursor-pointer
            "
          ></div>
          <div 
            @click="updateFull"
            class="
              w-[16px] h-[16px] border-[2px] border-solid border-gray-500 
              mr-[8px] cursor-pointer
            "
          ></div>
          <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible"></u-icon>
        </div>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const full = ref(false)
const visible = ref(false)

const updateFull = () => full.value = !full.value
const updateVisible = () => visible.value = !visible.value
</script>
