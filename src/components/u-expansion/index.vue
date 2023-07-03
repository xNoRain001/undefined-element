<template>
  <div 
    class="u-expansion"
    :style="style"
    :class="expansionClass"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide } from 'vue'
import { expansionKey } from '../../keys'

const props = withDefaults(defineProps<{
   modelValue: string[],
   style?: { [propName: string]: string | number },
   class?: string,
   headerStyle?: { [propName: string]: string | number },
   headerClass?: string,
   activeHeaderClass?: string,
   contentStyle?: { [propName: string]: string | number },
   contentClass?: string
}>(), {
  style: () => ({}),
  class: '',
  headerStyle: () => ({}),
  headerClass: '',
  activeHeaderClass: '',
  contentStyle: () => ({}),
  contentClass: ''
})
const { 
  modelValue,
  style,
  class: expansionClass,
  headerStyle, 
  headerClass, 
  activeHeaderClass,
  contentStyle, 
  contentClass 
} = toRefs(props)

const updateModel = (name: string) => {
  const expanded = modelValue.value
  const index = expanded.indexOf(name)

  if (index >= 0) {
    expanded.splice(index, 1)
  } else {
    expanded.push(name)
  }
}

provide(expansionKey, {
  modelValue: modelValue.value,
  updateModel,
  headerStyle,
  headerClass,
  activeHeaderClass,
  contentStyle,
  contentClass
})
</script>
