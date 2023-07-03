import type { Ref, InjectionKey } from 'vue'

const tabsKey: InjectionKey<{
  modelValue: Ref<string>,
  updateModel: Function,
  tabStyle: Ref<{ [propName: string]: string | number }>,
  tabClass: Ref<string>
  activeTabClass: Ref<string>
}> = Symbol()

const pannelsKey: InjectionKey<Ref<string>> = Symbol()

const expansionKey: InjectionKey<{
  modelValue: string[],
  updateModel: Function,
  itemStyle: Ref<{ [propName: string]: string | number }>,
  itemClass: Ref<string>,
  headerStyle: Ref<{ [propName: string]: string | number }>,
  headerClass: Ref<string>,
  activeHeaderClass: Ref<string>
  contentStyle: Ref<{ [propName: string]: string | number }>,
  contentClass: Ref<string>,
}> = Symbol()
  
export { tabsKey, pannelsKey, expansionKey }