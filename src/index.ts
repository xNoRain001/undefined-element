import UTab from './components/tab/index.vue'
import UTabs from './components/tabs/index.vue'
import UIcon from './components/icon/index.vue'
import UInput from './components/input/index.vue'
import UTable from './components/table/index.vue'
import URange from './components/range/index.vue'
import UDialog from './components/dialog/index.vue'
import USlider from './components/slider/index.vue'
import URating from './components/rating/index.vue'
import USelect from './components/select/index.vue'
import UToggle from './components/toggle/index.vue'
import USplitter from './components/splitter/index.vue'
import UTabPanel from './components/tab-panel/index.vue'
import USkeleton from './components/skeleton/index.vue'
import UDropdown from './components/dropdown/index.vue'
import UScroller from './components/scroller/index.vue'
import UCheckbox from './components/checkbox/index.vue'
import UCarousel from './components/carousel/index.vue'
import UExpansion from './components/expansion/index.vue'
import UTabPanels from './components/tab-panels/index.vue'
import UScrollArea from './components/scroll-area/index.vue'
import USkeletonItem from './components/skeleton-item/index.vue'
import UExpansionItem from './components/expansion-item/index.vue'
import UCheckboxGroup from './components/checkbox-group/index.vue'
import UInfiniteScroll from './components/infinite-scroll/index.vue'
import UCarouselSlider from './components/carousel-slider/index.vue'

import type { App } from 'vue'

const undefinedElement = {
  install (app: App) {
    app
      .component('UTab', UTab)
      .component('UTabs', UTabs)
      .component('UIcon', UIcon)
      .component('UInput', UInput)
      .component('UTable', UTable)
      .component('URange', URange)
      .component('UDialog', UDialog)
      .component('USlider', USlider)
      .component('URating', URating)
      .component('USelect', USelect)
      .component('UToggle', UToggle)
      .component('USplitter', USplitter)
      .component('UTabPanel', UTabPanel)
      .component('USkeleton', USkeleton)
      .component('UDropdown', UDropdown)
      .component('UScroller', UScroller)
      .component('UCheckbox', UCheckbox)
      .component('UCarousel', UCarousel)
      .component('UExpansion', UExpansion)
      .component('UTabPanels', UTabPanels)
      .component('UScrollArea', UScrollArea)
      .component('USkeletonItem', USkeletonItem)
      .component('UExpansionItem', UExpansionItem)
      .component('UCheckboxGroup', UCheckboxGroup)
      .component('UInfiniteScroll', UInfiniteScroll)
      .component('UCarouselSlider', UCarouselSlider)
  }
}

export default undefinedElement
