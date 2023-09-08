<template>
  <div class="my-[16px] vp-raw">
    <u-input
      class="h-[56px]"
      containerClass="
        h-full w-full before:rounded-[4px] before:bg-[rgba(0,0,0,.05)]
        px-[12px] text-[14px]
      "
      focusedContainerClass="before:!bg-black text-white"
      v-model="value"
    >
    </u-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
