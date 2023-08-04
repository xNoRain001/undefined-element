<script setup>
import Basic from '../examples/input/01.basic.vue'
import Persistent from '../examples/input/02.placeholder.vue'
import debounce from '../examples/input/03.debounce.vue'
</script>


# Input

:::details 属性
| 属性名        | 描述      | 类型 | 默认值 |
| ------------- | :-----------: | :----: | ----: |
| type      | 类型 | string | 'text' |
| debounce      | 防抖间隔，值为 0 时表示不开启防抖。 | number | 0 |
| readonly      | 只读 | boolean | false |
| disabled      | 禁用 | boolean | false |
| aotofocus      | 自动聚焦 | boolean | false |
| modelValue      | 绑定的值 |  | - |
| inputClass      | 表单样式 | string | '' |
| placeholder      | 占位符 | string | '' |
| focusedClass      | 聚焦时表单容器的样式 | string | '' |
:::

:::details 插槽
| 插槽名        | 描述   |
| ------------- | :-----------: |
| before      | before input container |
| after      |   after input container    |
| prepend |   before input    |
| append |   after input    |
:::

<!-- :::details Events
| Slot name         | Description   |
| ------------- | :-----------: |
| before      | before input container |
| after      |   after input container    |
| prepend |   before input    |
| append |   after input    |
::: -->

## 基础

<!-- 01.basic.vue -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="my-[16px]">
    <u-input
      class="
        w-full h-[56px] px-[12px] rounded-[4px]
        before:border before:border-solid before:border-[rgba(0,0,0,.23)]
        hover:before:border-[rgba(0,0,0,.87)]
      "
      focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
      inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
      v-model="value1"
    >
    </u-input>
    <template></template>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
</script>
```

:::
<!-- 01.basic.vue -->

<!-- 02.placeholder.vue -->
<Placeholder></Placeholder>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="02.placeholder" 
    :title="$t('components.u-input.02-placeholder.title')" 
    :desc="$t('components.u-input.02-placeholder.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="
          text-[rgba(0,0,0,.87)] text-[14px] font-normal
          placeholder:text-red-500
        "
        v-model="value"
        placeholder="Write your story!"
      >
      </u-input>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('')
</script>
```

:::
<!-- 02.placeholder.vue -->

<!-- 03.debounce.vue -->
<Debounce></Debounce>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="03.debounce" 
    :title="$t('components.u-input.03-debounce.title')" 
    :desc="$t('components.u-input.03-debounce.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
        :debounce="300"
      >
      </u-input>

      <div>value: {{ value }}</div>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('')
</script>
```

:::
<!-- 03.debounce.vue -->

<!-- 04.readonly.vue -->
<Readonly></Readonly>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="04.readonly" 
    :title="$t('components.u-input.04-readonly.title')" 
    :desc="$t('components.u-input.04-readonly.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
        readonly
      >
      </u-input>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('This is readonly input')
</script>
```

:::
<!-- 04.readonly.vue -->

<!-- 05.disabled.vue -->
<Disabled></Disabled>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="05.disabled" 
    :title="$t('components.u-input.05-disabled.title')" 
    :desc="$t('components.u-input.05-disabled.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
        disabled
      >
      </u-input>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('This is disabled input')
</script>
```

:::
<!-- 05.disabled.vue -->

<!-- 06.clearable.vue -->
<Clearable></Clearable>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="06.clearable" 
    :title="$t('components.u-input.06-clearable.title')" 
    :desc="$t('components.u-input.06-clearable.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
      >
        <template #append>
          <u-icon name="close" width="16" height="16" clearable></u-icon>
        </template>
      </u-input>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('This is clearable input')
</script>
```

:::
<!-- 06.clearable.vue -->

<!-- 07.autofocus.vue -->
<Autofocus></Autofocus>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="07.autofocus" 
    :title="$t('components.u-input.07-autofocus.title')" 
    :desc="$t('components.u-input.07-autofocus.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
        autofocus
      >
      </u-input>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('')
</script>
```

:::
<!-- 07.autofocus.vue -->

<!-- 08.types.vue -->
<Types></Types>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <Example 
    id="08.types" 
    :title="$t('components.u-input.08-types.title')" 
    :desc="$t('components.u-input.08-types.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
        type="password"
      >
        <template #append>
          <u-icon 
            visible
            @click="updateVisible" 
            :name="visible ? 'visibility' : 'visibility_off'"
          ></u-icon>
        </template>
      </u-input>
    </div>
  </Example>
</template>
```

```vue [script]
<script lang="ts" setup>
const value = ref('')
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
```

:::
<!-- 08.types.vue -->
