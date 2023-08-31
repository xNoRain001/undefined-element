import vue from 'rollup-plugin-vue'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const genConfig = (minify = false) => {
  return ({
    input: './src/index.ts',

    output: {
      file: `./dist/index${ minify ? '.min' : '' }.js`,
      format: 'es'
    },

    external: ['vue'],

    plugins: [
      vue(), 
      typescript({
        tsconfig: false,
        experimentalDecorators: true,
        module: 'es2015'
      }),
      peerDepsExternal(),
      minify ? terser() : null
    ]
  })
}

export default [
  genConfig(),
  genConfig(true)
]
