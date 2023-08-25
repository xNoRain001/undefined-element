<!-- import -->
<script setup>
import Basic from '../examples/slider/01.basic.vue'
import Step from '../examples/slider/02.step.vue'
</script>
<!-- import -->

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

<!-- component -->
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
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <!-- before:content-[''] 
        before:border-[6px] before:border-solid
        before:border-b-transparent before:border-x-transparent
        before:absolute before:bottom-0 before:left-1/2 
        before:-translate-x-1/2 before:border-red-500 -->
        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value }}
        </div>
      </template>
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
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <!-- before:content-[''] 
        before:border-[6px] before:border-solid
        before:border-b-transparent before:border-x-transparent
        before:absolute before:bottom-0 before:left-1/2 
        before:-translate-x-1/2 before:border-red-500 -->
        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value }}
        </div>
      </template>
    </u-slider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

```

:::
<!-- component -->

## 步长

<!-- component -->
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
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value }}
        </div>
      </template>
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
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value }}
        </div>
      </template>
    </u-slider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

```

:::
<!-- component -->
