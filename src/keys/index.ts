import type { Ref, InjectionKey } from 'vue'

const tabsKey: InjectionKey<{
  modelValue: Ref<string>,
  updateModel: Function,
  tabStyle: {},
  tabClass: Ref<string>
  activeTabClass: Ref<string>
}> = Symbol()

const pannelsKey: InjectionKey<Ref<string>> = Symbol()

const expansionKey: InjectionKey<{
  modelValue: string[],
  updateModel: Function,
  headerStyle: {},
  headerClass: Ref<string>,
  contentStyle: {},
  contentClass: Ref<string>,
}> = Symbol()
  
export { tabsKey, pannelsKey, expansionKey }