<!-- import -->
<script setup>
import Basic from '../examples/icon/01.basic.vue'
</script>
<!-- import -->

# Icon

Material Icons 图标库

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|name|图标的名称，支持下划线命名法如 check_circle 和大驼峰命名法如 checkCircle。|string|-|
|type|图标的类型|'outlined' \| 'filled' \| 'rounded' \| 'sharp'|'filled'|
|color|图标的颜色|string|'#000'|
|width|图标的宽度|string|number|24|
|width|图标的高度|string|number|24|
:::

## 基础

<a href="https://fonts.google.com/icons" target="_blank">查看所有图标</a>

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full grid gap-y-[16px]">
    <div>
      <u-icon name="favorite" width="18" height="18" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="24" height="24" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="32" height="32" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="38" height="38" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="46" height="46" color="#1976d2"></u-icon>
    </div>
    
    <div>
      <u-icon type="outlined" name="thumb_up" width="18" height="18" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="24" height="24" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="32" height="32" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="38" height="38" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="46" height="46" color="#1976d2"></u-icon>
    </div>
  </div>
</template>
```

```vue [all]
<template>
  <div class="w-full grid gap-y-[16px]">
    <div>
      <u-icon name="favorite" width="18" height="18" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="24" height="24" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="32" height="32" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="38" height="38" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="46" height="46" color="#1976d2"></u-icon>
    </div>
    
    <div>
      <u-icon type="outlined" name="thumb_up" width="18" height="18" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="24" height="24" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="32" height="32" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="38" height="38" color="#1976d2"></u-icon>
      <u-icon type="outlined" name="thumb_up" width="46" height="46" color="#1976d2"></u-icon>
    </div>
  </div>
</template>


```

:::
<!-- component -->
