# Serv00 Node.js 部署教程计划

## Summary

当前项目可以部署到 Serv00 使用。推荐使用 Serv00 官方的 `Node.js` 网站类型，也就是 Passenger 托管模式：项目放到 `/usr/home/LOGIN/domains/DOMAIN/public_nodejs`，Serv00 负责启动 Node.js 应用；前端 Vite 构建产物放到 `public_nodejs/public` 作为静态文件；后端继续处理同源 `/api/*` 请求。

本计划只提供部署教程，不修改仓库代码。执行时使用 `LOGIN`、`DOMAIN` 作为占位符；用户选择先用 Serv00 默认域名，因此不展开自定义 DNS 绑定流程。

## Current State Analysis

- 根目录 `package.json` 已有生产启动脚本：`npm start` -> `node server/index.js`。
- 后端入口为 `server/index.js`，使用 Express，API 挂载在 `/api`。
- 后端配置从 `server/.env` 加载，示例文件为 `server/.env.example`。
- 前端在 `web/`，构建脚本为 `npm --prefix web run build`，产物输出到 `web/dist`。
- 前端 API 客户端使用同源相对路径，例如 `/api/generate`、`/api/tasks`、`/api/health`，适合前后端同域部署。
- 当前后端没有自己托管 `web/dist`，但 Serv00 的 Node.js 网站会将 `public_nodejs/public` 下的文件作为静态文件处理。因此部署时应把 `web/dist/*` 同步到 `public_nodejs/public/`。
- 当前仓库没有 Serv00 要求的根入口 `app.js`。由于本次只给教程，不改代码，部署教程需要采用以下二选一方式：
  - 上传后在 Serv00 的 `public_nodejs/app.js` 中手动创建一行 `require('./server/index.js');`。
  - 或将 Serv00 Node.js 网站启动文件配置为 `server/index.js`，如果面板/环境允许选择非默认入口。

## Proposed Deployment Steps

### 1. 在本地构建前端

在项目根目录执行：

```bash
npm install
npm --prefix web install
npm run build:web
```

构建完成后确认存在：

```bash
web/dist/index.html
web/dist/assets/
```

### 2. 在 Serv00 面板创建 Node.js 网站

在 DevilWEB 面板中：

1. 进入 `WWW websites`。
2. 点击 `+ Add new website`。
3. 打开 `advanced settings`。
4. 域名选择 Serv00 默认域名或默认子域名对应的 `DOMAIN`。
5. 类型选择 `Node.js`。
6. Node.js binary 建议选择 `node22` 或更高版本。Serv00 当前提供 `v16`、`v18`、`v20`、`v22`、`v23`、`v24`，默认是 `v22`。
7. Environment 选择 `production`。

Serv00 官方约定 Node.js 项目主目录为：

```bash
/usr/home/LOGIN/domains/DOMAIN/public_nodejs
```

### 3. 上传项目文件

通过 SFTP、Git 或面板文件管理，将项目上传到：

```bash
/usr/home/LOGIN/domains/DOMAIN/public_nodejs
```

建议不要上传：

```text
node_modules/
web/node_modules/
server/.env
server/logs/
server/data/
.DS_Store
```

上传后目录结构应类似：

```text
public_nodejs/
  package.json
  package-lock.json
  server/
  web/
  public/
```

### 4. 准备 Serv00 根入口

因为当前仓库入口在 `server/index.js`，而 Serv00 文档要求 Node.js 项目目录下有应用入口，教程方式是在服务器上创建：

```bash
cd /usr/home/LOGIN/domains/DOMAIN/public_nodejs
printf "require('./server/index.js');\n" > app.js
```

如果面板允许指定启动文件，也可以选择 `server/index.js`，但为减少不确定性，推荐保留 `app.js` 兼容入口。

### 5. 安装依赖

SSH 登录 Serv00 后执行：

```bash
cd /usr/home/LOGIN/domains/DOMAIN/public_nodejs
npm install --omit=dev
npm --prefix web install
npm --prefix web run build
```

如果 Serv00 默认 `node`/`npm` 版本不符合预期，可按官方方式切到 Node 22：

```bash
mkdir -p ~/bin
ln -fs /usr/local/bin/node22 ~/bin/node
ln -fs /usr/local/bin/npm22 ~/bin/npm
source "$HOME/.bash_profile"
node -v
npm -v
```

### 6. 发布前端静态文件

将 Vite 构建产物复制到 Serv00 静态目录：

```bash
cd /usr/home/LOGIN/domains/DOMAIN/public_nodejs
rm -rf public/*
cp -R web/dist/* public/
```

Serv00 会直接托管 `public/` 下的静态资源，例如：

```text
https://DOMAIN/
https://DOMAIN/assets/...
```

而不存在的 `/api/*` 请求会进入 Node.js 后端处理。

### 7. 配置环境变量与密钥

当前项目默认从 `server/.env` 读取配置，教程部署可使用：

```bash
cd /usr/home/LOGIN/domains/DOMAIN/public_nodejs/server
cp .env.example .env
chmod 600 .env
```

然后编辑 `server/.env`，至少配置：

```dotenv
AGNES_API_KEY=你的 Agnes key
# 或
AGNES_API_KEYS=key1,key2,key3

IMGBB_API_KEY=你的 imgbb key
AGNES_MOCK=0
PORT=8787
NODE_ENV=production
```

注意事项：

- 不要把本地真实 `server/.env` 上传到公开仓库。
- 当前 IDE 中打开过真实 `IMGBB_API_KEY`，部署时不要在日志、截图或提交记录中暴露。
- 如果你怀疑 key 已外泄，应在 imgbb 控制台轮换 key。
- Serv00 文档也支持把变量写入 `~/.bash_profile`，但当前项目已经显式加载 `server/.env`，因此保留 `server/.env` 更直接。

### 8. 任务数据和日志目录

当前项目会写入：

```text
server/data/tasks.json
server/logs/YYYY-MM-DD.log
```

确保目录可写：

```bash
cd /usr/home/LOGIN/domains/DOMAIN/public_nodejs
mkdir -p server/data server/logs
chmod 700 server/data server/logs
```

如需把任务数据放到更稳定的位置，可在 `server/.env` 设置：

```dotenv
TASKS_DB_FILE=/usr/home/LOGIN/domains/DOMAIN/private/tasks.json
```

本次教程先沿用默认 `server/data/tasks.json`。

### 9. 重启 Node.js 网站

使用 DevilWEB 面板重启该网站，或 SSH 执行：

```bash
devil www restart DOMAIN
```

Serv00 Node.js/Passenger 模式不需要手动保留端口；官方文档说明 `listen(3000)` 这类端口不会真的打开公网端口，而是由 Passenger 自动创建 socket 与应用通信。因此本项目的 `PORT=8787` 在该模式下主要作为本地监听配置，不需要做 `devil port add`。

### 10. 验证

访问：

```text
https://DOMAIN/
https://DOMAIN/api/health
```

预期：

- `/` 返回前端页面。
- `/api/health` 返回 JSON，`ok: true`。
- 如果 `apiKeyConfigured` 为 `false`，说明 `AGNES_API_KEY` 或 `AGNES_API_KEYS` 未正确配置。
- 发起一次图片生成和一次视频生成，确认任务能进入历史记录。
- 测试本地图片上传视频生成，确认 `IMGBB_API_KEY` 可用。

如遇问题，优先查看：

```bash
tail -n 200 /usr/home/LOGIN/domains/DOMAIN/logs/error.log
tail -n 200 /usr/home/LOGIN/domains/DOMAIN/public_nodejs/server/logs/$(date +%F).log
```

## Assumptions & Decisions

- 采用 Serv00 `Node.js` 网站类型，不采用 `Proxy` + 保留端口。
- 使用 Serv00 默认域名或默认子域名，不展开自定义 DNS 配置。
- 本次只给教程，不修改仓库文件，不新增部署脚本。
- 前端与后端同域部署，保持前端现有 `/api` 相对路径，不需要配置 `VITE_API_BASE_URL`。
- 生产环境 Node.js 版本建议使用 Serv00 的 `node22` 或更高版本。
- 任务数据继续使用 JSON 文件存储，适合个人或低并发使用；如果后续需要多人长期使用，应再规划数据库或更可靠的持久化方案。
- Serv00 的 Node.js 应用 24 小时无请求后可能自动停止，并在下一次访问时启动；这对正在轮询的长视频任务有潜在影响。低频个人使用可以接受，长任务稳定性要求高时应考虑定期访问保活或换 VPS/容器部署。

## Verification Steps

部署完成后按顺序验证：

1. `node -v` 确认为 `v22` 或更高。
2. `npm install --omit=dev` 能成功完成。
3. `npm --prefix web run build` 能成功完成。
4. `public/index.html` 和 `public/assets/*` 存在。
5. `devil www restart DOMAIN` 执行成功。
6. 浏览器打开 `https://DOMAIN/` 能看到前端。
7. 浏览器打开 `https://DOMAIN/api/health` 返回健康检查 JSON。
8. 图片生成任务能完成并写入历史记录。
9. 视频生成任务能创建、轮询、完成。
10. 服务器日志中没有密钥明文输出、没有持续的 502/503/504。

## Rollback

如果部署失败：

1. 在 DevilWEB 中先重启 Node.js 网站。
2. 回退到上一个可用的 `public_nodejs` 目录备份。
3. 或清空 `public/` 并重新复制 `web/dist/*`。
4. 若只是环境变量错误，修正 `server/.env` 后执行 `devil www restart DOMAIN`。

## References

- Serv00 Node.js 文档：https://docs.serv00.com/Node.js/
- Serv00 WWW/Node.js 网站类型文档：https://docs.serv00.com/WWW/
- Serv00 端口保留文档：https://docs.serv00.com/Port_reservation/
