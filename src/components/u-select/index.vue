<template>
  <div 
    class="u-input-wrapper flex items-center" 
    ref="inputWrapperRef"
  >
    <slot name="before"></slot>

    <div 
      tabindex="-1"
      class="
        u-input-container flex items-center relative cursor-pointer
        before:content-[''] before:absolute before:left-0 before:right-0 
        before:bottom-0 before:top-0 before:z-[-1]
        before:transition-colors
        before:duration-[--u-transition-duration]
      " 
      :class="inputContainerClass"
      @focus="onFocus"
      @blur="onBlur"
    >
      <slot name="prepend"></slot>

      <input 
        readonly
        :disabled="disabled ? true : false"
        :placeholder="placeholder" 
        :value="modelValue" 
        class="u-input h-full grow focus:outline-none bg-transparent cursor-pointer"
        :class="_inputClass"
        ref="inputRef" 
        type="text"
        @focus="onInputFocus"
        @blur="onInputBlur"
      />

      <slot name="append" :expanded="expanded"></slot>

      <slot name="after" :expanded="expanded"></slot>

      <Transition name="u-fade">
        <div 
          v-if="expanded"
          @click="updateModelValue" 
          ref="selectListRef"
          class="u-select-list absolute left-0 right-0 top-full z-10"
        >
          <slot name="select-list"></slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue'

import { noop } from '../../utils'

const props = withDefaults(defineProps<{
  race?: boolean,
  class?: string,
  options: string[],
  readonly?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  maxValues?: number,
  persistent?:boolean,
  modelValue: string | string[],
  inputClass?: string,
  placeholder?: string,
  focusedBorderClass?: string
}>(), {
  race: false,
  class: '',
  multiple: false,
  readonly: false,
  disabled: false,
  maxValues: Number.MAX_SAFE_INTEGER,
  persistent: false,
  inputClass: '',
  placeholder: '',
  focusedBorderClass: ''
})
const emit = defineEmits<{ 
  'blur': [e: Event],
  'focus': [e: Event],
  'clear': [value: string | string[]],
  'update:modelValue': [value: string]
}>()
const { 
  race,
  class: className,
  options,
  multiple,
  readonly,
  disabled,
  maxValues,
  modelValue, 
  persistent,
  inputClass,
  placeholder,
  focusedBorderClass
} = toRefs(props)
const inputRef = ref<HTMLElement | null>(null)
const selectListRef = ref<HTMLElement | null>(null)
const inputWrapperRef = ref<HTMLElement | null>(null)
const focusedContainer = ref(false)
const focusedInput = ref(false)
const expanded = computed(() => !readonly.value && 
  !disabled.value && 
  (focusedContainer.value || focusedInput.value)
)
const inputContainerClass = computed(() => `${ className.value }${ 
  disabled.value ? ' cursor-not-allowed' : '' 
}${ expanded.value ? ` ${ focusedBorderClass.value }` : ''}`)
const _inputClass = computed(() => `${ inputClass.value }${ 
  disabled.value ? ' cursor-not-allowed' : '' 
}${ readonly.value ? ' cursor-auto' : '' }`)

const onFocus = () => focusedContainer.value = true

const onBlur = () => setTimeout(() => focusedContainer.value = false)

const onInputFocus = () => focusedInput.value = true

const onInputBlur = () => setTimeout(() => focusedInput.value = false)

const getIndex = (target: HTMLElement, parent: HTMLElement) => {
  let index: string | null = null

  while (!(index = target.getAttribute('data-index')) && target !== parent) {
    target = target.parentNode as HTMLElement
  }

  return index as string
}

const updateModelValue = (e: Event) => {
  const { target, currentTarget } = e 
  const index = getIndex(target as HTMLElement, currentTarget as HTMLElement)
  const value = options.value[Number(index)]
  
  if (multiple.value) {
    console.log(maxValues.value);
    
    const _modelValue = modelValue.value as string[]
    const index = _modelValue.indexOf(value)
    const _maxValues = maxValues.value

    if (index >= 0) {
      _modelValue.splice(index, 1)
    } else if (_modelValue.length < _maxValues) {
      _modelValue.push(value)
    } else if (race.value) {
      _modelValue.shift()
      _modelValue.push(value)
    }


    console.log(persistent.value )
    if (!persistent.value && _modelValue.length >= _maxValues) {
      onBlur()
    }
  } else {
    emit('update:modelValue', value)
    onBlur()
  }
}
</script>
