import UTab from './components/u-tab/index.vue'
import UTabs from './components/u-tabs/index.vue'
import UIcon from './components/u-icon/index.vue'
import UInput from './components/u-input/index.vue'
import UDialog from './components/u-dialog/index.vue'
import USlider from './components/u-slider/index.vue'
import URating from './components/u-rating/index.vue'
import UTooltip from './components/u-tooltip/index.vue'
import USplitter from './components/u-splitter/index.vue'
import UTabPanel from './components/u-tab-panel/index.vue'
import UExpansion from './components/u-expansion/index.vue'
import UTabPanels from './components/u-tab-panels/index.vue'
import UScrollArea from './components/u-scroll-area/index.vue'
import UExpansionItem from './components/u-expansion-item/index.vue'

const undefinedElement = {
  install (app: any) {
    app
      .component('UTab', UTab)
      .component('UTabs', UTabs)
      .component('UIcon', UIcon)
      .component('UInput', UInput)
      .component('UDialog', UDialog)
      .component('USlider', USlider)
      .component('URating', URating)
      .component('UTooltip', UTooltip)
      .component('USplitter', USplitter)
      .component('UTabPanel', UTabPanel)
      .component('UExpansion', UExpansion)
      .component('UTabPanels', UTabPanels)
      .component('UScrollArea', UScrollArea)
      .component('UExpansionItem', UExpansionItem)
  }
}

export default undefinedElement
