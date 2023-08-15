<template>
  <div class="u-infinite-scroll" ref="containerRef">
    <div class="u-infinite-scroll-content">
      <slot></slot>
    </div>

    <Transition name="u-fade">
      <div class="u-infinite-scroll-loading">
        <slot name="loading" :loading="loading"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'

import { debounce } from '../../utils'
import { useIsScrollToOffsetPosition } from '../../composables'

const emit = defineEmits<{ 'load': [done: Function] }>()
const props = withDefaults(defineProps<{
  offset?: number,
  scrollTarget?: string
}>(), {
  offset: 200,
  scrollTarget: '',
})
const loading = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const { offset, scrollTarget } = toRefs(props)

const done = () => loading.value = false

const onScroll = debounce((e: Event) => {
  if (
    !loading.value && 
    useIsScrollToOffsetPosition(e.target as HTMLElement, offset.value)
  ) {
    loading.value = true
    emit('load', done)
  }
}, 300)

onMounted(() => {
  watch(scrollTarget, v => {
    const target = v ? document.querySelector(v) : containerRef.value
    target?.addEventListener('scroll', onScroll)
  }, { immediate: true })
})
</script>
