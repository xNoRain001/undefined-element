<template>
  <div 
    class="u-dropdown relative w-fit"
    ref="dropdownRef"
  >
    <div 
      class="u-dropdown-header"
      tabindex="-1"
      ref="headerRef"
      :disabled="disabled"
    >
      <slot :visible="visible"></slot>
    </div>

    <Transition name="u-fade">
      <slot v-if="visible" name="list" :visible="visible"></slot>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onMounted } from 'vue'

const props = withDefaults(defineProps<{
  trigger?: 'click' | 'hover',
  disabled?: boolean,
  isTooltip?: boolean
}>(), {
  trigger: 'hover',
  disabled: false,
  isTooltip: false
})
const visible = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const { trigger, disabled, isTooltip } = toRefs(props)

const onShow = () => {
  if (!disabled.value) {
    visible.value = true
  }
}

const onHide = () => visible.value = false

const onToggle = () => {
  if (!disabled.value) {
    visible.value = !visible.value
  }
}

let focused = false

const onBlur = () => {
  focused = false 
  onHide()
}

const onFocus = (e: FocusEvent) => {
  e.stopPropagation()
  focused = true
}

const onClick = () => {
  if (focused) {
    onToggle()
  }
}

const clean = (trigger: 'hover' | 'click') => {
  const _headerRef = headerRef.value as HTMLElement
  const _dropdownRef = dropdownRef.value as HTMLElement

  if (trigger === 'click') {
    _dropdownRef.removeEventListener('mouseenter', onShow)
    _dropdownRef.removeEventListener('mouseleave', onHide)
    _dropdownRef.removeEventListener('click', onToggle)
  } else {
    _headerRef.removeEventListener('blur', onBlur, true)
    _headerRef.removeEventListener('focus', onFocus, true)
    _dropdownRef.removeEventListener('click', onClick)
  }
}

onMounted(() => {
  watch(trigger, value => {
    const _headerRef = headerRef.value as HTMLElement
    const _dropdownRef = dropdownRef.value as HTMLElement
    
    if (value === 'hover') {
      _dropdownRef.addEventListener('mouseenter', onShow)
      _dropdownRef.addEventListener('mouseleave', onHide)
      _dropdownRef.addEventListener('click', onToggle)
    } else {
      _headerRef.addEventListener('blur', onBlur, true)
      _headerRef.addEventListener('focus', onFocus, true)
      _dropdownRef.addEventListener('click', onClick)
    }

    clean(value)
  }, { immediate: true })
})
</script>
