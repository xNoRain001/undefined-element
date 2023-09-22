<script setup>
import Basic from '../examples/carousel/01.basic.vue'
import Loop from '../examples/carousel/02.loop.vue'
import Autoplay from '../examples/carousel/03.autoplay.vue'
</script>

# Carousel



:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
:::

## 基础



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
          <div 
            v-for="i in total" 
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 opacity-50 transition-opacity duration-300"
            :class="i === value + 1 ? 'opacity-100' : ''"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
          <div 
            v-for="i in total" 
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 opacity-50 transition-opacity duration-300"
            :class="i === value + 1 ? 'opacity-100' : ''"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>

```
:::

## 循环



<Loop></Loop>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
          <div 
            v-for="i in total" 
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 opacity-50 transition-opacity duration-300"
            :class="i === value + 1 ? 'opacity-100' : ''"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
          <div 
            v-for="i in total" 
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 opacity-50 transition-opacity duration-300"
            :class="i === value + 1 ? 'opacity-100' : ''"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>

```
:::

## 自动播放



<Autoplay></Autoplay>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      :autoplay="true"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
          <div 
            v-for="i in total" 
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 opacity-50 transition-opacity duration-300"
            :class="i === value + 1 ? 'opacity-100' : ''"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      :autoplay="true"
      class="h-[300px]"
    >
      <u-carousel-slider>
        <div class="h-full bg-red-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-green-500 text-white flex justify-center items-center">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>
      <u-carousel-slider>
        <div class="h-full bg-blue-500 text-white flex justify-center items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </div>
      </u-carousel-slider>

      <template #prev>
        <button class="
          absolute top-1/2 left-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowLeft" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute top-1/2 right-[16px] -translate-y-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowRight" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 h-[16px] z-20 flex items-center">
          <div 
            v-for="i in total" 
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 opacity-50 transition-opacity duration-300"
            :class="i === value + 1 ? 'opacity-100' : ''"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowLeft, 
  matKeyboardArrowRight
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>

```
:::

