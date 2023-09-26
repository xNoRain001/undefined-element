<script setup>
import Basic from '../examples/dialog/01.basic.vue'
import Persistent from '../examples/dialog/02.persistent.vue'
import InterestingExamples from '../examples/dialog/03.interesting-examples.vue'
</script>

# Dialog

Dialog 组件会弹出一个对话框，可以向用户提供信息，或要求他们作出决定。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|position|对话框的位置|'top' \| 'right' \| 'bottom' \| 'left' \| 'center'|'center'|'center'|
|modelValue|模型值，用于控制是否显示对话框。|boolean|-|
|persistent|对话框是否开启持久化|boolean|false|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|对话框内部的内容|
:::

## 基础

在下面的例子中，演示了 Dialog 组件的五个不同位置。

<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <div class="flex items-center flex-wrap -m-[4px]">
      <button @click="updateVisible1" class="btn m-[4px]">Top</button>
      <button @click="updateVisible2" class="btn m-[4px]">Right</button>
      <button @click="updateVisible3" class="btn m-[4px]">Bottom</button>
      <button @click="updateVisible4" class="btn m-[4px]">Left</button>
      <button @click="updateVisible5" class="btn m-[4px]">Center</button>
    </div>

    <u-dialog v-model="visible1" position="top">
      <div class="w-full min960:w-[560px] bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold">Top</div>
          <u-icon :def="matClose" @click="updateVisible1"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible2" position="right">
      <div class="w-[50vw] h-screen bg-white p-[16px] min960:w-[560px] min960:h-fit">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold">Right</div>
          <u-icon :def="matClose" @click="updateVisible2"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible3" position="bottom">
      <div class="w-full min960:w-[560px] bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold ">Bottom</div>
          <u-icon :def="matClose" @click="updateVisible3"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible4" position="left">
      <div class="w-[50vw] h-screen min960:w-[560px] min960:h-fit bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold ">Left</div>
          <u-icon :def="matClose" @click="updateVisible4"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible5" position="center">
      <div class="w-[80vw] min960:w-[560px] bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold ">Center</div>
          <u-icon :def="matClose" @click="updateVisible5"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
  quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
  minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
  magni modi harum incidunt repellat.
`

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const updateVisible3 = () => visible3.value = !visible3.value
const updateVisible4 = () => visible4.value = !visible4.value
const updateVisible5 = () => visible5.value = !visible5.value
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <div class="flex items-center flex-wrap -m-[4px]">
      <button @click="updateVisible1" class="btn m-[4px]">Top</button>
      <button @click="updateVisible2" class="btn m-[4px]">Right</button>
      <button @click="updateVisible3" class="btn m-[4px]">Bottom</button>
      <button @click="updateVisible4" class="btn m-[4px]">Left</button>
      <button @click="updateVisible5" class="btn m-[4px]">Center</button>
    </div>

    <u-dialog v-model="visible1" position="top">
      <div class="w-full min960:w-[560px] bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold">Top</div>
          <u-icon :def="matClose" @click="updateVisible1"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible2" position="right">
      <div class="w-[50vw] h-screen bg-white p-[16px] min960:w-[560px] min960:h-fit">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold">Right</div>
          <u-icon :def="matClose" @click="updateVisible2"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible3" position="bottom">
      <div class="w-full min960:w-[560px] bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold ">Bottom</div>
          <u-icon :def="matClose" @click="updateVisible3"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible4" position="left">
      <div class="w-[50vw] h-screen min960:w-[560px] min960:h-fit bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold ">Left</div>
          <u-icon :def="matClose" @click="updateVisible4"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible5" position="center">
      <div class="w-[80vw] min960:w-[560px] bg-white p-[16px]">
        <div class="flex items-center justify-between">
          <div class="text-[20px] font-semibold ">Center</div>
          <u-icon :def="matClose" @click="updateVisible5"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
  quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
  minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
  magni modi harum incidunt repellat.
`

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const updateVisible3 = () => visible3.value = !visible3.value
const updateVisible4 = () => visible4.value = !visible4.value
const updateVisible5 = () => visible5.value = !visible5.value
</script>

```
:::

## 持久化

在下面的例子中，演示了 Dialog 组件开启持久化后的效果，这意味着点击遮罩层不会关闭对话框，只有点击对话框内的元素时才会关闭对话框。

<Persistent></Persistent>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <button @click="updateVisible" class="btn">Center</button>

    <u-dialog v-model="visible" position="center" persistent>
      <div class="w-[80vw] min960:w-[560px] bg-white p-[16px]">
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold ">Center</div>
          <u-icon :def="matClose" @click="updateVisible"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <button @click="updateVisible" class="btn">Center</button>

    <u-dialog v-model="visible" position="center" persistent>
      <div class="w-[80vw] min960:w-[560px] bg-white p-[16px]">
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold ">Center</div>
          <u-icon :def="matClose" @click="updateVisible"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>

```
:::

## 有趣的例子

在下面的例子中，演示了 Dialog 组件两个有趣的用法。第一个是 Dialog 组件转化为抽屉；第二个是最大化 Dialog 组件。

<InterestingExamples></InterestingExamples>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw my-[16px]">
    <div class="flex items-center flex-wrap -m-[4px]">
      <button @click="updateVisible1" class="btn m-[4px]">Drawer</button>
      <button @click="updateVisible2" class="btn m-[4px]">Maximized</button>
    </div>

    <u-dialog v-model="visible1" position="left">
      <div class="w-[50vw] min960:w-[300px] h-screen bg-white p-[16px]">
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold ">Drawer</div>
          <u-icon :def="matClose" @click="updateVisible1"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible2" position="center">
      <div 
        class="bg-white p-[16px]"
        :class="maximized ? 'w-screen h-screen' : 'w-[80vw] min960:w-[560px]'"
      >
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold">Center</div>
          <div class="flex items-center">
            <u-icon :class="maximized ? '' : 'cursor-not-allowed'" class="hover:bg-[rgba(0,0,0,.12)]" :def="matFullscreenExit" @click="onMinimized"></u-icon>
            <u-icon :class="maximized ? 'cursor-not-allowed' : ''" class="hover:bg-[rgba(0,0,0,.12)]" :def="matFullscreen" @click="onMaximized"></u-icon>
            <u-icon class="hover:bg-[rgba(0,0,0,.12)]" :def="matClose" @click="updateVisible2"></u-icon>
          </div>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>
  </div>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matClose,
  matFullscreen,
  matFullscreenExit 
} from 'undefined-element-icons/src/material-icons/filled'

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
  quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
  minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
  magni modi harum incidunt repellat.
`

const visible1 = ref(false)
const visible2 = ref(false)
const maximized = ref(false)

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const onMaximized = () => maximized.value = true
const onMinimized = () => maximized.value = false
</script>
```

```vue [all]
<template>
  <div class="vp-raw my-[16px]">
    <div class="flex items-center flex-wrap -m-[4px]">
      <button @click="updateVisible1" class="btn m-[4px]">Drawer</button>
      <button @click="updateVisible2" class="btn m-[4px]">Maximized</button>
    </div>

    <u-dialog v-model="visible1" position="left">
      <div class="w-[50vw] min960:w-[300px] h-screen bg-white p-[16px]">
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold ">Drawer</div>
          <u-icon :def="matClose" @click="updateVisible1"></u-icon>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>

    <u-dialog v-model="visible2" position="center">
      <div 
        class="bg-white p-[16px]"
        :class="maximized ? 'w-screen h-screen' : 'w-[80vw] min960:w-[560px]'"
      >
        <div class="flex justify-between">
          <div class="text-[20px] font-semibold">Center</div>
          <div class="flex items-center">
            <u-icon :class="maximized ? '' : 'cursor-not-allowed'" class="hover:bg-[rgba(0,0,0,.12)]" :def="matFullscreenExit" @click="onMinimized"></u-icon>
            <u-icon :class="maximized ? 'cursor-not-allowed' : ''" class="hover:bg-[rgba(0,0,0,.12)]" :def="matFullscreen" @click="onMaximized"></u-icon>
            <u-icon class="hover:bg-[rgba(0,0,0,.12)]" :def="matClose" @click="updateVisible2"></u-icon>
          </div>
        </div>
        <div class="mt-[16px] text-[14px]">
          {{ text }}
        </div>
      </div>
    </u-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { 
  matClose,
  matFullscreen,
  matFullscreenExit 
} from 'undefined-element-icons/src/material-icons/filled'

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
  quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
  minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
  magni modi harum incidunt repellat.
`

const visible1 = ref(false)
const visible2 = ref(false)
const maximized = ref(false)

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const onMaximized = () => maximized.value = true
const onMinimized = () => maximized.value = false
</script>

```
:::

