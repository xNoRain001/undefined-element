<!-- import -->
<script setup>
import Basic from '../examples/infinite-scroll/01.basic.vue'
import ScrollTarget from '../examples/infinite-scroll/02.scroll-target.vue'
</script>
<!-- import -->

## 基础

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
          <u-icon v-if="loading" class="animate-spin" name="refresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>
```

```vue [script]
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
          <u-icon v-if="loading" class="animate-spin" name="refresh"></u-icon>
        </div>
      </template>
    </u-infinite-scroll>
  </div>
</template>
```

```vue [script]
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

```

:::
<!-- component -->
