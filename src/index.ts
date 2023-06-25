import UTab from './components/u-tab/index.vue'
import UTabs from './components/u-tabs/index.vue'
import UTabPannel from './components/u-tab-panel/index.vue'
import UTabPannels from './components/u-tab-panels/index.vue'

const undefinedElement = {
  install (app) {
    app
      .component('UTab', UTab)
      .component('UTabs', UTabs)
      .component('UTabPannel', UTabPannel)
      .component('UTabPannels', UTabPannels)
  }
}

export default undefinedElement