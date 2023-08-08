<template>
  <div class="btns w-full flex items-center">
    <button @click="updateVisible">
      <u-icon name="keyboard_arrow_left" color="#fff"></u-icon>
      <span>Left</span>
    </button>
  </div>

  <u-dialog v-model="visible" position="left">
    <div class="dialog">
      <div class="header">
        <div>Drawer</div>
        <u-icon name="close" @click="updateVisible"></u-icon>
      </div>
      <div class="content">
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

<style type="text/tailwindcss" scoped>
.btns > button {
  @apply cursor-pointer flex items-center justify-between py-[6px] px-[16px] 
  rounded-[3px] bg-[#1976d2]
}

.btns > button > span {
  @apply ml-[12px] text-white text-[14px] font-medium
}

.btns > button:not(:first-of-type) {
  @apply ml-[8px]
}

.dialog {
  @apply w-[300px] h-screen bg-white p-[24px]
}

.dialog > .header {
  @apply flex justify-between
}

.dialog> .header > div {
  @apply text-[20px] font-semibold 
}

.dialog > .header > svg {
  @apply cursor-pointer
}

.dialog > .content {
  @apply mt-[24px] text-[14px]
}
</style>
