# 移动端顶部控制区 Hamburger 改造计划

## Summary

将移动端顶部栏里的主题、语言、开启通知等辅助功能收进一个 hamburger button。桌面端保持当前横向控制区展示；移动端只保留品牌、Tab、连接状态和一个菜单按钮，点击后展开主题选择、语言选择、通知按钮等内容，从而降低 320px - 480px 屏幕下顶部栏占用高度。

本次改造只调整前端 UI 结构与样式，不改变主题、语言、通知权限、健康状态、Tab 切换和生成任务逻辑。

## Current State Analysis

- `web/src/App.tsx` 当前顶部栏结构为：
  - `.topbar-main`：品牌和 Tab。
  - `.topbar-controls`：主题 `select`、语言 `select`、通知按钮。
  - `.health`：后端连接状态和队列信息。
- `web/src/App.css` 当前移动端策略：
  - `@media (max-width: 640px)` 下 `.topbar-main` 纵向堆叠。
  - `.topbar-controls` 变成 `width: 100%; flex-wrap: wrap;`。
  - 主题、语言、通知控件都直接铺在顶部栏里，虽然可用，但在手机上占用过高。
- `web/src/i18n.ts` 已有主题、语言、通知、健康状态文案，但还没有“菜单/设置/展开/关闭”等移动端控制菜单文案。
- `web/src/usePreferences.ts`、`web/src/theme.ts` 已提供主题与语言状态，不需要新增状态管理方案。
- 现有通知逻辑在 `App.tsx` 的 `onEnableNotify()` 中，改成菜单项后仍可直接复用。

## Proposed Changes

### 1. 修改 `web/src/App.tsx`

- 新增本地状态：
  - `const [controlsOpen, setControlsOpen] = useState(false);`
- 新增菜单按钮：
  - className 使用 `controls-menu-btn`。
  - `aria-label` 使用新增 i18n key，例如 `controls.menu`。
  - `aria-expanded={controlsOpen}`。
  - `aria-controls="mobile-controls-panel"`。
  - 图标使用三条线 CSS 绘制或文本字符，不引入图标依赖。
- 将现有 `.topbar-controls` 保留为同一组控件容器，但补充：
  - `id="mobile-controls-panel"`。
  - 根据 `controlsOpen` 增加 class，例如 `open`。
- 桌面端：
  - `.controls-menu-btn` 隐藏。
  - `.topbar-controls` 按当前方式显示。
- 移动端：
  - `.controls-menu-btn` 显示。
  - `.topbar-controls` 默认隐藏，点击按钮后展开。
- 点击任意主题或语言选择后保持菜单打开，避免用户连续调整时菜单立即消失。
- 点击通知按钮后也保持菜单打开，权限状态会按现有逻辑更新。
- 在 Tab 切换时关闭菜单：
  - `onClick={() => { setTab(tabItem.key); setControlsOpen(false); }}`
  - 这样用户切换主页面后顶部不会残留展开面板。

### 2. 修改 `web/src/i18n.ts`

新增中英文文案：
- `controls.menu`
  - zh: `打开设置菜单`
  - en: `Open settings menu`
- `controls.close`
  - zh: `关闭设置菜单`
  - en: `Close settings menu`
- `controls.title`
  - zh: `页面设置`
  - en: `Page settings`

用途：
- hamburger 按钮的可访问标签根据 `controlsOpen` 在 open/close 文案之间切换。
- 移动端展开面板顶部显示一个简短标题，帮助用户理解菜单内容。

### 3. 修改 `web/src/App.css`

新增/调整样式：

- `.controls-menu-btn`
  - 桌面端默认 `display: none`。
  - 移动端显示为 44px x 44px 的圆角按钮。
  - 使用 `span` 或伪元素绘制三条线，打开时变成 X 或高亮状态。
  - 使用现有 `--panel-2`、`--border`、`--text`、`--primary`、`--focus-ring`，保证三套主题一致。
- `.controls-panel-title`
  - 桌面端隐藏。
  - 移动端在展开面板内显示，字体 12px - 13px，颜色 `--muted`。
- `@media (max-width: 640px)` 下重排顶部栏：
  - `.topbar-main` 改为横向布局：品牌和 hamburger 同行，避免品牌独占一行。
  - `.tabs` 保持横向滚动，但放在下一行或可用 `order` 控制为全宽。
  - `.health` 保持紧凑显示，宽度可全宽但不与设置控件混排。
  - `.topbar-controls` 默认：
    - `display: none;`
    - `width: 100%;`
  - `.topbar-controls.open`：
    - `display: grid;`
    - 使用 `grid-template-columns: 1fr;`
    - 内部主题、语言、通知按钮垂直排列，保证可读和可点。
    - 加边框、背景、圆角和轻微阴影，使其像一个设置面板，而不是额外顶部栏行。
- `@media (min-width: 641px)`：
  - `.topbar-controls` 始终显示，不受 `open` class 影响。
- 保持所有移动端交互控件最小高度 `44px`。

### 4. 验证

执行：
- `cd web && npm run lint`
- `cd web && npm run build`

浏览器验证：
- 启动 `npm run dev -- --host 127.0.0.1`。
- 在 320px、360px、390px、480px 移动视口检查：
  - 默认顶部栏不展示主题/语言/通知控件，顶部高度明显降低。
  - hamburger button 可点击，展开后出现主题、语言、通知设置。
  - 展开面板无横向溢出。
  - 切换主题、语言仍写入 localStorage，刷新后保持。
  - 通知按钮仍可请求权限或展示当前权限状态。
  - Tab 横向滚动和主页面布局不受影响。
- 桌面端检查：
  - 主题、语言、通知仍按原横向方式显示。
  - hamburger button 不显示。

## Assumptions & Decisions

- 折叠行为只在 `max-width: 640px` 生效，和当前移动端断点保持一致。
- 主题、语言、通知三个控件全部进入 hamburger 展开面板；连接状态 `.health` 仍直接显示，避免用户误以为后端状态也需要进入设置菜单。
- 不引入新依赖，不新增路由，不修改偏好存储 key。
- 使用原生 button/select，保持键盘可访问性和移动端触摸体验。
- 展开面板不做全屏抽屉，采用顶部栏内下拉面板，改动范围更小，也更符合当前页面结构。
