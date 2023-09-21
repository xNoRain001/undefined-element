<script setup>
import Basic from '../../examples/scroll-area/01.basic.vue'
import Persistent from '../../examples/scroll-area/02.persistent.vue'
import Hidden from '../../examples/scroll-area/03.hidden.vue'
</script>

# Scroll Area

The ScrollArea component allows you to customize the scrollbar.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|width|Width of container|string|'100%'|
|height|Height of container|string|'100%'|
|resize|Whether to update the scrollbar size when the content changes|boolean|true|
|hidden|Whether to hide scroll bars|boolean|false|
|persistent|Whether to display scrollbars all the time|boolean|false|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|Default slot|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full grid gap-y-[24px]">
    <u-scroll-area height="200px" width="400px">
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>

    <u-scroll-area width="400px">
      <div class="whitespace-nowrap" v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quos 
        accusantium veniam et cupiditate odio obcaecati pariatur ratione 
        repellendus magni iste quam quas, ipsa deleniti quaerat amet illum ab 
        recusandae!
      </div>
    </u-scroll-area>
  </div>
</template>
```

```vue [all]
<template>
  <div class="w-full grid gap-y-[24px]">
    <u-scroll-area height="200px" width="400px">
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>

    <u-scroll-area width="400px">
      <div class="whitespace-nowrap" v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quos 
        accusantium veniam et cupiditate odio obcaecati pariatur ratione 
        repellendus magni iste quam quas, ipsa deleniti quaerat amet illum ab 
        recusandae!
      </div>
    </u-scroll-area>
  </div>
</template>


```
:::

## persistence



<Persistent></Persistent>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-scroll-area height="200px" width="400px" persistent>
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>
  </div>
</template>
```

```vue [all]
<template>
  <div class="w-full">
    <u-scroll-area height="200px" width="400px" persistent>
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>
  </div>
</template>


```
:::

## Take cover



<Hidden></Hidden>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-scroll-area height="200px" width="400px" hidden>
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>
  </div>
</template>
```

```vue [all]
<template>
  <div class="w-full">
    <u-scroll-area height="200px" width="400px" hidden>
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi doloribus nulla impedit adipisci quia, quisquam minima similique eaque perspiciatis reiciendis sequi. Reiciendis, excepturi repellendus at unde in voluptatibus illum.
      </div>
    </u-scroll-area>
  </div>
</template>


```
:::

