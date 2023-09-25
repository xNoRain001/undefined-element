<template>
  <div class="vp-raw my-[16px]">
    <u-rating v-model="value" :max="5" color="black" activeColor="var(--primary-color)">
      <u-icon :def="matStar" fill="currentColor"></u-icon>
    </u-rating>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matStar } from 'undefined-element-icons/src/material-icons/filled'

const value = ref(3)
</script>
