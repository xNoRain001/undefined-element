<template>
  <div 
    class="u-toggle relative flex items-center" 
    @click="updateModel" 
  >
    <div 
      class="
        u-toggle-track w-full h-full transition-[background-color] 
        duration-[var(--u-transition-duration)]
      " 
      :style="_trackStyle" 
      :class="_trackClass"
    >
    </div>
    <div 
      class="
        u-toggle-thumb absolute flex justify-center items-center 
        transition-[left] duration-[var(--u-transition-duration)]
      " 
      :style="_thumbStyle"
      :class="_thumbClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()
const props = withDefaults(defineProps<{
  modelValue: boolean,
  trackStyle?: { [propName: string]: string | number },
  trackClass?: string,
  thumbStyle?: { [propName: string]: string | number },
  thumbClass?: string,
  activeTrackStyle?: { [propName: string]: string | number },
  activeTrackClass?: string,
  activeThumbStyle?: { [propName: string]: string | number },
  activeThumbClass?: string
}>(), {
  trackStyle: () => ({}),
  trackClass: '',
  thumbStyle: () => ({}),
  thumbClass: '',
  activeTrackStyle: () => ({}),
  activeTrackClass: '',
  activeThumbStyle: () => ({}),
  activeThumbClass: '',
})
const { 
  modelValue,
  trackStyle,
  trackClass,
  thumbStyle,
  thumbClass,
  activeTrackStyle,
  activeTrackClass,
  activeThumbStyle,
  activeThumbClass,
} = toRefs(props)
const _thumbStyle = computed(() => {
  const _modelValue = modelValue.value

  return {
    ...thumbStyle.value,
    ...{ 
      // left: _modelValue ? '100%' : '0',
      // transform: `translateX(${ _modelValue ? '-100%' : '0' })`,
      
    },
    ...(_modelValue ? activeThumbStyle.value : {})
  }
})
const _trackStyle = computed(() => ({
  ...trackStyle.value,
  ...(modelValue.value ? activeTrackStyle.value : {})
}))
const _thumbClass = computed(() => `
  ${ thumbClass.value } ${ modelValue.value ? activeThumbClass.value : ''}
`)
const _trackClass = computed(() => `
  ${ trackClass.value } ${ modelValue.value ? activeTrackClass.value : ''}
`)

const updateModel = () => emit('update:modelValue', !modelValue.value)
</script>
