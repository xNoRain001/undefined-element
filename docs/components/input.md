<!-- import -->
<script setup>
import Basic from '../examples/input/01.basic.vue'
import Placeholder from '../examples/input/02.placeholder.vue'
import Debounce from '../examples/input/03.debounce.vue'
import Readonly from '../examples/input/04.readonly.vue'
import Disabled from '../examples/input/05.disabled.vue'
import Clearable from '../examples/input/06.clearable.vue'
import Autofocus from '../examples/input/07.autofocus.vue'
import Types from '../examples/input/08.types.vue'
</script>
<!-- import -->

# Input

Input 组件用于捕获来自用户的文本输入，它使用v-model，类似于常规输入。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|type|类型|string|'text'|
|debounce|防抖间隔，值为 0 时表示不开启防抖。|number|0|
|readonly|只读|boolean|false|
|disabled|禁用|boolean|false|
|aotofocus|自动聚焦|boolean|false|
|modelValue|绑定的值||-|
|inputClass|表单样式|string|''|
|placeholder|占位符|string|''|
|focusedClass|聚焦时表单容器的样式|string|''|
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

## 基础

<!-- u-input 组件上的 class 并不是作用在 input 元素上的，而是 input 的父元素， -->

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

## 占位符

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

## 防抖

<!-- component -->
<Debounce></Debounce>
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
      v-model="value"
      :debounce="300"
    >
    </u-input>

    <div class="mt-[16px]">value: {{ value }}</div>
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

## 只读

<!-- component -->
<Readonly></Readonly>
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
      v-model="value"
      readonly
    >
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('This is readonly input')
</script>
```

:::
<!-- component -->

## 禁用

<!-- component -->
<Disabled></Disabled>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[56px] px-[12px] rounded-[4px]
        before:border before:border-solid before:border-[rgba(0,0,0,.23)]
      "
      focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
      inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
      v-model="value"
      disabled
    >
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('This is disabled input')
</script>
```

:::
<!-- component -->

## 清空

<!-- component -->
<Clearable></Clearable>
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
      v-model="value"
    >
      <template #append>
        <u-icon name="close" width="16" height="16" clearable></u-icon>
      </template>
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('This is clearable input')
</script>
```

:::
<!-- component -->

## 自动聚焦

<!-- component -->
<Autofocus></Autofocus>
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
      v-model="value"
      autofocus
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

## 类型

<!-- component -->
<Types></Types>
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
      v-model="value"
      type="password"
    >
      <template #append>
        <u-icon 
          visible
          @click="updateVisible" 
          :name="visible ? 'visibility' : 'visibility_off'"
        ></u-icon>
      </template>
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
```

:::
<!-- component -->
