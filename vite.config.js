import { resolve } from 'path'
import kirby from 'vite-plugin-kirby'
import glob from 'glob'

const templates = glob.sync('/templates/*.js', { root: 'site' })
console.log(templates)

export default ({ mode }) => ({
  root: 'site',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    rollupOptions: { input: templates }
  },

  plugins: [kirby()]
})