import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'src/index.ts',

  output: {
    file: './dist/index.js',
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
    peerDepsExternal()
  ]
}
