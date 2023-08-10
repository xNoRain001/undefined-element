<!-- import -->
<script setup>
import Basic from '../examples/rating/01.basic.vue'
</script>
<!-- import -->

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-rating v-model="value1" max="5" color="black" activeColor="#eab308">
      <u-icon name="star" fill="currentColor"></u-icon>
    </u-rating>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(3)
</script>
```

:::
<!-- component -->
