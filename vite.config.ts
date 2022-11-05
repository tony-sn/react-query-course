import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: fix __dirname not defined
const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      app: resolve(_dirname, 'src', 'app'),
      components: resolve(_dirname, 'src', 'components'),
      contexts: resolve(_dirname, 'src', 'contexts'),
      helpers: resolve(_dirname, 'src', 'helpers'),
      hooks: resolve(_dirname, 'src', 'hooks'),
      interfaces: resolve(_dirname, 'src', 'interfaces'),
      pages: resolve(_dirname, 'src', 'pages'),
    },
  },
})
