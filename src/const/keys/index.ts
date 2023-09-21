import type { Ref, InjectionKey } from 'vue'

export const tabsKey: InjectionKey<{
  modelValue: Ref<string>,
  updateModel: Function,
  updateIndicatorStyle: Function
}> = Symbol()

export const panelsKey: InjectionKey<Ref<string>> = Symbol()

export const skeletonKey: InjectionKey<Ref<boolean>> = Symbol()

export const carouselKey: InjectionKey<{
  counter: Ref<number>,
  modelValue: Ref<number>,
  carouselRef: Ref<HTMLElement | null>,
  updateCounter: Function,
  updateModelValue: Function,
  updateAnimationName: Function
}> = Symbol()

export const expansionKey: InjectionKey<{
  modelValue: string[],
  updateModel: Function
}> = Symbol()

export const checkboxGroupKey: InjectionKey<{
  parentModel: any[] | null,
  updateParentModel: Function
}> = Symbol()
