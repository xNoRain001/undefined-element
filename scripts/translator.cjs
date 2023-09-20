const { join, resolve } = require('path')
const { stat, readdir, readFile, writeFile } = require('fs/promises')

const rootDir = resolve(__dirname, '../')

const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const request = async keyword => {
  const response = await fetch('https://aidemo.youdao.com/trans', {
    method: 'post',
    body: `q=${ keyword }&from=zh-CHS&to=en`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  })
  const { translation } = await response.json()

  return translation[0]
}

const translator = async () => {
  const baseDir = join(rootDir, './src/components')
  const dirs = await readdir(baseDir)

  const _translator = async (target, source, chains) => {
    if (target && typeof target !== 'object') {
      return
    }

    const keys = Object.keys(target)

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]

      if (key.endsWith('-with-translation')) {
        const { length } = chains

        if (length === 0) {
          source[key].en = await request(source[key].zh)
          await sleep(1000)
        } else {
          let helper = source

          for (let i = 0; i < length; i++) {
            helper = helper[chains[i]]
          }

          helper[key].en = await request(helper[key].zh)
          await sleep(1000)
        }
      } else {
        chains.push(key)
        _translator(target[key], source, chains)
        chains.pop()
      }
    }

    return target
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
            const path = join(_baseDir, file)
            const meta = JSON.parse(await readFile(path, 'utf-8'))
            const newMeta = await _translator(meta, meta, [])
            await writeFile(path, JSON.stringify(newMeta))
          }
        }
      }
    }
  }

  starter()
}

translator()
