import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Undefiend Element",
  description: "Vue component library with atomic css",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: '什么是 Undefiend Element？', link: '/guide/' },
          { text: '开始使用', link: '/guide/get-started' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Input', link: '/components/input' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Expansion', link: '/components/expansion' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Infinite Scroll', link: '/components/infinite-scroll' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'Scroll Area', link: '/components/scroll-area' },
          { text: 'Scroller', link: '/components/scroller' },
          { text: 'Select', link: '/components/select' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Splitter', link: '/components/splitter' },
          { text: 'Table', link: '/components/table' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Toggle', link: '/components/toggle' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Range', link: '/components/range' },
          { text: 'Carousel', link: '/components/carousel' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xnorain001/undefined-element' }
    ],

    editLink: {
      pattern: 'https://github.com/xnorain001/undefined-element-test/edit/main/docs/:path',
      text: '在 Github 上编辑此页'
    },

    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: '中文简体',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en' }
        ],
    
        sidebar: [
          {
            text: 'Guides',
            items: [
              { text: '什么是 Undefiend Element？', link: '/en/guide/' },
              { text: '开始使用', link: '/en/guide/get-started' },
            ]
          },
          {
            text: 'Components',
            items: [
              { text: 'Input', link: '/en/components/input' },
              { text: 'Checkbox', link: '/en/components/checkbox' },
              { text: 'Dialog', link: '/en/components/dialog' },
              { text: 'Dropdown', link: '/en/components/dropdown' },
              { text: 'Expansion', link: '/en/components/expansion' },
              { text: 'Icon', link: '/en/components/icon' },
              { text: 'Infinite Scroll', link: '/en/components/infinite-scroll' },
              { text: 'Rating', link: '/en/components/rating' },
              { text: 'Scroll Area', link: '/en/components/scroll-area' },
              { text: 'Scroller', link: '/en/components/scroller' },
              { text: 'Select', link: '/en/components/select' },
              { text: 'Skeleton', link: '/en/components/skeleton' },
              { text: 'Slider', link: '/en/components/slider' },
              { text: 'Splitter', link: '/en/components/splitter' },
              { text: 'Table', link: '/en/components/table' },
              { text: 'Tabs', link: '/en/components/tabs' },
              { text: 'Toggle', link: '/en/components/toggle' },
              { text: 'Tooltip', link: '/en/components/tooltip' },
              { text: 'Range', link: '/en/components/range' },
              { text: 'Carousel', link: '/en/components/carousel' },
            ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/xnorain001/undefined-element' }
        ],
    
        editLink: {
          pattern: 'https://github.com/xnorain001/undefined-element-test/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
    
        search: {
          provider: 'local'
        }
      }
    }
  }
})
