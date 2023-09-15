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

<!-- title -->
# Input
<!-- title -->

<!-- desc -->
Input 组件用于捕获来自用户的文本输入，它使用 v-model，类似于常规输入。
<!-- desc -->

<!-- props -->
:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|type|输入框的类型|string|'text'|
|debounce|输入框的防抖间隔，值为 0 时表示不开启防抖。|number|0|
|readonly|只读的输入框|boolean|false|
|disabled|禁用输入框|boolean|false|
|aotofocus|自动聚焦的输入框|boolean|false|
|modelValue|输入框绑定的值||-|
|inputClass|表单样式|string|''|
|placeholder|输入框的占位符|string|''|
|focusedClass|聚焦时表单容器的样式|string|''|
:::
<!-- props -->

<!-- slots -->
:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|容器左边的内容|
|after|容器右边的内容|
|prepend|输入框左边的内容|
|append|输入框右边的内容|
:::
<!-- slots -->

<!-- events -->
:::details 事件
|Slotname|Description|
|-------------|:-----------:|
|focus|获得焦点|
|blur|失去焦点|
|clear|清空|
:::
<!-- events -->

<!-- title -->
## 基础
<!-- title -->

<!-- desc -->
Input 组件由原生 input 标签和包裹它的容器组成，为了在容器边框宽度变化时不让文字抖动，所有与边框相关的样式都应该要作用到容器的伪元素 before 上，对于聚焦时的边框样式，通过 focusedContainerClass 属性来设置。
<!-- desc -->

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

<!-- title -->
## 占位符
<!-- title -->

<!-- desc -->
<!-- desc -->

<!-- component -->
<Placeholder></Placeholder>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

<!-- title -->
## 防抖
<!-- title -->

<!-- desc -->
<!-- desc -->

<!-- component -->
<Debounce></Debounce>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

<!-- subtitle -->
## 只读
<!-- subtitle -->

<!-- desc -->
<!-- desc -->

<!-- component -->
<Readonly></Readonly>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

<!-- subtitle -->
## 禁用
<!-- subtitle -->

<!-- desc -->
<!-- desc -->

<!-- component -->
<Disabled></Disabled>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

<!-- subtitle -->
## 清空
<!-- subtitle -->

<!-- desc -->
点击含有 clearable 属性的元素后，会点击清空表单的值，
<!-- desc -->

<!-- component -->
<Clearable></Clearable>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

::: tip
如果要控制 clearable 属性的元素的隐藏和出现，不要使用 v-if，而是使用 v-show，因为只会在初始化时给该元素绑定事件。
:::

<!-- subtitle -->
## 自动聚焦
<!-- subtitle -->

<!-- desc -->
<!-- desc -->

<!-- component -->
<Autofocus></Autofocus>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->

<!-- subtitle -->
## 密码框
<!-- subtitle -->

<!-- desc -->
当 type 为 password 时，点击含有 password 属性的元素时可以切换密码的可见性。
<!-- desc -->

<!-- component -->
<Types></Types>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
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
  <div class="my-[16px]">
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
<!-- component -->
