<template>
  <div 
    class="u-input-wrapper flex items-center" 
    ref="inputWrapperRef"
  >
    <div class="u-input-before h-full">
      <slot name="before"></slot>
    </div>

    <div 
      tabindex="-1"
      class="
        u-input-container flex items-center relative !border-none
        transition-[background-color] duration-[var(--u-transition-duration)]
        before:content-[''] before:absolute before:left-0 before:right-0 
        before:bottom-0 before:top-0 before:z-[-1] before:transition-[border-color] 
        before:duration-[var(--u-transition-duration)]
      " 
      :style="_selectStyle"
      :class="_selectClass"
      @focus="containerFocusHandler"
      @blur="containerBlurHandler"
      @mouseenter="mouseenterHandler"
      @mouseleave="mouseleaveHandler"
    >
      <slot name="prepend"></slot>

      <input 
        :placeholder="placeholder" 
        :value="modelValue" 
        :style="_placeholderStyle"
        readonly
        @focus="focusHandler"
        @blur="blurHandler"
        class="u-input w-full h-full bg-transparent focus:outline-none"
        ref="inputRef" 
        type="text" 
      />

      <slot name="append" :expanded="expanded"></slot>

      <Transition name="u-fade">
        <div 
          v-if="expanded"
          @click="updateModel" 
          ref="selectItemsRef"
          class="u-select-items absolute left-0 right-0 top-full z-10"
          :class="selectItemsClass"
          :style="selectItemsStyle"
        >
          <slot name="select-items"></slot>
        </div>
      </Transition>
    </div>

    <div class="u-input-after h-full">
      <slot name="after" :expanded="expanded"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed, onMounted } from 'vue'

import { 
  useAddEventListener,
  useGenBorderVariables 
} from '../../composables'

const props = withDefaults(defineProps<{
  race?: boolean,
  options: string[],
  readonly?: boolean,
  disabled?: boolean,
  multiple?: boolean,
  maxValues?: number,
  persistent?:boolean,
  modelValue: string | string[],
  selectStyle?: { [propName: string]: string | number },
  selectClass?: string,
  placeholder?: string,
  selectItemsStyle?: { [propName: string]: string | number },
  selectItemsClass?: string,
  placeholderStyle?: { [propName: string]: string | number },
  hoveredSelectStyle?: { [propName: string]: string | number }
  focusedSelectStyle?: { [propName: string]: string | number },
  focusedSelectClass?: string,
  hoveredSelectClass?: string
}>(), {
  race: false,
  multiple: false,
  readonly: false,
  disabled: false,
  maxValues: Number.MAX_SAFE_INTEGER,
  persistent: true,
  selectClass: '',
  selectStyle: () => ({}),
  placeholder: '',
  selectItemsStyle: () => ({}),
  selectItemsClass: '',
  placeholderStyle: () => ({}),
  // TODO: focusedPlaceholderStyle and hoveredPlaceholderStyle
  focusedSelectStyle: () => ({}),
  hoveredSelectStyle: () => ({}),
  focusedSelectClass: '',
  hoveredSelectClass: ''
})
const emit = defineEmits<{ 
  'blur': [e: Event],
  'focus': [e: Event],
  'clear': [value: string | string[]],
  'update:modelValue': [value: string]
}>()
const { 
  race,
  options,
  multiple,
  readonly,
  disabled,
  maxValues,
  modelValue, 
  persistent,
  selectStyle,
  selectClass,
  placeholder,
  selectItemsStyle,
  selectItemsClass,
  placeholderStyle,
  focusedSelectClass,
  hoveredSelectClass,
  focusedSelectStyle,
  hoveredSelectStyle
} = toRefs(props)
const expanded = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const selectItemsRef = ref<HTMLElement | null>(null)
const inputWrapperRef = ref<HTMLElement | null>(null)
const persistentFocus = ref(false)
const focusedInputContainer = ref(false)
const hoveredInputContainer = ref(false)
const _placeholderStyle = computed(() => {
  const { color, fontSize, fontWeight } = placeholderStyle.value

  return {
    '--u-input-placeholder-color': color,
    '--u-input-placeholder-fontSize': fontSize,
    '--u-input-placeholder-fontWeight': fontWeight,
  }
})
const focused = computed(() => {
  return !readonly.value && 
    !disabled.value &&
    (focusedInput.value || focusedInputContainer.value)
})
const _selectStyle = computed(() => {
  const style = {
    ...selectStyle.value, 
    // replace `top: var(--u-input-height);` with `top: 100%;`
    // '--u-input-height': selectStyle.value.height,
    ...(
      focused.value
        ? focusedSelectStyle.value
        : hoveredInputContainer.value
          ? hoveredSelectStyle.value
          : {}
    )
  }
  
  useGenBorderVariables(style)

  return style
})
const _selectClass = computed(() => `
  ${ selectClass.value }
  ${ focused.value ? focusedSelectClass.value : '' }
  ${ hoveredInputContainer.value ? hoveredSelectClass.value : '' }
  ${ disabled.value ? 'u-disabled' : '' }
`)
// callback will execute twice when focus change，but returned value don't
// change twice by set timeout.
const focusedInputOrInputContainer = computed(() => {
  return focusedInput.value || focusedInputContainer.value
})

const getIndex = (target: HTMLElement, parent: HTMLElement) => {
  let index: string | null = null

  while (!(index = target.getAttribute('data-index')) && target !== parent) {
    target = target.parentNode as HTMLElement
  }

  return index as string
}

const updateModel = (e: Event) => {
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
    containerBlurHandler(true)
  }
}

const containerFocusHandler = () => focusedInputContainer.value = true

const containerBlurHandler = (_persistentFocus: boolean | FocusEvent) => {
  // set timeout for resolve focusedInputOrInputContainer change twice when 
  // focus change.
  setTimeout(() => {
    focusedInputContainer.value = false

    if (typeof _persistentFocus === 'boolean') {
      // when click select items, type of argument must be boolean, update
      // persistenFocus make container keep focus.
      persistentFocus.value = _persistentFocus // must be true
    } else {
      // when select items is not clicked, container blur.
      persistentFocus.value = false
    }
  })
}

const mouseenterHandler = () => hoveredInputContainer.value = true

const mouseleaveHandler = () => hoveredInputContainer.value = false

const focusHandler = (e: FocusEvent) => {
  focusedInput.value = true
  emit('focus', e)
}

const blurHandler = (e: Event) => {
  setTimeout(() => {
    focusedInput.value = false
    emit('blur', e)
  })
}

watch(focusedInputOrInputContainer, (v) => {
  if (disabled.value) {
    return
  }

  expanded.value = v
})

const clearContent = () => {
  const oldValue = modelValue.value

  if (multiple.value) {
    (oldValue as string[]).splice(0)
  } else {
    emit('update:modelValue', '')
  }

  emit('clear', oldValue)
}

onMounted(() => {
  const _inputWrapperRef = inputWrapperRef.value as HTMLElement

  useAddEventListener(_inputWrapperRef, '*[clearable]', 'click', clearContent)
})
</script>

<style scoped>
/* handle text jitter */
.u-input-container::before {
  border: var(--u-input-container-before-border);
  border-top-right-radius: 
    var(--u-input-container-before-border-top-right-radius);
  border-top-left-radius: 
    var(--u-input-container-before-border-top-left-radius);
  border-bottom-right-radius: 
    var(--u-input-container-before-border-bottom-right-radius);
  border-bottom-left-radius: 
    var(--u-input-container-before-border-bottom-left-radius);
}

.u-input-container.u-disabled,
.u-input-container.u-disabled > .u-input {
  cursor: not-allowed;
}

.u-input::placeholder {
  color: var(--u-input-placeholder-color);
  font-size: var(--u-input-placeholder-fontSize);
  font-weight: var(--u-input-placeholder-fontWeight);
}
</style>
