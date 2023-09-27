<script setup>
import Basic from '../../examples/infinite-scroll/01.basic.vue'
import Offset from '../../examples/infinite-scroll/02.offset.vue'
import ScrollTarget from '../../examples/infinite-scroll/03.scroll-target.vue'
import Reverse from '../../examples/infinite-scroll/04.reverse.vue'
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

## Basics

You need to provide a callback for the load event, and pass the load parameter to the callback. After obtaining data, you need to call the load function to disable the loading state.

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

## goal



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

