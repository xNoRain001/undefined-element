import type { Ref, InjectionKey } from 'vue'

export const tabsKey: InjectionKey<{
  modelValue: Ref<string>,
  updateModel: Function,
  updateIndicatorStyle: Function
}> = Symbol()

export const panelsKey: InjectionKey<Ref<string>> = Symbol()

export const skeletonKey: InjectionKey<Ref<boolean>> = Symbol()

export const carouselKey: InjectionKey<{
  index: Ref<number>,
  updateIndex: Function,
  carouselRef: Ref<HTMLElement | null>
}> = Symbol()

export const expansionKey: InjectionKey<{
  modelValue: string[],
  updateModel: Function
}> = Symbol()

export const checkboxGroupKey: InjectionKey<{
  parentModel: any[] | null,
  updateParentModel: Function
}> = Symbol()
