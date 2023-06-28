<template>
  <Teleport to="body">
    <div v-if="modelValue" class="u-dialog">
      <div 
        class="u-dialog-backdrop" 
        :style="{ 
          backgroundColor: modelValue ? 'rgba(0, 0, 0, .4)' : 'transparent' 
        }" 
      >
      </div>
      <div class="u-dialog-inner" :style="style">
        <div>
          <slot name="default"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{ 
  modelValue: boolean,
  position?: 'top' | 'right' | 'bottom' | 'left' | 'center'
}>(), { position: 'center' })
const { modelValue, position } = toRefs(props)

const style = computed(() => {
  const _position = position.value
  const justifyContent = /^center|top|bottom$/.test(_position)
    ? 'center'
    : _position === 'left'
      ? 'start'
      : _position === 'right'
        ? 'end'
        : 'unset'
  const isCenterOrLeftOrRight = /^center|left|right$/.test(_position)
  const top = isCenterOrLeftOrRight
    ? '50%'
    : _position === 'top'
      ? '0'
      : 'unset'
  const transform = isCenterOrLeftOrRight ? 'translateY(-50%)' : 'unset'
  const bottom = _position === 'bottom' ? '0' : 'unset'

  return {
    top,
    bottom,
    transform,
    justifyContent
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
  z-index: 10;
}
.u-dialog-backdrop {
  width: 100%;
  height: 100%;
  transition: background-color .3s;
}

.u-dialog-inner{
  width: 100%;
  position: fixed;
  display: flex;
}
</style>
