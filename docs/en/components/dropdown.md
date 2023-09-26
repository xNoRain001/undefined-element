<script setup>
import Basic from '../../examples/dropdown/01.basic.vue'
import Trigger from '../../examples/dropdown/02.trigger.vue'
import Disabled from '../../examples/dropdown/03.disabled.vue'
import InterestingExamples from '../../examples/dropdown/04.interesting-examples.vue'
</script>

# Dropdown

The Dropdown component is used to implement drop-down lists

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|trigger|Trigger mode|'hover' \| 'click'|hover|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|Always display the header content|
|list|List content|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-dropdown>
      <template #default="{ visible }">
        <button class="btn">
          Dropdown
          <u-icon 
            :def="matKeyboardArrowDown"
            color="white" 
            class="ml-[8px] duration-300 transition-transform"
            :class="visible ? 'rotate-180' : ''"
          ></u-icon>
        </button>
      </template>

      <template #list>
        <div class="
          absolute z-10 w-full top-full
          p-[12px] bg-white rounded-[12px] border border-solid 
          border-[rgba(60,60,67,0.12)] 
          shadow-[0_12px_32px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08)]
        ">
          <div 
            v-for="(item, index) in list" 
            :key="index"
            class="
              px-[12px] leading-[32px] hover:text-[--vp-c-brand] 
              hover:bg-[--vp-c-bg-elv-mute] cursor-pointer text-[14px] 
              rounded-[6px] font-medium
            "
          >{{ item }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-dropdown>
      <template #default="{ visible }">
        <button class="btn">
          Dropdown
          <u-icon 
            :def="matKeyboardArrowDown"
            color="white" 
            class="ml-[8px] duration-300 transition-transform"
            :class="visible ? 'rotate-180' : ''"
          ></u-icon>
        </button>
      </template>

      <template #list>
        <div class="
          absolute z-10 w-full top-full
          p-[12px] bg-white rounded-[12px] border border-solid 
          border-[rgba(60,60,67,0.12)] 
          shadow-[0_12px_32px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08)]
        ">
          <div 
            v-for="(item, index) in list" 
            :key="index"
            class="
              px-[12px] leading-[32px] hover:text-[--vp-c-brand] 
              hover:bg-[--vp-c-bg-elv-mute] cursor-pointer text-[14px] 
              rounded-[6px] font-medium
            "
          >{{ item }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>

```
:::

## Trigger mode

This is set to click trigger

<Trigger></Trigger>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-dropdown trigger="click">
      <template #default="{ visible }">
        <button class="btn">
          Dropdown
          <u-icon 
            :def="matKeyboardArrowDown"
            color="white" 
            class="ml-[8px] duration-300 transition-transform"
            :class="visible ? 'rotate-180' : ''"
          ></u-icon>
        </button>
      </template>

      <template #list>
        <div class="
          absolute z-10 w-full top-full
          p-[12px] bg-white rounded-[12px] border border-solid 
          border-[rgba(60,60,67,0.12)] 
          shadow-[0_12px_32px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08)]
        ">
          <div 
            v-for="(item, index) in list" 
            :key="index"
            class="
              px-[12px] leading-[32px] hover:text-[--vp-c-brand] 
              hover:bg-[--vp-c-bg-elv-mute] cursor-pointer text-[14px] 
              rounded-[6px] font-medium
            "
          >{{ item }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-dropdown trigger="click">
      <template #default="{ visible }">
        <button class="btn">
          Dropdown
          <u-icon 
            :def="matKeyboardArrowDown"
            color="white" 
            class="ml-[8px] duration-300 transition-transform"
            :class="visible ? 'rotate-180' : ''"
          ></u-icon>
        </button>
      </template>

      <template #list>
        <div class="
          absolute z-10 w-full top-full
          p-[12px] bg-white rounded-[12px] border border-solid 
          border-[rgba(60,60,67,0.12)] 
          shadow-[0_12px_32px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08)]
        ">
          <div 
            v-for="(item, index) in list" 
            :key="index"
            class="
              px-[12px] leading-[32px] hover:text-[--vp-c-brand] 
              hover:bg-[--vp-c-bg-elv-mute] cursor-pointer text-[14px] 
              rounded-[6px] font-medium
            "
          >{{ item }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>

```
:::

## undefined

undefined

<Disabled></Disabled>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-dropdown disabled>
      <template #default="{ visible }">
        <button class="btn !cursor-not-allowed !bg-[--vp-c-green-lighter]">
          Dropdown
          <u-icon 
            :def="matKeyboardArrowDown"
            color="white" 
            class="ml-[8px] duration-300 transition-transform !cursor-not-allowed"
            :class="visible ? 'rotate-180' : ''"
          ></u-icon>
        </button>
      </template>

      <template #list>
        <div class="
          absolute z-10 w-full top-full
          p-[12px] bg-white rounded-[12px] border border-solid 
          border-[rgba(60,60,67,0.12)] 
          shadow-[0_12px_32px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08)]
        ">
          <div 
            v-for="(item, index) in list" 
            :key="index"
            class="
              px-[12px] leading-[32px] hover:text-[--vp-c-brand] 
              hover:bg-[--vp-c-bg-elv-mute] cursor-pointer text-[14px] 
              rounded-[6px] font-medium
            "
          >{{ item }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-dropdown disabled>
      <template #default="{ visible }">
        <button class="btn !cursor-not-allowed !bg-[--vp-c-green-lighter]">
          Dropdown
          <u-icon 
            :def="matKeyboardArrowDown"
            color="white" 
            class="ml-[8px] duration-300 transition-transform !cursor-not-allowed"
            :class="visible ? 'rotate-180' : ''"
          ></u-icon>
        </button>
      </template>

      <template #list>
        <div class="
          absolute z-10 w-full top-full
          p-[12px] bg-white rounded-[12px] border border-solid 
          border-[rgba(60,60,67,0.12)] 
          shadow-[0_12px_32px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.08)]
        ">
          <div 
            v-for="(item, index) in list" 
            :key="index"
            class="
              px-[12px] leading-[32px] hover:text-[--vp-c-brand] 
              hover:bg-[--vp-c-bg-elv-mute] cursor-pointer text-[14px] 
              rounded-[6px] font-medium
            "
          >{{ item }}</div>
        </div>
      </template>
    </u-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>

```
:::

## undefined

undefined

<InterestingExamples></InterestingExamples>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px] flex items-center flex-wrap">
    <u-dropdown>
      <button class="btn">Tooltip</button>

      <template #list>
        <div class="
          absolute z-10 -bottom-full left-1/2 -translate-x-1/2 
          py-[6px] whitespace-nowrap px-[10px] 
          bg-gray-500 text-white text-[12px] rounded-[4px]
        ">
          Lorem, ipsum dolor.
        </div>
      </template>
    </u-dropdown>
  </div> 
</template>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px] flex items-center flex-wrap">
    <u-dropdown>
      <button class="btn">Tooltip</button>

      <template #list>
        <div class="
          absolute z-10 -bottom-full left-1/2 -translate-x-1/2 
          py-[6px] whitespace-nowrap px-[10px] 
          bg-gray-500 text-white text-[12px] rounded-[4px]
        ">
          Lorem, ipsum dolor.
        </div>
      </template>
    </u-dropdown>
  </div> 
</template>


```
:::

