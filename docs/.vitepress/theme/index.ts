import DefaultTheme from 'vitepress/theme'

import UTab from '../../../src/components/u-tab/index.vue'
import UTabs from '../../../src/components/u-tabs/index.vue'
import UIcon from '../../../src/components/u-icon/index.vue'
import UInput from '../../../src/components/u-input/index.vue'
import UTable from '../../../src/components/u-table/index.vue'
import UDialog from '../../../src/components/u-dialog/index.vue'
import USlider from '../../../src/components/u-slider/index.vue'
import URating from '../../../src/components/u-rating/index.vue'
import USelect from '../../../src/components/u-select/index.vue'
import UToggle from '../../../src/components/u-toggle/index.vue'
import UTooltip from '../../../src/components/u-tooltip/index.vue'
import USplitter from '../../../src/components/u-splitter/index.vue'
import UTabPanel from '../../../src/components/u-tab-panel/index.vue'
import USkeleton from '../../../src/components/u-skeleton/index.vue'
import UDropdown from '../../../src/components/u-dropdown/index.vue'
import UScroller from '../../../src/components/u-scroller/index.vue'
import UCheckbox from '../../../src/components/u-checkbox/index.vue'
import UExpansion from '../../../src/components/u-expansion/index.vue'
import UTabPanels from '../../../src/components/u-tab-panels/index.vue'
import UScrollArea from '../../../src/components/u-scroll-area/index.vue'
import USkeletonItem from '../../../src/components/u-skeleton-item/index.vue'
import UExpansionItem from '../../../src/components/u-expansion-item/index.vue'
import UCheckboxGroup from '../../../src/components/u-checkbox-group/index.vue'
import UInfiniteScroll from '../../../src/components/u-infinite-scroll/index.vue'

import '../../assets/css/dist.css'
import '../../../dist/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // TODO: https://vitejs.dev/guide/features.html#glob-import
    ctx
      .app
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
