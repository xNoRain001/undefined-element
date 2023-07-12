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
        class="u-select"
        ref="input" 
        type="text" 
      />

      <slot name="append"></slot>

      <div 
        v-show="showing"
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
const focusedInput = ref(false)
const focusedInputContainer = ref(false)
const showing = ref(false)
const hoveredInputContainer = ref(false)
const inputContainer = ref<HTMLElement | null>(null)
const selectItemsRef = ref<HTMLElement | null>(null)
const persistentFocus = ref(false)

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
  // click select items, input must be blurred, container muse be focused.
  containerBlurHandler(true)
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

const focusHandler = () => focusedInput.value = true

const blurHandler = () => {
  setTimeout(() => {
    focusedInput.value = false
  })
}

const mouseenterHandler = () => hoveredInputContainer.value = true

const mouseleaveHandler = () => hoveredInputContainer.value = false

// callback will execute twice when focus change，but returned value don't
// change twice by set timeout.
const focusedInputOrInputContainer = computed(() => {
  return focusedInput.value || focusedInputContainer.value
})

const selectItemsStyle = computed(() => {
  const value1 = '1'
  const value2 = '0'
  const opacityValue = focusedInputOrInputContainer.value ? value1 : value2
  const { startValue, endValue } = genCSSVariables(opacityValue, value1, value2)

  return {
    opacity: opacityValue,
    '--u-opacity-start': startValue,
    '--u-opacity-end': endValue
  }
})

watch(focusedInputOrInputContainer, (v) => {
  if (v) {
    showing.value = v
  } else {
    setTimeout(() => {
      showing.value = v
    }, 300)
  }

  useAddAnimation(selectItemsRef.value as HTMLElement, 'u-animate-opacity')
})

const _selectStyle = computed(() => {
  const style = {
    ...selectStyle.value, 
    // replace `top: var(--u-select-height);` with `top: 100%;`
    // '--u-select-height': selectStyle.value.height,
    ...(
      focusedInputOrInputContainer.value || persistentFocus.value
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
