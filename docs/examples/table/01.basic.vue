<template>
  <div class="w-full">
    <u-table 
      :head="head" 
      :body="body"
      thClass=""
      tdClass="
        border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
        h-[48px] text-[13px] text-center
      "
      headTrClass=""
      bodyTrClass="hover:bg-[rgba(0,0,0,.08)]"
      tableClass="w-full border-separate border-spacing-0"
    ></u-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const head = [
  {
    field: 'a',
    label: 'A'
  },
  {
    field: 'b',
    label: 'B'
  },
  {
    field: 'c',
    label: 'C'
  },
]
const body = reactive([
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
])
</script>
