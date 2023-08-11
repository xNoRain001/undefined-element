import type { Ref, InjectionKey } from 'vue'

export const tabsKey: InjectionKey<{
  tabStyle: Ref<{ [propName: string]: string | number }>,
  tabClass: Ref<string>
  modelValue: Ref<string>,
  updateModel: Function,
  activeTabClass: Ref<string>
}> = Symbol()

export const panelsKey: InjectionKey<Ref<string>> = Symbol()

export const skeletonKey: InjectionKey<Ref<boolean>> = Symbol()

export const expansionKey: InjectionKey<{
  modelValue: string[],
  updateModel: Function
}> = Symbol()

export const checkboxGroupKey: InjectionKey<{
  parentModel: any[] | null,
  updateParentModel: Function
}> = Symbol()
