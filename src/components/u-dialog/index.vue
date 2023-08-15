<template>
  <Teleport to="body">
    <Transition name="u-fade">
      <div 
        v-if="modelValue" 
        class="u-dialog w-screen h-screen fixed top-0 z-50" 
        @click="closeDialog"
      >
        <div 
          ref="backdropRef"
          class="u-dialog-backdrop h-full" 
          :class="backdropClass"
        >
        </div>
        <div 
          ref="innerRef" 
          class="u-dialog-inner absolute flex" 
          :class="innerClass"
        >
          <!-- add a container for persistent -->
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, watch } from 'vue'

import { useAddAnimation } from '../../composables'

const props = withDefaults(defineProps<{ 
  position?: 'top' | 'right' | 'bottom' | 'left' | 'center',
  modelValue: boolean,
  persistent?: boolean
}>(), { 
  position: 'center',
  persistent: false
})
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const { position, modelValue, persistent } = toRefs(props)
const innerRef = ref<HTMLElement | null>(null)
const backdropRef = ref<HTMLElement | null>()
const backdropClass = computed(() => modelValue.value 
  ? 'bg-[rgba(0,0,0,.4)]' 
  : 'bg-transparent'
)
const innerPositionClassStrategies = {
  top: 'top-0 left-0 right-0 justify-center',
  right: 'right-0 top-0 bottom-0 items-center',
  bottom: 'bottom-0 left-0 right-0 justify-center',
  left: 'left-0 top-0 bottom-0 items-center',
  center: 'top-0 right-0 bottom-0 left-0 justify-center items-center'
}
const innerAnimationClassStrategies = {
  top: ['animate-u-slide-down', 'animate-u-slide-down-reverse'],
  right: ['animate-u-slide-left', 'animate-u-slide-left-reverse'],
  bottom: ['animate-u-slide-up', 'animate-u-slide-up-reverse'],
  left: ['animate-u-slide-right', 'animate-u-slide-right-reverse'],
  center: []
}
const innerClass = computed(() => {
  const _position = position.value

  return `${ innerPositionClassStrategies[_position] }`
  // innerAnimationClassStrategies[position][modelValue ? '0' : '1'] 
})

const closeDialog = (e: Event) => {
  const _innerRef = innerRef.value as HTMLElement
  const _backdropRef = backdropRef.value as HTMLElement

  // dialog is closed by click inner's children
  if (!_innerRef) {
    return
  }

  const target = e.target as HTMLElement
  const outer = target === _innerRef || target === _backdropRef

  if (!outer) {
    return
  }

  if (persistent.value) {
    // 
  } else {
    emit('update:modelValue', false)
  }
}
</script>
