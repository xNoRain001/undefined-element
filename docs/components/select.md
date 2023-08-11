<!-- import -->
<script setup>
import Basic from '../examples/select/01.basic.vue'
import Multiple from '../examples/select/02.multiple.vue'
import MaxValues from '../examples/select/03.max-values.vue'
import Race from '../examples/select/04.race.vue'
import Persistent from '../examples/select/05.persistent.vue'
import Disabled from '../examples/select/06.disabled.vue'
import Clearable from '../examples/select/07.clearable.vue'
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
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value === option 
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append="{ expanded }">
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>

    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      selectItemsClass="
        bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
        cursor-pointer !-top-full
      "
    >
      <template #select-items>
        <div 
          class="
            h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
            bg-white hover:bg-[rgba(0,0,0,.08)]
          " 
          v-for="(option, index) in options"
          :key="index"
          :data-index="index"
          :class="value === option 
            ? '!bg-[rgb(25,118,210,.08)]' 
            : 'bg-white'
          "
        >
          {{ option }}
        </div>
      </template>
      <template #append="{ expanded }">
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value === option 
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append="{ expanded }">
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>

    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      selectItemsClass="
        bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
        cursor-pointer !-top-full
      "
    >
      <template #select-items>
        <div 
          class="
            h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
            bg-white hover:bg-[rgba(0,0,0,.08)]
          " 
          v-for="(option, index) in options"
          :key="index"
          :data-index="index"
          :class="value === option 
            ? '!bg-[rgb(25,118,210,.08)]' 
            : 'bg-white'
          "
        >
          {{ option }}
        </div>
      </template>
      <template #append="{ expanded }">
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->

## 多选

<!-- component -->
<Multiple></Multiple>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>

```

:::
<!-- component -->

## 最大数量

<!-- component -->
<MaxValues></MaxValues>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>

```

:::
<!-- component -->

## 淘汰

<!-- component -->
<Race></Race>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      race
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      race
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>

```

:::
<!-- component -->

## 持久化

<!-- component -->
<Persistent></Persistent>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      :persistent="false"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      :persistent="false"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>

```

:::
<!-- component -->

## 禁用

<!-- component -->
<Disabled></Disabled>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid #dcdfe6',
        borderRadius: '4px'
      }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)] bg-[#f5f7fa]
      "
      v-model="value" 
      :options="options"
      disabled
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          class="!cursor-not-allowed"
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid #dcdfe6',
        borderRadius: '4px'
      }"
      selectClass="
        w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)] bg-[#f5f7fa]
      "
      v-model="value" 
      :options="options"
      disabled
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <u-icon 
          class="!cursor-not-allowed"
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        "></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>

```

:::
<!-- component -->

## 清除

<!-- component -->
<Clearable></Clearable>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        group w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <!-- <u-icon 
          v-if="value.length"
          name="close" 
          width="16" 
          height="16" 
          clearable
        ></u-icon> -->
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'">
        </u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
```

```vue [all]
<template>
  <div class="w-full">
    <u-select 
      :selectStyle="{ 
        border: '1px solid rgba(0, 0, 0, .23)',
        borderRadius: '4px'
      }"
      :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
      :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
      selectClass="
        group w-full h-[56px] px-[12px] text-[14px] font-normal 
        text-[rgba(0, 0, 0, .87)]
      "
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
    >
      <template #select-items>
        <div class="
          bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
          cursor-pointer
        ">
          <div 
            class="
              h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
              bg-white hover:bg-[rgba(0,0,0,.08)]
            " 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            :class="value.includes(option)
              ? '!bg-[rgb(25,118,210,.08)]' 
              : 'bg-white'
            "
          >
            {{ option }}
          </div>
        </div>
      </template>
      <template #append>
        <!-- <u-icon 
          v-if="value.length"
          name="close" 
          width="16" 
          height="16" 
          clearable
        ></u-icon> -->
        <u-icon 
          :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'">
        </u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>

```

:::
<!-- component -->
