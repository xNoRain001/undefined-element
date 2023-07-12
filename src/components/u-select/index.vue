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
      @click="clickHandler"
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
      />

      <slot name="append"></slot>

      <div 
        @click="updateModel" 
        ref="selectItemsRef"
        class="u-select-items"
        :style="selectItemsStyle"
      >
        <slot name="select-items"></slot>
      </div>
    </div>

    <div class="u-select-after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed } from 'vue'

import { useAddAnimation } from '../../composables/index'
import { genCSSVariables } from '../../utils'

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
const focused = ref(false)
const hovered = ref(false)
const inputContainer = ref<HTMLElement | null>(null)
const selectItemsRef = ref<HTMLElement | null>(null)

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

const clickHandler = () => focused.value = !focused.value 

const mouseenterHandler = () => hovered.value = true

const mouseleaveHandler = () => hovered.value = false

const selectItemsStyle = computed(() => {
  const value1 = '1'
  const value2 = '0'
  const styleValue = focused.value ? value1 : value2
  const { startValue, endValue } = genCSSVariables(styleValue, value1, value2)

  return {
    opacity: styleValue,
    '--u-opacity-start': startValue,
    '--u-opacity-end': endValue
  }
})

watch(focused, () => {
  useAddAnimation(selectItemsRef.value as HTMLElement, 'u-animate-opacity')
})

const _selectStyle = computed(() => {
  const style = {
    ...selectStyle.value, 
    // replace top: var(--u-select-height) with top: 100% 
    // '--u-select-height': selectStyle.value.height,
    ...(
      focused.value
        ? focusedSelectStyle.value
        : hovered.value
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
    ${ focused.value ? focusedSelectClass.value : '' }
    ${ hovered.value ? hoveredSelectClass.value : '' }
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
