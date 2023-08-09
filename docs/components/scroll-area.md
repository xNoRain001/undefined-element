<!-- import -->
<script setup>
import Basic from '../examples/scroll-area/01.basic.vue'
import Persistent from '../examples/scroll-area/02.persistent.vue'
import Hidden from '../examples/scroll-area/03.hidden.vue'
</script>
<!-- import -->

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full grid gap-y-[24px]">
    <u-scroll-area height="200px" width="400px">
      <div v-for="i in 15" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
    </u-scroll-area>

    <u-scroll-area width="400px">
      <div class="whitespace-nowrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quos 
        accusantium veniam et cupiditate odio obcaecati pariatur ratione 
        repellendus magni iste quam quas, ipsa deleniti quaerat amet illum ab 
        recusandae!
      </div>
      <div v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
    </u-scroll-area>
  </div>
</template>
```

:::
<!-- component -->

<!-- component -->
<Persistent></Persistent>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-scroll-area height="200px" width="400px" persistent>
      <div v-for="i in 15" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
    </u-scroll-area>
  </div>
</template>
```

:::
<!-- component -->

<!-- component -->
<Hidden></Hidden>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full">
    <u-scroll-area height="200px" width="400px" hidden>
      <div v-for="i in 15" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
    </u-scroll-area>
  </div>
</template>
```

:::
<!-- component -->
