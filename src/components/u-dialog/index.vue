<template>
  <Teleport to="body">
    <Transition name="u-fade">
      <div 
        v-if="modelValue" 
        class="u-dialog w-screen h-screen fixed top-0 z-50" 
        @click="onClose"
      >
        <div 
          ref="backdropRef"
          class="u-dialog-backdrop h-full" 
          :class="backdropClass"
        >
        </div>
        <div 
          ref="innerRef" 
          class="u-dialog-inner absolute flex" 
          :class="innerClass"
        >
          <!-- add a container for persistent -->
          <div ref="slotContainerRef">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, computed, nextTick } from 'vue'
import { dialogPosition, dialogAnimation } from '../../const/strategies'

const props = withDefaults(defineProps<{ 
  position?: 'top' | 'right' | 'bottom' | 'left' | 'center',
  modelValue: boolean,
  persistent?: boolean
}>(), { 
  position: 'center',
  persistent: false
})
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const { position, modelValue, persistent } = toRefs(props)
const innerRef = ref<HTMLElement | null>(null)
const backdropRef = ref<HTMLElement | null>(null)
const backdropClass = computed(() => modelValue.value 
  ? 'bg-[rgba(0,0,0,.4)]' 
  : 'bg-transparent'
)

const innerClass = computed(() => dialogPosition[position.value])

let timeout: number | null = null
const slotContainerRef = ref<HTMLElement | null>(null)

const onClose = (e: Event) => {
  const _innerRef = innerRef.value as HTMLElement
  const _backdropRef = backdropRef.value as HTMLElement

  // dialog is closed by click container
  if (!_innerRef) {
    return
  }

  const target = e.target as HTMLElement
  const outer = target === _innerRef || target === _backdropRef

  if (!outer) {
    return
  }

  if (persistent.value) {
    const { classList } = slotContainerRef.value as HTMLElement

    classList.remove('u-shake')
    classList.add('u-shake')

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      timeout = null

      classList.remove('u-shake')
    }, 150)
  } else {
    emit('update:modelValue', false)
  }
}

watch(modelValue, value => {
  const className = dialogAnimation[position.value][value ? 0 : 1]

  if (value) {
    nextTick(() => {
      slotContainerRef.value!.classList.add(className)

      setTimeout(() => {
        slotContainerRef.value!.classList.remove(className)
      }, 300)
    })
  } else {
    slotContainerRef.value!.classList.add(className)
  }
})
</script>
