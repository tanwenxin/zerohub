# 全局任务队列与顶部任务查看功能改造计划

## 摘要（Summary）
将"前端任务"从"每个页面各自的并行提交"改为**全局统一队列**：
- 移除三个页面的"并行任务数"选择器，一次点击只提交一个任务。
- 文生图 / 图生图 / 多图合成**共享同一个任务队列**，三种类型加起来**最多同时存在 3 个进行中的任务**；达到 3 个时所有页面的提交按钮禁用，待有任务完成（或失败/移除）后释放名额可继续提交，形成排队队列。
- 顶部新增"任务 N/3"按钮，点击从右侧滑出抽屉，集中展示所有任务的排队/进度/结果状态。
- 各页面右侧不再重复展示任务列表，仅保留"本地历史"。

## 当前状态分析（Current State Analysis）
- 入口 [main.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/main.tsx)：`PreferencesProvider > App`。
- [App.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/App.tsx)：顶部栏含 brand / tabs / theme+language+notify 控件 / health；`main` 区按 `tab` 渲染三页面之一。
- 三个页面 [TextToImage.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/pages/TextToImage.tsx)、[ImageToImage.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/pages/ImageToImage.tsx)、[MultiCompose.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/pages/MultiCompose.tsx)：
  - 各自调用 `useMultiGeneration(language)`，**任务状态彼此独立、切 tab 即丢失**。
  - 各自有"并行任务数"`<select>`（`parallel` state，默认 2），`onSubmit` 用 `for` 循环提交 `parallel` 个任务。
  - 右侧 `panel output` 渲染本页 `tasks` 的 `TaskCard` 列表 + `HistoryPanel`。
- [useGeneration.ts](file:///Users/bytedance/Documents/ai_product/agnes/web/src/hooks/useGeneration.ts)：`useMultiGeneration` 维护 `tasks: LocalTask[]`，提供 `submit/removeTask`，内部独立轮询 + 完成写 localStorage + 桌面通知。`LocalTask` 状态来源：`task: Task|null`（含 `status: queued|running|done|error`）与 `submitError`。
- [TaskCard.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/components/TaskCard.tsx)：展示单任务（类型/摘要/尺寸/移除 + 进度 + 结果），已国际化。
- Context 模式参考：[preferencesContext.ts](file:///Users/bytedance/Documents/ai_product/agnes/web/src/preferencesContext.ts)（`createContext`）+ [preferences.tsx](file:///Users/bytedance/Documents/ai_product/agnes/web/src/preferences.tsx)（Provider）+ [usePreferences.ts](file:///Users/bytedance/Documents/ai_product/agnes/web/src/usePreferences.ts)（hook + 守卫）。
- i18n：[i18n.ts](file:///Users/bytedance/Documents/ai_product/agnes/web/src/i18n.ts)，zh/en 双字典，`translate(language, key, params)`，键值强类型 `TranslationKey`。

## 关键决策（Assumptions & Decisions）
1. **"进行中"的定义（计入 3 个上限）**：`submitError` 为空且（`task===null`(提交中) 或 `task.status ∈ {queued, running}`）。`done` / `error` / `submitError` 视为终止态，**不占名额**。
2. **上限**：`MAX_ACTIVE_TASKS = 3`（常量，放在新建的队列模块中）。达到上限时三个页面的"生成/合成"按钮禁用并提示"任务已满（最多 3 个）"。
3. **任务列表归属**：任务队列状态上移到全局 Context；抽屉展示**全部任务**（含已完成/失败，便于查看队列历史）；顶部徽标显示**进行中数量** `N/3`。各页面右侧移除任务列表，仅保留本地历史（采纳"仅顶部抽屉"方案）。
4. **抽屉形态**：顶部按钮点击后从右侧滑入（采纳"右侧滑入抽屉"方案），复用 `TaskCard` 渲染。
5. **移除并行**：删除三页面的 `parallel` state、并行 `<select>`、`for` 循环；`onSubmit` 改为单次 `submit(...)`。相关 i18n 键（`task.parallel`/`task.option.*`/`task.generateMultiple`/`task.composeMultiple`）保留不删（无副作用），新功能改用新键。
6. **Provider 嵌套**：`TaskQueueProvider` 需读取 `usePreferences().language` 传给 `useMultiGeneration`，故必须置于 `PreferencesProvider` 内、`App` 外。

## 变更内容（Proposed Changes）

### 1) 新建 `web/src/taskQueueContext.ts`
- 定义并导出 `TaskQueueContextValue` 接口与 `TaskQueueContext = createContext<... | null>(null)`。
- 字段：
  - `tasks: LocalTask[]`
  - `submit: (params: GenerateParams) => void`
  - `removeTask: (localId: string) => void`
  - `activeCount: number`
  - `maxActive: number`
  - `canSubmit: boolean`（= `activeCount < maxActive`）
- 类型从 `./hooks/useGeneration`（`LocalTask`）与 `./api/client`（`GenerateParams`）导入。

### 2) 新建 `web/src/taskQueue.tsx`（Provider）
- 导出常量 `MAX_ACTIVE_TASKS = 3`。
- `TaskQueueProvider({children})`：
  - `const { language } = usePreferences();`
  - `const { tasks, submit: rawSubmit, removeTask } = useMultiGeneration(language);`
  - 计算 `activeCount`（按决策 1）。
  - `canSubmit = activeCount < MAX_ACTIVE_TASKS`。
  - `submit` 包装：若 `!canSubmit` 直接 return（双保险），否则 `rawSubmit(params)`。
  - `useMemo` 组装 value，`<TaskQueueContext.Provider>`。

### 3) 新建 `web/src/useTaskQueue.ts`（hook）
- 仿 `usePreferences.ts`：`useContext(TaskQueueContext)`，为空抛错。

### 4) 新建 `web/src/components/TasksDrawer.tsx`
- props：`open: boolean`、`onClose: () => void`。
- 通过 `useTaskQueue()` 取 `tasks/removeTask`，`usePreferences()` 取 `t`。
- 结构：遮罩层 `.drawer-overlay`（点击关闭）+ 右侧面板 `.drawer`（`open` 控制 class）：
  - 头部：标题 `t('tasks.drawerTitle')` + 关闭按钮。
  - 列表：`tasks.length===0` 显示 `t('tasks.empty')`；否则 `tasks.map` 渲染 `<TaskCard item onRemove={removeTask}/>`。

### 5) 编辑 `web/src/main.tsx`
- 在 `PreferencesProvider` 与 `App` 之间插入 `TaskQueueProvider`：
  `PreferencesProvider > TaskQueueProvider > App`。

### 6) 编辑 `web/src/App.tsx`
- 引入 `useTaskQueue`、`TasksDrawer`，新增 `const [drawerOpen, setDrawerOpen] = useState(false)`。
- 取 `const { activeCount, maxActive } = useTaskQueue();`
- 在 `topbar-controls`（notify 按钮旁）新增"任务"按钮：文案 `t('tasks.viewButton', { count: activeCount, max: maxActive })`，点击 `setDrawerOpen(true)`。
- 在组件根节点末尾渲染 `<TasksDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />`。

### 7) 编辑三个页面 `TextToImage.tsx` / `ImageToImage.tsx` / `MultiCompose.tsx`
统一改造：
- 删除 `parallel` state、"并行任务数" `<label><select>` 块、`useMultiGeneration` 的本地实例化。
- 改用 `const { submit, canSubmit: queueHasRoom, tasks } = useTaskQueue();`
- `onSubmit`：保留 `ensurePermission()`；改为单次 `submit({ type, prompt, size, responseFormat[, files, imageUrls] })`。
- 按钮：
  - `disabled = !canSubmit || !queueHasRoom`（`canSubmit` 为本页原校验：prompt/图片/尺寸）。
  - 文案：队列满时显示 `t('tasks.full', { max })`（`max` 从 `useTaskQueue().maxActive`）；否则文生/图生用 `t('task.generate')`，多图未够图用 `t('task.needImages',...)`、够图用 `t('task.compose')`。
- 右侧 `panel output`：移除 `TaskCard` 任务列表与 `task.title` 标题及 empty 文案；仅保留"本地历史"标题 + `HistoryPanel`。
- 历史刷新：`doneCount` 改为基于 `useTaskQueue().tasks` 计算（保留现有 `useEffect` 刷新逻辑）。
- 移除不再使用的 import（`TaskCard`，必要时 `useMemo` 保留用于 doneCount）。
- 注意：`ImageToImage`/`MultiCompose` 当前从 `'../usePreferences'` 引入、`TextToImage` 从 `'../preferences'` 引入——保持各自现状，仅增删任务相关 import。

### 8) 编辑 `web/src/i18n.ts`
zh 与 en 同步新增键：
- `tasks.viewButton`: `任务 {count}/{max}` / `Tasks {count}/{max}`
- `tasks.drawerTitle`: `任务队列` / `Task queue`
- `tasks.empty`: `暂无任务` / `No tasks yet`
- `tasks.full`: `任务已满（最多 {max} 个）` / `Queue full (max {max})`
- `tasks.close`: `关闭` / `Close`

### 9) 编辑 `web/src/App.css`
- 新增 `.tasks-btn`（顶部按钮，复用现有 `.notify-btn` 视觉风格）。
- 新增抽屉样式：`.drawer-overlay`（固定全屏半透明遮罩）、`.drawer`（右侧固定、宽约 420px、`transform: translateX(100%)`，`.drawer.open` 归零，含过渡）、`.drawer-head`、`.drawer-body`（可滚动）、`.drawer-close`。

## 验证步骤（Verification）
1. `npm --prefix web run build`：TypeScript + Vite 构建通过，无类型错误。
2. `GetDiagnostics`：无报错。
3. 运行（`AGNES_MOCK=1 npm run start` + `npm run dev:web`）后在浏览器验证：
   - 三个页面均无"并行任务数"选择器；点击生成只产生 **1** 个任务。
   - 连续提交至 **3** 个进行中任务后，三个页面（含切换 tab 后）按钮均禁用并显示"任务已满（最多 3 个）"。
   - 某任务完成后，名额释放，可继续提交（队列形式）。
   - 顶部"任务 N/3"徽标随进行中数量变化；点击右侧滑出抽屉，列出全部任务及其排队/进度/结果，可移除。
   - 切换 tab 后任务队列与抽屉内容保持一致（全局共享）。
   - 本地历史仍在各页面右侧正常展示与刷新。
