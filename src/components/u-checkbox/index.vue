<template>
  <div 
    class="u-checkbox" 
    @click="updateModel"
    :class="_class"
    :style="_style"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()
const props = withDefaults(defineProps<{ 
  modelValue: boolean,
  class?: string,
  style?: { [propName: string]: string | number },
  activeStyle?: { [propName: string]: string | number }
  activeClass?: string,
}>(), {
  style: () => ({}),
  class: '',
  activeStyle: () => ({}),
  activeClass: ''
})
const { 
  modelValue, 
  class: className, 
  style, 
  activeClass, 
  activeStyle 
} = toRefs(props)
const _class = computed(() => `
  ${ className.value }${ modelValue.value ? ` ${ activeClass.value }` : ''}
`)
const _style = computed(() => ({
  ...style.value,
  ...activeStyle.value
}))

const updateModel = () =>  emit('update:modelValue', !modelValue.value)
</script>

<style scoped>
.u-checkbox {
  cursor: pointer;
  transition: background-color var(--u-transition-duration);
}

.u-checkbox-input {
  display: none;
}
</style>
