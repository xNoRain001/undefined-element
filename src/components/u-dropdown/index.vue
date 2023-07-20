<template>
  <div 
    class="u-dropdown"
    @click="updateVisibility"
  >
    <div class="u-dropdown-trigger">
      <slot name="dropdown-trigger"></slot>
    </div>

    <Transition name="u-animate-opacity">
      <div 
        v-if="visible"
        class="u-dropdown-list" 
        @click.stop="updateVisibility"
      >
        <slot name="dropdown-list"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// TODO: trigger by mouseenter
// const props = defineProps<{}>()
const visible = ref(false)

const updateVisibility = () => visible.value = !visible.value
</script>

<style scoped>
.u-dropdown {
  position: relative;
  display: inline-block;
}

.u-dropdown-list {
  position: absolute;
}
</style>
