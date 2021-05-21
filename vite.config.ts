import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import pxtorem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 750
        })
      ]
    }
  },
  plugins: [reactRefresh()]
})
