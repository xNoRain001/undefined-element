<template>
  <div 
    class="u-dropdown relative w-fit h-fit"
    ref="dropdownRef"
  >
    <div 
      class="u-dropdown-header"
      tabindex="-1"
      ref="headerRef"
    >
      <slot :visible="visible"></slot>
    </div>

    <Transition name="u-fade">
      <div 
        v-if="visible"
        class="u-dropdown-list" 
        @click="onHide"
      >
        <slot name="list" :visible="visible"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  trigger?: 'click' | 'hover',
  isTooltip?: boolean
}>(), {
  trigger: 'hover',
  isTooltip: false
})
const visible = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const { trigger, isTooltip } = toRefs(props)

const onShow = () => visible.value = true

const onHide = () => visible.value = false

onMounted(() => {
  watch(trigger, value => {
    const _headerRef = headerRef.value as HTMLElement

    if (value === 'hover') {
      if (isTooltip.value) {
        _headerRef.addEventListener('mouseenter', onShow)
        _headerRef.addEventListener('mouseleave', onHide)
      } else {
        const _dropdownRef = dropdownRef.value as HTMLElement

        _dropdownRef.addEventListener('mouseenter', onShow)
        _dropdownRef.addEventListener('mouseleave', onHide)
      }
    } else {    
      _headerRef.addEventListener('focusout', onHide)
      _headerRef.addEventListener('click', () => visible.value 
        ? onHide() 
        : onShow()
      )
    }
  }, { immediate: true })
})
</script>
