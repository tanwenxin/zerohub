# 1280px 以下顶部控制区统一收起计划

## Summary

将顶部栏中的主题、语言、通知、任务按钮以及“后端未连接/连接状态”统一纳入设置菜单，并在屏幕宽度小于 `1280px` 时默认收起。桌面宽屏（`>=1280px`）保持横向展示；窄屏使用 hamburger button 展开设置面板。

同时重新整理顶部栏响应式断点，使用常见比例断点：`1280px`、`1024px`、`768px`、`640px`、`480px`、`360px`。小屏下缩小 icon 和标题，hamburger button 不再和品牌 icon/标题同排，而是与 Tab（文生图、图生图、多图合成）同一行对齐。

## Current State Analysis

- `web/src/App.tsx` 当前顶部结构：
  - `.topbar-main` 内包含品牌 `.brand`、Tab `.tabs`、hamburger `.controls-menu-btn`。
  - `.topbar-controls` 内包含主题、语言、通知、任务按钮。
  - `.health` 是 `.topbar-controls` 之外的独立 sibling，导致移动端仍直接展示“后端未连接”。
- `web/src/App.css` 当前断点：
  - 控制区折叠只在 `max-width: 640px` 生效。
  - 仍有 `900px / 640px / 480px / 360px`，不满足用户要求的“按规范 media 查询常用比例规划”。
  - `max-width: 640px` 下 `.topbar-main` 当前是品牌、Tabs、hamburger 同一个 flex 容器；实际可通过 order 让 hamburger 和 Tab 同排，但结构不够清晰。
- 当前文案已存在：
  - `controls.menu` / `controls.close` / `controls.title`
  - `health.connected` / `health.noApiKey` / `health.backendOffline` / `health.queue`
  - `tasks.viewButton`
  因此这次不需要新增文案。

## Proposed Changes

### 1. 修改 `web/src/App.tsx`

重构 header DOM，目标是让品牌行和导航行分离：

- 将现有：
  - `.brand`
  - `.tabs`
  - `.controls-menu-btn`
  都在 `.topbar-main` 里的结构，调整为：
  - `.topbar-main`
    - `.brand`
    - `.topbar-nav-row`
      - `nav.tabs`
      - `button.controls-menu-btn`

这样在小屏下：
- 第一行是品牌 icon + 标题。
- 第二行是 Tab + hamburger button。
- hamburger button 和 “文生图 / 图生图 / 多图合成” 对齐，不和品牌 icon/标题对齐。

将 `.health` 移入 `.topbar-controls` 内，放在任务按钮之后：
- 保留原有 health 逻辑和文案。
- 删除 `.topbar-controls` 外部的独立 `.health` sibling。
- 结果：
  - `>=1280px`：主题、语言、通知、任务、连接状态横向显示。
  - `<1280px`：这些内容全部进入 hamburger 展开面板，包括“后端未连接”。

菜单行为保持：
- `controlsOpen` 控制 `.topbar-controls.open`。
- 点击 Tab 时继续 `setControlsOpen(false)`。
- 点击任务按钮打开抽屉时继续 `setControlsOpen(false)`。
- 主题/语言/通知操作不强制关闭菜单，方便连续调整。

### 2. 修改 `web/src/App.css`

统一断点规划：

- Base / `>=1280px`
  - 宽屏默认布局。
  - `.controls-menu-btn { display: none; }`
  - `.topbar-controls { display: flex; }`
  - `.health` 在 `.topbar-controls` 内横向显示。
- `@media (max-width: 1279px)`
  - 进入 compact header。
  - `.topbar` 使用 `flex-wrap: wrap`。
  - `.topbar-main` 变为纵向容器：品牌行 + `.topbar-nav-row`。
  - `.topbar-nav-row` 横向排列：`.tabs` 占满剩余宽度，`.controls-menu-btn` 在右侧。
  - `.controls-menu-btn { display: block; }`
  - `.topbar-controls { display: none; width: 100%; }`
  - `.topbar-controls.open { display: grid; }`
  - `.health` 在展开面板里作为一项块级信息显示。
- `@media (max-width: 1024px)`
  - 减小 topbar 横向 padding 和 gap。
  - 主体布局保持现有单列逻辑或在 `900px` 规则迁移到此断点。
- `@media (max-width: 768px)`
  - 进一步压缩 topbar 间距。
  - Tab 保持横向滚动。
  - 设置面板内控件保持单列，按钮和 select 全宽。
- `@media (max-width: 640px)`
  - 品牌标题字号缩小。
  - logo 尺寸缩小。
  - hamburger button 仍保持 44px 触摸面积。
- `@media (max-width: 480px)`
  - 保留当前表单、上传、gallery 的移动端堆叠策略。
  - 设置面板 padding 进一步减小。
- `@media (max-width: 360px)`
  - 品牌标题继续缩小或允许截断。
  - Tab padding 收紧，避免 320px 横向浪费。

具体样式调整：
- 新增 `.topbar-nav-row`：
  - `display: flex; align-items: center; gap: 8px; min-width: 0;`
  - 在宽屏可作为普通 inline 容器，窄屏为全宽第二行。
- `.tabs`：
  - 在 `<1280px` 下 `flex: 1 1 auto; overflow-x: auto;`
  - 与 `.controls-menu-btn` 同行。
- `.brand`：
  - 小屏下 `font-size` 从 18px 逐步降到 16px / 15px。
  - `.brand .logo` 增加可控 `font-size`，小屏降低。
  - 品牌文本加 `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`，避免挤压 Tab 行。
- `.controls-menu-btn`：
  - `<1280px` 显示。
  - 不放在品牌行；始终跟 `.tabs` 同一 `.topbar-nav-row`。
- `.topbar-controls`：
  - `<1280px` 默认隐藏。
  - `.open` 时展示为 grid 面板。
  - `>=1280px` 强制 `display: flex`，避免 open 状态影响桌面端。
- `.health`：
  - 在宽屏是紧凑 inline 状态。
  - `<1280px` 面板内使用边框/背景做成状态项，不在 header 外部占位。

### 3. 验证

静态验证：
- `cd web && npm run lint`
- `cd web && npm run build`

浏览器验证：
- 启动 `npm run dev -- --host 127.0.0.1`。
- 使用 Chrome DevTools / MCP 验证以下宽度：
  - `1280px`：控制区横向显示，hamburger 隐藏。
  - `1279px`：控制区默认收起，hamburger 显示。
  - `1024px`：无横向溢出，hamburger 与 Tab 同排。
  - `768px`：Tab 可横向滚动，设置面板展开正常。
  - `480px`：品牌 icon/标题缩小，hamburger 不与品牌同排。
  - `360px` / `320px`：无横向溢出，Tab 与 hamburger 同排，设置面板可展开。
- 检查交互：
  - 点击 hamburger 展开后可看到主题、语言、通知、任务按钮、后端状态。
  - “后端未连接”在 `<1280px` 默认不可见，只在展开面板中可见。
  - 主题/语言切换仍持久化。
  - 通知按钮仍可触发权限流程。
  - 任务按钮仍能打开 `TasksDrawer`。
  - 切换 Tab 后设置面板收起。

## Assumptions & Decisions

- 折叠阈值使用 `max-width: 1279px`，与用户“屏幕小于 1280px 需要收起来”精确对应。
- 宽屏 `>=1280px` 继续保留完整横向顶部控制区，减少桌面端行为变化。
- 不新增 i18n key，因为现有字典已覆盖设置菜单、后端状态和任务按钮文案。
- 不修改任务队列、通知权限、主题/语言持久化、生成流程和页面业务逻辑。
- 只调整 `web/src/App.tsx` 和 `web/src/App.css`；如验证发现文案缺失，再最小补充 `web/src/i18n.ts`。
