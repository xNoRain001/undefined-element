<script setup>
import Basic from '../examples/icon/01.basic.vue'
</script>

# Icon

Material Icons 图标库

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|def|图标的代码|string|-|
|color|图标的颜色|string|'#000'|
|width|图标的宽度|number|24|
|height|图标的高度|number|24|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
:::

## 基础

<a href='https://fonts.google.com/icons' target='_blank'>查看所有图标</a>

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

