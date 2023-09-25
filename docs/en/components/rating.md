<script setup>
import Basic from '../../examples/rating/01.basic.vue'
</script>

# Rating

The function of the Rating component is to give star ratings

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|max|Maximum score|number|-|
|color|The color of the icon when it is not lit|string|'#000'|
|modelValue|Bound value|number|-|
|activeColor|The color of the icon when lit|string|'#eab308'|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|icon|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

