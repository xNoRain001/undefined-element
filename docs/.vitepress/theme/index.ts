import DefaultTheme from 'vitepress/theme'

import undefinedElement from '../../../src'

import '../../assets/css/dist.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // TODO: https://vitejs.dev/guide/features.html#glob-import
    ctx.app.use(undefinedElement)
  }
}
