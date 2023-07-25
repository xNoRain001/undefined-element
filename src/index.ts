import UTab from './components/u-tab/index.vue'
import UTabs from './components/u-tabs/index.vue'
import UIcon from './components/u-icon/index.vue'
import UInput from './components/u-input/index.vue'
import UTable from './components/u-table/index.vue'
import UDialog from './components/u-dialog/index.vue'
import USlider from './components/u-slider/index.vue'
import URating from './components/u-rating/index.vue'
import USelect from './components/u-select/index.vue'
import UToggle from './components/u-toggle/index.vue'
import UTooltip from './components/u-tooltip/index.vue'
import USplitter from './components/u-splitter/index.vue'
import UTabPanel from './components/u-tab-panel/index.vue'
import USkeleton from './components/u-skeleton/index.vue'
import UDropdown from './components/u-dropdown/index.vue'
import UScroller from './components/u-scroller/index.vue'
import UCheckbox from './components/u-checkbox/index.vue'
import UExpansion from './components/u-expansion/index.vue'
import UTabPanels from './components/u-tab-panels/index.vue'
import UScrollArea from './components/u-scroll-area/index.vue'
import USkeletonItem from './components/u-skeleton-item/index.vue'
import UExpansionItem from './components/u-expansion-item/index.vue'
import UCheckboxGroup from './components/u-checkbox-group/index.vue'
import UInfiniteScroll from './components/u-infinite-scroll/index.vue'

import type { App } from 'vue'

const undefinedElement = {
  install (app: App) {
    app
      .component('UTab', UTab)
      .component('UTabs', UTabs)
      .component('UIcon', UIcon)
      .component('UInput', UInput)
      .component('UTable', UTable)
      .component('UDialog', UDialog)
      .component('USlider', USlider)
      .component('URating', URating)
      .component('USelect', USelect)
      .component('UToggle', UToggle)
      .component('UTooltip', UTooltip)
      .component('USplitter', USplitter)
      .component('UTabPanel', UTabPanel)
      .component('USkeleton', USkeleton)
      .component('UDropdown', UDropdown)
      .component('UScroller', UScroller)
      .component('UCheckbox', UCheckbox)
      .component('UExpansion', UExpansion)
      .component('UTabPanels', UTabPanels)
      .component('UScrollArea', UScrollArea)
      .component('USkeletonItem', USkeletonItem)
      .component('UExpansionItem', UExpansionItem)
      .component('UCheckboxGroup', UCheckboxGroup)
      .component('UInfiniteScroll', UInfiniteScroll)
  }
}

export default undefinedElement
