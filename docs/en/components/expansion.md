<script setup>
import Basic from '../../examples/expansion/01.basic.vue'
import Min from '../../examples/expansion/02.min.vue'
import Max from '../../examples/expansion/03.max.vue'
</script>

# Expansion

The Expansion component allows content that is not immediately relevant to the user to be hidden and can be thought of as accordion elements that expand when clicked, also known as foldable.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|min|At least the amount that should be expanded|number|Number.MIN_SAFE_INTEGER|
|max|The maximum number that can be expanded|number|Number.MAX_SAFE_INTEGER|
|name|The unique identification of the expanded item|string|-|
|modelValue|The expanded item, which contains the name of the expanded item.|string[]|[]|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|Always display the header content|
|content|Content that is displayed only when expanded|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-expansion 
      v-model="expanded"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const expanded = reactive(['1'])
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-expansion 
      v-model="expanded"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const expanded = reactive(['1'])
</script>

```
:::

## Minimum quantity

At least the amount that should be expanded

<Min></Min>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-expansion 
      v-model="expanded"
      :min="1"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="3" 
        class="
          border border-x-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Contact us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const expanded = reactive<string[]>(['1'])
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-expansion 
      v-model="expanded"
      :min="1"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-b-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="3" 
        class="
          border border-x-0 border-solid border-[#dcdfe6]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Contact us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const expanded = reactive<string[]>(['1'])
</script>

```
:::

## Maximum quantity

When the maximum number of items that can be expanded is exceeded, the earliest item that can be expanded is automatically folded.

<Max></Max>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <u-expansion 
      v-model="expanded"
      :max="1"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[--primary-border-color] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-b-0 border-solid border-[--primary-border-color]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="3" 
        class="
          border border-x-0 border-solid border-[--primary-border-color]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Contact us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const expanded = reactive<string[]>([])
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <u-expansion 
      v-model="expanded"
      :max="1"
    >
      <u-expansion-item 
        name="1" 
        class="
          border border-x-0 border-b-0 border-solid border-[--primary-border-color] 
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="2" 
        class="
          border border-x-0 border-b-0 border-solid border-[--primary-border-color]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>

      <u-expansion-item 
        name="3" 
        class="
          border border-x-0 border-solid border-[--primary-border-color]
        "
      >
        <template #default="{ expanded }">
          <div class="flex items-center justify-between h-[47px]">
            <div class="text-[14px] text-[#303133] font-medium">Contact us</div>
            <u-icon 
              :def="matKeyboardArrowDown"
              class="duration-300 transition-transform"
              :class="expanded ? 'rotate-180' : ''"
            ></u-icon>
          </div>
        </template>
        <template #content>
          <div class="pb-[24px] text-[14px] text-[#303133] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
            voluptatum laborum illo voluptatibus cumque nesciunt provident 
            alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
            accusantium laborum nulla aspernatur? Aut, tempore!
          </div>
        </template>
      </u-expansion-item>
    </u-expansion>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const expanded = reactive<string[]>([])
</script>

```
:::

