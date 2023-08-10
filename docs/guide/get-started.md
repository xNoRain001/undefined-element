# 开始使用

## 安装

::: code-group
  ```bash [npm]
  npm install -D undefined-element
  ```
:::

## 注册

```js
import undefinedElement from 'undefined-element'
import { createApp } from 'vue'

import App from './App.vue'
import 'undefined-element/dist/index.css'

const app = createApp(App)

app
  .use(undefinedElement)
  .mount('#app')
```

## 样式

在注册时我们引入了样式文件，如果你正在使用原子化 CSS 进行开发，那么样式的引入并不是必须的，
只需要扫描`./node_modules/undefined-element/src/**/*.vue`，就能将组件的样式
和你的样式合并在一起，进一步缩小样式大小。

```js
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/undefined-element/src/**/*.vue",
    // ...
  ]
}
```
