<script setup>
import Basic from '../../examples/checkbox/01.basic.vue'
import Group from '../../examples/checkbox/02.group.vue'
import Disabled from '../../examples/checkbox/03.disabled.vue'
import Limit from '../../examples/checkbox/04.limit.vue'
import Race from '../../examples/checkbox/05.race.vue'
</script>

# Checkbox

The Checkbox component is a basic element of user input that you can use to give the user a way to toggle options.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|value|This property takes effect when a checkbox group is used and represents the value that will be saved in the checkbox group's modelValue when the checkbox is selected.|any|false|
|disabled|Disable check box|boolean|false|
|modelValue|This is the property of the checkbox group and represents the minimum number of items that the checkbox can select.|boolean|-|
|min|This is the property of the checkbox group and represents the minimum number of items that the checkbox can select.|number|Number.MIN_SAFE_INTEGER|
|max|This is the property of the checkbox group and represents the maximum number of items that a checkbox can select.|number|Number.MAX_SAFE_INTEGER|
|race|This is a property of the check box group that automatically deselect the earliest check box when the maximum number of items that a check box can select is exceeded.|boolean|false|
|modelValue|This is the property of the check box group that represents the selected check box|any[]|[]|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|Check the contents to the left of the box|
|default|checkbox|
|after|Check the contents to the right of the box|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox v-model="value">
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid
            border-gray-500 rounded-[2px] flex justify-center
            items-center hover:border-red-500 duration-300 transition-colors
            mr-[8px]
          "
          :class="checked ? 'bg-red-500 border-red-500' : ''"
        >
          <u-icon 
            v-if="checked" 
            :def="matDone"
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </div>
      </template>

      <template #after>
        <span>red</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      class="ml-[16px]"
      v-model="value" 
    >
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-gray-500 flex justify-center
            items-center hover:border-green-500 duration-300 transition-colors
            mr-[8px]
          "
          :class="checked ? 'border-green-500' : ''"
        >
          <div 
            v-if="checked" 
            class="w-[10px] h-[10px] bg-green-500 rounded-full"
          ></div>
        </div>
      </template>

      <template #after>
        <span>green</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      class="ml-[16px]"
      v-model="value" 
    >
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-gray-500 flex justify-center
            items-center hover:border-blue-500 duration-300
            transition-colors
            mr-[8px]
          "
          :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
        >
          <u-icon 
            v-if="checked" 
            :def="matDone"
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </div>
      </template>

      <template #after>
        <span>blue</span>
      </template>
    </u-checkbox>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matDone } from 'undefined-element-icons/src/material-icons/filled'

const value =ref(false)
</script>
```

```vue [all]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox v-model="value">
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid
            border-gray-500 rounded-[2px] flex justify-center
            items-center hover:border-red-500 duration-300 transition-colors
            mr-[8px]
          "
          :class="checked ? 'bg-red-500 border-red-500' : ''"
        >
          <u-icon 
            v-if="checked" 
            :def="matDone"
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </div>
      </template>

      <template #after>
        <span>red</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      class="ml-[16px]"
      v-model="value" 
    >
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-gray-500 flex justify-center
            items-center hover:border-green-500 duration-300 transition-colors
            mr-[8px]
          "
          :class="checked ? 'border-green-500' : ''"
        >
          <div 
            v-if="checked" 
            class="w-[10px] h-[10px] bg-green-500 rounded-full"
          ></div>
        </div>
      </template>

      <template #after>
        <span>green</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      class="ml-[16px]"
      v-model="value" 
    >
      <template #default="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-gray-500 flex justify-center
            items-center hover:border-blue-500 duration-300
            transition-colors
            mr-[8px]
          "
          :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
        >
          <u-icon 
            v-if="checked" 
            :def="matDone"
            color="white" 
            width="16" 
            height="16"
          ></u-icon>
        </div>
      </template>

      <template #after>
        <span>blue</span>
      </template>
    </u-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matDone } from 'undefined-element-icons/src/material-icons/filled'

const value =ref(false)
</script>

```
:::

## Checkbox group

When using a checkbox group, modelValue is no longer bound to the u-checkbox component, but to the U-Checkbox-group component, in which case the modelValue value is an array, and when the checkbox is selected, The value of its value attribute will be saved in modelValue.

<Group></Group>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone"
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone"
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone"
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled'
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
```

```vue [all]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone"
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone"
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone"
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled'
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>

```
:::

## forbidden

The first check box is disabled in the following example.

<Disabled></Disabled>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
    >
      <u-checkbox value="red" disabled class="opacity-30">
        <template #default="{ checked }">
          <div
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center duration-300 transition-colors
              mr-[8px] 
            "
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>

        <template #after>
          <span>disabled</span>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled'
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
```

```vue [all]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
    >
      <u-checkbox value="red" disabled class="opacity-30">
        <template #default="{ checked }">
          <div
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center duration-300 transition-colors
              mr-[8px] 
            "
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>

        <template #after>
          <span>disabled</span>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled'
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>

```
:::

## Quantitative restriction

The min and max properties limit the number of checkbox groups that can be selected.

<Limit></Limit>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
      :min="1"
      :max="2"
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled';
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
```

```vue [all]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
      :min="1"
      :max="2"
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled';
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>

```
:::

## Automatic elimination

This property needs to be used in conjunction with the max property of the check box group. When the number of selected boxes exceeds the maximum limit, the earliest check box is automatically removed. If automatic elimination is turned on and max is set to 1, it becomes a radio box.

<Race></Race>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
      :max="1"
      race
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled';
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
```

```vue [all]
<template>
  <div class="vp-raw flex items-center my-[16px]">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center"
      :max="1"
      race
    >
      <u-checkbox value="red">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="green">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="ml-[32px]" value="blue">
        <template #default="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-gray-500 rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-colors
            "
            :class="checked ? 'bg-blue-500 !border-blue-500' : ''"
          >
            <u-icon 
              v-if="checked" 
              :def="matDone" 
              color="white" 
              width="16" 
              height="16"
            ></u-icon>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>
  </div>

  <div class="my-[16px]">checked: {{ selection }}</div>
</template>
<script lang="ts" setup>
import { matDone } from 'undefined-element-icons/src/material-icons/filled';
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>

```
:::

