<template>
  <div class="u-splitter">
    <div class="before">
      <slot name="before"></slot>
    </div>
    <div ref="splitter">
      <slot name="splitter"></slot>
    </div>
    <div class="after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const splitter = ref<HTMLElement | null>(null)

onMounted(() => {

})
</script>

<style scoped>
.u-splitter {
  display: flex;
  justify-content: space-between;
}

.before,
.after {
  flex-grow: 1;
}
</style>