<template>
  <div class="u-infinite-scroll" ref="containerRef">
    <Transition name="u-fade">
      <div v-if="reverse" class="u-infinite-scroll-loading">
        <slot name="loading" :loading="loading"></slot>
      </div>
    </Transition>

    <div class="u-infinite-scroll-content">
      <slot></slot>
    </div>

    <Transition name="u-fade">
      <div v-if="!reverse" class="u-infinite-scroll-loading">
        <slot name="loading" :loading="loading"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'

import { debounce } from '../../utils'
import { watchOptions } from '../../const/options'

const emit = defineEmits<{ 'load': [done: Function] }>()
const props = withDefaults(defineProps<{
  offset?: number,
  reverse?: boolean,
  scrollTarget?: string,
}>(), {
  offset: 200,
  reverse: false,
  scrollTarget: '',
})
const loading = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const { offset, reverse, scrollTarget } = toRefs(props)

const done = () => loading.value = false

const loader = (container: HTMLElement) => {
  const { scrollTop, clientHeight, scrollHeight } = container

  return reverse.value 
    ? scrollTop <= offset.value
    : scrollTop >= scrollHeight - clientHeight - offset.value
}

const onScroll = debounce((e: Event) => {
  if (!loading.value && loader(e.target as HTMLElement)) {
    loading.value = true
    emit('load', done)
  }
}, 300)

onMounted(() => {
  watch(scrollTarget, v => {
    const target = v ? document.querySelector(v) : containerRef.value
    
    target?.addEventListener('scroll', onScroll)
  }, watchOptions)
})
</script>
