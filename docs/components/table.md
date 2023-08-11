<!-- import -->
<script setup>
import Basic from '../examples/table/01.basic.vue'
import Sort from '../examples/table/02.sort.vue'
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
    <u-table 
      :head="head" 
      :body="body"
      thClass=""
      tdClass="
        border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
        h-[48px] text-[13px] text-center
      "
      headTrClass=""
      bodyTrClass="hover:bg-[rgba(0,0,0,.08)]"
      tableClass="w-full border-separate border-spacing-0"
    ></u-table>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const head = [
  {
    field: 'a',
    label: 'A'
  },
  {
    field: 'b',
    label: 'B'
  },
  {
    field: 'c',
    label: 'C'
  },
]
const body = reactive([
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
])
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-table 
      :head="head" 
      :body="body"
      thClass=""
      tdClass="
        border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
        h-[48px] text-[13px] text-center
      "
      headTrClass=""
      bodyTrClass="hover:bg-[rgba(0,0,0,.08)]"
      tableClass="w-full border-separate border-spacing-0"
    ></u-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const head = [
  {
    field: 'a',
    label: 'A'
  },
  {
    field: 'b',
    label: 'B'
  },
  {
    field: 'c',
    label: 'C'
  },
]
const body = reactive([
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
])
</script>

```

:::
<!-- component -->

## 排序

<!-- component -->
<Sort></Sort>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-table 
      :head="head" 
      :body="body"
      tdClass="
        border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
        h-[48px] text-[13px] text-center
      "
      thClass=""
      headTrClass=""
      bodyTrClass="hover:bg-[rgba(0,0,0,.08)]"
      tableClass="w-full border-separate border-spacing-0"
    >
      <template #th="{ label, sortable }">
        <div class="flex justify-center items-center">
          <span>{{ label }}</span>
          <u-icon v-if="sortable" name="expand_less" width="24" height="24"></u-icon>
        </div>
      </template>
    </u-table>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const head = [
  {
    field: 'a',
    label: 'A',
    sortable: true,
    sortOrder: 'asc' // default value is desc
  },
  {
    field: 'b',
    label: 'B'
  },
  {
    field: 'c',
    label: 'C'
  },
]
const body = reactive([
  {
    a: 3,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: 1,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: 2,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
])
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-table 
      :head="head" 
      :body="body"
      tdClass="
        border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
        h-[48px] text-[13px] text-center
      "
      thClass=""
      headTrClass=""
      bodyTrClass="hover:bg-[rgba(0,0,0,.08)]"
      tableClass="w-full border-separate border-spacing-0"
    >
      <template #th="{ label, sortable }">
        <div class="flex justify-center items-center">
          <span>{{ label }}</span>
          <u-icon v-if="sortable" name="expand_less" width="24" height="24"></u-icon>
        </div>
      </template>
    </u-table>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const head = [
  {
    field: 'a',
    label: 'A',
    sortable: true,
    sortOrder: 'asc' // default value is desc
  },
  {
    field: 'b',
    label: 'B'
  },
  {
    field: 'c',
    label: 'C'
  },
]
const body = reactive([
  {
    a: 3,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: 1,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: 2,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
])
</script>

```

:::
<!-- component -->
