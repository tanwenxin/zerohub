# 仓库指南

## 项目定位
本项目是一个自托管的 AI 图像与视频生成 Web 应用，采用 `Node.js + Express` 后端和 `Vite + React + vite-react-ssg` 前端。

当前部署目标是自有服务器，不依赖特定第三方托管平台。生产环境推荐使用：

- `Node.js 22+` 运行后端服务。
- `PM2` 或 systemd 管理 `npm start` 常驻进程。
- `Nginx` 负责 HTTPS、反向代理、缓存与 gzip/brotli 等边缘能力。
- Cloudflare 可用于 DNS、CDN 与证书链路，但不是应用运行依赖。

## 项目结构与模块组织
- `app.js`：生产统一入口，执行 `require('./server/index')` 启动 Express 应用。
- `server/`：Express 后端，包含 API 路由、Agnes/ImgBB 客户端、任务队列、限流、日志和 JSON 任务存储。
- `server/.env.example`：后端运行时配置模板；真实 `server/.env` 只保留在本机或服务器。
- `server/content/prompt-templates.json`：提示词库核心数据源。
- `web/`：Vite + React 前端源码，使用 `vite-react-ssg` 生成 SEO 友好的静态页面。
- `web/.env.example`：前端构建期公开配置模板；真实 `web/.env` 不提交。
- `web/dist/`：前端构建产物源目录，由 `npm --prefix web run build` 生成。
- `public/`：生产静态发布目录，由 `npm run sync:public` 从 `web/dist/` 同步。Express 会托管该目录并为预渲染页面提供兜底。
- `scripts/`：项目维护脚本，包括 SEO 文件生成、关键 CSS 内联、静态目录同步和提示词库维护。
- `.trae/documents/`：计划、审计和部署说明文档。

## 构建、测试与开发命令
常用命令：

- `npm run install:all`：安装根目录后端依赖与 `web/` 前端依赖；前端依赖安装固定使用 `--legacy-peer-deps`。
- `npm run dev`：同时启动后端 watch 模式和 Vite 开发服务器。
- `npm run dev:server`：仅启动后端开发服务，默认端口来自 `server/.env` 的 `PORT`，缺省为 `8787`。
- `npm run dev:web`：仅启动 Vite 前端开发服务器，开发期 `/api` 代理到 `http://localhost:8787`。
- `npm run build:web`：构建前端到 `web/dist/`。
- `npm run generate:seo`：根据站点配置生成 `robots.txt`、`sitemap.xml` 等 SEO 文件。
- `npm run inline:critical-css`：对构建产物执行关键 CSS 内联。
- `npm run sync:public`：将 `web/dist/` 同步到根目录 `public/`。
- `npm run build`：完整生产构建，依次执行 SEO 生成、前端构建、关键 CSS 内联和静态目录同步。
- `npm start`：通过 `app.js` 启动生产服务。
- `npm --prefix web run lint`：运行前端 ESLint。

提示词库维护命令：

- `npm run templates:normalize`：规范化 `server/content/prompt-templates.json`。
- `npm run templates:images`：为缺失封面的提示词批量补图。
- `npm run templates:sync:web`：同步提示词数据到 `web/src/data/promptTemplates.generated.ts`。
- `npm run templates:update`：规范化提示词并同步前端数据。

## 自有服务器部署约定
推荐发布流程：

```bash
npm install
npm --prefix web install --legacy-peer-deps
npm run build
NODE_ENV=production npm start
```

生产环境建议用 PM2 管理进程：

```bash
pm2 start app.js --name agnes-image-studio
pm2 save
pm2 startup
```

更新发布时：

```bash
git pull
npm install
npm --prefix web install --legacy-peer-deps
npm run build
pm2 restart agnes-image-studio
```

Nginx 推荐反向代理到本机 Node 端口，由 Express 统一处理 `/api/*` 和 `public/` 静态资源：

```nginx
server {
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:8787;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

如果让 Nginx 直接托管 `public/`，必须同时保留：

- `/api/*` 反向代理到 Node 服务。
- 预渲染页面的 `.html` 命中规则，例如 `/prompt-templates/foo` 能回落到 `public/prompt-templates/foo.html`。
- SPA/SSG 404 兜底规则，优先返回 `public/404.html`。
- `public/assets/*` 使用长缓存，HTML 文件使用短缓存或 `must-revalidate`。

服务器注意事项：

- `PORT` 默认 `8787`，生产环境只建议监听内网地址或通过防火墙限制公网访问，由 Nginx 暴露 80/443。
- 修改前端源码、SEO 配置、提示词生成数据或静态资源后，必须重新执行 `npm run build` 并重启 Node 进程。
- 只修改后端源码或 `server/.env` 时，通常只需重启 Node 进程。
- 长视频任务依赖进程持续运行；发布重启前应确认是否有正在执行的任务，避免任务中断。

## 配置与数据
配置分为前端构建期与后端运行时，必须保持隔离：

- `web/.env`：只放浏览器可见的公开配置，例如 `VITE_SITE_URL`、`VITE_CONTACT_EMAIL`、`VITE_ADSENSE_CLIENT`。
- `server/.env`：只放后端密钥和运行时配置，例如 `AGNES_API_KEYS`、`IMGBB_API_KEY`、队列、限流和任务存储配置。

关键后端配置：

- `AGNES_API_KEY` 或 `AGNES_API_KEYS`：Agnes API Key，支持单 key 或逗号分隔多 key。
- `IMGBB_API_KEY`：本地图片上传到 ImgBB 所需 key，视频图生视频依赖该配置。
- `PORT`：后端监听端口，本地默认 `8787`。
- `TASKS_DB_FILE`：任务 JSON 存储文件路径，默认 `server/data/tasks.json`。
- `TASKS_TTL_MS`、`TASKS_MAX_ITEMS`：任务保留时间和最大保留条数。
- `MAX_CONCURRENCY`、`MIN_INTERVAL_MS`、`IMAGE_RPM`、`VIDEO_RPM`、`TEXT_RPM`：队列与接口限流配置。

运行期数据：

- `server/data/`：任务持久化数据，不提交；生产环境应纳入备份策略。
- `server/logs/`：应用日志，不提交；生产环境应配置日志轮转或由 PM2/systemd 接管。
- `public/`：生产静态发布目录，由构建脚本生成；不要手工编辑其中的构建产物。

## 前端与 SEO 约定
- 前端架构基于 `vite-react-ssg`，路由和页面代码必须保持 SSR/SSG 安全。
- 浏览器 API，例如 `window`、`localStorage`、`matchMedia`，必须使用 `typeof window !== 'undefined'` 守卫。
- SEO 产物依赖 `VITE_SITE_URL` 或站点 URL 配置，生产构建前必须确认域名正确。
- AdSense 脚本只允许在用户同意后加载；广告配置为空时不应阻塞页面功能。
- 导航顺序固定为“首页 / 提示词 / 图片生成 / 视频生成”。
- 路由切换时，仅 `pathname` 变化也必须自动滚动到顶部。

## UI/UX 约定
- 移动端触控目标不低于 `44px`。
- 移动端重点验证 `320px-480px` 宽度，无横向溢出。
- 媒体列表优先使用基于 JS 动态计算的 Masonry 布局，避免 CSS Columns/Grid 造成错位或空洞。
- 媒体项需要骨架屏占位和淡入动画。
- 预览模态框使用 `createPortal` 和原生 `<dialog>.showModal()` 进入 Top Layer。
- 状态指示应保持高对比、直观、低噪音。

## 编码风格与命名约定
保持文件单一职责，优先沿用现有模块边界。

- JavaScript、TypeScript、JSON、YAML 使用 2 个空格缩进。
- React 组件使用 `PascalCase`，函数和变量使用 `camelCase`。
- Markdown、资源文件和计划文档使用 `kebab-case`。
- 后端新增业务逻辑优先放入 `server/services/` 或 `server/utils/`，路由文件只负责参数解析、响应与流程编排。
- 前端新增可复用 UI 优先放入 `web/src/components/`，跨页面状态优先复用现有 context/hook 模式。
- 处理 ID、Level 等可能混合 String/Number 的字段时，使用兼容性更强的比较方式。
- 除非有明确收益，不引入新的全局状态库、UI 框架或部署依赖。

## 测试与验证指南
新增功能或修复缺陷时，应尽量补充对应自动化测试；当前仓库尚未建立完整测试套件时，至少执行相关构建和 lint。

常规验证：

- 后端入口、配置或部署结构变更：执行 `npm start`，并访问 `/api/health`。
- 前端源码变更：执行 `npm --prefix web run lint` 和 `npm run build`。
- SEO、路由或提示词库变更：执行 `npm run build`，确认 `public/index.html`、`public/404.html`、`public/assets/*` 和提示词详情页产物存在。
- 生产发布验证：检查 `https://DOMAIN/`、`https://DOMAIN/api/health`、核心页面、提示词详情页和图片/视频生成流程。
- 移动端 UI 变更：重点验证 `320px-480px` 宽度、触摸控件高度和弹窗滚动行为。

## 安全与配置建议
严禁提交真实密钥、本地 `.env`、日志、任务数据或生成凭据。

- 不要读取、打印或复述真实 `server/.env` 中的 secret 值。
- 需要配置示例时只更新 `.env.example` 文件。
- `.gitignore` 必须继续排除 `server/.env`、`web/.env`、`server/logs/`、`server/data/`、`node_modules/` 等本地或运行期文件。
- 前端不得硬编码 API Key；所有上游密钥只允许在后端环境变量中使用。
- 如果密钥疑似泄露，优先轮换对应平台 key，而不是继续复用旧 key。
- 上传图片、生成结果、公开统计和 AdSense 相关页面必须遵守隐私政策、服务条款和内容合规要求。
- 生产服务器应开启 HTTPS、防火墙和最小化端口暴露；Node 服务端口不应直接暴露给公网。

## 提交与 Pull Request 指南
使用清晰、约定式提交格式：`type(scope): summary`，例如：

```text
feat(prompt-templates): add template detail launch tracking
fix(deploy): update nginx proxy headers
```

PR 应保持小而易审查，并包含：

- 简短的变更说明。
- 相关 issue 或任务 ID（如适用）。
- UI/CLI 变更的截图或日志。
- 已执行测试或未执行原因。
- 部署相关变更需说明是否影响环境变量、构建产物、Node 进程、Nginx 配置或数据迁移。

## Agent 专用说明
除非用户或任务明确指定其他语言，否则所有回复应使用中文。代码、命令、文件名、配置项和专有技术术语可保留原文，以确保准确性。

修改仓库时遵循以下约束：

- 优先读取现有实现后再改动，保持改动范围聚焦。
- 不要回滚用户已有改动。
- 涉及部署、密钥、任务存储、移动端布局、任务队列、SEO 和 AdSense 时，遵守本文件与项目记忆中的硬约束。
- 手工代码编辑使用 `apply_patch`；生成构建产物、安装依赖、运行 lint/build 可使用命令。
- 修改提示词库数据时，遵循“规范化数据 -> 批量补图 -> 同步前端 -> 完整构建”的流程。
