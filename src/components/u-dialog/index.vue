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
        <slot name="default"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed } from 'vue'
import { genCSSVariables } from '../../utils'

const props = withDefaults(defineProps<{ 
  modelValue: boolean,
  position?: 'top' | 'right' | 'bottom' | 'left' | 'center',
  persistent?: boolean
}>(), { 
  position: 'center',
  persistent: false
})
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const { modelValue, position, persistent } = toRefs(props)
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
    const { classList } = _inner.children[0]
    
    classList.add('u-animate-dialog-inner-persistent')
    setTimeout(() => {
      classList.remove('u-animate-dialog-inner-persistent')
    }, 150)
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
  const value1 = '0'
  const value2 = '-100%'
  const styleValue = modelValue.value ? value1 : value2
  const { startValue, endValue } = genCSSVariables(styleValue, value1, value2)

  // for center
  const value3 = '1'
  const value4 = '0'
  const opacityValue = modelValue.value ? value3 : value4
  const { 
    startValue: startValue2, 
    endValue: endValue2 
  } = genCSSVariables(opacityValue, value3, value4)

  const res: { [propName: string]: string } = {
    ...positionStrategies[_position](),
  }

  if (_position === 'center') {
    res.opacity = opacityValue
    res[`--u-dialog-inner-${ _position }-start`] = startValue2,
    res[`--u-dialog-inner-${ _position }-end`] = endValue2
  } else {
    res[_position] = styleValue
    res[`--u-dialog-inner-${ _position }-start`] = startValue,
    res[`--u-dialog-inner-${ _position }-end`] = endValue
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
    '--u-dialog-backdrop-bg-start': startValue,
    '--u-dialog-backdrop-bg-end': endValue
  }
})

watch(modelValue, v => {
  const { classList } = innerRef.value as HTMLElement
  const { classList: classList2 } = backdropRef.value as HTMLElement
  const _position = position.value

  classList.add(`u-animate-dialog-inner-${ _position }`)
  classList2.add('u-animate-dialog-backdrop')
  
  setTimeout(() => {
    classList.remove(`u-animate-dialog-inner-${ _position }`)
    classList2.remove('u-animate-dialog-backdrop')
  }, 300)

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
