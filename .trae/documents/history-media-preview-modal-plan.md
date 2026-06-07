# 本地历史媒体预览模态框计划

## Summary

为“本地历史”中的已完成图片和视频结果增加常规的点击查看体验：用户点击历史里的图片缩略图或视频预览后，打开一个居中的模态框，用于放大查看媒体内容，并提供下载入口。该能力只作用于普通用户可见的前端历史列表，不新增后端接口，不改变生成流程、任务队列、刷新逻辑或历史数据结构。

## Current State Analysis

- 当前历史列表由 `web/src/components/TaskHistory.tsx` 渲染。
- 图片历史结果当前在 `TaskHistory.tsx` 中直接渲染为 `.gallery` / `.gallery-item` / `<img>`，每张图下方已有下载链接，下载地址来自 `downloadUrl(task.id, i)`。
- 视频历史结果当前在 `TaskHistory.tsx` 中直接渲染为内嵌 `<video className="video-player" controls />`，下方已有下载链接，下载地址来自 `videoDownloadUrl(task.id)`。
- 生成页当前结果展示还分别有 `web/src/components/ResultGallery.tsx` 和 `web/src/components/VideoResult.tsx`，但用户本次明确说的是“查看本地历史”，因此首轮实现聚焦 `TaskHistory.tsx`。
- 现有 `web/src/App.css` 已有 `.gallery`、`.gallery-item`、`.video-player`、`.gallery-actions` 等样式和 640px/360px 等移动端断点，但没有 `modal` / `dialog` / `lightbox` 相关实现。
- 现有 i18n 文案在 `web/src/i18n.ts` 中维护，已有下载相关文案：
  - `gallery.download`
  - `gallery.video.download`
  - `gallery.video.open`
  - `gallery.video.unsupported`

## Proposed Changes

### 1. 新增历史媒体预览组件

文件：`web/src/components/MediaPreviewModal.tsx`

新增一个轻量、无第三方依赖的 React 组件，用于统一展示图片和视频预览。

组件接口建议：

```ts
type PreviewMedia =
  | {
      kind: 'image';
      src: string;
      alt: string;
      downloadHref: string;
      title?: string;
      meta?: string;
    }
  | {
      kind: 'video';
      src: string;
      downloadHref: string;
      title?: string;
      meta?: string;
    };

interface MediaPreviewModalProps {
  media: PreviewMedia | null;
  onClose: () => void;
}
```

行为：

- `media === null` 时返回 `null`，不渲染模态框。
- 图片模式渲染大图，使用 `max-width` / `max-height` 控制，不裁切图片。
- 视频模式渲染 `<video controls autoPlay playsInline preload="metadata">`，支持在模态框内播放。
- 顶部或右上角提供关闭按钮。
- 底部操作区提供下载按钮：
  - 图片使用 `gallery.download`
  - 视频使用 `gallery.video.download`
- 点击遮罩关闭；点击内容区不关闭。
- 按 `Escape` 关闭。
- 打开时可以给遮罩容器设置 `role="dialog"`、`aria-modal="true"`，并使用明确的 `aria-label`。

### 2. 在历史列表接入点击预览

文件：`web/src/components/TaskHistory.tsx`

改动：

- 引入 `MediaPreviewModal`。
- 增加本地 state：

```ts
const [previewMedia, setPreviewMedia] = useState<PreviewMedia | null>(null);
```

- 图片历史：
  - 将图片缩略图包裹成 `<button type="button" className="media-preview-trigger">` 或给当前 `.gallery-item` 内图片增加专门按钮。
  - 点击后设置：

```ts
setPreviewMedia({
  kind: 'image',
  src,
  alt: `result-${i}`,
  downloadHref: downloadUrl(task.id, i),
  title: t(TYPE_LABEL_KEY[task.type]),
  meta: size,
});
```

  - 保留下方现有下载按钮，避免用户必须打开模态框才能下载。

- 视频历史：
  - 建议保留当前内嵌 video 的 controls，因为历史列表里直接播放仍是合理体验。
  - 增加一个明确的“查看”按钮或覆盖层按钮，避免点击 video 控件时误触打开模态框。
  - 点击“查看”后设置：

```ts
setPreviewMedia({
  kind: 'video',
  src: task.result.videoUrl,
  downloadHref: videoDownloadUrl(task.id),
  title: t(TYPE_LABEL_KEY[task.type]),
});
```

- 在 `TaskHistory` 根节点末尾渲染：

```tsx
<MediaPreviewModal media={previewMedia} onClose={() => setPreviewMedia(null)} />
```

### 3. 补充 i18n 文案

文件：`web/src/i18n.ts`

新增中英文文案：

- `preview.open`
  - 中文：`查看`
  - 英文：`View`
- `preview.close`
  - 中文：`关闭预览`
  - 英文：`Close preview`
- `preview.imageLabel`
  - 中文：`图片预览`
  - 英文：`Image preview`
- `preview.videoLabel`
  - 中文：`视频预览`
  - 英文：`Video preview`

使用这些文案作为按钮文字和无障碍标签。

### 4. 补充样式

文件：`web/src/App.css`

新增样式组：

- `.media-preview-trigger`
  - 去除默认按钮边框样式，保持缩略图卡片自然外观。
  - 鼠标悬停时轻微放大或显示浅色遮罩，表达“可点击查看”。
  - `:focus-visible` 提供清晰焦点环。

- `.media-preview-backdrop`
  - `position: fixed`
  - 覆盖全屏
  - 半透明深色背景
  - `z-index` 高于 topbar / drawer
  - 居中布局

- `.media-preview-dialog`
  - 最大宽度约 `min(96vw, 1120px)`
  - 最大高度约 `92vh`
  - 使用当前主题变量：`var(--panel)`、`var(--border)`、`var(--text)`
  - 圆角、阴影、内部 flex 布局

- `.media-preview-body`
  - 图片使用 `object-fit: contain`
  - 视频宽度 100%，最大高度受限

- `.media-preview-actions`
  - 包含下载和关闭按钮
  - 移动端按钮高度不低于 44px

- 移动端断点：
  - `@media (max-width: 640px)` 下 dialog 几乎铺满屏幕宽度，高度不超过 `94vh`。
  - 图片/视频主体使用 `max-height: 70vh` 左右。
  - 操作按钮横向空间不足时换行或等宽。

- `@media (prefers-reduced-motion: reduce)` 下关闭或弱化动效。

### 5. 不做的事情

- 不新增后端接口。
- 不改变任务历史 API 数据结构。
- 不改变生成页实时结果 `ResultGallery.tsx` / `VideoResult.tsx` 的交互，除非后续用户明确要求实时结果也同样支持点击预览。
- 不引入第三方 lightbox 库，保持实现轻量。
- 不恢复或暴露之前已移除的 RPM / Key 统计信息。

## Assumptions & Decisions

- “本地历史”指 `TaskHistory` 组件展示的后端持久化历史任务列表。
- “正常的查看图片效果”按常见 lightbox 处理：点击缩略图打开遮罩模态框，居中大图，支持关闭和下载。
- 视频同样使用模态框内播放器，但历史列表里的原内嵌播放器保留，避免功能倒退。
- 图片下载继续使用 `downloadUrl(task.id, index)`；视频下载继续使用 `videoDownloadUrl(task.id)`。
- 模态框关闭方式包括关闭按钮、点击遮罩和 `Escape`。
- 不做复杂缩放手势、滚轮缩放、拖拽平移和上一张/下一张导航；这些属于增强项，当前需求不需要。

## Verification Steps

1. 运行 `npm run lint`，确保 TypeScript/React hooks/lint 规则通过。
2. 运行 `npm run build`，确保生产构建通过。
3. 浏览器手动验证图片历史：
   - 已完成图片任务显示缩略图。
   - 点击图片打开模态框。
   - 模态框中图片按比例放大显示，不溢出视口。
   - 下载按钮可点击并指向 `/api/tasks/:taskId/download/:index`。
   - 点击关闭按钮、遮罩、按 `Escape` 都能关闭。
4. 浏览器手动验证视频历史：
   - 已完成视频任务仍能在历史列表内播放。
   - 点击“查看”打开视频预览模态框。
   - 模态框内视频可播放，下载按钮指向 `/api/videos/:taskId/download`。
   - 关闭方式与图片一致。
5. 移动端验证：
   - 在 360px、480px 宽度下模态框不产生横向溢出。
   - 关闭和下载按钮触摸区域不低于 44px。
   - 图片/视频主体不遮挡操作区。
