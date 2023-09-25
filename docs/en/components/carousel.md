<script setup>
import Basic from '../../examples/carousel/01.basic.vue'
import Loop from '../../examples/carousel/02.loop.vue'
import Direction from '../../examples/carousel/03.direction.vue'
import Autoplay from '../../examples/carousel/04.autoplay.vue'
</script>

# Carousel

undefined

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|loop|undefined|boolean|false|
|autoplay|undefined|number \| boolean|false|
|vertical|undefined|boolean|false|
|modelValue|undefined|number|-|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|undefined|
|prev|undefined|
|next|undefined|
|navigation|undefined|
:::

## undefined

undefined

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
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 transition-opacity duration-300 cursor-pointer"
            :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
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
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[16px] h-[16px] rounded-full bg-white ml-[16px] first:ml-0 transition-opacity duration-300 cursor-pointer"
            :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
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

## undefined

undefined

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
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[30px] h-[30px] ml-[16px] first:ml-0 flex items-center cursor-pointer"
          >
            <div 
              class="w-full h-[2px] bg-white transition-opacity duration-300"
              :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
            ></div>
          </div>
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
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[30px] h-[30px] ml-[16px] first:ml-0 flex items-center cursor-pointer"
          >
            <div 
              class="w-full h-[2px] bg-white transition-opacity duration-300"
              :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
            ></div>
          </div>
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

## undefined

undefined

<Direction></Direction>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-carousel 
      v-model="value"
      :loop="true"
      vertical
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
          absolute top-[16px] left-1/2 -translate-x-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute bottom-[16px] left-1/2 -translate-x-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowDown" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute right-[16px] top-1/2 -translate-y-1/2 z-20 flex flex-col">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[16px] h-[16px] rounded-full bg-white mt-[16px] first:mt-0 transition-opacity duration-300 cursor-pointer"
            :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
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
  matKeyboardArrowUp,
  matKeyboardArrowDown
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
      vertical
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
          absolute top-[16px] left-1/2 -translate-x-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowUp" color="white"></u-icon>
        </button>
      </template>

      <template #next>
        <button class="
          absolute bottom-[16px] left-1/2 -translate-x-1/2 hover:bg-[rgba(255,255,255,.2)]
          rounded-full transition-colors duration-300 block z-20 w-[33px] h-[33px]
        ">
          <u-icon :def="matKeyboardArrowDown" color="white"></u-icon>
        </button>
      </template>

      <template #navigation="{ total }">
        <div class="absolute right-[16px] top-1/2 -translate-y-1/2 z-20 flex flex-col">
          <div 
            v-for="i in total" 
            :data-index="i - 1"
            class="w-[16px] h-[16px] rounded-full bg-white mt-[16px] first:mt-0 transition-opacity duration-300 cursor-pointer"
            :class="i === value + 1 ? 'opacity-100' : 'opacity-50'"
          ></div>
        </div>
      </template>
    </u-carousel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import { 
  matKeyboardArrowUp,
  matKeyboardArrowDown
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref(0)
</script>

```
:::

## undefined

undefined

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

      <template #navigation>
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            :data-index="0"
            :class="value === 0 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-red-500 opacity-50 transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
          <div 
            :data-index="1"
            :class="value === 1 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-green-500 opacity-50 ml-[16px] transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
          <div 
            :data-index="2"
            :class="value === 2 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-blue-500 opacity-50 ml-[16px] transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
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

      <template #navigation>
        <div class="absolute bottom-[16px] left-1/2 -translate-x-1/2 z-20 flex">
          <div 
            :data-index="0"
            :class="value === 0 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-red-500 opacity-50 transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
          <div 
            :data-index="1"
            :class="value === 1 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-green-500 opacity-50 ml-[16px] transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
          ></div>
          <div 
            :data-index="2"
            :class="value === 2 ? 'opacity-100 border-white' : 'border-transparent'"
            class="w-[70px] h-[50px] rounded-[4px] bg-blue-500 opacity-50 ml-[16px] transition-opacity duration-300 cursor-pointer hover:opacity-100 border border-solid"
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

