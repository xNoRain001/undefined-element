<!-- import -->
<script setup>
import Basic from '../examples/input/01.basic.vue'
import Placeholder from '../examples/input/02.placeholder.vue'
</script>
<!-- import -->

# Input

:::details 属性
| 属性名        | 描述      | 类型 | 默认值 |
| ------------- | :-----------: | :----: | ----: |
| type      | 类型 | string | 'text' |
| debounce      | 防抖间隔，值为 0 时表示不开启防抖。 | number | 0 |
| readonly      | 只读 | boolean | false |
| disabled      | 禁用 | boolean | false |
| aotofocus      | 自动聚焦 | boolean | false |
| modelValue      | 绑定的值 |  | - |
| inputClass      | 表单样式 | string | '' |
| placeholder      | 占位符 | string | '' |
| focusedClass      | 聚焦时表单容器的样式 | string | '' |
:::

:::details 插槽
| 插槽名        | 描述   |
| ------------- | :-----------: |
| before      | before input container |
| after      |   after input container    |
| prepend |   before input    |
| append |   after input    |
:::

<!-- :::details Events
| Slot name         | Description   |
| ------------- | :-----------: |
| before      | before input container |
| after      |   after input container    |
| prepend |   before input    |
| append |   after input    |
::: -->

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[56px] px-[12px] rounded-[4px]
        before:border before:border-solid before:border-[rgba(0,0,0,.23)]
        hover:before:border-[rgba(0,0,0,.87)]
      "
      focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
      inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
      v-model="value1"
    >
    </u-input>
    <template></template>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
</script>
```

:::
<!-- component -->

<!-- component -->
<Placeholder></Placeholder>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[56px] px-[12px] rounded-[4px]
        before:border before:border-solid before:border-[rgba(0,0,0,.23)]
        hover:before:border-[rgba(0,0,0,.87)]
      "
      focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
      inputClass="
        text-[rgba(0,0,0,.87)] text-[14px] font-normal
        placeholder:text-red-500
      "
      v-model="value"
      placeholder="Write your story!"
    >
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

:::
<!-- component -->