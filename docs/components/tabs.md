<script setup>
import Basic from '../examples/tabs/01.basic.vue'
</script>

# Tabs



:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|modelValue|模型值|string|-|
|indicatorClass|标识符样式|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|默认插槽|
:::

## 基础



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-tabs 
      v-model="activeTab" 
      class="h-[40px] flex" 
      indicatorClass="h-[2px] bg-[--primary-color]"
    >
      <u-tab 
        :name="name" 
        :key="name" 
        v-for="{ label, name } in tabs"
        class="
          font-medium flex items-center border-x-0 relative
          border-t-0 border-b-transparent border-solid border-[2px] mx-[16px]
          hover:text-[--primary-color] first:ml-0
        "
        :class="name === activeTab ? 'text-[--primary-color]' : ''"
      >
        {{ label }}
      </u-tab> 
    </u-tabs>

    <u-tab-panels v-model="activeTab">
      <u-tab-panel 
        :name="name" 
        :key="name" 
        v-for="{ label, name } in tabs"
        class="p-[16px] text-[32px] font-semibold"
      >
        {{ label }}
      </u-tab-panel>
    </u-tab-panels>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const activeTab = ref('feature')
const tabs = reactive([
  {
    label: 'Home',
    name: 'home'
  },
  {
    label: 'Feature',
    name: 'feature'
  },
  {
    label: 'About us',
    name: 'aboutUs'
  }
])
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-tabs 
      v-model="activeTab" 
      class="h-[40px] flex" 
      indicatorClass="h-[2px] bg-[--primary-color]"
    >
      <u-tab 
        :name="name" 
        :key="name" 
        v-for="{ label, name } in tabs"
        class="
          font-medium flex items-center border-x-0 relative
          border-t-0 border-b-transparent border-solid border-[2px] mx-[16px]
          hover:text-[--primary-color] first:ml-0
        "
        :class="name === activeTab ? 'text-[--primary-color]' : ''"
      >
        {{ label }}
      </u-tab> 
    </u-tabs>

    <u-tab-panels v-model="activeTab">
      <u-tab-panel 
        :name="name" 
        :key="name" 
        v-for="{ label, name } in tabs"
        class="p-[16px] text-[32px] font-semibold"
      >
        {{ label }}
      </u-tab-panel>
    </u-tab-panels>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const activeTab = ref('feature')
const tabs = reactive([
  {
    label: 'Home',
    name: 'home'
  },
  {
    label: 'Feature',
    name: 'feature'
  },
  {
    label: 'About us',
    name: 'aboutUs'
  }
])
</script>

```
:::

