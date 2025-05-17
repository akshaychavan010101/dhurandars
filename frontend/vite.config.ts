import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      // optional: specify dirs to scan (default: ['src/components'])
      dirs: ['src/components'],
      // auto import subdirectories
      deep: true,
      // allow auto load for custom `*.vue` file extensions
      extensions: ['vue'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.md$/],
      // generate TypeScript declaration
      dts: './components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
