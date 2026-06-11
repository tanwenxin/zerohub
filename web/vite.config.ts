import { defineConfig } from 'vite'
import type {} from 'vite-react-ssg/node'
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
  // vite-react-ssg 预渲染配置
  ssgOptions: {
    // 额外渲染 /404（匹配通配路由 NotFoundPage），产出 dist/404.html 供后端兜底
    includedRoutes(paths: string[]) {
      return [...paths, '/404']
    },
  },
})
