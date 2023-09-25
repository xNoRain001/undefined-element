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

# Input

Input 组件用于捕获来自用户的文本输入，它使用 v-model，类似于常规输入。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|type|输入框的类型|string|'text'|
|debounce|输入框的防抖间隔，值为 0 时表示不开启防抖。|number|0|
|readonly|只读的输入框|boolean|false|
|disabled|禁用输入框|boolean|false|
|aotofocus|自动聚焦的输入框|boolean|false|
|modelValue|输入框绑定的值|string|-|
|inputClass|表单样式|string|''|
|placeholder|输入框的占位符|string|''|
|focusedClass|聚焦时表单容器的样式|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|容器左边的内容|
|after|容器右边的内容|
|prepend|输入框左边的内容|
|append|输入框右边的内容|
:::

## 基础

Input 组件由原生 input 标签和包裹它的容器组成，为了在容器边框宽度变化时不让文字抖动，所有与边框相关的样式都应该要作用到容器的伪元素 before 上，对于聚焦时的边框样式，通过 focusedContainerClass 属性来设置。

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
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

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
    >
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

```
:::

## 占位符



<Placeholder></Placeholder>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      inputClass="placeholder:text-[--primary-color-light]"
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

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      inputClass="placeholder:text-[--primary-color-light]"
      placeholder="Write your story!"
    >
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

```
:::

## 防抖



<Debounce></Debounce>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
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

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      :debounce="300"
    >
    </u-input>

    <div class="mt-[16px]">value: {{ value }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

```
:::

## 只读



<Readonly></Readonly>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
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

const value = ref('readonly text')
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      v-model="value"
      readonly
    >
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('readonly text')
</script>

```
:::

## 禁用



<Disabled></Disabled>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        text-[14px] font-normal
      "
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

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        text-[14px] font-normal
      "
      v-model="value"
      disabled
    >
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('This is disabled input')
</script>

```
:::

## 清空

点击含有 clearable 属性的元素后，会点击清空表单的值，

<Clearable></Clearable>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
    >
      <template #append>
        <u-icon 
          v-show="value.length" 
          :def="matClose" 
          clearable
        ></u-icon>
      </template>
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('This is clearable input')
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
    >
      <template #append>
        <u-icon 
          v-show="value.length" 
          :def="matClose" 
          clearable
        ></u-icon>
      </template>
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('This is clearable input')
</script>

```
:::

## 自动聚焦



<Autofocus></Autofocus>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
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

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      autofocus
    >
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

```
:::

## 密码框

当 type 为 password 时，点击含有 password 属性的元素时可以切换密码的可见性。

<Types></Types>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      type="password"
    >
      <template #append="{ visible }">
        <u-icon 
          password 
          :def="visible ? matVisibility : matVisibilityOff"
        ></u-icon>
      </template>
    </u-input>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matVisibility, 
  matVisibilityOff 
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-input
      containerClass="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value"
      type="password"
    >
      <template #append="{ visible }">
        <u-icon 
          password 
          :def="visible ? matVisibility : matVisibilityOff"
        ></u-icon>
      </template>
    </u-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matVisibility, 
  matVisibilityOff 
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
</script>

```
:::

