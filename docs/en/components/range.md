<script setup>
import Basic from '../../examples/range/01.basic.vue'
import Step from '../../examples/range/02.step.vue'
</script>

# Range

A Range component is a range selection component that is provided to the user.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|min|Minimum value|number|0|
|max|Maximum value|number|0|
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



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const value = reactive({ min: 20, max: 80 })
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const value = reactive({ min: 20, max: 80 })
</script>

```
:::

## Step size



<Step></Step>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="20"
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const value = reactive({ min: 20, max: 80 })
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="20"
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const value = reactive({ min: 20, max: 80 })
</script>

```
:::

