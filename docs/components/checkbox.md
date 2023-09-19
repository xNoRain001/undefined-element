<script setup>
import Basic from '../examples/checkbox/01.basic.vue'
import Group from '../examples/checkbox/02.group.vue'
import Disabled from '../examples/checkbox/03.disabled.vue'
import Limit from '../examples/checkbox/04.limit.vue'
import Race from '../examples/checkbox/05.race.vue'
</script>

# Checkbox

Checkbox 组件是用户输入的一个基本元素，你可以使用它为用户提供一种切换选项的方法。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|value|当使用复选框组时，该属性才会生效，表示复选框选中时，将被保存在复选框组的 modelValue 中的值。|any|false|
|disabled|禁用复选框|boolean|false|
|modelValue|这是复选框组的属性，表示复选框能选中的最少项。|boolean|-|
|min|这是复选框组的属性，表示复选框能选中的最少项。|number|Number.MIN_SAFE_INTEGER|
|max|这是复选框组的属性，表示复选框能选中的最多项。|number|Number.MAX_SAFE_INTEGER|
|race|这是复选框组的属性，表示当超过复选框能选中的最多项时，自动取消选中此前最早选中的那个复选框。|boolean|false|
|modelValue|这是复选框组的属性，表示选中的复选框的|any[]|[]|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|复选框左边的内容|
|default|复选框|
|after|复选框右边的内容|
:::

## 基础



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

## 复选框组

当使用复选框组时，modelValue 不再绑定在 u-checkbox 组件上，而是绑定在 u-checkbox-group 组件上，此时 modelValue 的值是一个数组，当复选框被选中时，它的 value 属性的值将会被保存在 modelValue 中。

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

## 禁用

下面的示例中会禁用第一个复选框。

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

## 数量限制

通过 min 和 max 属性来限制复选框组能够选中的数量。

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

## 自动淘汰

该属性需要和复选框组的 max 属性配合使用，当选中的数量将超过最大限制时，自动移除此前最早选中的那个复选框。如果开启了自动淘汰并且将 max 设置为 1 ，就变成了单选框。

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

