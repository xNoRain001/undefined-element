import type { Ref, InjectionKey } from 'vue'

const tabsKey: InjectionKey<{
  modelValue: Ref<string>,
  updateModel: Function,
  activeTabStyle: {}
}> = Symbol()

const pannelsKey: InjectionKey<Ref<string>> = Symbol()
  
export { tabsKey, pannelsKey }