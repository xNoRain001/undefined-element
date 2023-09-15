<!-- import -->
<script setup>
import Basic from '../examples/dropdown/01.basic.vue'
import Trigger from '../examples/dropdown/02.trigger.vue'
</script>
<!-- import -->

<!-- title -->
<!-- title -->

<!-- desc -->
<!-- desc -->

<!-- props -->
<!-- props -->

<!-- subtitle -->
<!-- subtitle -->

<!-- desc -->
<!-- desc -->

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
</template>
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>

```

:::
<!-- component -->

<!-- subtitle -->
## 触发方式
<!-- subtitle -->

<!-- desc -->
<!-- desc -->

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
</template>
<script lang="ts" setup>
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const list = ['简体中文', 'English']
</script>

```

:::
<!-- component -->
