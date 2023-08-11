<!-- import -->
<script setup>
import Basic from '../examples/tooltip/01.basic.vue'
</script>
<!-- import -->

## 基础

<!-- component -->
<Basic></Basic>
::: details 查看源码
::: code-group
```vue [template]
<template>
  <div class="btns w-full flex items-center">
    <button>
      <u-icon name="keyboard_arrow_up" color="#fff"></u-icon>
      <span>Top</span>
      <u-tooltip position="top">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_right" color="#fff"></u-icon>
      <span>Right</span>
      <u-tooltip position="right">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_down" color="#fff"></u-icon>
      <span>Bottom</span>
      <u-tooltip position="bottom">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_left" fill="#fff"></u-icon>
      <span>Left</span>
      <u-tooltip position="left">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
  </div>
</template>
```

```vue [all]
<template>
  <div class="btns w-full flex items-center">
    <button>
      <u-icon name="keyboard_arrow_up" color="#fff"></u-icon>
      <span>Top</span>
      <u-tooltip position="top">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_right" color="#fff"></u-icon>
      <span>Right</span>
      <u-tooltip position="right">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_down" color="#fff"></u-icon>
      <span>Bottom</span>
      <u-tooltip position="bottom">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
    <button>
      <u-icon name="keyboard_arrow_left" fill="#fff"></u-icon>
      <span>Left</span>
      <u-tooltip position="left">
        <div class="tooltip">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
  </div>
</template>


```

:::
<!-- component -->
