const { exec } = require('child_process')

const configs = [
  {
    input: './src/assets/css/index.css',
    output: './dist/index.css',
    minify: false
  },
  {
    input: './src/assets/css/index.css',
    output: './dist/index.min.css',
    minify: true
  },
  {
    input: './docs/assets/css/index.css',
    output: './docs/assets/css/dist.css',
    minify: false,
    config: './docs/tailwind.config.cjs'
  }
]

for (let i = 0, l = configs.length; i < l; i++) {
  const { input, output, minify, config } = configs[i]

  exec(`npx tailwindcss -i ${ input } -o ${ output } ${ config ? `-c ${ config }` : '' } ${ minify ? '--minify' : '' } --watch`)
}
