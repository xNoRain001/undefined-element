<script setup>
import Basic from '../../examples/slider/01.basic.vue'
import Step from '../../examples/slider/02.step.vue'
</script>

# Slider

A Slider provides the user with a way to select a value between the minimum and maximum value.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|min|Minimum value|number|0|
|max|Maximum value|number|100|
|step|Step size|number|1|
|modelValue|Model value|number|-|
|trackClass|Slider style|string|''|
|selectionClass|Select the style for the area|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|thumb|
:::

## Basics

In addition to dragging and clicking to modify the value, you can also modify the modelValue directly to bring the slider to the specified position.

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <!-- <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full"></div>
      </template>
    </u-slider> -->

    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
      </div>

      <div class="
          px-[8px] absolute rounded-[4px] bg-[--primary-color]
          text-[12px] text-white -top-full left-1/2 -translate-x-1/2
      ">
        {{ value }}
      </div>
    </u-slider>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <!-- <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full"></div>
      </template>
    </u-slider> -->

    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
      </div>

      <div class="
          px-[8px] absolute rounded-[4px] bg-[--primary-color]
          text-[12px] text-white -top-full left-1/2 -translate-x-1/2
      ">
        {{ value }}
      </div>
    </u-slider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

```
:::

## Step size

Here, step is set to 50, which means that modelValue must be an integer multiple of step.

<Step></Step>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="50"
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
      </div>

      <div class="
          px-[8px] absolute rounded-[4px] bg-[--primary-color]
          text-[12px] text-white -top-full left-1/2 -translate-x-1/2
      ">
        {{ value }}
      </div>
    </u-slider>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="50"
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
      </div>

      <div class="
          px-[8px] absolute rounded-[4px] bg-[--primary-color]
          text-[12px] text-white -top-full left-1/2 -translate-x-1/2
      ">
        {{ value }}
      </div>
    </u-slider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

```
:::

