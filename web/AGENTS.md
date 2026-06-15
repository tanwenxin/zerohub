# Agnes 前端开发指南（web）

本文件面向在 `web/` 目录下开发的工程师与 AI Agent，说明前端整体结构、设计系统架构、组件复用规范与开发注意事项。仓库根目录的部署/后端约定见根目录 `AGENTS.md`。

## 项目整体介绍

Agnes 前端是基于 **Vite + React 19 + TypeScript** 的视觉智能工作室界面，使用 `vite-react-ssg` 做静态预渲染（SSG）。核心页面：

- 首页（控制塔）：建立产品价值认知，引导进入图片/视频工作台。
- 图片生成：文生图 / 图生图 / 多图合成。
- 视频生成：文生视频 / 图生视频 / 多图视频 / 关键帧动画。
- 合规页：隐私政策、服务条款、联系。
- 设计系统预览（仅开发环境）：校验设计令牌与通用组件。

视觉风格统一为 **暗色命令台（dark command surface）单主题**，源自设计稿 `temp/agnes-responsive-suite-redesign.html`。

## 前端目录结构

```text
web/src/
├── App.tsx                 # 应用外壳：顶栏（品牌/导航胶囊/状态灯）、跑马灯、Outlet、页脚、任务抽屉
├── App.css                 # 全局样式 + 设计令牌（:root）+ 存量业务组件样式
├── RootLayout.tsx          # 包裹全局 Provider（偏好、任务队列）
├── routes.tsx              # 路由表；design-system 仅在 import.meta.env.DEV 下注册
├── i18n.ts                 # 中英文文案字典与 translate()
├── theme.ts / preferences* # 语言/主题偏好（主题已统一暗色，保留语言切换）
├── components/
│   ├── ui/                 # ★ 设计系统组件库（通用、无业务逻辑）
│   │   ├── index.ts        #   统一出口，并 import './ui.css'
│   │   ├── ui.css          #   ui-* 组件样式，全部引用设计令牌
│   │   ├── Container.tsx   #   居中容器
│   │   ├── Layout.tsx      #   Section / Grid / Row / Stack
│   │   ├── Button.tsx      #   Button / ButtonLink（variant/size/block）
│   │   ├── Card.tsx        #   Card（variant=card|tile, flat）
│   │   ├── Badge.tsx       #   Badge（tone）
│   │   ├── Eyebrow.tsx     #   眉题
│   │   ├── Field.tsx       #   表单字段容器
│   │   ├── Input.tsx       #   Input / Textarea / Select
│   │   └── SegmentedControl.tsx
│   └── *.tsx               # 业务组件（Uploader/TaskHistory/PromptForm 等）
├── pages/
│   ├── HomePage.tsx/.css   # 控制塔首页（基于 ui 组件 + 页面级装饰样式）
│   ├── ImageGenerate.tsx   # 图片生成（含真实 API/队列/历史逻辑）
│   ├── VideoGenerate.tsx   # 视频生成
│   ├── DesignSystemPage.*  # 设计系统预览（仅开发环境）
│   └── Privacy/Terms/Contact/NotFound
└── utils/                  # 草稿、尺寸偏好、本地历史、通知等
```

## 设计系统架构

设计系统分三层，从下到上：

1. **设计令牌（tokens）** —— 定义在 `App.css` 的 `:root`。
   - 语义令牌：`--bg` `--surface` `--surface-warm` `--fg` `--fg-2` `--muted` `--accent` `--meta` `--success` `--warn` `--danger` `--border` `--border-soft`。
   - 字体：`--font-display` `--font-body` `--font-mono`；字号 `--text-xs ... --text-4xl`。
   - 间距：`--space-1 ... --space-12`、`--section-y-*`。
   - 圆角：`--radius-sm|md|lg|pill`；阴影 `--elev-*`；动效 `--motion-*` `--ease-standard`；布局 `--container-*`、`--topbar-h`（顶栏高度，供 sticky 顶部偏移复用，如生成页右侧历史区固定定位）。
   - **兼容别名**：旧变量名（`--panel` `--panel-2` `--text` `--primary` `--ok` `--error` 等）被映射到新令牌，使存量组件无需逐个改写即可继承暗色视觉。新代码请优先使用语义令牌，不要新增旧别名。

2. **通用组件库** —— `components/ui/`。样式类名统一以 `ui-` 前缀，全部引用设计令牌，无硬编码颜色/尺寸，无业务逻辑。

3. **页面与业务组件** —— `pages/` 与 `components/*.tsx`。通过组合 ui 组件构建；页面专属装饰（如首页轨道动画 `.console`/`.brand-orb`）放在与页面同名的 `*.css` 中，仍只引用令牌。

主题策略：当前为暗色单主题。`theme.ts`/偏好层保留语言切换，主题切换已下线，不要重新引入浅色分支样式。

## 组件复用规范（强制）

1. **开发页面时必须优先复用 `components/ui` 中的已有组件**，不要在页面里重复堆叠等价样式。
2. **能扩展就不要新建**：若已有组件可通过 `props` / `variant` / `size` / `className` 满足需求，应优先扩展，而不是创建一个相似的新组件。
   - 例：需要次要按钮 → `<Button variant="ghost">`；需要小尺寸 → `size="sm"`；需要导航按钮 → `<ButtonLink>`。
3. **只有现有组件无法满足需求时才新增组件**，新增时：
   - 放入 `components/ui/`（通用）或页面目录（页面专属）；
   - 样式只引用设计令牌，类名加 `ui-` 或页面前缀，避免与全局类名冲突；
   - 在 `components/ui/index.ts` 中导出（若为通用组件）。
4. 新令牌优先复用既有变量；确需新增时加在 `:root`，并在本文件登记说明。
5. 验证还原质量：改动通用组件或令牌后，到 `/design-system`（开发环境）核对色板、字体、按钮、卡片、表单、布局。

## 后续开发注意事项

- **移动端适配**：严格保证 320px–480px 无横向溢出；交互控件最小高度 ≥ 44px（令牌按钮 `--space` 已满足）；移动端瀑布流强制单列。
- **可访问性**：交互元素需有 `aria-label`/`title`；纯装饰元素（轨道、跑马灯、品牌图标）标记 `aria-hidden`；尊重 `prefers-reduced-motion`（已在 ui.css/页面样式中处理）。
- **i18n**：所有用户可见文案走 `i18n.ts`，中英文 key 必须成对存在（缺失会导致 TS 类型报错）。
- **状态持久化**：UI 偏好、草稿、历史筛选/排序/布局存于 `localStorage`，前缀 `agnes:`。
- **设计系统预览页**：仅 `import.meta.env.DEV` 下注册，不进入生产路由，勿在生产页面链接它。
- **验证流程**：改动前端后执行 `npm --prefix web run lint` 与 `npm run build`（根目录），确认 `dist/` 正常产出。
- **回复语言**：除非明确要求，使用中文；代码、命令、令牌名、技术术语保留原文。
```
