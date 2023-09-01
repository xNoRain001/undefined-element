<template>
  <div class="w-full">
    <u-rating v-model="value1" :max="5" color="black" activeColor="#eab308">
      <u-icon :def="matStar" fill="currentColor"></u-icon>
    </u-rating>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { matStar } from 'undefined-element-icons/src/material-icons/filled'

const value1 = ref(3)
</script>
