<template>
  <div class="vp-raw my-[16px]">
    <div class="flex items-center flex-wrap -m-[4px]">
      <button @click="updateVisible1" class="btn m-[4px]">Drawer</button>
      <button @click="updateVisible2" class="btn m-[4px]">Maximized</button>
    </div>

    <u-dialog v-model="visible1" position="left">
      <div class="w-[50vw] min960:w-[300px] h-screen bg-white p-[16px]">
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold ">Drawer</div>
          <u-icon :def="matClose" @click="updateVisible1"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible2" position="center">
      <div 
        class="bg-white p-[16px]"
        :class="maximized ? 'w-screen h-screen' : 'w-[80vw] min960:w-[560px]'"
      >
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold">Center</div>
          <div class="flex items-center">
            <u-icon :class="maximized ? '' : 'cursor-not-allowed'" class="hover:bg-[rgba(0,0,0,.12)]" :def="matFullscreenExit" @click="onMinimized"></u-icon>
            <u-icon :class="maximized ? 'cursor-not-allowed' : ''" class="hover:bg-[rgba(0,0,0,.12)]" :def="matFullscreen" @click="onMaximized"></u-icon>
            <u-icon class="hover:bg-[rgba(0,0,0,.12)]" :def="matClose" @click="updateVisible2"></u-icon>
          </div>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matClose,
  matFullscreen,
  matFullscreenExit 
} from 'undefined-element-icons/src/material-icons/filled'

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
  quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
  minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
  magni modi harum incidunt repellat.
`

const visible1 = ref(false)
const visible2 = ref(false)
const maximized = ref(false)

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const onMaximized = () => maximized.value = true
const onMinimized = () => maximized.value = false
</script>
