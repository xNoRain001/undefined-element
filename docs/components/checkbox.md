<!-- import -->
<script setup>
import Basic from '../examples/checkbox/01.basic.vue'
import Group from '../examples/checkbox/02.group.vue'
import Disabled from '../examples/checkbox/03.disabled.vue'
import Limit from '../examples/checkbox/04.limit.vue'
import Race from '../examples/checkbox/05.race.vue'
</script>
<!-- import -->

# Checkbox

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full flex items-center [&>*:not(:first-of-type)]:ml-[32px]">
    <u-checkbox 
      v-model="value" 
      class="flex items-center"
    >
      <template #checkbox="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid 
            border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
            items-center hover:border-red-500 duration-300 transition-[all]
          "
          :class="checked ? 'bg-red-500 border-red-500' : ''"
        >
          <Transition name="u-animate-opacity">
            <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
          </Transition>
        </div>
      </template>

      <template #after>
        <span class="ml-[8px]">label</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      v-model="value" 
      class="flex items-center"
    >
      <template #checkbox="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
            items-center hover:border-green-500 duration-300 transition-[all]
          "
          :class="checked ? 'border-green-500' : ''"
        >
          <Transition name="u-animate-opacity">
            <div v-if="checked" class="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
          </Transition>
        </div>
      </template>

      <template #after>
        <span class="ml-[8px]">label</span>
      </template>
    </u-checkbox>

    <u-checkbox 
      v-model="value" 
      class="flex items-center"
    >
      <template #checkbox="{ checked }">
        <div 
          class="
            w-[20px] h-[20px] border-[2px] border-solid rounded-full
            border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
            items-center hover:border-blue-500 duration-300 transition-[all]
          "
          :class="checked ? 'bg-blue-500 border-blue-500' : ''"
        >
          <Transition name="u-animate-opacity">
            <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
          </Transition>
        </div>
      </template>

      <template #before>
        <span class="mr-[8px]">label</span>
      </template>
    </u-checkbox>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'

const value =ref(false)
</script>
```

:::
<!-- component -->

## 分组

<!-- component -->
<Group></Group>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center [&>*:not(:first-of-type)]:ml-[32px]"
    >
      <u-checkbox class="flex items-center" value="red">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="green">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="blue">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-blue-500 border-blue-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>

    <div class="mt-[16px]">checked: {{ selection }}</div>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const selection = reactive<any[]>([])
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
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center [&>*:not(:first-of-type)]:ml-[32px]"
    >
      <u-checkbox class="flex items-center" value="red" disabled>
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center duration-300 transition-[all] cursor-not-allowed
            "
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="green">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="blue">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-blue-500 border-blue-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>

    <div class="mt-[16px]">checked: {{ selection }}</div>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
```

:::
<!-- component -->

## 数量限制

<!-- component -->
<Limit></Limit>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center [&>*:not(:first-of-type)]:ml-[32px]"
      :min="1"
      :max="2"
    >
      <u-checkbox class="flex items-center" value="red">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="green">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="blue">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-blue-500 border-blue-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>

    <div class="mt-[16px]">checked: {{ selection }}</div>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const selection = reactive<any[]>([])
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
    <u-checkbox-group 
      v-model="selection"
      class="flex items-center [&>*:not(:first-of-type)]:ml-[32px]"
      :max="1"
      race
    >
      <u-checkbox class="flex items-center" value="red">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="green">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-green-500 border-green-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>

      <u-checkbox class="flex items-center" value="blue">
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-blue-500 border-blue-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>
      </u-checkbox>
    </u-checkbox-group>

    <div class="mt-[16px]">checked: {{ selection }}</div>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { reactive } from 'vue'

const selection = reactive<any[]>([])
</script>
```

:::
<!-- component -->
