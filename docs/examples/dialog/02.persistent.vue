<template>
  <button 
    @click="updateVisible" 
    class="
      cursor-pointer flex items-center justify-between py-[6px] px-[16px] 
      rounded-[3px] bg-[#1976d2]
    "
  >
    <u-icon name="control_camera" color="#fff"></u-icon>
    <span class="ml-[12px] text-white text-[14px] font-medium">center</span>
  </button>

  <u-dialog v-model="visible" position="center" persistent>
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Center</div>
        <u-icon class="cursor-pointer" name="close" @click="updateVisible"></u-icon>
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

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
