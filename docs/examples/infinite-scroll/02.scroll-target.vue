<template>
  <div class="w-full">
    <u-infinite-scroll 
      @load="onLoad" 
      :offset="200"
      scrollTarget=".infinite-scroll"
      class="h-[400px] overflow-y-scroll relative"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >{{ index }}: {{ item }}</div>

      <template #loading="{ loading }">
        <div class="w-fit sticky bottom-[16px] left-1/2 h-[30px]">
          <u-icon v-if="loading" class="animate-spin" name="refresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = (done: Function) => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
    items.push(...newItems)
    done()
  }, 3000) 
}
</script>
