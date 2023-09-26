<script setup>
import Basic from '../../examples/tooltip/01.basic.vue'
</script>

# Tooltip



:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px] flex items-center flex-wrap">
    <u-tooltip>
      <button class="btn m-[4px]">Top</button>

      <template #text>
        <div class="
          absolute z-10 -top-full whitespace-nowrap py-[6px] px-[10px] 
          bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
        ">
          Lorem, ipsum dolor.
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
          Lorem, ipsum dolor.
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
          Lorem, ipsum dolor.
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
          Lorem, ipsum dolor.
        </div>
      </template>
    </u-tooltip>
  </div> 
</template>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px] flex items-center flex-wrap">
    <u-tooltip>
      <button class="btn m-[4px]">Top</button>

      <template #text>
        <div class="
          absolute z-10 -top-full whitespace-nowrap py-[6px] px-[10px] 
          bg-[#757575] text-[#fafafa] text-[12px] rounded-[4px]
        ">
          Lorem, ipsum dolor.
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
          Lorem, ipsum dolor.
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
          Lorem, ipsum dolor.
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
          Lorem, ipsum dolor.
        </div>
      </template>
    </u-tooltip>
  </div> 
</template>


```
:::

