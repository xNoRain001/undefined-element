const { join, resolve } = require('path')
const { stat, readdir, readFile, writeFile } = require('fs/promises')

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

      target.all = `${ template }\n${ script }\n${ style }`
    }
  }

  return meta
}

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
      const tagName = genTagName(name)
      const strMap = examples[filename]
      // ['template', 'script', 'style', 'all']
      const _keys = Object.keys(strMap)
      let code = `${ flag }\n<${ tagName }></${ tagName }>\n::: details 查看源码\n::: code-group\n`

      _import += `import ${ tagName } from '../examples/${ component }/${ filename }'\n`

      for (let i = 0, l = _keys.length; i < l; i++) {
        const key = _keys[i]
        code += `\`\`\`vue [${ key }]\n${ strMap[key] }\n\`\`\`\n\n`
      }

      code += `:::\n${ flag }`
      index++

      return code
    })

    _import += '</script>\n<!-- import -->'
    md = md.replace(/<!-- import -->[\s\S]*?<!-- import -->/, () => _import)

    await writeFile(filePath, md)
  }
}

const jsonToMarkdown = async () => {
  const baseDir = join(rootDir, './src/components')
  const dirs = await readdir(baseDir)

  const genTitle = (title, desc) => `<!-- title -->\n# ${ title }\n<!-- title -->\n\n<!-- desc -->\n${ desc }\n<!-- desc -->`

  const genSubtitle = ({ title, desc }) => `<!-- subtitle -->\n## ${ title }\n<!-- subtitle -->\n\n<!-- desc -->\n${ desc }\n<!-- desc -->`

  const genProps = props => {
    let res = '<!-- props -->\n:::details 属性\n|属性名|描述|类型|默认值|\n|:-----------:|:-----------:|:----:|:----:|\n'

    for (let i = 0, l = props.length; i < l; i++) {
      const { prop, desc, type, default: defaultValue } = props[i]
      res += `|${ prop }|${ desc }|${ type }|${ defaultValue }|\n`
    }

    return `${ res }:::\n<!-- props -->`
  }

  const genSlots = slots => {
    let res = '<!-- slots -->\n:::details 插槽\n|插槽名|描述|\n|:-----------:|:-----------:|\n'

    for (let i = 0, l = slots.length; i < l; i++) {
      const { name, desc } = slots[i]
      res += `|${ name }|${ desc }|\n`
    }

    return `${ res }:::\n<!-- slots -->`
  }

  const replaceTitle = (markdown, title, desc) => markdown.replace(
    /<!-- title -->[\s\S]*?<!-- desc -->[\s\S]*?<!-- desc -->/, 
    () => genTitle(title, desc)
  )

  const replaceProps = (markdown, props) => markdown.replace(
    /<!-- props -->[\s\S]*?<!-- props -->/, 
    () => genProps(props)
  )

  const replaceSlots = (markdown, slots) => markdown.replace(
    /<!-- slots -->[\s\S]*?<!-- slots -->/, 
    () => genSlots(slots)
  )

  const replaceSubtitle = (markdown, children) => {
    let index = 0

    return markdown.replace(
      /<!-- subtitle -->[\s\S]*?<!-- desc -->[\s\S]*?<!-- desc -->/g, 
      () => genSubtitle(children[index++])
    )
  }

  const replaceMarkdown = async meta => {
    let markdown = await readFile(join(rootDir, './docs/components/dialog.md'), 'utf-8')
    const { title, desc, props, slots, children } = JSON.parse(meta)

    markdown = replaceTitle(markdown, title, desc)
    markdown = replaceProps(markdown, props)
    markdown = replaceSubtitle(markdown, children)
    markdown = replaceSlots(markdown, slots)

    writeFile(join(rootDir, './docs/components/dialog.md'), markdown)
  }

  const starter = async () => {
    for (let i = 0, l = dirs.length; i < l; i++) {
      const dir = dirs[i]
      const _baseDir = join(baseDir, dir)
      const isFile  = (await stat(_baseDir)).isFile()
  
      if (!isFile) {
        const files = await readdir(_baseDir)
  
        for (let i = 0, l = files.length; i < l; i++) {
          const file = files[i]
  
          if (file === 'index.json') {
            const meta = await readFile(join(_baseDir, file), 'utf-8')
            replaceMarkdown(meta)
  
            break
          }
        }
      }
    }
  }

  starter()
}

;(async () => {
  const meta = await getMeta()
  await genMd(meta)
  await jsonToMarkdown()
})()
