---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Undefined Element"
  text: "Vue3 组件库"
  tagline: 自定义样式 · 原子化 CSS
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - icon: 📝
    title: 自定义样式
    details: 除了极少量必须的样式外，没有预设样式，这意味着组件的样式是完全可控的，你不必再把精力花费在修改组件样式上。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M9.5,14v-1H11v0.5h2v-1h-2.5c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h3c0.55,0,1,0.45,1,1v1H13v-0.5h-2v1h2.5 c0.55,0,1,0.45,1,1V14c0,0.55-0.45,1-1,1h-3C9.95,15,9.5,14.55,9.5,14z M17,15h3c0.55,0,1-0.45,1-1v-1.5c0-0.55-0.45-1-1-1h-2.5v-1 h2V11H21v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v1.5c0,0.55,0.45,1,1,1h2.5v1h-2V13H16v1C16,14.55,16.45,15,17,15z M8,10 c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-1H6.5v0.5h-2v-3h2V11H8V10z"/></g></svg>
    title: 原子化 CSS
    details: 那些极少量必须的样式通过 Tailwind CSS 实现，减少 CSS 文件体积。
  - icon: 🚀
    title: 极少的依赖
    details: 生产环境只依赖于 Vue.js
---
