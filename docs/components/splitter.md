<!-- import -->
<script setup>
import Basic from '../examples/splitter/01.basic.vue'
import Horizontal from '../examples/splitter/02.horizontal.vue'
import Range from '../examples/splitter/03.range.vue'
import Separator from '../examples/splitter/04.separator.vue'
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
    <u-splitter 
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>

```

:::
<!-- component -->

## 水平的

<!-- component -->
<Horizontal></Horizontal>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      horizontal 
      class="w-full h-[400px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-full h-[13px] flex justify-center items-center">
          <div class="
            w-full border-[1px] border-solid border-[#dcdfe6] border-b-0 
            border-x-0
          "></div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      horizontal 
      class="w-full h-[400px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-full h-[13px] flex justify-center items-center">
          <div class="
            w-full border-[1px] border-solid border-[#dcdfe6] border-b-0 
            border-x-0
          "></div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>

```

:::
<!-- component -->

## 范围

<!-- component -->
<Range></Range>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-splitter 
      min="10"
      max="60"
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-splitter 
      min="10"
      max="60"
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>

```

:::
<!-- component -->

## 分隔

<!-- component -->
<Separator></Separator>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center relative">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
          <div class="
            w-[40px] h-[40px] bg-[rgb(25,118,210)] rounded-full absolute
            flex justify-center items-center top-1/2 -translate-y-1/2
            cursor-move
          ">
            <u-icon class="!cursor-move" name="drag_indicator" color="white"></u-icon>
          </div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-splitter 
      v-model="value" 
      class="w-full h-[200px]"
    >
      <template #before>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
      <template #splitter>
        <div class="w-[13px] h-full flex justify-center relative">
          <div class="
            h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
            border-r-0
          "></div>
          <div class="
            w-[40px] h-[40px] bg-[rgb(25,118,210)] rounded-full absolute
            flex justify-center items-center top-1/2 -translate-y-1/2
            cursor-move
          ">
            <u-icon class="!cursor-move" name="drag_indicator" color="white"></u-icon>
          </div>
        </div>
      </template>
      <template #after>
        <div v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </template>
    </u-splitter>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(30)
</script>

```

:::
<!-- component -->
