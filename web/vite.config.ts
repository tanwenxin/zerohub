import { defineConfig } from 'vite'
import type {} from 'vite-react-ssg/node'
import react from '@vitejs/plugin-react'
import { PROMPT_TEMPLATE_CATEGORIES, PROMPT_TEMPLATES } from './src/data/promptTemplates.generated'

const promptTemplateRoutes = [
  '/prompt-templates',
  ...PROMPT_TEMPLATE_CATEGORIES.map((category) => `/prompt-templates/${category.slug}`),
  ...PROMPT_TEMPLATES.map((template) => `/prompt-templates/${template.categorySlug}/${template.slug}`),
]

// 前端开发服务器，将 /api 代理到后端 8787
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        // 将框架核心（react / react-dom / scheduler / react-router）固化为单一长缓存 vendor chunk，
        // 业务代码更新时不会使框架缓存失效，提升二次访问与跨页面命中率。
        manualChunks(id: string) {
          if (!id.includes('node_modules')) return undefined;
          if (
            /[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id)
          ) {
            return 'vendor-react';
          }
          return undefined;
        },
      },
    },
  },
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
    script: 'defer',
    beastiesOptions: {
      preload: 'media',
      compress: true,
      logLevel: 'silent',
    },
    // 额外渲染 /404（匹配通配路由 NotFoundPage），产出 dist/404.html 供后端兜底
    includedRoutes(paths: string[]) {
      return Array.from(new Set([...paths, ...promptTemplateRoutes, '/404']))
    },
  },
})
