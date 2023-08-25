import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: {
    // index: 'src/index.ts',
    'checkbox': 'src/components/u-checkbox/index.vue',
  },

  output: {
    dir: './dist',
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
