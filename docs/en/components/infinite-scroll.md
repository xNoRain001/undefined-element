<script setup>
import Basic from '../../examples/infinite-scroll/01.basic.vue'
import ScrollTarget from '../../examples/infinite-scroll/02.scroll-target.vue'
</script>

# Infinite Scroll

Infinite Scroll allows users to load more content when they scroll to a specified location.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|offset|When the offset from the bottom is this value, the callback is triggered.|number|200|
|scrollTarget|goal|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|Default slot|
|loading|loading slot|
:::

## Basics

You need to provide a callback for the load event, and pass the load parameter to the callback. After obtaining data, you need to call the load function to disable the loading state.

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-infinite-scroll 
      @load="onLoad" 
      :offset="200"
      class="infinite-scroll h-[400px] overflow-y-scroll relative"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >{{ index }}: {{ item }}</div>

      <template #loading="{ loading }">
        <div class="w-fit sticky bottom-[16px] left-1/2 h-[30px]">
          <u-icon v-if="loading" class="animate-spin" :def="matRefresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matRefresh } from 'undefined-element-icons/src/material-icons/filled'

const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = (done: Function) => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
    items.push(...newItems)
    done()
  }, 3000) 
}
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-infinite-scroll 
      @load="onLoad" 
      :offset="200"
      class="infinite-scroll h-[400px] overflow-y-scroll relative"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >{{ index }}: {{ item }}</div>

      <template #loading="{ loading }">
        <div class="w-fit sticky bottom-[16px] left-1/2 h-[30px]">
          <u-icon v-if="loading" class="animate-spin" :def="matRefresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matRefresh } from 'undefined-element-icons/src/material-icons/filled'

const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = (done: Function) => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
    items.push(...newItems)
    done()
  }, 3000) 
}
</script>

```
:::

## goal



<ScrollTarget></ScrollTarget>

::: details 查看源码
::: code-group
```vue [template]
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
          <u-icon v-if="loading" class="animate-spin" :def="matRefresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matRefresh } from 'undefined-element-icons/src/material-icons/filled'

const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = (done: Function) => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
    items.push(...newItems)
    done()
  }, 3000) 
}
</script>
```

```vue [all]
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
          <u-icon v-if="loading" class="animate-spin" :def="matRefresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matRefresh } from 'undefined-element-icons/src/material-icons/filled'

const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = (done: Function) => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
    items.push(...newItems)
    done()
  }, 3000) 
}
</script>

```
:::

