<!-- import -->
<script setup>
import Basic from '../examples/range/01.basic.vue'
</script>
<!-- import -->

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = { min: 20, max: 80 }
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-range 
      v-model="value" 
      :min="0"
      :max="100" 
      class="h-[40px]"
      trackClass="h-[4px] bg-[--primary-border-color] rounded-[4px]"
      selectionClass="bg-[--primary-color]"
    >
      <template #left-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.min }}
        </div>
      </template>

      <template #right-thumb>
        <div class="w-[20px] h-[20px] bg-[--primary-color] rounded-full">
        </div>

        <div class="
            px-[8px] absolute rounded-[4px] bg-[--primary-color]
            text-[12px] text-white -top-full left-1/2 -translate-x-1/2
        ">
          {{ value.max }}
        </div>
      </template>
    </u-range>
  </div>
</template>
<script lang="ts" setup>
const value = { min: 20, max: 80 }
</script>

```

:::
<!-- component -->
