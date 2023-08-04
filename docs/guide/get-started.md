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