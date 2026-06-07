# 移动端适配、主题切换与中英文切换实施计划

## Summary

对 `web` 前端做一次以移动端为核心的界面改造，并补齐主题切换与中英文切换能力。实施后页面需在 320px - 480px 手机宽度下无横向溢出，核心交互按钮具备合理触摸面积；支持至少三种主题：默认 Agnes 主题、浅色主题、深色主题；支持中文、英文两种语言，默认中文。主题与语言均保存到 `localStorage`，刷新后保持用户选择。

本计划不引入新的运行时依赖，沿用 React 19 + Vite + TypeScript，使用 CSS variables、React Context 和轻量字典实现。

## Current State Analysis

- `web/src/App.tsx` 负责全局顶部栏、Tab、通知权限、健康状态展示；当前文案直接写在组件里，顶部栏为横向 flex，在手机宽度下容易拥挤。
- `web/src/App.css` 是唯一主要样式文件，已有基础 CSS variables，但只有单套深色变量；移动端仅有 `@media (max-width: 900px)` 将 `.page` 改为单列，缺少 320px - 480px 的细粒度处理。
- `.page` 当前使用 `grid-template-columns: minmax(360px, 460px) 1fr`，在 320px 设备上左列最小宽度会造成横向溢出。
- 表单、上传、结果、历史、任务卡片分布在：
  - `web/src/pages/TextToImage.tsx`
  - `web/src/pages/ImageToImage.tsx`
  - `web/src/pages/MultiCompose.tsx`
  - `web/src/components/PromptForm.tsx`
  - `web/src/components/Uploader.tsx`
  - `web/src/components/TaskCard.tsx`
  - `web/src/components/ProgressBar.tsx`
  - `web/src/components/ResultGallery.tsx`
  - `web/src/components/HistoryPanel.tsx`
- 可见中文文案、按钮、状态、错误兜底和通知文案分散在上述组件、`web/src/utils/notify.ts`、`web/src/api/client.ts`、`web/src/hooks/useGeneration.ts` 中。
- `web/src/utils/storage.ts` 已有 localStorage 读写模式，可作为新增偏好存储的实现参考；当前 key 为 `agnes:image-history`。

## Proposed Changes

### 1. 新增偏好与国际化基础设施

新增 `web/src/i18n.ts`：
- 定义 `Language = 'zh' | 'en'`。
- 定义完整字典对象，覆盖导航、主题/语言切换、通知状态、健康状态、页面标题与说明、表单字段、尺寸分组与选项、上传、任务状态、结果、历史、错误兜底、浏览器通知标题与正文。
- 提供 `translate(language, key, params?)`，支持 `{count}`、`{max}`、`{position}` 等简单变量替换。
- 中文作为默认字典；英文缺失时回退中文，避免界面出现空文案。

新增 `web/src/theme.ts`：
- 定义 `ThemeId = 'default' | 'light' | 'dark'`。
- 导出主题元数据：
  - `default`：延续当前 Agnes 深灰 + 靛蓝主色，但提高层级、边界和聚焦态对比度。
  - `light`：浅底、深文字、清晰边框、蓝紫强调色。
  - `dark`：更高对比度的深色主题，降低纯黑疲劳，保证文本和控件可读性。
- 定义 `PREFERENCE_STORAGE_KEYS`，使用 `agnes:theme` 和 `agnes:language`。
- 提供 `normalizeTheme`、`normalizeLanguage` 等安全读取工具，避免 localStorage 被写入非法值后破坏渲染。

新增 `web/src/preferences.tsx`：
- 创建 `PreferencesProvider` 和 `usePreferences()`。
- 初始化时从 localStorage 读取主题与语言；缺失时使用 `theme='default'`、`language='zh'`。
- 当主题变化时：
  - 写入 `localStorage`。
  - 设置 `document.documentElement.dataset.theme`。
  - 可同步设置 `meta[name="theme-color"]`，优化移动端浏览器顶部色。
- 当语言变化时：
  - 写入 `localStorage`。
  - 设置 `document.documentElement.lang` 为 `zh-CN` 或 `en`。
- 向组件暴露 `language`、`setLanguage`、`theme`、`setTheme`、`t`。

修改 `web/src/main.tsx`：
- 使用 `<PreferencesProvider>` 包裹 `<App />`，让全站可读取主题与语言。

### 2. 顶部栏与控制入口改造

修改 `web/src/App.tsx`：
- 使用 `usePreferences()` 替换硬编码文案。
- 将 `TABS` 从固定 label 改为 labelKey。
- 在顶部栏加入两个可访问的切换控件：
  - 主题选择：`select` 或分段按钮，选项为默认、浅色、深色。
  - 语言选择：中文 / English。
- 调整顶部栏结构为：
  - 品牌区：Logo + `Agnes Image Studio`
  - Tab 区：可横向滚动或自动换行，移动端保持单行可滑动
  - 状态/偏好区：语言、主题、通知按钮、连接状态、队列信息
- 给按钮补充 `aria-label` / `title` 的双语文案。
- 健康状态、通知状态、队列文案全部接入字典。

### 3. 页面与组件文案接入 i18n

修改 `web/src/pages/TextToImage.tsx`、`web/src/pages/ImageToImage.tsx`、`web/src/pages/MultiCompose.tsx`：
- 引入 `usePreferences()`，替换标题、描述、placeholder、并行任务数、提交按钮、空状态、本地历史标题等硬编码文案。
- 将动态按钮文案统一走 `t(key, params)`，例如 `同时生成 {count} 个任务`、`还需 {count} 张图片`。
- 将当前语言传入生成 hook，用于后续浏览器通知文案。

修改 `web/src/components/PromptForm.tsx`：
- 尺寸分组从直接中文 label 改为 `labelKey`。
- 尺寸选项中保留尺寸值，括号内描述接入字典。
- 表单字段、默认 placeholder、自定义尺寸、宽高校验错误、范围提示全部接入字典。
- 保持 `ResponseFormat` 选项值不变，显示文本可保留 `URL` / `Base64`。

修改 `web/src/components/Uploader.tsx`：
- 上传按钮、URL placeholder、添加按钮、文件/URL 标签、已选计数接入字典。
- 移动端 URL 输入和添加按钮按样式改为更适合触摸的布局。

修改 `web/src/components/TaskCard.tsx`：
- 任务类型、无提示词、提交中、排队位置、删除按钮 aria 文案接入字典。
- 任务头在窄屏下允许换行，避免 prompt、尺寸、删除按钮挤压。

修改 `web/src/components/ProgressBar.tsx`：
- 状态文案、诊断信息 summary 接入字典。

修改 `web/src/components/ResultGallery.tsx`：
- 生成失败、未返回图片、下载、原图、修订后 Prompt 接入字典。

修改 `web/src/components/HistoryPanel.tsx`：
- 空历史、历史数量、清空历史、查看、无提示词接入字典。

修改 `web/src/hooks/useGeneration.ts`：
- 让 `useMultiGeneration(language)` 接收当前语言。
- 将本地 label 的无提示词兜底接入字典或保留 prompt 原值并在展示层翻译兜底。
- 调用 `notifyTaskFinished` 时传入当前语言。

修改 `web/src/utils/notify.ts`：
- 任务类型与通知标题、正文接入 `i18n` 字典。
- 去掉标题中的 emoji，减少不同平台通知标题渲染差异；如需保留视觉提示，使用纯文本状态词。
- 成功通知正文包含提示词；失败通知正文包含错误原因；均按当前语言展示。

修改 `web/src/api/client.ts`：
- 保持 API 类型和请求行为不变。
- 仅将 `请求失败`、`查询失败` 这类 catch 兜底错误改为稳定错误码或英文中性文本，最终展示仍由组件层字典负责；如果保留后端返回错误原文，不对后端错误做强行翻译。

### 4. 主题 CSS 与移动端样式优化

修改 `web/src/App.css`：
- 将当前 `:root` 变量重构为通用 token：
  - `--bg`
  - `--bg-elevated`
  - `--panel`
  - `--panel-2`
  - `--border`
  - `--text`
  - `--muted`
  - `--primary`
  - `--primary-hover`
  - `--text-on-primary`
  - `--ok`
  - `--warn`
  - `--error`
  - `--error-bg`
  - `--shadow`
  - `--focus-ring`
- 为 `[data-theme='default']`、`[data-theme='light']`、`[data-theme='dark']` 定义变量。
- 补充基础移动端防溢出：
  - `html, body, #root { width: 100%; min-width: 0; }`
  - `body { overflow-x: hidden; }`
  - 图片、pre、长 prompt、按钮文字使用合理的 `max-width`、`overflow-wrap`、`min-width: 0`。
- 顶部栏：
  - 桌面端保持横向布局。
  - `max-width: 640px` 下改为紧凑多行布局，品牌和状态控制分行，Tab 横向滚动并隐藏不必要溢出。
  - 所有可点控件最小高度不低于 `44px`，满足移动端触摸面积。
- 主体布局：
  - `.page` 在 `max-width: 900px` 单列时去掉 `minmax(360px, 460px)` 的最小宽限制。
  - `max-width: 640px` 下 `main` padding 改为 12px - 14px，`.panel` padding 改为 14px - 16px。
  - `max-width: 480px` 下 `.field-row` 改为纵向堆叠，自定义尺寸宽高输入也纵向排列，去掉 `×` 的固定底部对齐造成的挤压。
  - `max-width: 360px` 下进一步压缩 gallery gap、panel radius、预览图尺寸。
- 表单与按钮：
  - `textarea`、`input`、`select` 字号至少 16px，避免 iOS 聚焦放大。
  - 主按钮、次按钮、通知按钮、Tab 最小高度 44px。
  - `.url-add` 在窄屏下改为单列，添加按钮全宽。
- 图片和历史：
  - `.gallery` 改为 `repeat(auto-fill, minmax(min(100%, 160px), 1fr))`，窄屏下允许单列或双列自适应。
  - `.gallery-actions` 在 320px 下允许换行，避免下载/原图按钮溢出。
  - 预览图在手机上使用 72px - 76px，删除按钮扩大到 32px 可点区域。
- 任务卡片：
  - `.task-card-head` 在窄屏下 `flex-wrap: wrap`。
  - 删除按钮扩大点击区域，不再只依赖 18px 字号。
  - `.task-label` 支持两行截断或自然换行，避免长 prompt 撑开。
- Debug 和错误：
  - `pre` 在移动端使用 `overflow: auto`、`max-width: 100%`。
  - 错误块颜色使用 `--error-bg`，确保浅色/深色主题均可读。

### 5. 可访问性与浏览器兼容

- 所有新增选择器使用原生 `select` 或 button，不增加复杂交互依赖。
- 可点击元素保持键盘可聚焦，聚焦态使用 `--focus-ring`。
- 对主题和语言切换控件添加明确 label 或 `aria-label`。
- 设置 `color-scheme` 与当前主题一致，改善原生表单控件在 Chrome/Safari/Firefox 的表现。
- 不改变后端 API、生成流程和历史数据结构，避免迁移风险。

## Assumptions & Decisions

- 默认主题命名为 `default`，视觉上是当前 Agnes 深灰主视觉的优化版；另外提供 `light` 与 `dark`，满足“默认主题、浅色主题、深色主题”三种风格。
- 默认语言为中文，localStorage 无记录或记录非法时回退中文。
- 主题和语言选择使用 `localStorage`，key 分别为 `agnes:theme`、`agnes:language`。
- 不引入 `i18next` 等依赖；当前项目文案规模较小，轻量字典更利于维护和打包体积控制。
- 后端返回的错误原文不做强行翻译；前端固定文案和兜底错误做双语。
- 此次只做响应式适配和前端 UI 能力，不修改生成 API、任务队列、历史存储格式或服务端逻辑。

## Verification Steps

1. 在 `web` 目录运行 `npm run lint`，确保 TypeScript/React lint 无新增问题。
2. 在 `web` 目录运行 `npm run build`，确保类型检查和 Vite 构建通过。
3. 启动 `npm run dev` 后使用 Chrome DevTools 验证宽度：
   - 320px
   - 360px
   - 375px
   - 390px
   - 414px
   - 480px
4. 每个宽度下检查：
   - 页面无横向滚动条。
   - 顶部栏、Tab、主题/语言选择、通知按钮、健康状态不溢出。
   - 三个页面的表单、上传、按钮、任务卡、历史和 gallery 均可读可点。
   - 触摸控件高度不低于 44px。
5. 主题验证：
   - 分别切换 `default`、`light`、`dark`。
   - 刷新页面后保持上次主题。
   - 表单、按钮、错误、进度、历史卡片在三种主题下对比度可读。
6. 语言验证：
   - 默认进入为中文。
   - 切换英文后导航、按钮、提示、状态、历史、错误兜底和通知按钮文案同步更新。
   - 刷新页面后保持英文。
   - 切回中文后刷新仍保持中文。
7. 功能回归：
   - 文生图、图生图、多图合成仍能提交任务。
   - 任务状态轮询、结果下载、历史保存、清空历史不受影响。
   - 浏览器通知权限流程不受影响，任务完成通知使用当前语言。
