<!-- import -->
<script setup>
import Basic from '../examples/dropdown/01.basic.vue'
import Trigger from '../examples/dropdown/02.trigger.vue'
</script>
<!-- import -->

# Dropdown

Dropdown 组件用于实现下拉列表

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|trigger|触发方式|'hover' \| 'click'|'hover|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|始终显示的头部内容|
|list|列表内容|
:::

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-dropdown>
    <template #default="{ visible }">
      <button 
        class="btn">
        Dropdown
        <u-icon 
          name="keyboard_arrow_down" 
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
</template>
```

```vue [script]
<script lang="ts" setup>
const list = ['简体中文', 'English']
</script>
```

```vue [all]
<template>
  <u-dropdown>
    <template #default="{ visible }">
      <button 
        class="btn">
        Dropdown
        <u-icon 
          name="keyboard_arrow_down" 
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
</template>
<script lang="ts" setup>
const list = ['简体中文', 'English']
</script>

```

:::
<!-- component -->

## 触发方式

这里设置为点击触发

<!-- component -->
<Trigger></Trigger>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-dropdown trigger="click">
    <template #default="{ visible }">
      <button 
        class="btn">
        Dropdown
        <u-icon 
          name="keyboard_arrow_down" 
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
</template>
```

```vue [script]
<script lang="ts" setup>
const list = ['简体中文', 'English']
</script>
```

```vue [all]
<template>
  <u-dropdown trigger="click">
    <template #default="{ visible }">
      <button 
        class="btn">
        Dropdown
        <u-icon 
          name="keyboard_arrow_down" 
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
</template>
<script lang="ts" setup>
const list = ['简体中文', 'English']
</script>

```

:::
<!-- component -->
