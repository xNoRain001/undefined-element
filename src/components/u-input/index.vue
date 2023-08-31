<template>
  <div 
    class="u-input-wrapper flex items-center" 
    ref="wrapperRef"
  >
    <slot name="before"></slot>

    <div 
      tabindex="-1"
      class="
        u-input-container flex items-center relative
        before:content-[''] before:absolute before:left-0 before:right-0 
        before:bottom-0 before:top-0 before:z-[-1]
        before:transition-colors
        before:duration-[--u-transition-duration]
      " 
      :class="containerClass"
      @click="foucsHelper"
      @focus="onFocus"
      @blur="onBlur"
    >
      <slot name="prepend"></slot>

      <input 
        :autofocus="autofocus ? true : false"
        :readonly="readonly ? true : false"
        :disabled="disabled ? true : false"
        :placeholder="placeholder" 
        :value="modelValue" 
        @input="_onInput"  
        @focus="onInputFocus"
        @blur="onInputBlur"
        @click.stop="noop"
        class="u-input h-full grow focus:outline-none bg-transparent"
        :class="_inputClass"
        ref="inputRef" 
        :type="_type" 
      />

      <slot name="append" :visible="visible"></slot>
    </div>

    <slot name="after"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted } from 'vue'

import { noop, debounce as debounceFn } from '../../utils'

const props = withDefaults(defineProps<{
  type?: 'text' | 'password' | 'textareae' | 'mail' | 'search' | 'tel' | 'file' 
  | 'number' | 'url' | 'time' | 'date',
  class?: string,
  debounce?: number,
  readonly?: boolean,
  disabled?: boolean,
  autofocus?: boolean,
  modelValue: string,
  inputClass?: string,
  placeholder?: string,
  focusedBorderClass?: string
}>(), {
  type: 'text',
  class: '',
  debounce: 0,
  readonly: false,
  disabled: false,
  autofocus: false,
  inputClass: '',
  placeholder: '',
  focusedBorderClass: ''
})
const emit = defineEmits<{ 
  'blur': [e: Event],
  'focus': [e: Event],
  'clear': [value: string],
  'update:modelValue': [value: string]
}>()
const { 
  type,
  class: className,
  debounce, 
  readonly,
  disabled,
  autofocus,
  modelValue, 
  inputClass,
  placeholder,
  focusedBorderClass
} = toRefs(props)
const visible = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const focusedContainer = ref(false)
const _type = computed(() => {
  return type.value === 'password' && visible.value
    ? 'text'
    : type.value
})
const focused = computed(() => {
  return !readonly.value && 
    !disabled.value &&
    (focusedInput.value || focusedContainer.value)
})
const containerClass = computed(() => `${ className.value }${ 
  disabled.value ? ' cursor-not-allowed' : ''
}${ focused.value ? ` ${ focusedBorderClass.value }` : ''}`)
const _inputClass = computed(() => `${ inputClass.value }${ 
  disabled.value ? ' cursor-not-allowed' : '' 
}${ readonly.value ? ' cursor-auto' : '' }`)

const foucsHelper = () => inputRef.value!.focus()

const onFocus = () => focusedContainer.value = true

const onBlur = () => setTimeout(() => focusedContainer.value = false)

const onInputFocus = (e: Event) => {
  focusedInput.value = true
  emit('focus', e)
}

const onInputBlur = (e: Event) => {
  setTimeout(() => {
    focusedInput.value = false
    emit('blur', e)
  })
}

const onInput = (e: Event) => emit(
  'update:modelValue', 
  (e.target as HTMLInputElement).value
)

const _onInput = computed(() => {
  const _debounce = debounce.value

  return readonly.value 
    ? noop 
    : _debounce
      ? debounceFn(onInput, _debounce)
      : onInput
})

const initClearableBtns = () => {
  const onClear = () => {
    if (modelValue.value.length) {
      const oldValue = modelValue.value
      emit('update:modelValue', '')
      emit('clear', oldValue)
    }
  }

  const elms = wrapperRef.value!.querySelectorAll('*[clearable]')

  for (let i = 0, l = elms.length; i < l; i++) {
    elms[i].addEventListener('click', onClear)
  }
}

const initVisibleBtns = () => {
  const updateVisibility = () => visible.value = !visible.value

  const elms = wrapperRef.value!.querySelectorAll('*[password]')

  for (let i = 0, l = elms.length; i < l; i++) {
    elms[i].addEventListener('click', updateVisibility)
  }
}

onMounted(() => {
  initClearableBtns()
  initVisibleBtns()
})
</script>
