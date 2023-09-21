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
      link: /en/guide/
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - icon: 📝
    title: 自定义样式
    details: 除了极少量必须的样式外，没有预设样式，这意味着组件的样式是完全可控的，你不必再把精力花费在修改组件样式上。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="48px" viewBox="0 0 20 20" width="48px" fill="#000000"><g><rect fill="none" height="20" width="20"/></g><g><path d="M8.5,11.5v-0.75h1V11h1v-0.75H9c-0.28,0-0.5-0.22-0.5-0.5V8.5C8.5,8.22,8.72,8,9,8h2c0.28,0,0.5,0.22,0.5,0.5v0.75h-1V9h-1 v0.75H11c0.28,0,0.5,0.22,0.5,0.5v1.25c0,0.28-0.22,0.5-0.5,0.5H9C8.72,12,8.5,11.78,8.5,11.5z M13.5,12h2c0.28,0,0.5-0.22,0.5-0.5 v-1.25c0-0.28-0.22-0.5-0.5-0.5H14V9h1v0.25h1V8.5C16,8.22,15.78,8,15.5,8h-2C13.22,8,13,8.22,13,8.5v1.25c0,0.28,0.22,0.5,0.5,0.5 H15V11h-1v-0.25h-1v0.75C13,11.78,13.22,12,13.5,12z M6.5,12C6.77,12,7,11.78,7,11.5v-0.75H6V11H5V9h1v0.25h1L7,8.5 C7,8.22,6.78,8,6.5,8h-2C4.22,8,4,8.22,4,8.5v3C4,11.78,4.22,12,4.5,12H6.5z"/></g></svg>
    title: 原子化 CSS
    details: 那些极少量必须的样式通过 Tailwind CSS 实现，减少 CSS 文件体积。
  - icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="48px" viewBox="0 0 20 20" width="48px" fill="#000000"><g><rect fill="none" height="20" width="20"/></g><g><path d="M10.5,11.5v-0.75h1V11h1v-0.75H11c-0.28,0-0.5-0.22-0.5-0.5V8.5C10.5,8.22,10.72,8,11,8h2c0.28,0,0.5,0.22,0.5,0.5v0.75h-1 V9h-1v0.75H13c0.28,0,0.5,0.22,0.5,0.5v1.25c0,0.28-0.22,0.5-0.5,0.5h-2C10.72,12,10.5,11.78,10.5,11.5z M8,8v3H7v-1H6v1.5 C6,11.78,6.22,12,6.5,12h2C8.78,12,9,11.78,9,11.5V8H8z"/></g></svg>
    title: 极少的依赖
    details: 生产环境只依赖于 Vue.js
---
