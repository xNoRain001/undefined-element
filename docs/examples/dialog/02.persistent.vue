<template>
  <div class="vp-raw my-[16px]">
    <button @click="updateVisible" class="btn">Center</button>

    <u-dialog v-model="visible" position="center" persistent>
      <div class="w-[80vw] min960:w-[560px] bg-white p-[16px]">
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold ">Center</div>
          <u-icon :def="matClose" @click="updateVisible"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
