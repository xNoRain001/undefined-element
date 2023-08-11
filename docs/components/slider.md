<!-- import -->
<script setup>
import Basic from '../examples/slider/01.basic.vue'
import Step from '../examples/slider/02.step.vue'
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
    <div>value: {{ value }}</div>
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      class="w-full h-[20px] flex items-center"
      trackClass="w-full h-[4px] bg-[rgba(0,0,0,.1)] flex items-center"
      selectionClass="h-full bg-[#1976d2]"
      thumbClass="w-[20px] h-[20px] bg-[#1976d2] rounded-full"
    ></u-slider>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <div>value: {{ value }}</div>
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      class="w-full h-[20px] flex items-center"
      trackClass="w-full h-[4px] bg-[rgba(0,0,0,.1)] flex items-center"
      selectionClass="h-full bg-[#1976d2]"
      thumbClass="w-[20px] h-[20px] bg-[#1976d2] rounded-full"
    ></u-slider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

```

:::
<!-- component -->

## 间隔

<!-- component -->
<Step></Step>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <div>value: {{ value }}</div>
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="50"
      class="w-full h-[20px] flex items-center"
      trackClass="w-full h-[4px] bg-[rgba(0,0,0,.1)] flex items-center"
      selectionClass="h-full bg-[#1976d2]"
      thumbClass="w-[20px] h-[20px] bg-[#1976d2] rounded-full"
    ></u-slider>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <div>value: {{ value }}</div>
    <u-slider 
      v-model="value" 
      :min="0"
      :max="100" 
      :step="50"
      class="w-full h-[20px] flex items-center"
      trackClass="w-full h-[4px] bg-[rgba(0,0,0,.1)] flex items-center"
      selectionClass="h-full bg-[#1976d2]"
      thumbClass="w-[20px] h-[20px] bg-[#1976d2] rounded-full"
    ></u-slider>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

```

:::
<!-- component -->
