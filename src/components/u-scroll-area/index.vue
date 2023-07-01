<template>
  <div class="u-scroll-area" :style="{ height: `${ height }px` }">
    <div 
      @scroll="scrollHandler" 
      ref="container" 
      class="u-scroll-area-container"
    >
      <div ref="content" class="u-scroll-area-content">
        <slot></slot>
      </div>
    </div>
    <div class="u-scroll-area-bar">
      <div 
        ref="thumb" 
        class="u-scroll-area-thumb" 
        :style="{ height: `${ thumbHeight }px` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted } from 'vue'

const props = defineProps<{ height?: number | string }>()
const { height } = toRefs(props)
const thumb = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const thumbHeight = ref(0)

const initThumbSize = () => {
  if (!height?.value || content.value!.clientHeight < Number(height.value)) {
    return
  }

  const { scrollHeight, clientHeight } = container.value as HTMLElement
  thumbHeight.value = clientHeight * (clientHeight / scrollHeight)
}

const scrollHandler = (e: Event) => {
  const { scrollTop, scrollHeight, clientHeight } = e.currentTarget as HTMLElement
  const scrollAreaHeight = scrollHeight - clientHeight
  const thumnScrollableHeight = clientHeight - thumbHeight.value
  const offset = Number((scrollTop / scrollAreaHeight * thumnScrollableHeight).toFixed(2))

  thumb.value!.style.top = `${ offset }px`
}

onMounted(() => {
  initThumbSize()
})
</script>

<style>
.u-scroll-area {
  width: 100%;
  position: relative;
}

.u-scroll-area-container {
  height: 100%;
  overflow-y: auto;
}

.u-scroll-area-container::-webkit-scrollbar {
  display: none;
}

.u-scroll-area-bar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 6px;
}

.u-scroll-area-thumb {
  width: 100%;
  background-color: rgba(144, 147, 153, .3);
  border-radius: 4px;
  display: none;
  position: absolute;
  right: 0;
  cursor: pointer;
  transition: background-color .3s;
}

.u-scroll-area-thumb:hover {
  background-color: rgba(144, 147, 153, .5);
}

.u-scroll-area:hover .u-scroll-area-thumb {
  display: block;
}
</style>
