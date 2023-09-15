<!-- import -->
<script setup>
import Basic from '../examples/icon/01.basic.vue'
</script>
<!-- import -->

<!-- title -->
# Icon
<!-- title -->

<!-- desc -->
Material Icons 图标库
<!-- desc -->

<!-- 
  |name|图标的名称，支持下划线命名法如 check_circle 和大驼峰命名法如 checkCircle。|string|-|
  |type|图标的类型|'outlined' \| 'filled' \| 'rounded' \| 'sharp'|'filled'| -->

<!-- props -->
:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|name|图标的名称，支持下划线命名法如 check_circle 和大驼峰命名法如 checkCircle。|string|-|
|type|图标的类型|'outlined' \| 'filled' \| 'rounded' \| 'sharp'|'filled'|
|color|图标的颜色|string|'#000'|
|width|图标的宽度|string|number|24|
|width|图标的高度|string|number|24|
:::
<!-- props -->

<!-- subtitle -->
## 基础
<!-- subtitle -->

<!-- desc -->
<a href="https://fonts.google.com/icons" target="_blank">查看所有图标</a>
<!-- desc -->

<!-- component -->
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
<!-- component -->
