<script setup>
import Basic from '../../examples/select/01.basic.vue'
import Multiple from '../../examples/select/02.multiple.vue'
import MaxValues from '../../examples/select/03.max-values.vue'
import Race from '../../examples/select/04.race.vue'
import Persistent from '../../examples/select/05.persistent.vue'
import Readonly from '../../examples/select/06.readonly.vue'
import Disabled from '../../examples/select/07.disabled.vue'
import Clearable from '../../examples/select/08.clearable.vue'
</script>

# Select



:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|value|This property takes effect when a checkbox group is used and represents the value that will be saved in the checkbox group's modelValue when the checkbox is selected.|any|false|
|disabled|Disable check box|boolean|false|
|modelValue|Bound value|boolean|-|
|min|This is the property of the checkbox group and represents the minimum number of items that the checkbox can select.|number|Number.MIN_SAFE_INTEGER|
|max|This is the property of the checkbox group and represents the maximum number of items that a checkbox can select.|number|Number.MAX_SAFE_INTEGER|
|race|This is a property of the check box group that automatically deselect the earliest check box when the maximum number of items that a check box can select is exceeded.|boolean|false|
|modelValue|This is the property of the check box group and represents the list of value property values for the selected check box.|any[]|[]|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|before|Check the contents to the left of the box|
|default|Default slot|
|after|Check the contents to the right of the box|
:::

## Basics

:data-index='index' is necessary when selecting a drop-down list item, it is used internally to find the value corresponding to that drop-down list in options.

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## Multiple choice



<Multiple></Multiple>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## Maximum quantity

This property needs to be used with multiple to specify the maximum number of items that can be selected.

<MaxValues></MaxValues>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## Automatic elimination

This property needs to be used in conjunction with maxValues. When the number of selected items exceeds the maximum number, the first selected item is automatically replaced.

<Race></Race>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## persistence

This property must be used with maxValues. When the value reaches maxValues, determine whether to close the drop-down list.

<Persistent></Persistent>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## Read only



<Readonly></Readonly>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## forbidden

Disable the Select component

<Disabled></Disabled>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

## Clear away



<Clearable></Clearable>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
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
  <div class="vp-raw my-[16px]">
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

