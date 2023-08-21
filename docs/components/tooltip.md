<!-- import -->
<script setup>
import Basic from '../examples/tooltip/01.basic.vue'
</script>
<!-- import -->

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-tooltip>
    <button class="btn m-[4px]">Top</button>

    <template #text>
      <div class="
        absolute z-10 -top-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>

  <u-tooltip>
    <button class="btn m-[4px]">Right</button>

    <template #text>
      <div class="
        absolute z-10 top-1/2 -translate-y-1/2 left-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>

  <u-tooltip>
    <button class="btn m-[4px]">Bottom</button>

    <template #text>
      <div class="
        absolute z-10 top-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>

  <u-tooltip>
    <button class="btn m-[4px]">Left</button>

    <template #text>
      <div class="
        absolute z-10 top-1/2 -translate-y-1/2 -left-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>
</template>
```

```vue [all]
<template>
  <u-tooltip>
    <button class="btn m-[4px]">Top</button>

    <template #text>
      <div class="
        absolute z-10 -top-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>

  <u-tooltip>
    <button class="btn m-[4px]">Right</button>

    <template #text>
      <div class="
        absolute z-10 top-1/2 -translate-y-1/2 left-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>

  <u-tooltip>
    <button class="btn m-[4px]">Bottom</button>

    <template #text>
      <div class="
        absolute z-10 top-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>

  <u-tooltip>
    <button class="btn m-[4px]">Left</button>

    <template #text>
      <div class="
        absolute z-10 top-1/2 -translate-y-1/2 -left-full whitespace-nowrap py-[6px] px-[10px] 
        bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
      ">
        Here I am!
      </div>
    </template>
  </u-tooltip>
</template>


```

:::
<!-- component -->
