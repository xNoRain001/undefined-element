const { execSync } = require('child_process')
const { version } = require('../package.json')

execSync('git add .')
execSync(`git commit -m "release v${ version }"`)
execSync(`git tag "v${ version }"`)
execSync('git push')
execSync('git push --tag')
execSync('npm publish')
