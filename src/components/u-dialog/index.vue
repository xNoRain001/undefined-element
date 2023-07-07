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
          <slot name="default"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed } from 'vue'

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

const positionStrategies = {
  top () {
    return {
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },

  right () {
    return {
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },

  bottom () {
    return {
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },

  left () {
    return {
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },

  center () {
    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}

const positionStyle = computed(() => {
  const _position = position.value
  const _modelValue = modelValue.value
  const value1 = '0'
  const value2 = '-100%'
  const styleValue = _modelValue ? value1 : value2
  const { startValue, endValue } = genCSSVariables(styleValue, value1, value2)

  // for center
  const value3 = '1'
  const value4 = '0'
  const opacityValue = _modelValue ? value3 : value4
  const { 
    startValue: startValue2, 
    endValue: endValue2 
  } = genCSSVariables(opacityValue, value3, value4)

  const res: { [propName: string]: string } = {
    ...positionStrategies[_position](),
  }

  if (_position === 'center') {
    res.opacity = opacityValue
    res[`--u-opacity-start`] = startValue2,
    res[`--u-opacity-end`] = endValue2
  } else {
    res[_position] = styleValue
    res[`--u-${ _position }-start`] = startValue,
    res[`--u-${ _position }-end`] = endValue
  }

  return res
})

const backgroundColorStyle = computed(() => {
  const value1 = 'rgba(0, 0, 0, .4)'
  const value2 = 'transparent'
  const styleValue = modelValue.value ? value1 : value2
  const { startValue, endValue } = genCSSVariables(styleValue, value1, value2)

  return {
    backgroundColor: styleValue,
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
