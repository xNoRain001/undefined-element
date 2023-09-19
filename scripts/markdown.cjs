const { join, resolve } = require('path')
const { 
  stat, 
  access, 
  readdir, 
  readFile, 
  writeFile, 
  constants 
} = require('fs/promises')

const genMarkdown = async () => {
  const rootDir = resolve(__dirname, '../')

  const genCodes = async () => {
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
  
        target.all = `${ template }\n${ script }\n${ style }`
      }
    }
  
    return meta
  }

  const baseDir = join(rootDir, './src/components')
  const dirs = await readdir(baseDir)
  const codes = await genCodes()

  const genTagName = name => {
    if (name.includes('-')) {
      // max-values
      let tagName = ''
      const segments = name.split('-')
  
      for (let i = 0, l = segments.length; i < l; i++) {
        const segment = segments[i]
        tagName += `${ segment[0].toUpperCase() }${ segment.slice(1) }`
      }
  
      return tagName
    } else {
      // basic
      return `${ name[0].toUpperCase() }${ name.slice(1) }`
    }
  }

  const genDetail = (tagName, exampleCode) => {
    let detail = `<${ tagName }></${ tagName }>\n\n::: details 查看源码\n::: code-group\n`
    // ['template', 'script', 'style', 'all']
    const keys = Object.keys(exampleCode)

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]
      detail += `\`\`\`vue [${ key }]\n${ exampleCode[key] }\n\`\`\`\n${ i === l - 1 ? '' : '\n'}`
    }

    details = detail.slice(0, -2)
    detail += `:::\n\n`

    return detail
  }

  const genImport = component => {
    let importStr = '<script setup>\n'
    const examplesDetail = []
    const examplesCode = codes[component]
    const files = Object.keys(examplesCode)

    for (let i = 0, l = files.length; i < l; i++) {
      // 01.basic.vue
      const filename = files[i]
      // basic
      const name = filename.slice(3, -4)
      // Basic
      const tagName = genTagName(name)

      importStr += `import ${ tagName } from '../examples/${ component }/${ filename }'\n`
      examplesDetail.push(genDetail(tagName, examplesCode[filename]))
    }

    importStr += '</script>\n\n'
  
    return {
      importStr,
      examplesDetail
    }
  }

  const genTitle = (title, desc) => `# ${ title }\n\n${ desc }\n\n`

  const genExamples = (children, examplesDetail) => {
    let res = ''

    for (let i = 0, l = children.length; i < l; i++) {
      const child = children[i]

      res += `## ${ child['title-with-translation'].zh }\n\n${ child['desc-with-translation'].zh }\n\n`
      res += examplesDetail[i]
    }

    return res
  }

  const genProps = props => {
    let res = ':::details 属性\n|属性名|描述|类型|默认值|\n|:-----------:|:-----------:|:----:|:----:|\n'

    for (let i = 0, l = props.length; i < l; i++) {
      const propItem = props[i]
      const { prop, type, default: defaultValue } = propItem

      res += `|${ prop }|${ propItem['desc-with-translation'].zh }|${ type }|${ defaultValue }|\n`
    }

    return `${ res }:::\n\n`
  }

  const genSlots = slots => {
    let res = ':::details 插槽\n|插槽名|描述|\n|:-----------:|:-----------:|\n'

    for (let i = 0, l = slots.length; i < l; i++) {
      const slot = slots[i]
      const { name } = slot

      res += `|${ name }|${ slot['desc-with-translation'].zh }|\n`
    }

    return `${ res }:::\n\n`
  }

  const _genMarkdown = async (meta, component) => {
    let res = ''
    const { title, props, slots, children } = meta
    const { importStr, examplesDetail } = genImport(component)

    res += importStr
    res += genTitle(title, meta['desc-with-translation'].zh)
    res += genProps(props)
    res += genSlots(slots)
    res += genExamples(children, examplesDetail)

    writeFile(join(rootDir, `./docs/components/${ component }.md`), res)
  }

  const starter = async () => {
    for (let i = 0, l = dirs.length; i < l; i++) {
      const dir = dirs[i]
      const _baseDir = join(baseDir, dir)
      const isFile  = (await stat(_baseDir)).isFile()
  
      // .DS_Store
      if (!isFile) {
        try {
          const path = join(_baseDir, 'index.json')
          await access(path,  constants.F_OK)
          const meta = JSON.parse(await readFile(path, 'utf-8'))
          _genMarkdown(meta, dir)
        } catch (error) {}
      }
    }
  }

  starter()
}

;(async () => {
  await genMarkdown()
})()
