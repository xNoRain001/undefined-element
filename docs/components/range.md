<script setup>
import Basic from '../examples/range/01.basic.vue'
import Step from '../examples/range/02.step.vue'
</script>

# Range

Range 组件是一种向用户提供的范围选择的组件。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|min|最小值|number|0|
|max|最大值|number|0|
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

## 步长



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

