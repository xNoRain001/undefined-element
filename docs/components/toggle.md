<!-- import -->
<script setup>
import Basic from '../examples/toggle/01.basic.vue'
import Icon from '../examples/toggle/02.icon.vue'
</script>
<!-- import -->

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full grid gap-y-[24px]">
    <div class="grid grid-cols-10">
      <u-toggle 
        v-model="value"
        class="w-[40px] h-[20px]"
        thumbClass="
          w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
        "
        trackClass="rounded-full bg-[#dcdfe6]"
        activeThumbClass="!left-[22px]"
        activeTrackClass="!bg-red-500"
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[40px] h-[20px]"
        thumbClass="
          w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
        "
        trackClass="rounded-full bg-[#dcdfe6]"
        activeThumbClass="!left-[22px]"
        activeTrackClass="!bg-green-500"
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[40px] h-[20px]"
        thumbClass="
          w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
        "
        trackClass="rounded-full bg-[#dcdfe6]"
        activeThumbClass="!left-[22px]"
        activeTrackClass="!bg-blue-500"
      ></u-toggle>
    </div>

    <div class="grid grid-cols-10">
      <u-toggle 
        v-model="value"
        class="w-[52px] h-[20px] px-[10px]"
        thumbClass="
          w-[20px] h-[20px] rounded-full bg-white left-0
        "
        :thumbStyle="{ 
          boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
        }"
        trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
        activeThumbClass="left-[32px] !bg-red-500"
        activeTrackClass="!bg-red-500 "
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[52px] h-[20px] px-[10px]"
        thumbClass="
          w-[20px] h-[20px] rounded-full bg-white left-0
        "
        :thumbStyle="{ 
          boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
        }"
        trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
        activeThumbClass="left-[32px] !bg-green-500"
        activeTrackClass="!bg-green-500 "
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[52px] h-[20px] px-[10px]"
        thumbClass="
          w-[20px] h-[20px] rounded-full bg-white left-0
        "
        :thumbStyle="{ 
          boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
        }"
        trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
        activeThumbClass="left-[32px] !bg-blue-500"
        activeTrackClass="!bg-blue-500 "
      ></u-toggle>
    </div>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>
```

```vue [all]
<template>
  <div class="w-full grid gap-y-[24px]">
    <div class="grid grid-cols-10">
      <u-toggle 
        v-model="value"
        class="w-[40px] h-[20px]"
        thumbClass="
          w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
        "
        trackClass="rounded-full bg-[#dcdfe6]"
        activeThumbClass="!left-[22px]"
        activeTrackClass="!bg-red-500"
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[40px] h-[20px]"
        thumbClass="
          w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
        "
        trackClass="rounded-full bg-[#dcdfe6]"
        activeThumbClass="!left-[22px]"
        activeTrackClass="!bg-green-500"
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[40px] h-[20px]"
        thumbClass="
          w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
        "
        trackClass="rounded-full bg-[#dcdfe6]"
        activeThumbClass="!left-[22px]"
        activeTrackClass="!bg-blue-500"
      ></u-toggle>
    </div>

    <div class="grid grid-cols-10">
      <u-toggle 
        v-model="value"
        class="w-[52px] h-[20px] px-[10px]"
        thumbClass="
          w-[20px] h-[20px] rounded-full bg-white left-0
        "
        :thumbStyle="{ 
          boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
        }"
        trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
        activeThumbClass="left-[32px] !bg-red-500"
        activeTrackClass="!bg-red-500 "
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[52px] h-[20px] px-[10px]"
        thumbClass="
          w-[20px] h-[20px] rounded-full bg-white left-0
        "
        :thumbStyle="{ 
          boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
        }"
        trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
        activeThumbClass="left-[32px] !bg-green-500"
        activeTrackClass="!bg-green-500 "
      ></u-toggle>

      <u-toggle 
        v-model="value"
        class="w-[52px] h-[20px] px-[10px]"
        thumbClass="
          w-[20px] h-[20px] rounded-full bg-white left-0
        "
        :thumbStyle="{ 
          boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
        }"
        trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
        activeThumbClass="left-[32px] !bg-blue-500"
        activeTrackClass="!bg-blue-500 "
      ></u-toggle>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>

```

:::
<!-- component -->

## icon

<!-- component -->
<Icon></Icon>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-toggle 
      v-model="value"
      class="w-[52px] h-[20px] px-[10px]"
      thumbClass="
        w-[20px] h-[20px] rounded-full bg-white left-0
      "
      :thumbStyle="{ 
        boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
      }"
      trackClass="!w-[32px] !h-[14px] rounded-full bg-gray-500 opacity-30"
      activeThumbClass="left-[32px] !bg-green-500"
      activeTrackClass="!bg-green-500 "
    >
      <u-icon 
        :name="value ? 'done' : 'close'"
        width="16"
        height="16"
        :color="value ? 'white' : 'black'"
      ></u-icon>
    </u-toggle>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-toggle 
      v-model="value"
      class="w-[52px] h-[20px] px-[10px]"
      thumbClass="
        w-[20px] h-[20px] rounded-full bg-white left-0
      "
      :thumbStyle="{ 
        boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
      }"
      trackClass="!w-[32px] !h-[14px] rounded-full bg-gray-500 opacity-30"
      activeThumbClass="left-[32px] !bg-green-500"
      activeTrackClass="!bg-green-500 "
    >
      <u-icon 
        :name="value ? 'done' : 'close'"
        width="16"
        height="16"
        :color="value ? 'white' : 'black'"
      ></u-icon>
    </u-toggle>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>

```

:::
<!-- component -->
