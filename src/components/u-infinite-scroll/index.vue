<template>
  <div class="u-infinite-scroll" @scroll="onScroll">
    <div class="u-infinite-scroll-content">
      <slot name="content"></slot>
    </div>

    <Transition name="u-animate-opacity">
      <div v-if="loading" class="u-infinite-scroll-loading">
        <slot name="loading"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{}>()
const emit = defineEmits<{ 'load': [] }>()
const loading = ref(false)

const onScroll = (e: Event) => {
  const target = e.target as HTMLElement
  const { scrollTop, clientHeight, scrollHeight } = target

  if (scrollHeight - clientHeight === scrollTop) {
    emit('load')
    loading.value = true
  }
}
</script>
