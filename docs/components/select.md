<!-- import -->
<script setup>
import Basic from '../examples/select/01.basic.vue'
import Multiple from '../examples/select/02.multiple.vue'
import MaxValues from '../examples/select/03.max-values.vue'
import Race from '../examples/select/04.race.vue'
import Persistent from '../examples/select/05.persistent.vue'
import Readonly from '../examples/select/06.readonly.vue'
import Disabled from '../examples/select/07.disabled.vue'
import Clearable from '../examples/select/08.clearable.vue'
</script>
<!-- import -->

# Select

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|value|当使用复选框组时，该属性才会生效，表示复选框选中时，将被保存在复选框组的 modelValue 中的值。|any|false|
|disabled|禁用复选框|boolean|false|
|modelValue|绑定的值|boolean|-|
|min|这是复选框组的属性，表示复选框能选中的最少项。|number|Number.MIN_SAFE_INTEGER|
|max|这是复选框组的属性，表示复选框能选中的最多项。|number|Number.MAX_SAFE_INTEGER|
|race|这是复选框组的属性，表示当超过复选框能选中的最多项时，自动取消选中此前最早选中的那个复选框。|boolean|false|
|modelValue|这是复选框组的属性，表示选中的复选框的 value 属性值列表。|any[]|[]|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|复选框左边的内容|
|default|复选框|
|after|复选框右边的内容|
:::

## 基础

:data-index="index" 是必要的，当选择下拉列表项时，它在内部被用于找到该下拉列表在 options 中对应的值。

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

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
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      placeholder="Multiple"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      placeholder="Multiple"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->

## 最大数量

该属性需要配合 multiple 使用，用于指定能选择的项的最大数量。

<!-- component -->
<MaxValues></MaxValues>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->

## 自动淘汰

该属性需要配合 maxValues 使用，当选择的项的数量超过最大数量时，自动替换掉最开始选择的那一项。

<!-- component -->
<Race></Race>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      race
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      race
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->

## 持久化

该属性需要配合 maxValues 使用，当选择的项达到 maxValues 时，是否关闭下拉列表。

<!-- component -->
<Persistent></Persistent>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      race
      :persistent="false"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
      multiple
      :maxValues="2"
      race
      :persistent="false"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value.includes(option) ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->

## 只读

<!-- component -->
<Readonly></Readonly>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      v-model="value" 
      :options="options"
      readonly
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      v-model="value" 
      :options="options"
      readonly
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->

## 禁用

禁用 Select 组件

<!-- component -->
<Disabled></Disabled>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        text-[14px] font-normal
      "
      v-model="value" 
      :options="options"
      disabled
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        text-[14px] font-normal
      "
      v-model="value" 
      :options="options"
      disabled
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matKeyboardArrowDown } from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
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
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          clearable
          v-show="value"
          :def="matClose"
          width="16"
          height="16"
        ></u-icon>
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matClose, 
  matKeyboardArrowDown 
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>
```

```vue [all]
<template>
  <div class="my-[16px]">
    <u-select 
      class="
        w-full h-[58px] px-[16px] before:rounded-[8px]
        before:border-solid before:border 
        before:border-[--primary-border-color] 
        hover:before:border-[--primary-color]
        text-[14px] font-normal
      "
      focusedContainerClass="before:border-[2px] before:border-[--primary-color]"
      v-model="value" 
      :options="options"
    >
      <template #select-list>
        <div class="
          bg-white border-[1px] border-solid border-[--primary-border-color]
          cursor-pointer rounded-[8px] list-none
        ">
          <div 
            v-for="(option, index) in options"
            :key="index"
            :data-index="index"
            class="
              p-[16px] hover:bg-[--primary-border-color] transition-colors
              duration-300
            " 
            :class="value === option ? 'text-[--primary-color]' : ''"
          >
            {{ option }}
          </div>
        </div>
      </template>
      
      <template #append="{ expanded }">
        <u-icon 
          clearable
          v-show="value"
          :def="matClose"
          width="16"
          height="16"
        ></u-icon>
        <u-icon 
          :def="matKeyboardArrowDown"
          class="duration-300 transition-transform"
          :class="expanded ? 'rotate-180' : ''"
        ></u-icon>
      </template>
    </u-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matClose, 
  matKeyboardArrowDown 
} from 'undefined-element-icons/src/material-icons/filled'

const value = ref('')
const options = ['1', '2', '3', '4']
</script>

```

:::
<!-- component -->
