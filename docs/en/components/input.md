<script setup>
import Basic from '../../examples/input/01.basic.vue'
import Placeholder from '../../examples/input/02.placeholder.vue'
import Debounce from '../../examples/input/03.debounce.vue'
import Readonly from '../../examples/input/04.readonly.vue'
import Disabled from '../../examples/input/05.disabled.vue'
import Clearable from '../../examples/input/06.clearable.vue'
import Autofocus from '../../examples/input/07.autofocus.vue'
import Types from '../../examples/input/08.types.vue'
</script>

# Input

The Input component is used to capture text input from the user using a v-model, similar to regular input.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|type|Type of the input box|string|'text'|
|debounce|Enter the anti-shake interval of the box. If the value is 0, anti-shake is not enabled.|number|0|
|readonly|Read-only input field|boolean|false|
|disabled|Disable input field|boolean|false|
|aotofocus|Autofocus input box|boolean|false|
|modelValue|Enter the value bound to the box|string|-|
|inputClass|Form style|string|''|
|placeholder|A placeholder for the input field|string|''|
|focusedClass|Focus on the style of the form container|string|''|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|The contents to the left of the container|
|after|The contents to the right of the container|
|prepend|Enter the content to the left of the box|
|append|Enter the content to the right of the box|
:::

## Basics

The Input component consists of the native input tag and the container that wraps it. In order to keep text from jitter when the container border width changes, all bezel-related styles should be applied to the container pseudo-element before. For focused border styles, This is set using the focusedContainerClass attribute.

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

## placeholder



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

## anti-shake



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

## Read only



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

## forbidden



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

## Clear

After clicking on the element with the clearable attribute, it will click on the value to clear the form,

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

## autofocus



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

## Password box

When type is password, you can switch the visibility of the password when you click on the element with the password attribute.

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

