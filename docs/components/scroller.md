<!-- import -->
<script setup>
import Basic from '../examples/scroller/01.basic.vue'
import To from '../examples/scroller/02.to.vue'
import Duration from '../examples/scroller/03.duration.vue'
import ScrollOffset from '../examples/scroller/04.scroll-offset.vue'
import ScrollTarget from '../examples/scroller/05.scroll-target.vue'
</script>
<!-- import -->

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px">
    <div v-for="i in 100" :key="i">
      Lorem ipsum dolor sit amet.
    </div>
    <u-scroller class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

:::
<!-- component -->

<!-- component -->
<To></To>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px">
    <div v-for="i in 100" :key="i">
      Lorem ipsum dolor sit amet.
    </div>
    <u-scroller :to="100" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

:::
<!-- component -->

<!-- component -->
<Duration></Duration>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px">
    <div v-for="i in 100" :key="i">
      Lorem ipsum dolor sit amet.
    </div>
    <u-scroller :duration="0" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

:::
<!-- component -->

<!-- component -->
<ScrollOffset></ScrollOffset>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <u-scroll-area height="400px">
    <div v-for="i in 100" :key="i">
      Lorem ipsum dolor sit amet.
    </div>
    <u-scroller :scrollOffset="0" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </u-scroll-area>
</template>
```

:::
<!-- component -->

<!-- component -->
<ScrollTarget></ScrollTarget>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="w-full relative">
    <div class="scroll-target w-full h-[400px] overflow-y-scroll">
      <div v-for="i in 100" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
    </div>

    <u-scroller scrollTarget=".scroll-target" :duration="300" class="absolute right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </div>
</template>
```

:::
<!-- component -->
