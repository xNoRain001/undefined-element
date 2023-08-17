<template>
  <div 
    class="u-dropdown relative w-fit h-fit"
    ref="dropdownRef"
  >
    <div 
      class="u-dropdown-header"
      tabindex="-1"
      ref="headerRef"
      @click="onClick"
      @focus="onFocus"
      @blur="onBlur"
    >
      <slot :visible="visible"></slot>
    </div>

    <Transition name="u-fade">
      <div 
        v-if="visible"
        class="u-dropdown-list absolute z-10 left-0 right-0 top-full" 
        @click="onToggle"
      >
        <slot name="list" :visible="visible"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, watch } from 'vue'

import { noop } from '../../utils'

const visible = ref(false)
const props = withDefaults(defineProps<{
  trigger?: 'click' | 'hover',
}>(), {
  trigger: 'click',
})
const dropdownRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const { trigger } = toRefs(props)

const onShow = () => visible.value = true

const onHide = () => visible.value = false

const onToggle = () => visible.value = !visible.value

const _onClick = () => {
  headerRef.value!.focus()
}

const onClick = trigger.value === 'click' ? _onClick : noop

const onFocus = () => {
  console.log('focus')
  onShow()
}

const onBlur = () => {
  console.log('blur')
  onHide()
}

onMounted(() => {
  watch(trigger, value => {
    const _dropdownRef = dropdownRef.value as HTMLElement

    if (value === 'hover') {
      _dropdownRef.addEventListener('mouseenter', onShow)
      _dropdownRef.addEventListener('mouseleave', onHide)
    } else {
      _dropdownRef.addEventListener('click', onToggle)
    }
  }, { immediate: true })
})
</script>
