<!-- import -->
<script setup>
import Basic from '../examples/scroll-area/01.basic.vue'
import Persistent from '../examples/scroll-area/02.persistent.vue'
import Hidden from '../examples/scroll-area/03.hidden.vue'
</script>
<!-- import -->

# Scroll area

ScrollArea 组件能够让你自定义滚动条。 

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|width|容器的宽度|string|'100%'|
|height|容器的高度|string|'100%'|
|resize|当内容变化时是否更新滚动条的大小|boolean|true|
|hidden|是否隐藏滚动条|boolean|false|
|persistent|是否一直显示滚动条|boolean|false|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|默认插槽|
:::

## 基础

<!-- component -->
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
<!-- component -->

## 持久化

<!-- component -->
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
<!-- component -->

## 隐蔽

<!-- component -->
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
<!-- component -->
