<template>
  <div class="w-full">
    <u-skeleton v-model="loading">
      <div>Lorem ipsum dolor sit amet.</div>
      <div class="w-[48px] h-[48px] rounded-full bg-pink-500 mt-[16px]"></div>

      <template #skeleton-items>
        <u-skeleton-item class="
          w-full h-[24px] bg-[rgba(0,0,0,.12)] rounded-[4px]
        "></u-skeleton-item>
        <u-skeleton-item class="
          w-[48px] h-[48px] bg-[rgba(0,0,0,.12)] rounded-full mt-[16px]
        "></u-skeleton-item>
      </template>
    </u-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>
