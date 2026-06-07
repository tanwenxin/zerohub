# 生成任务提交反馈与按钮节流计划

## Summary

为三个生成入口（文生图、图生图、多图合成）增加明确的“任务已收到并进入队列”反馈动效，并为所有生成按钮增加节流，避免用户连续点击导致重复提交或误以为没有响应。

实现原则：
- 反馈要发生在用户点击后、任务进入本地队列时，文案明确表达“任务已加入队列”。
- 节流在统一任务队列层处理，避免三个页面重复实现并防止未来新增入口绕过限制。
- 按钮本身在短时间内进入“提交中/已加入”状态，同时保留全局轻提示，降低用户不确定感。
- 不修改后端接口，不改变任务轮询、历史保存和抽屉展示逻辑。

## Current State Analysis

- 三个页面提交按钮位置：
  - `web/src/pages/TextToImage.tsx`
  - `web/src/pages/ImageToImage.tsx`
  - `web/src/pages/MultiCompose.tsx`
- 当前页面按钮逻辑：
  - 表单有效且队列未满时可点击。
  - 点击后调用 `ensurePermission()` 和 `submit(...)`。
  - 没有点击后的即时 UI 状态变化；用户只会在任务抽屉或历史变化中间接感知。
- 全局任务队列：
  - `web/src/taskQueue.tsx` 通过 `TaskQueueProvider` 包装 `useMultiGeneration(language)`。
  - 当前 `submit(params)` 返回 `void`。
  - 当前只检查 `activeCount >= MAX_ACTIVE_TASKS`，超过上限直接忽略。
  - 没有节流窗口，也没有“最近提交成功”的状态。
- 任务创建：
  - `web/src/hooks/useGeneration.ts` 的 `submit` 会先创建 `LocalTask` 并 `setTasks((prev) => [local, ...prev])`，随后再调用后端 `generate(params)`。
  - 因此“任务进入本地队列”的确认点可以放在 `TaskQueueProvider.submit()` 调用成功后。
- 现有文案：
  - `tasks.full`、`task.generate`、`task.compose` 已存在。
  - 缺少 `任务已加入队列`、`提交中`、`请稍候` 等中英文反馈文案。
- 现有样式：
  - `web/src/App.css` 已有 `.btn-primary`、主题变量和移动端断点。
  - 没有 toast/inline notice/按钮 loading 状态样式。

## Proposed Changes

### 1. 在队列层增加节流与提交反馈状态

修改 `web/src/taskQueueContext.ts`：
- 将 `submit` 类型从：
  - `submit: (params: GenerateParams) => void`
- 调整为：
  - `submit: (params: GenerateParams) => boolean`
- 新增 context 字段：
  - `lastAcceptedAt: number | null`
  - `submitLocked: boolean`
  - `submitLockRemainingMs: number`
- 语义：
  - `submit(...) === true`：任务已被接收并进入本地队列，可展示成功反馈。
  - `submit(...) === false`：队列满或处于节流窗口，不展示成功反馈。

修改 `web/src/taskQueue.tsx`：
- 定义常量：
  - `SUBMIT_THROTTLE_MS = 1200`
- 使用 `useRef` 存储最近一次接收提交的时间：
  - `lastSubmitAtRef`
- 使用 `useState` 存储 `lastAcceptedAt` 和 `submitLocked`，供 UI 响应。
- `submit(params)` 执行顺序：
  1. 如果 `activeCount >= MAX_ACTIVE_TASKS`，返回 `false`。
  2. 如果距离 `lastSubmitAtRef.current` 小于 `SUBMIT_THROTTLE_MS`，返回 `false`。
  3. 写入 `lastSubmitAtRef.current = Date.now()`。
  4. 设置 `lastAcceptedAt`。
  5. 设置 `submitLocked = true`，并用 `window.setTimeout` 在节流窗口结束后恢复。
  6. 调用 `rawSubmit(params)`。
  7. 返回 `true`。
- 清理：
  - Provider 卸载时清理节流 timeout。
- 这样三个页面都通过同一个锁，连续点击任意生成入口都会被统一拦截。

### 2. 三个页面接入按钮状态与确认动效

修改：
- `web/src/pages/TextToImage.tsx`
- `web/src/pages/ImageToImage.tsx`
- `web/src/pages/MultiCompose.tsx`

新增页面本地状态：
- `const [submitFeedback, setSubmitFeedback] = useState<'idle' | 'accepted'>('idle');`
- `const feedbackTimerRef = useRef<number | null>(null);`

提交逻辑：
- 从 `useTaskQueue()` 额外读取：
  - `submitLocked`
  - `lastAcceptedAt`（如需要触发全局反馈可用）
- `onSubmit` 中：
  1. 如果表单无效、队列满或 `submitLocked`，直接 return。
  2. 调用 `const accepted = submit(params)`。
  3. 如果 `accepted` 为 `true`：
     - `ensurePermission()` 保持在用户点击路径内执行。
     - 设置 `submitFeedback = 'accepted'`。
     - 约 1400ms 后恢复 `idle`。
  4. 如果 `accepted` 为 `false`，不触发成功反馈。
- 按钮 disabled 条件扩展：
  - `disabled={!canSubmit || !queueHasRoom || submitLocked}`
- 按钮文案：
  - 队列满：`tasks.full`
  - 已接收反馈窗口：`tasks.accepted`
  - 节流锁定中：`tasks.submitting`
  - 默认：原有 `task.generate` / `task.compose`
- 按钮 class：
  - `className={\`btn-primary btn-block generate-submit-btn ${submitFeedback === 'accepted' ? 'accepted' : ''} ${submitLocked ? 'locked' : ''}\`}`

### 3. 增加全局轻提示或就地提示

为了让用户明确知道“任务已经到任务栏/队列里”，新增一个紧贴生成按钮下方的就地提示，避免全局 toast 遮挡移动端顶部栏：

页面按钮后新增：
- `<div className={`submit-feedback ${submitFeedback === 'accepted' ? 'show' : ''}`} role="status" aria-live="polite">...`

展示内容：
- 小圆点/勾选动效。
- 文案：
  - 中文：`任务已加入队列，可在任务栏查看进度`
  - 英文：`Task added to the queue. Check Tasks for progress.`
- 这个提示在三类页面复用同一段结构或抽成组件。

建议新增组件 `web/src/components/SubmitFeedback.tsx`：
- props：
  - `visible: boolean`
  - `message: string`
- 作用：
  - 避免三个页面重复 JSX。
  - 使用 `role="status"` 和 `aria-live="polite"` 兼顾可访问性。

### 4. 增加 i18n 文案

修改 `web/src/i18n.ts`：
- 中文：
  - `tasks.accepted`: `已加入任务队列`
  - `tasks.submitting`: `提交中…`
  - `tasks.acceptedHint`: `任务已加入队列，可在任务栏查看进度`
  - `tasks.throttled`: `请稍候再提交`
- 英文：
  - `tasks.accepted`: `Added to queue`
  - `tasks.submitting`: `Submitting…`
  - `tasks.acceptedHint`: `Task added to the queue. Check Tasks for progress.`
  - `tasks.throttled`: `Please wait before submitting again`

### 5. 增加 CSS 动效

修改 `web/src/App.css`：
- 新增按钮状态：
  - `.generate-submit-btn`
  - `.generate-submit-btn.locked`
  - `.generate-submit-btn.accepted`
- 动效设计：
  - 点击接收后按钮出现短暂高光扫过。
  - `accepted` 状态使用 `--ok` 或主题适配色，避免误判为错误。
  - `locked` 状态保留禁用样式但不要过度变灰，让用户知道系统正在处理点击。
- 新增提示样式：
  - `.submit-feedback`
  - `.submit-feedback.show`
  - `.submit-feedback-dot`
- 动画：
  - `@keyframes submitPulse`
  - `@keyframes submitSlideIn`
  - `@keyframes submitSweep`
- 移动端：
  - `max-width: 480px` 下提示字号 12px、行高紧凑。
  - 保持不造成横向溢出。
- 可访问性：
  - `@media (prefers-reduced-motion: reduce)` 下关闭位移动画，只保留状态显示。

### 6. 处理 lint 既有问题

当前 `npm run lint` 已知可能被 `TextToImage.tsx` 的同步 `setHistory(loadHistory())` effect 阻塞。由于本次会修改 `TextToImage.tsx`，顺手修复该处：
- 将：
  - `setHistory(loadHistory())`
- 调整为与另外两个页面一致：
  - `const id = window.setTimeout(() => setHistory(loadHistory()), 0);`
  - `return () => window.clearTimeout(id);`

这样可以让本次验证中的 `npm run lint` 真正通过。

## Assumptions & Decisions

- 节流窗口使用 `1200ms`，足够防止双击/连点，又不会明显影响用户连续创建不同任务。
- 节流放在 `TaskQueueProvider`，三个生成入口共享同一个节流锁。
- `submit` 改为返回 `boolean`，调用方据此判断是否展示成功反馈。
- 成功反馈表示“任务已进入本地任务队列”，不表示后端已经生成成功。
- 不修改后端 API，不修改 `generate()` 和 `getTask()` 协议。
- 不自动打开任务抽屉，避免打断用户继续填写参数；但提示文案会引导用户去任务栏查看进度。
- 反馈组件使用页面内就地提示，而不是全局悬浮 toast，避免移动端遮挡顶部导航。

## Verification Steps

静态验证：
1. `cd web && npm run lint`
2. `cd web && npm run build`

行为验证：
1. 文生图填写 prompt 后点击生成：
   - 按钮短暂显示 `已加入任务队列`。
   - 按钮下方出现“任务已加入队列，可在任务栏查看进度”提示。
   - 任务栏计数增加。
2. 快速双击生成按钮：
   - 只新增一个任务。
   - 第二次点击在节流窗口内被忽略。
3. 图生图、多图合成重复上述验证。
4. 队列满时：
   - 按钮仍显示 `任务已满（最多 3 个）`。
   - 不展示“已加入队列”成功提示。
5. 中英文切换：
   - 中文展示中文反馈。
   - 英文展示英文反馈。
6. 移动端 320px - 480px：
   - 提示不横向溢出。
   - 按钮动效不影响布局。
7. `prefers-reduced-motion`：
   - 关闭或弱化动画，不影响状态文案可见性。
