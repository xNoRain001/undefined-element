<template>
  <div class="vp-raw my-[16px]">
    <u-infinite-scroll 
      @load="onLoad" 
      class="h-[400px] overflow-y-auto"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >
        <span class="
          text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
          rounded-[4px]
        ">{{ items.length - index }}</span>  
        {{ item }}
      </div>
      <template #loading="{ loading }">
        <div 
          v-if="loading"
          class="py-[16px] flex justify-center items-center"
        >
          <u-icon 
            class="animate-spin "
            :def="matRefresh"
            width="36"
            height="36"
            color="var(--primary-color)"
          ></u-icon>
        </div>
        <div v-else class="py-[16px] h-[36px] box-content"></div>
      </template>
    </u-infinite-scroll>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { matRefresh } from 'undefined-element-icons/src/material-icons/filled'

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias 
  recusandae, soluta nam corporis ipsum iure officiis eos, explicabo 
  alias magnam quae iusto neque illum minus possimus magni vero quas 
  voluptates.
`
const items = reactive<string[]>((new Array(20)).fill(text))

const onLoad = (done: Function) => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill(text)
    items.push(...newItems)
    done()
  }, 3000) 
}
</script>
