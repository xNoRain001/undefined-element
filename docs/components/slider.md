<script setup>
import Basic from '../examples/slider/01.basic.vue'
import Step from '../examples/slider/02.step.vue'
</script>

# Slider

Slider 向用户提供一种选择最小值和最大值之间值的方法。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|min|最小值|number|0|
|max|最大值|number|100|
|step|步长|number|1|
|modelValue|模型值|number|-|
|trackClass|滑动条的样式|string|''|
|selectionClass|选中区域的样式|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|thumb|
:::

## 基础

除了通过拖拽和点击修改值以外，也可以直接修改 modelValue 的值来让滑块到指定位置。

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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

## 步长

这里将 step 设置为 50，意味着 modelValue 一定为 step 的整数倍。

<Step></Step>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
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
  <div class="w-full">
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

