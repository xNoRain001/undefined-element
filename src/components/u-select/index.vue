<template>
  <div 
    class="u-input-wrapper flex items-center" 
    ref="inputWrapperRef"
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
      :class="inputContainerClass"
      @click="onClick"
      @focusin="onFocusin"
      @focusout="onFocusout"
    >
      <slot name="prepend"></slot>

      <input 
        readonly
        :disabled="disabled ? true : false"
        :placeholder="placeholder" 
        :value="modelValue" 
        class="u-input h-full grow focus:outline-none bg-transparent"
        :class="_inputClass"
        ref="inputRef" 
        type="text"
      />

      <slot name="append" :expanded="expanded"></slot>

      <slot name="after" :expanded="expanded"></slot>

      <Transition name="u-fade">
        <div 
          v-if="expanded"
          @click.stop="updateModelValue" 
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
import { ref, watch, toRefs, computed, onMounted } from 'vue'

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
  persistent: true,
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
const expanded = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const selectListRef = ref<HTMLElement | null>(null)
const inputWrapperRef = ref<HTMLElement | null>(null)
const persistentFocus = ref(false)
const focusedInputContainer = ref(false)
const focused = computed(() => {
  return !readonly.value && 
    !disabled.value &&
    (focusedInput.value || focusedInputContainer.value)
})
let flag = false
const inputContainerClass = computed(() => `${ className.value }${ 
  disabled.value ? ' cursor-not-allowed' : ''
}${ focused.value ? ` ${ focusedBorderClass.value }` : ''}`)
const _inputClass = computed(() => `${ inputClass.value }${ 
  disabled.value ? ' cursor-not-allowed' : '' 
}${ readonly.value ? ' cursor-auto' : '' }`)

const onClick = () => expanded.value = !expanded.value

const onFocus = () => focusedInputContainer.value = true

const onBlur = () => setTimeout(
  () => focusedInputContainer.value = false
)

const onFocusin = () => {
  flag = true
}

const onFocusout = (e: FocusEvent) => {
}

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
    const _modelValue = modelValue.value as string[]
    const index = _modelValue.indexOf(value)

    if (index >= 0) {
      _modelValue.splice(index, 1)
    } else if (_modelValue.length < maxValues.value) {
      _modelValue.push(value)
    } else if (race.value) {
      _modelValue.shift()
      _modelValue.push(value)
    }

    if (!persistent.value && _modelValue.length >= maxValues.value) {
      containerBlurHandler(true)
    }
  } else {
    emit('update:modelValue', value)
    // click select items, input must be blurred, container muse be focused.
    // make container blur for hide select items.
    // containerBlurHandler(true)
  }

  expanded.value = false
}
</script>
