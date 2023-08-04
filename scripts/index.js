const { join, resolve } = require('path')
const { readdir, readFile, writeFile } = require('fs/promises')

const rootDir = resolve(__dirname, '../')

const readExamples = async () => {
  const baseDir = join(rootDir, './docs/examples')
  const dirs = await readdir(baseDir)
  const res = {}

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
      
      res[dir] = res[dir] || {}
      const target = res[dir][file] = { template }

      if (script) {
        target.script = script
      }

      if (style) {
        target.style = style
      }
    }
  }

  return res
}

const writeExamples = async res => {
  const baseDir = join(rootDir, './docs/components')

  for (const file in res) {
    const filePath = join(baseDir, `${ file }.md`)
    let md = await readFile(filePath, 'utf-8')
    console.log(file)

    for (const filename in res[file]) {
      const name = filename.slice(3, -4)
      const tagName = `${ name[0].toUpperCase() }${ name.slice(1) }`
      const flag = `<!-- ${ filename } -->`
      const regexp = new RegExp(`${ flag }[\\s\\S]*?${ flag }`)

      md = md.replace(regexp, () => {
        let s = `${ flag }\n<${ tagName }></${ tagName }>\n::: details 查看源码\n::: code-group\n`

        Object.keys(res[file][filename]).forEach(type => {
          s += `\`\`\`vue [${ type }]\n${ res[file][filename][type] }\n\`\`\`\n\n`
        })

        s += `:::\n${ flag }`

        return s
      })

      await writeFile(filePath, md)
    }
  }
}

;(async () => {
  const res = await readExamples()
  await writeExamples(res)
})()