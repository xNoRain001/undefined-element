<template>
  <div 
    class="u-checkbox" 
    @click="updateModel"
    :class="_class"
    :style="_style"
  >
    <Transition name="u-animate-opacity">
      <div v-if="checked">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, inject, computed } from 'vue'

import { noop } from '../../utils'
import { checkboxGroupKey } from '../../const/keys'

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()
const props = withDefaults(defineProps<{ 
  class?: string,
  style?: { [propName: string]: string | number },
  value?: any,
  disabled?: boolean,
  modelValue?: boolean,
  activeStyle?: { [propName: string]: string | number }
  activeClass?: string,
  disabledClass?: string
}>(), {
  style: () => ({}),
  value: false,
  class: '',
  disabled: false,
  activeStyle: () => ({}),
  activeClass: '',
  disabledClass: ''
})

const { 
  parentModel, 
  updateParentModel 
} = inject(checkboxGroupKey, {
  parentModel: null,
  updateParentModel: noop
})
const { 
  class: className, 
  style, 
  value,
  disabled,
  modelValue, 
  activeClass, 
  activeStyle,
  disabledClass 
} = toRefs(props)
const _class = computed(() => `
  ${ className.value }${ checked.value ? ` ${ activeClass.value }` : ''}
  ${ disabled.value ? ` ${ disabledClass.value }` : ''}
`)
const _style = computed(() => ({
  ...style.value,
  ...activeStyle.value
}))
const checked = computed(() => {
  return parentModel
    ? parentModel.includes(value.value)
    : modelValue.value
})

const updateModel = () => {
  if (disabled.value) {
    return
  }

  if (parentModel) {
    updateParentModel(value.value)
  } else {
    emit('update:modelValue', !modelValue.value)
  }
}
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
