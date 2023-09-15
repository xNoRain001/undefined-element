<!-- import -->
<script setup>
import Basic from '../examples/rating/01.basic.vue'
</script>
<!-- import -->

<!-- title -->
# Rating
<!-- title -->

<!-- desc -->
Rating 组件的作用是进行星级评分
<!-- desc -->

<!-- props -->
:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|max|评分的最大值|number|-|
|color|未点亮时图标的颜色|string|#000|
|modelValue|绑定的值|number|-|
|activeColor|点亮时图标的颜色|string|#eab308|
:::
<!-- props -->

<!-- slots -->
:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|图标|
:::
<!-- slots -->

<!-- subtitle -->
## 基础
<!-- subtitle -->

<!-- desc -->
<!-- desc -->

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-rating v-model="value" :max="5" color="black" activeColor="var(--primary-color)">
      <u-icon :def="matStar" fill="currentColor"></u-icon>
    </u-rating>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matStar } from 'undefined-element-icons/src/material-icons/filled'

const value = ref(3)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-rating v-model="value" :max="5" color="black" activeColor="var(--primary-color)">
      <u-icon :def="matStar" fill="currentColor"></u-icon>
    </u-rating>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matStar } from 'undefined-element-icons/src/material-icons/filled'

const value = ref(3)
</script>

```

:::
<!-- component -->
