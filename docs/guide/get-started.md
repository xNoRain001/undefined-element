# 开始使用

## 安装

::: code-group
  ```bash [npm]
  npm install -D undefined-element
  # 如果需要使用 icon 组件，还需要安装 undefined-element-icons。
  npm install -D undefined-element-icons
  ```
:::

## 注册

```js
import undefinedElement from 'undefined-element'
import { createApp } from 'vue'

import App from './App.vue'
import 'undefined-element/dist/index.min.css'

const app = createApp(App)

app
  .use(undefinedElement)
  .mount('#app')
```

## 样式

在注册时我们引入了样式文件，如果你正在使用原子化 CSS 进行开发，那么样式的引入并不是必须的，我们只需要扫描`./node_modules/undefined-element/src/**/*.{vue,ts}`，就能将组件库的样式和你的样式合并在一起，进一步缩小样式大小，当然，不要忘记引入组件库的 index.css 文件，因为那里定义了一些变量和动画。

```js
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/undefined-element/src/**/*.{vue,ts}",
    // ...
  ]
}
```

```css
/* 如果你的样式定义在 src/assets/css/index.css 中 */
@import '../../../node_modules/undefined-element/src/assets/css/index.css';

/* 你的样式 */
:root {
  --primary-color: green;
}
```
