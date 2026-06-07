# 仓库指南

## 项目结构与模块组织
本项目按 Serv00 `Node.js` 网站部署规范组织，同时保留本地开发体验：

- `app.js`：生产统一入口，也是 Serv00 `public_nodejs` 根目录下的 Node.js/Passenger 入口。
- `server/`：Express 后端，包含 API 路由、Agnes/ImgBB 客户端、任务队列、限流、日志和 JSON 任务存储。
- `server/.env.example`：后端配置模板；真实 `server/.env` 只保留在部署环境或本机。
- `web/`：Vite + React 前端源码。
- `web/dist/`：前端构建产物源目录，由 `npm --prefix web run build` 生成。
- `public/`：生产静态发布目录，由 `npm run sync:public` 从 `web/dist/` 同步。Serv00 会直接托管该目录下的静态文件。
- `scripts/`：项目维护脚本，例如静态发布目录同步脚本。
- `.trae/documents/`：计划、审计和部署说明文档。

部署到 Serv00 时，仓库根目录应放在：

```text
/usr/home/LOGIN/domains/DOMAIN/public_nodejs
```

其中 `public_nodejs/public` 对应公网静态资源目录，`app.js` 负责启动后端并处理 `/api/*`。

## 构建、测试与开发命令
常用命令：

- `npm run install:all`：安装根目录后端依赖与 `web/` 前端依赖。
- `npm run dev`：同时启动后端 watch 模式和 Vite 开发服务器。
- `npm run dev:server`：仅启动后端开发服务，默认端口来自 `server/.env` 的 `PORT`，缺省为 `8787`。
- `npm run dev:web`：仅启动 Vite 前端开发服务器，开发期 `/api` 代理到 `http://localhost:8787`。
- `npm run build:web`：构建前端到 `web/dist/`。
- `npm run sync:public`：将 `web/dist/` 同步到根目录 `public/`。
- `npm run build`：完整生产构建，先构建前端，再同步到 `public/`。
- `npm start`：通过 `app.js` 启动生产服务。
- `npm --prefix web run lint`：运行前端 ESLint。

Serv00 发布建议流程：

```bash
npm install --omit=dev
npm --prefix web install
npm run build
devil www restart DOMAIN
```

## Serv00 部署约定
优先使用 Serv00 的 `Node.js` 网站类型，不使用 `Proxy` + 保留端口，除非用户明确要求。

- DevilWEB 中网站类型选择 `Node.js`，环境选择 `production`，Node 版本建议 `node22` 或更高。
- 不需要执行 `devil port add`；Passenger 会通过内部 socket 与 Node.js 应用通信。
- `public/` 是静态资源目录，`/api/*` 由 Express 后端处理。
- 若修改了前端源码，必须重新执行 `npm run build` 并重启网站。
- 若只修改后端源码或配置，通常执行 `devil www restart DOMAIN` 即可。
- Serv00 24 小时无访问可能自动停止应用，下一次访问会重新拉起；长视频任务可能因应用重启中断，用户可在历史记录中重试。

## 配置与数据
后端配置从 `server/.env` 读取，并以 `server/.env.example` 作为模板。

关键配置：

- `AGNES_API_KEY` 或 `AGNES_API_KEYS`：Agnes API Key，支持单 key 或逗号分隔多 key。
- `IMGBB_API_KEY`：本地图片上传到 ImgBB 所需 key，视频图生视频依赖该配置。
- `PORT`：后端监听端口，本地默认 `8787`；Serv00 Node.js 模式下无需公网开放该端口。
- `TASKS_DB_FILE`：任务 JSON 存储文件路径，默认 `server/data/tasks.json`。

运行期数据：

- `server/data/`：任务持久化数据，不提交。
- `server/logs/`：应用日志，不提交。
- `public/`：生产静态发布目录，可由构建脚本生成；不要手工编辑其中的构建产物。

## 编码风格与命名约定
保持文件单一职责，优先沿用现有模块边界。

- JavaScript、TypeScript、JSON、YAML 使用 2 个空格缩进。
- React 组件使用 `PascalCase`，函数和变量使用 `camelCase`。
- Markdown、资源文件和计划文档使用 `kebab-case`。
- 后端新增业务逻辑优先放入 `server/services/` 或 `server/utils/`，路由文件只负责参数解析、响应与流程编排。
- 前端新增可复用 UI 优先放入 `web/src/components/`，跨页面状态优先复用现有 context/hook 模式。
- 处理 ID、Level 等可能混合 String/Number 的字段时，按项目约定使用兼容性更强的比较方式。

## 测试与验证指南
新增功能或修复缺陷时，应尽量补充对应自动化测试；当前仓库尚未建立完整测试套件时，至少执行相关构建和 lint。

常规验证：

- 后端入口或部署结构变更：执行 `npm start`，并访问 `/api/health`。
- 前端源码变更：执行 `npm --prefix web run lint` 和 `npm run build`。
- Serv00 部署变更：确认 `public/index.html`、`public/assets/*` 存在，并检查 `https://DOMAIN/` 与 `https://DOMAIN/api/health`。
- 移动端 UI 变更：重点验证 320px-480px 宽度无横向溢出，触摸控件高度符合项目约定。

## 安全与配置建议
严禁提交真实密钥、本地 `.env`、日志、任务数据或生成凭据。

- 不要读取、打印或复述真实 `server/.env` 中的 secret 值。
- 需要配置示例时只更新 `server/.env.example`。
- `.gitignore` 必须继续排除 `server/.env`、`server/logs/`、`server/data/`、`node_modules/` 等本地或运行期文件。
- 如果密钥疑似泄露，优先轮换对应平台 key，而不是继续复用旧 key。
- 前端不得硬编码 API Key；所有上游密钥只允许在后端环境变量中使用。

## 提交与 Pull Request 指南
使用清晰、约定式提交格式：`type(scope): summary`，例如 `feat(deploy): add serv00 entrypoint`。

PR 应保持小而易审查，并包含：

- 简短的变更说明；
- 相关 issue 或任务 ID（如适用）；
- UI/CLI 变更的截图或日志；
- 已执行测试或未执行原因；
- 部署相关变更需说明是否影响 Serv00 `public_nodejs` 目录、环境变量或重启流程。

## Agent 专用说明
除非用户或任务明确指定其他语言，否则所有回复应使用中文。代码、命令、文件名、配置项和专有技术术语可保留原文，以确保准确性。

修改仓库时遵循以下约束：

- 优先读取现有实现后再改动，保持改动范围聚焦。
- 不要回滚用户已有改动。
- 涉及部署、密钥、任务存储、移动端布局和任务队列时，遵守本文件与项目记忆中的硬约束。
- 手工代码编辑使用 `apply_patch`；生成构建产物、安装依赖、运行 lint/build 可使用命令。
