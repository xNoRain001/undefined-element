<script setup>
import Basic from '../../examples/scroller/01.basic.vue'
import To from '../../examples/scroller/02.to.vue'
import Duration from '../../examples/scroller/03.duration.vue'
import ScrollOffset from '../../examples/scroller/04.scroll-offset.vue'
import ScrollTarget from '../../examples/scroller/05.scroll-target.vue'
</script>

# Scroller

The Scroller component is a floating button that rolls the scroll bar to a specified position.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|to|The scroll offset, which defaults to 0, means scroll to the top.|number|0|
|duration|Time of animation during scrolling|number|300|
|scrollOffset|Used to control whether the Scroller component is displayed. The Scroller component is displayed only when the scroll offset exceeds this value|number|150|
|scrollTarget|Click the float button to scroll the target, here you need to provide a selector.|string|-|
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
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
      </div>
      <u-scroller class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
  
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
      </div>
      <u-scroller class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
  
</template>
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>

```
:::

## Scroll to

Here the scroll offset is set to 100

<To></To>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis numquam rem aspernatur sequi recusandae iure et expedita soluta voluptatum velit nihil placeat, ab perspiciatis quaerat voluptatem non ducimus nam.
      </div>
      <u-scroller :to="100" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis numquam rem aspernatur sequi recusandae iure et expedita soluta voluptatum velit nihil placeat, ab perspiciatis quaerat voluptatem non ducimus nam.
      </div>
      <u-scroller :to="100" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>

```
:::

## duration

Here we set the duration to 0

<Duration></Duration>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
      </div>
      <u-scroller :duration="0" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
      </div>
      <u-scroller :duration="0" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>

```
:::

## skew

Here we set the offset to 0

<ScrollOffset></ScrollOffset>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
      </div>
      <u-scroller :scrollOffset="0" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div> 
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-scroll-area height="400px" persistent>
      <div v-for="i in 20" :key="i">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, corrupti quidem cupiditate reiciendis nostrum facere est voluptatem ea a recusandae vero maiores deleniti sapiente consectetur earum ratione? Nesciunt, animi beatae? 
      </div>
      <u-scroller :scrollOffset="0" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div> 
</template>
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>

```
:::

## Rolling target

Here the scroll target is set to

<ScrollTarget></ScrollTarget>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
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
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </div>
</template>
<script lang="ts" setup>
import { matKeyboardArrowUp } from 'undefined-element-icons/src/material-icons/filled'
</script>

```
:::

