import UTab from './components/u-tab/index.vue'
import UTabs from './components/u-tabs/index.vue'
import UInput from './components/u-input/index.vue'
import UDialog from './components/u-dialog/index.vue'
import USlider from './components/u-slider/index.vue'
import UTabPannel from './components/u-tab-panel/index.vue'
import UExpansion from './components/u-expansion/index.vue'
import UTabPannels from './components/u-tab-panels/index.vue'
import USliderInner from './components/u-slider-innter/index.vue'

const undefinedElement = {
  install (app) {
    app
      .component('UTab', UTab)
      .component('UTabs', UTabs)
      .component('UInput', UInput)
      .component('UDialog', UDialog)
      .component('USlider', USlider)
      .component('UTabPannel', UTabPannel)
      .component('UExpansion', UExpansion)
      .component('UTabPannels', UTabPannels)
      .component('USliderInner', USliderInner)
  }
}

export default undefinedElement
