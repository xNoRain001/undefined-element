<script setup>
import Basic from '../examples/infinite-scroll/01.basic.vue'
import Offset from '../examples/infinite-scroll/02.offset.vue'
import ScrollTarget from '../examples/infinite-scroll/03.scroll-target.vue'
import Reverse from '../examples/infinite-scroll/04.reverse.vue'
</script>

# Infinite Scroll

Infinite Scroll 允许用户滚动到指定位置时加载更多内容。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|offset|当距离底部的偏移小于或等于该值时，触发 load 回调。|number|200|
|scrollTarget|设置与 offset 进行比较的滚动容器目标，这个值会被传入 document.querySelector() 中。|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|默认插槽|
|loading|loading 插槽|
:::

## 基础

在下面的例子中，演示了 Infinite Scroll 组件的基础用法，你需要给 Infinite Scroll 组件提供 load 事件的回调，内部将给这个回调提供一个参数 done，当获取数据后，需要调用 done 函数来关闭 loading 状态。

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-infinite-scroll 
      @load="onLoad" 
      class="h-[400px] overflow-y-scroll"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >
        <span class="
          text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
          rounded-[4px]
        ">{{ index + 1 }}</span>  
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
```

```vue [script]
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
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-infinite-scroll 
      @load="onLoad" 
      class="h-[400px] overflow-y-scroll"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >
        <span class="
          text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
          rounded-[4px]
        ">{{ index + 1 }}</span>  
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

```
:::

## 偏移

在下面的例子中，演示了 Infinite Scroll 组件将 offset 设置为 0 时的效果，这意味着只有完全滚动到底部时才会加载更多内容。

<Offset></Offset>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-infinite-scroll 
      @load="onLoad" 
      :offset="0"
      class="h-[400px] overflow-y-scroll"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >
        <span class="
          text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
          rounded-[4px]
        ">{{ index + 1 }}</span>  
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
```

```vue [script]
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
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-infinite-scroll 
      @load="onLoad" 
      :offset="0"
      class="h-[400px] overflow-y-scroll"
    >
      <div 
        v-for="(item, index) in items" 
        :key="index"
      >
        <span class="
          text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
          rounded-[4px]
        ">{{ index + 1 }}</span>  
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

```
:::

## 滚动目标

在下面的例子中，演示了 Infinite Scroll 组件将 scrollTarget 设置为 .infinite-scroll-container 时的效果。

<ScrollTarget></ScrollTarget>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <div class="infinite-scroll-container h-[400px] overflow-y-scroll">
      <u-infinite-scroll 
        @load="onLoad" 
        :offset="0"
        scrollTarget=".infinite-scroll-container"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index"
        >
          <span class="
            text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
            rounded-[4px]
          ">{{ index + 1 }}</span>  
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
  </div>
</template>
```

```vue [script]
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
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <div class="infinite-scroll-container h-[400px] overflow-y-scroll">
      <u-infinite-scroll 
        @load="onLoad" 
        :offset="0"
        scrollTarget=".infinite-scroll-container"
      >
        <div 
          v-for="(item, index) in items" 
          :key="index"
        >
          <span class="
            text-[12px] bg-[--primary-color] text-white py-[2px] px-[6px] 
            rounded-[4px]
          ">{{ index + 1 }}</span>  
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

```
:::

