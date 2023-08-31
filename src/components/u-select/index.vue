<template>
  <div 
    class="u-input-wrapper flex items-center" 
    ref="wrapperRef"
  >
    <slot name="before"></slot>

    <div 
      tabindex="-1"
      ref="containerRef"
      class="
        u-input-container focus:outline-none flex items-center relative 
        before:content-[''] before:absolute before:left-0 before:right-0 
        before:bottom-0 before:top-0 before:z-[-1]
        before:transition-colors
        before:duration-[--u-transition-duration]
      " 
      :class="containerClass"
      @click="onClick"
      @blur="onBlur"
    >
      <slot name="prepend"></slot>

      <input 
        :readonly="disabled ? false : true"
        :disabled="disabled ? true : false"
        :placeholder="placeholder" 
        :value="modelValue" 
        class="u-input h-full grow focus:outline-none bg-transparent"
        :class="_inputClass"
        ref="inputRef" 
        type="text"
        @mousedown="onMousedown"
      />

      <slot name="append" :expanded="expanded"></slot>

      <Transition name="u-fade">
        <div
          v-if="expanded"
          @click.stop="updateModelValue" 
          @focusout.stop="noop"
          ref="selectListRef"
          class="u-select-list absolute left-0 right-0 top-full z-10"
        >
          <slot name="select-list"></slot>
        </div>
      </Transition>
    </div>

    <slot name="after" :expanded="expanded"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted } from 'vue'

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
const inputRef = ref<HTMLElement | null>(null)
const selectListRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const focused = ref(false)
const expanded = computed(() => !readonly.value && 
  !disabled.value && 
  focused.value
)
const cursorClass = computed(() => `${ disabled.value 
  ? ' cursor-not-allowed' 
  : `${ readonly.value ? ' cursor-auto' : ' cursor-pointer' }` 
}`)
const containerClass = computed(() => `${ 
  className.value 
}${ 
  cursorClass.value 
}${ 
  expanded.value ? ` ${ focusedBorderClass.value }` : ''
}`)
const _inputClass = computed(() => `${ 
  inputClass.value 
}${ 
  cursorClass.value
}`)

// ------ keep mouse down ------
// mousedown > focus > focus in > mouseup > click
const onMousedown = (e: MouseEvent) => {
  // prevent input focus
  e.preventDefault()
  containerRef.value!.focus()
}

const onClick = () => focused.value = !focused.value

const onBlur = () => focused.value = false

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
    const _maxValues = maxValues.value

    if (index >= 0) {
      _modelValue.splice(index, 1)
    } else if (_modelValue.length < _maxValues) {
      _modelValue.push(value)
    } else if (race.value) {
      _modelValue.shift()
      _modelValue.push(value)
    }

    if (!persistent.value && _modelValue.length >= _maxValues) {
      onBlur()
    }
  } else {
    emit('update:modelValue', value)
    onBlur()
  }
}

const initClearableBtns = () => {
  const onClear = (e: Event) => {
    e.stopPropagation()

    if (Array.isArray(modelValue.value)) {
      modelValue.value.splice(0)
    } else {
      emit('update:modelValue', '')
    }
  }

  const elms = wrapperRef.value!.querySelectorAll('*[clearable]')

  for (let i = 0, l = elms.length; i < l; i++) {
    elms[i].addEventListener('click', onClear)
  }
}

onMounted(() => {
  initClearableBtns()
})
</script>
