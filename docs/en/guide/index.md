<script setup>
import QuasarInput from '../../guide/quasar-input.vue'
import ElementPlusInput from '../../guide/element-plus-input.vue'
import Basic from '../../examples/input/01.basic.vue'
</script>

# 什么是 Undefined Element？

Undefined Element 是一个只关注于逻辑的 Vue3 组件库。

## 为什么选择 Undefined Element？

Undefined Element 除了极少量必须的样式外，没有预设样式，这意味着组件的样式是完全可控的，具有非常强大的扩展性，修改组件的样式是一件非常容易的事。

这是 Element-Plus 风格的 input 组件

<ElementPlusInput></ElementPlusInput>

这是 Quasar 风格的 input 组件

<QuasarInput></QuasarInput>

这是我自己定义的 input 组件

<Basic></Basic>

它们都是通过 UInput 组件实现的
