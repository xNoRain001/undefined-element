<template>
  <div 
    tabindex="-1"
    class="u-dropdown"
    ref="dropdownRef"
  >
    <div class="u-dropdown-trigger">
      <slot></slot>
    </div>

    <Transition name="u-animate-opacity">
      <div 
        v-if="visible"
        class="u-dropdown-list" 
        :class="listClass"
        :style="listStyle"
        @click.stop="updateVisibility"
      >
        <slot name="dropdown-list"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted } from 'vue'

const visible = ref(false)
const props = withDefaults(defineProps<{
  trigger?: 'click' | 'hover',
  listClass?: string,
  listStyle?: { [propName: string]: string |number }
}>(), {
  trigger: 'click',
  listClass: '',
  listStyle: () => ({})
})
const dropdownRef = ref<HTMLElement | null>(null)
const { trigger } = toRefs(props)

const onShow = () => visible.value = true

const onHide = () => visible.value = false

const updateVisibility = () => visible.value = !visible.value

onMounted(() => {
  const _dropdownRef = dropdownRef.value as HTMLElement

  if (trigger.value === 'hover') {
    _dropdownRef.addEventListener('mouseenter', onShow)
    _dropdownRef.addEventListener('mouseleave', onHide)
  }
  
  _dropdownRef.addEventListener('click', updateVisibility)
})
</script>

<style scoped>
.u-dropdown {
  position: relative;
  display: inline-block;
}

.u-dropdown-list {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 100%;
}
</style>
