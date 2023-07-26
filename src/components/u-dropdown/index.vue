<template>
  <div 
    class="u-dropdown"
    @click="updateVisibility"
  >
    <div class="u-dropdown-trigger">
      <slot></slot>
    </div>

    <Transition name="u-animate-opacity">
      <div 
        v-if="visible"
        class="u-dropdown-list" 
        :style="cssVariables"
        @click.stop="updateVisibility"
      >
        <slot name="dropdown-list"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue'

// TODO: trigger by mouseenter
// const props = defineProps<{}>()
const visible = ref(false)
const props = withDefaults(defineProps<{
  trigger?: 'click' | 'hover',
  offset?: {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string
  }
}>(), {
  trigger: 'click',
  offset: {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }
})
const { offset } = toRefs(props)
const cssVariables = computed(() => {
  const { top, right, bottom, left } = offset.value

  return {
    '--u-dropdown-list-top': top, 
    '--u-dropdown-list-right': right, 
    '--u-dropdown-list-bottom': bottom, 
    '--u-dropdown-list-left': left, 
  }
})

const updateVisibility = () => visible.value = !visible.value
</script>

<style scoped>
.u-dropdown {
  position: relative;
  display: inline-block;
}

.u-dropdown-list {
  position: absolute;
  top: var(--u-dropdown-list-top);
  right: var(--u-dropdown-list-right);
  bottom: var(--u-dropdown-list-bottom);
  left: var(--u-dropdown-list-left);
}
</style>
