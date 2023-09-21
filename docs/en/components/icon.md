<script setup>
import Basic from '../../examples/icon/01.basic.vue'
</script>

# Icon

Material Icons library

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|def|Icon code|string|-|
|color|Icon color|string|'#000'|
|width|Icon width|number|24|
|height|Icon height|number|24|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
:::

## Basics

< a href = "https://fonts.google.com/icons" target = "_blank" > view all icon < / a >

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="py-[16px]">
    <u-icon :def="matFavorite" width="18" height="18" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="24" height="24" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="32" height="32" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="38" height="38" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="46" height="46" color="var(--primary-color)"></u-icon>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matFavorite } from 'undefined-element-icons/src/material-icons/filled'
</script>
```

```vue [all]
<template>
  <div class="py-[16px]">
    <u-icon :def="matFavorite" width="18" height="18" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="24" height="24" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="32" height="32" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="38" height="38" color="var(--primary-color)"></u-icon>
    <u-icon :def="matFavorite" width="46" height="46" color="var(--primary-color)"></u-icon>
  </div>
</template>
<script lang="ts" setup>
import { matFavorite } from 'undefined-element-icons/src/material-icons/filled'
</script>

```
:::

