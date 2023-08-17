<template>
  <div class="u-expansion-item">
    <div 
      @click="onClick" 
      class="u-expansion-item-header cursor-pointer"
    >
      <slot :expanded="expanded"></slot>
    </div>

    <div 
      ref="contentRef" 
      :style="contentStyle"
      class="
        u-expansion-item-content overflow-y-hidden transition-[height] 
        duration-[var(--u-transition-duration)]
      "
    >
      <slot name="content" :expanded="expanded"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { 
  ref, 
  watch, 
  toRefs,
  inject, 
  computed, 
  reactive, 
  onMounted 
} from 'vue'

import { expansionKey } from '../../const/keys'

const props = defineProps<{ name: string }>()
const { name } = toRefs(props)
const { 
  modelValue, 
  updateModel
} = inject(expansionKey) as {
  modelValue: string[],
  updateModel: Function
}
const expanded = computed(() => modelValue.includes(name.value))
const contentRef = ref<HTMLElement | null>(null)
const contentStyle = reactive({ height: expanded ? '100%' : '0px' })

const onClick = () => updateModel(name.value)

onMounted(() => {
  watch(expanded, value => {
    contentStyle.height = value 
      ? `${ contentRef.value!.scrollHeight }px` 
      : '0px'
  }, { immediate: true })
})
</script>
