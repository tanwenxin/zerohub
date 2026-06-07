import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 前端开发服务器，将 /api 代理到后端 8787
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
})
