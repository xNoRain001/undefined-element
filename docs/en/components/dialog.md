<script setup>
import Basic from '../../examples/dialog/01.basic.vue'
import Persistent from '../../examples/dialog/02.persistent.vue'
import Drawer from '../../examples/dialog/03.drawer.vue'
import Maximized from '../../examples/dialog/04.maximized.vue'
</script>

# UDialog

The Dialog component can provide information to the user or ask them to make a decision.

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|position|Dialog box location|'top' \| 'right' \| 'bottom' \| 'left' \| 'center'|'center'|'center'|
|modelValue|The bound value that controls whether the dialog box is displayed|boolean|-|
|persistent|Whether to enable persistence|boolean|false|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|Dialog box content|
:::

## Basics



<Basic></Basic>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="vp-raw flex items-center flex-wrap -m-[4px]">
    <button @click="updateVisible1" class="btn m-[4px]">Top</button>
    <button @click="updateVisible2" class="btn m-[4px]">Right</button>
    <button @click="updateVisible3" class="btn m-[4px]">Bottom</button>
    <button @click="updateVisible4" class="btn m-[4px]">Left</button>
    <button @click="updateVisible5" class="btn m-[4px]">Center</button>
  </div>

  <u-dialog v-model="visible1" position="top">
    <div class="w-[500px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Top</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible1"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible2" position="right">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Right</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible2"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible3" position="bottom">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Bottom</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible3"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible4" position="left">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Left</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible4"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible5" position="center">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Center</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible5"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
</template>
```

```vue [script]
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

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
  <div class="vp-raw flex items-center flex-wrap -m-[4px]">
    <button @click="updateVisible1" class="btn m-[4px]">Top</button>
    <button @click="updateVisible2" class="btn m-[4px]">Right</button>
    <button @click="updateVisible3" class="btn m-[4px]">Bottom</button>
    <button @click="updateVisible4" class="btn m-[4px]">Left</button>
    <button @click="updateVisible5" class="btn m-[4px]">Center</button>
  </div>

  <u-dialog v-model="visible1" position="top">
    <div class="w-[500px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Top</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible1"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible2" position="right">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Right</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible2"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible3" position="bottom">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Bottom</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible3"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible4" position="left">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Left</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible4"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>

  <u-dialog v-model="visible5" position="center">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Center</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible5"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

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

## persistence

After persistence is enabled, clicking the mask layer does not close the dialog box.

<Persistent></Persistent>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div>
    <button @click="updateVisible" class="btn">center</button>
  </div>

  <u-dialog v-model="visible" position="center" persistent>
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Center</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
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
  <div>
    <button @click="updateVisible" class="btn">center</button>
  </div>

  <u-dialog v-model="visible" position="center" persistent>
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Center</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>

```
:::

## drawer

You can easily change the dialog box to a drawer

<Drawer></Drawer>

::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="flex items-center flex-wrap">
    <button @click="updateVisible" class="btn">Drawer</button>
  </div>

  <u-dialog v-model="visible" position="left">
    <div class="w-[300px] h-screen bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Left</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
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
  <div class="flex items-center flex-wrap">
    <button @click="updateVisible" class="btn">Drawer</button>
  </div>

  <u-dialog v-model="visible" position="left">
    <div class="w-[300px] h-screen bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Left</div>
        <u-icon class="cursor-pointer" :def="matClose" @click="updateVisible"></u-icon>
      </div>
      <div class="mt-[24px] text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
        quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
        minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
        magni modi harum incidunt repellat.
      </div>
    </div>
  </u-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { matClose } from 'undefined-element-icons/src/material-icons/filled'

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>

```
:::

