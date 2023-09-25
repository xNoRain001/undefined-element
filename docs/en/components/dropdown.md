<script setup>
import Basic from '../../examples/dropdown/01.basic.vue'
import Trigger from '../../examples/dropdown/02.trigger.vue'
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
        <button 
          class="btn">
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
        <button 
          class="btn">
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
        <button 
          class="btn">
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
        <button 
          class="btn">
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

