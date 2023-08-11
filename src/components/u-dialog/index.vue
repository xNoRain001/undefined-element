<template>
  <Teleport to="body">
    <Transition name="u-animate-opacity" :duration="600000">
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
          <!-- this is a container for persistent -->
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
  top: ['animate-u-slide-down', 'animate-u-slide-up'],
  right: ['animate-u-slide-left', 'animate-u-slide-right'],
  bottom: ['animate-u-slide-up', 'animate-u-slide-down'],
  left: ['animate-u-slide-right', 'animate-u-slide-left'],
  center: []
}
const innerClass = computed(() => {
  const _position = position.value

  return `${ innerPositionClassStrategies[_position] } ${ 
    innerAnimationClassStrategies[_position][modelValue.value ? '0' : '1'] 
  }`
})

const closeDialog = (e: Event) => {
  const _inner = innerRef.value as HTMLElement

  // dialog is closed by inner element
  if (!_inner) {
    return
  }

  // close dialog by outer element
  const isInner = _inner.contains(e.target as HTMLElement)
  const _persistent = persistent.value

  if (!_persistent && !isInner) {
    emit('update:modelValue', false)
  } else if (_persistent && !isInner && modelValue.value) {
    // when dialog is opened and persistent, need to add animation, 
    // but don't add to inner node, because animation will clear 
    // inner node's transform property.
    // useAddAnimation(
    //   _inner.children[0] as HTMLElement, 
    //   'u-animate-dialog-inner-persistent', 
    //   150
    // )
  }
}
</script>
