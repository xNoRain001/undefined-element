<script setup>
import Basic from '../../examples/skeleton/01.basic.vue'
</script>

# Skeleton



:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-skeleton v-model="loading">
      <div>Lorem ipsum dolor sit amet.</div>
      <div class="w-[48px] h-[48px] rounded-full bg-pink-500 mt-[16px]"></div>

      <template #skeleton-items>
        <u-skeleton-item class="
          w-full h-[24px] bg-[rgba(0,0,0,.12)] rounded-[4px]
        "></u-skeleton-item>
        <u-skeleton-item class="
          w-[48px] h-[48px] bg-[rgba(0,0,0,.12)] rounded-full mt-[16px]
        "></u-skeleton-item>
      </template>
    </u-skeleton>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-skeleton v-model="loading">
      <div>Lorem ipsum dolor sit amet.</div>
      <div class="w-[48px] h-[48px] rounded-full bg-pink-500 mt-[16px]"></div>

      <template #skeleton-items>
        <u-skeleton-item class="
          w-full h-[24px] bg-[rgba(0,0,0,.12)] rounded-[4px]
        "></u-skeleton-item>
        <u-skeleton-item class="
          w-[48px] h-[48px] bg-[rgba(0,0,0,.12)] rounded-full mt-[16px]
        "></u-skeleton-item>
      </template>
    </u-skeleton>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>

```
:::

