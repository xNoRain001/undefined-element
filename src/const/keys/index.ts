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
  itemStyle: Ref<{ [propName: string]: string | number }>,
  itemClass: Ref<string>,
  modelValue: string[],
  headerStyle: Ref<{ [propName: string]: string | number }>,
  headerClass: Ref<string>,
  updateModel: Function,
  contentStyle: Ref<{ [propName: string]: string | number }>,
  contentClass: Ref<string>,
  activeHeaderClass: Ref<string>
}> = Symbol()

export const checkboxGroupKey: InjectionKey<{
  modelValue: any[],
  updateModel: Function
}> = Symbol()
