<template>
  <div class="u-select-wrapper" >
    <div class="u-select-before">
      <slot name="before"></slot>
    </div>

    <div 
      tabindex="-1"
      ref="inputContainer"
      class="u-select-container" 
      :style="_selectStyle"
      @click="foucsHelper"
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
        class="u-select"
        ref="input" 
        type="text" 
        @click="foucsHelper"
        @focus="containerFocusHandler"
        @blur="containerBlurHandler"
      />

      <slot name="append"></slot>

      <div @click="updateModel" class="u-select-items">
        <slot name="select-items"></slot>
      </div>
    </div>

    <div class="u-select-after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{
  options: string[],
  modelValue: string,
  selectStyle?: { [propName: string]: string | number },
  selectClass?: string,
  placeholder?: string,
  placeholderStyle?: { [propName: string]: string | number },
  hoveredSelectStyle?: { [propName: string]: string | number }
  focusedSelectStyle?: { [propName: string]: string | number },
  focusedSelectClass?: string,
  hoveredSelectClass?: string
}>(), {
  selectClass: '',
  selectStyle: () => ({}),
  placeholder: '',
  placeholderStyle: () => ({}),
  // TODO: focusedPlaceholderStyle and hoveredPlaceholderStyle
  focusedSelectStyle: () => ({}),
  hoveredSelectStyle: () => ({}),
  focusedSelectClass: '',
  hoveredSelectClass: ''
})
const emit = defineEmits<{ 'update:modelValue': [string] }>()

const { 
  options,
  modelValue, 
  selectStyle,
  selectClass,
  placeholder,
  placeholderStyle,
  focusedSelectClass,
  hoveredSelectClass,
  focusedSelectStyle,
  hoveredSelectStyle
} = toRefs(props)
const input = ref<HTMLElement | null>(null)
const focusedInput = ref(false)
const inputContainer = ref<HTMLElement | null>(null)
const focusedInputContainer = ref(false)
const hoveredInputContainer = ref(false)

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
  emit('update:modelValue', options.value[index])
}

const foucsHelper = (e: Event) => {
  const { target, currentTarget } = e

  // if target is not input and container contains target, autofocus.
  if (target === currentTarget) {
    input.value!.focus()
  } 
}

const containerFocusHandler = () => focusedInputContainer.value = true

const containerBlurHandler = () => focusedInputContainer.value = false

const mouseenterHandler = () => hoveredInputContainer.value = true

const mouseleaveHandler = () => hoveredInputContainer.value = false

const focusedInputOrInputContainer = computed(() => {
  return focusedInput.value || focusedInputContainer.value
})

const _selectStyle = computed(() => {
  const style = {
    ...selectStyle.value, 
    // replace top: var(--u-select-height) with top: 100% 
    // '--u-select-height': selectStyle.value.height,
    ...(
      focusedInputOrInputContainer.value
        ? focusedSelectStyle.value
        : hoveredInputContainer.value
          ? hoveredSelectStyle.value
          : {}
    )
  }

  const { border } = style
  style['--input-container-border'] = border
  delete style.border

  return style
})

const _selectClass = computed(() => {
  return `
    ${ selectClass.value }
    ${ focusedInputOrInputContainer.value ? focusedSelectClass.value : '' }
    ${ hoveredInputContainer.value ? hoveredSelectClass.value : '' }
  `
})

const _placeholderStyle = computed(() => {
  const { color, fontSize, fontWeight } = placeholderStyle.value
  const res: { [propName: string]: string | number } = {
    '--u-placeholder-color': color,
    '--u-placeholder-fontSize': fontSize,
    '--u-placeholder-fontWeight': fontWeight,
  }

  return res
})
</script>

<style scoped>
.u-select-wrapper {
  display: flex;
  align-items: center;
}

.u-select-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  transition-property: background-color;
  transition-duration: var(--u-transition-duration);
}

/* handle text jitter */
.u-select-container::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: var(--input-container-border);
  z-index: -1;
  /* transition-property: border-color;
  transition-duration: var(--u-transition-duration); */
}

.u-select-container.u-disabled,
.u-select-container.u-disabled > .u-select {
  cursor: not-allowed;
}

.u-select {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.u-select:focus {
  outline: none;
}

.u-select::placeholder {
  color: var(--u-placeholder-color);
  font-size: var(--u-placeholder-fontSize);
  font-weight: var(--u-placeholder-fontWeight);
}

.u-select-before,
.u-select-after {
  height: 100%;
}

.u-select-items {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
}
</style>
