const { join, resolve } = require('path')
const { stat, readdir, readFile, writeFile } = require('fs/promises')

const rootDir = resolve(__dirname, '../')

const translator = async () => {
  const baseDir = join(rootDir, './src/components')
  const dirs = await readdir(baseDir)

  const _translator = (target, source, chains) => {
    if (target && typeof target !== 'object') {
      return
    }

    const keys = Object.keys(target)

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]

      if (key.endsWith('-with-translation')) {
        const { length } = chains

        if (length === 0) {
          source[key] = '123'
        } else {
          let helper = source

          for (let i = 0; i < length; i++) {
            helper = helper[chains[i]]
          }

          helper[key] = '456'
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
            const meta = JSON.parse(await readFile(join(_baseDir, file), 'utf-8'))
            _translator(meta, meta, [])
          }
        }
      }
    }
  }

  starter()
}

translator()
