<template>
  <Teleport to="body">
    <div v-if="_modelValue" class="u-dialog" @click="closeDialog">
      <div 
        class="u-dialog-backdrop" 
        :style="backgroundColorStyle" 
      >
      </div>
      <div ref="inner" class="u-dialog-inner" :style="positionStyle">
        <slot name="default"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed } from 'vue'

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
const inner = ref<HTMLElement | null>(null)
const _modelValue = ref(modelValue.value)

const closeDialog = (e: Event) => {
  const _inner = inner.value as HTMLElement

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
    
    classList.add('u-animate-scale')
    setTimeout(() => {
      classList.remove('u-animate-scale')
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

  return {
    ...positionStrategies[_position](),
    [_position]: modelValue.value ? 0 : '-100%',
  }
})

const backgroundColorStyle = computed(() => ({
  backgroundColor: modelValue.value ? 'rgba(0, 0, 0, .4)' : 'transparent' 
}))

watch(modelValue, v => {
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
  transition: background-color var(--u-transition-duration);
}

.u-dialog-inner {
  position: fixed;
  transition: all var(--u-transition-duration);
}
</style>
