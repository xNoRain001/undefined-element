<template>
  <Teleport to="body">
    <div v-show="_modelValue" class="u-dialog" @click="closeDialog">
      <div 
        ref="backdropRef"
        class="u-dialog-backdrop" 
        :style="backgroundColorStyle"
      >
      </div>
      <div ref="innerRef" class="u-dialog-inner" :style="positionStyle">
        <!-- this is a container for persistent -->
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed } from 'vue'

import { dialogPosition } from '../../const/strategies'
import { genCSSVariables } from '../../utils'
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
const _modelValue = ref(modelValue.value)

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
    useAddAnimation(
      _inner.children[0] as HTMLElement, 
      'u-animate-dialog-inner-persistent', 
      150
    )
  }
}

const positionStyle = computed(() => {
  const _position = position.value
  const _modelValue = modelValue.value
  const res: { [propName: string]: string } = {
    ...dialogPosition[_position](),
  }

  if (_position === 'center') {
    const { startValue, endValue } = genCSSVariables(_modelValue, '0', '1')

    res.opacity = endValue
    res[`--u-opacity-start`] = startValue,
    res[`--u-opacity-end`] = endValue
  } else {
    const { startValue, endValue } = genCSSVariables(_modelValue, '-100%', '0')

    res[_position] = endValue
    res[`--u-${ _position }-start`] = startValue,
    res[`--u-${ _position }-end`] = endValue
  }

  return res
})

const backgroundColorStyle = computed(() => {
  const { startValue, endValue } = genCSSVariables(
    modelValue.value, 
    'transparent',
    'rgba(0, 0, 0, .4)',
  )

  return {
    backgroundColor: endValue,
    '--u-bg-start': startValue,
    '--u-bg-end': endValue
  }
})

watch(modelValue, v => {
  const _position = position.value

  useAddAnimation(
    innerRef.value as HTMLElement, 
    `u-animate-${ _position }`
  )
  useAddAnimation(backdropRef.value as HTMLElement, 'u-animate-bg')

  if (v) {
    _modelValue.value = v
  } else {
    setTimeout(() => {
      _modelValue.value = v
    }, 300)
  }
})
</script>

<style scoped>
.u-dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.u-dialog-backdrop {
  width: 100%;
  height: 100%;
}

.u-dialog-inner {
  position: fixed;
}
</style>
