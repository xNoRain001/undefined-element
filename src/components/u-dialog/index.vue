<template>
  <Teleport to="body">
    <div v-if="modelValue" class="u-dialog" @click="closeDialog">
      <div 
        class="u-dialog-backdrop" 
        :style="{ 
          backgroundColor: modelValue ? 'rgba(0, 0, 0, .4)' : 'transparent' 
        }" 
      >
      </div>
      <div ref="inner" class="u-dialog-inner" :style="postionStyle">
        <div>
          <slot name="default"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue'

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

const closeDialog = (e: Event) => {
  const _inner = inner.value as HTMLElement

  if (!persistent.value && !_inner.contains(e.target as HTMLElement)) {
    emit('update:modelValue', false)
  } else if (modelValue.value) {
    // when dialog opened and persistent, need to add animation, 
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
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },

  right () {
    return {
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },

  bottom () {
    return {
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },

  left () {
    return {
      left: 0,
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

const postionStyle = computed(() => {
  const _position = position.value
  return positionStrategies[_position]()
})
</script>

<style scoped>
.u-dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.u-dialog-backdrop {
  width: 100%;
  height: 100%;
  transition: background-color .3s;
}

.u-dialog-inner {
  position: fixed;
}
</style>
