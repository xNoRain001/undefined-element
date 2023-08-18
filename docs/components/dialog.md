<!-- import -->
<script setup>
import Basic from '../examples/dialog/01.basic.vue'
import Persistent from '../examples/dialog/02.persistent.vue'
import Drawer from '../examples/dialog/03.drawer.vue'
</script>
<!-- import -->

# Dialog

Dialog 组件可以向用户提供信息，或要求他们作出决定。

:::details 属性
|属性名|描述|类型|默认值|
|:-----------:|:-----------:|:----:|:----:|
|position|对话框的位置|'top' \| 'right' \| 'bottom' \| 'left' \| 'center'|'center'|
|modelValue|绑定的值，用于控制是否显示对话框|boolean|-|
|persistent|是否开启持久化|boolean|false|
:::

:::details 插槽
|插槽名|描述|
|:-----------:|:-----------:|
|default|对话框的内容|
:::

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="flex items-center flex-wrap -m-[4px]">
    <button @click="updateVisible1" class="btn m-[4px]">Top</button>
    <button @click="updateVisible2" class="btn m-[4px]">Right</button>
    <button @click="updateVisible3" class="btn m-[4px]">Bottom</button>
    <button @click="updateVisible4" class="btn m-[4px]">Left</button>
    <button @click="updateVisible5" class="btn m-[4px]">Center</button>
  </div>

  <u-dialog v-model="visible1" position="top">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Top</div>
        <u-icon class="cursor-pointer" name="close" @click="updateVisible1"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible2"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible3"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible4"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible5"></u-icon>
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
  <div class="flex items-center flex-wrap -m-[4px]">
    <button @click="updateVisible1" class="btn m-[4px]">Top</button>
    <button @click="updateVisible2" class="btn m-[4px]">Right</button>
    <button @click="updateVisible3" class="btn m-[4px]">Bottom</button>
    <button @click="updateVisible4" class="btn m-[4px]">Left</button>
    <button @click="updateVisible5" class="btn m-[4px]">Center</button>
  </div>

  <u-dialog v-model="visible1" position="top">
    <div class="w-[560px] bg-white p-[24px]">
      <div class="flex justify-between">
        <div class="text-[20px] font-semibold ">Top</div>
        <u-icon class="cursor-pointer" name="close" @click="updateVisible1"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible2"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible3"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible4"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible5"></u-icon>
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
<!-- component -->

## 持久化

开启持久化后，点击遮罩层不会关闭对话框。

<!-- component -->
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible"></u-icon>
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

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>

```

:::
<!-- component -->

## 抽屉

可以非常容易地将对话框改为抽屉

<!-- component -->
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible"></u-icon>
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
        <u-icon class="cursor-pointer" name="close" @click="updateVisible"></u-icon>
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

const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>

```

:::
<!-- component -->
