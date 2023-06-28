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
      <div class="u-dialog-inner">
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
  justify-content: center;
  top: 0;
}
</style>
