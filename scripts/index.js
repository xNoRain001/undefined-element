const { join, resolve } = require('path')
const { readdir, readFile, writeFile } = require('fs/promises')

const rootDir = resolve(__dirname, '../')

const getMeta = async () => {
  const baseDir = join(rootDir, './docs/examples')
  const dirs = await readdir(baseDir)
  const meta = {}

  for (let i = 0, l = dirs.length; i < l; i++) {
    const dir = dirs[i]
    const _baseDir = join(baseDir, dir)
    const files = await readdir(_baseDir)

    for (let i = 0, l = files.length; i < l; i++) {
      const file = files[i]
      const str = await readFile(join(_baseDir, file), 'utf-8')
      const template = str.match(/<template>[\s\S]*<\/template>/)[0]
      const script = str.match(/<script lang="ts" setup>[\s\S]*<\/script>/)?.[0] || ''
      const style = str.match(/<style scoped>[\s\S]*<\/style>/)?.[0] || ''
      
      meta[dir] = meta[dir] || {}
      const target = meta[dir][file] = { template }

      if (script) {
        target.script = script
      }

      if (style) {
        target.style = style
      }
    }
  }

  return meta
}

const genMd = async meta => {
  const baseDir = join(rootDir, './docs/components')
  const components = Object.keys(meta)

  for (let i = 0, l = components.length; i < l; i++) {
    // input
    const component = components[i]
    const examples = meta[component]
    const flag = `<!-- component -->`
    // input.md
    const filePath = join(baseDir, `${ component }.md`)
    const regexp = new RegExp(`${ flag }[\\s\\S]*?${ flag }`, 'g')
    // ['01.basic.vue', ...]
    const keys = Object.keys(examples)
    let md = await readFile(filePath, 'utf-8')
    let _import = '<!-- import -->\n<script setup>\n'
    let index = 0

    md = md.replace(regexp, () => {
      // 01.basic.vue
      const filename = keys[index]
      // basic
      const name = filename.slice(3, -4)
      // Basic
      const tagName = `${ name[0].toUpperCase() }${ name.slice(1) }`
      _import += `import ${ tagName } from '../examples/${ component }/${ filename }'\n`
      const strMap = examples[filename]
      // ['template', 'script', 'style']
      const _keys = Object.keys(strMap)
      let s = `${ flag }\n<${ tagName }></${ tagName }>\n::: details 查看源码\n::: code-group\n`

      for (let i = 0, l = _keys.length; i < l; i++) {
        const key = _keys[i]
        s += `\`\`\`vue [${ key }]\n${ strMap[key] }\n\`\`\`\n\n`
      }

      s += `:::\n${ flag }`

      index++
      return s
    })

    _import += '</script>\n<!-- import -->'
    md = md.replace(/<!-- import -->[\s\S]*?<!-- import -->/, () => _import)

    await writeFile(filePath, md)
  }
}

;(async () => {
  const meta = await getMeta()
  await genMd(meta)
})()
