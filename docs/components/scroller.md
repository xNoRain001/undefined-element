<!-- import -->
<script setup>
import Basic from '../examples/scroller/01.basic.vue'
import To from '../examples/scroller/02.to.vue'
import Duration from '../examples/scroller/03.duration.vue'
import ScrollOffset from '../examples/scroller/04.scroll-offset.vue'
import ScrollTarget from '../examples/scroller/05.scroll-target.vue'
</script>
<!-- import -->

# Scroller

Scroller 组件是一个浮动按钮，用于实现将滚动条滚动到指定位置。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|to|滚动偏移量，默认值为0，这意味着滚动到顶部。|number|0|
|duration|滚动过程中动画的时间|number|300|
|scrollOffset|用于控制是否显示 Scroller 组件，只有当滚动偏移量超过这个值时才会显示 Scroller 组件|number|150|
|scrollTarget|点击浮动按钮时滚动的目标，这里需要提供一个选择器。|string|-|
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
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>
    <u-scroller class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

```vue [all]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>
    <u-scroller class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>


```

:::
<!-- component -->

## 滚动到

这里将滚动偏移量设置为 100

<!-- component -->
<To></To>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis numquam rem aspernatur sequi recusandae iure et expedita soluta voluptatum velit nihil placeat, ab perspiciatis quaerat voluptatem non ducimus nam.
    </div>
    <u-scroller :to="100" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

```vue [all]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis numquam rem aspernatur sequi recusandae iure et expedita soluta voluptatum velit nihil placeat, ab perspiciatis quaerat voluptatem non ducimus nam.
    </div>
    <u-scroller :to="100" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>


```

:::
<!-- component -->

## 持续时间

这里将持续时间设为 0

<!-- component -->
<Duration></Duration>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>
    <u-scroller :duration="0" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

```vue [all]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>
    <u-scroller :duration="0" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>


```

:::
<!-- component -->

## 偏移

这里将偏移设为 0

<!-- component -->
<ScrollOffset></ScrollOffset>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>
    <u-scroller :scrollOffset="0" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

```vue [all]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>
    <u-scroller :scrollOffset="0" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>


```

:::
<!-- component -->

## 滚动目标

这里将滚动目标设置为

<!-- component -->
<ScrollTarget></ScrollTarget>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>

    <u-scroller 
      scrollTarget=".content-container" 
      :duration="300" 
      class="absolute right-[20px] bottom-[20px]"
    >
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

```vue [all]
<template>
  <u-scroll-area height="400px" persistent>
    <div v-for="i in 20" :key="i">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
    </div>

    <u-scroller 
      scrollTarget=".content-container" 
      :duration="300" 
      class="absolute right-[20px] bottom-[20px]"
    >
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>


```

:::
<!-- component -->
