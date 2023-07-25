<template>
  <div 
    class="u-checkbox" 
    @click="updateModel"
    :class="_class"
    :style="_style"
  >
    <Transition name="u-animate-opacity">
      <div v-if="modelValue">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, inject, computed } from 'vue'

import { checkboxGroupKey } from '../../const/keys'

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()
const props = withDefaults(defineProps<{ 
  class?: string,
  style?: { [propName: string]: string | number },
  modelValue?: boolean,
  activeStyle?: { [propName: string]: string | number }
  activeClass?: string,
}>(), {
  style: () => ({}),
  class: '',
  modelValue: false,
  activeStyle: () => ({}),
  activeClass: ''
})
const { 
  class: className, 
  style, 
  modelValue, 
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
// const { 
//   modelValue: _modelValue, 
//   updateModel: _updateModel, 
// } = (inject(checkboxGroupKey) || {})as {
//   modelValue: any[],
//   updateModel: Function,
// }
// console.log(_modelValue, _updateModel);

const updateModel = () =>  emit('update:modelValue', !modelValue.value)
</script>

<style scoped>
.u-checkbox {
  cursor: pointer;
  transition: all var(--u-transition-duration);
}

.u-checkbox-input {
  display: none;
}
</style>
