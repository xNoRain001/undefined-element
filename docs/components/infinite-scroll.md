<!-- import -->
<script setup>
import Basic from '../examples/infinite-scroll/01.basic.vue'
import ScrollTarget from '../examples/infinite-scroll/02.scroll-target.vue'
</script>
<!-- import -->

# Infinite Scroll

Infinite Scroll 允许用户滚动到指定位置时加载更多内容。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|offset|当距离底部的偏移为该值时，触发回调。|number|200|
|scrollTarget|目标|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|默认插槽|
|loading|loading 插槽|
:::

## 基础

需要提供 load 事件的回调，会给回调传递 load 参数，当获取数据后，需要调用 load 函数来关闭 loading 状态。

<!-- component -->
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
<!-- component -->

## 目标

<!-- component -->
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
<!-- component -->
