# AdSense 合规审计计划

## Summary

本计划用于审计当前 Agnes Web 页面是否适合申请和持续使用 Google AdSense。审计范围由用户确认：

- 审核目标：同时覆盖“首次申请 AdSense”和“通过后的持续投放合规”。
- 产出范围：只输出审计报告，不修改代码。
- 分析对象：仅以当前本地源码为准，不检查线上域名、HTTPS、DNS、Search Console 或真实索引状态。

审计报告将按风险级别列出“不符合/高风险/待确认”项，并给出对应修复建议。不会植入广告代码，不会创建合规页面，不会调整现有 UI。

## Current State Analysis

已完成只读探查，当前项目为 React + Vite 单页应用，后端为 Express 服务。

关键事实：

- 前端入口为 `/Users/bytedance/Documents/ai_product/agnes/web/src/main.tsx`，直接渲染 `App`。
- 主页面为 `/Users/bytedance/Documents/ai_product/agnes/web/src/App.tsx`，仅包含顶部导航、图片生成、视频生成、任务抽屉和后端健康状态。
- 功能页面为：
  - `/Users/bytedance/Documents/ai_product/agnes/web/src/pages/ImageGenerate.tsx`
  - `/Users/bytedance/Documents/ai_product/agnes/web/src/pages/VideoGenerate.tsx`
- 历史与结果展示集中在 `/Users/bytedance/Documents/ai_product/agnes/web/src/components/TaskHistory.tsx` 等组件。
- 国际化文案在 `/Users/bytedance/Documents/ai_product/agnes/web/src/i18n.ts`。
- HTML 模板为 `/Users/bytedance/Documents/ai_product/agnes/web/index.html`，当前 `<title>` 仍为 `web`，未发现 meta description、canonical、结构化信息或 AdSense 相关声明。
- 搜索源码未发现 `privacy`、`terms`、`contact`、`about`、`cookie`、`adsense` 等合规页面或入口。
- 当前没有前端路由，AdSense 审核机器人从源码结构上只能看到一个工具型 SPA 页面，而不是多页面内容站。

基于当前状态，预期主要风险集中在：

- 缺少隐私政策、条款、关于、联系、Cookie/第三方广告说明。
- 工具型页面的原创文字内容较少，容易被判定为低价值内容或“页面主要是功能交互，没有足够发布者内容”。
- 没有清晰的站点导航、公开说明页、作者/运营者可信信息。
- `index.html` 基础 SEO 与品牌信息不完整。
- 若未来直接投放广告，生成任务页、上传页、历史页等交互区域可能不适合放置广告，存在误点、低内容页面展示广告、用户生成内容不可控等风险。

## Proposed Changes

本阶段不做代码变更，只生成审计报告。执行审计时将检查下列文件和方面：

1. `/Users/bytedance/Documents/ai_product/agnes/web/src/App.tsx`
   - 检查站点导航是否包含必要公开页面入口。
   - 判断核心页面是否有足够的可读说明内容。
   - 判断健康状态、任务状态等内部运维信息是否应对公开用户展示。

2. `/Users/bytedance/Documents/ai_product/agnes/web/src/pages/ImageGenerate.tsx`
   - 检查图片生成页是否有足够原创说明、使用场景、限制、版权/用户责任说明。
   - 判断上传、URL 输入、提示词输入等交互区域是否适合未来展示广告。
   - 检查是否存在可能触发受限内容或版权风险的开放生成入口。

3. `/Users/bytedance/Documents/ai_product/agnes/web/src/pages/VideoGenerate.tsx`
   - 同图片页，重点补充视频生成相关版权、用户上传内容、生成内容责任和内容安全提示的缺口。

4. `/Users/bytedance/Documents/ai_product/agnes/web/src/components/TaskHistory.tsx`
   - 检查历史记录是否可能展示用户生成内容、外链媒体、失败原因等不可控内容。
   - 判断广告是否应避免出现在历史项、下载按钮、刷新按钮、预览入口附近。

5. `/Users/bytedance/Documents/ai_product/agnes/web/src/i18n.ts`
   - 检查是否已有合规文案、多语言合规页面文案、隐私/条款/联系入口文案。

6. `/Users/bytedance/Documents/ai_product/agnes/web/index.html`
   - 检查标题、描述、语言、viewport、favicon、基础 SEO 是否满足可审核站点的最低完整度。

7. 项目根目录与 `web/public`
   - 检查是否存在 `ads.txt`、`robots.txt`、`sitemap.xml`、静态政策页入口等文件。
   - 因当前只看源码，不验证这些文件在线上是否可访问。

审计报告结构：

- 结论摘要：当前是否建议申请 AdSense。
- 严重问题：很可能导致首次审核失败或后续广告停用的问题。
- 中等风险：建议申请前修复的问题。
- 待确认项：源码无法判断、需要线上环境或运营信息确认的问题。
- 文件级证据：引用具体文件和代码位置。
- 修复优先级：按“必须先做 / 建议做 / 上线后再做”排序。

## Assumptions & Decisions

- 使用 Google AdSense/Google Publisher Policies 的通用审核口径进行判断，包括内容价值、站点完整性、透明度、隐私合规、广告展示体验、禁止/受限内容、无效点击风险等。
- 不把第三方博客中的“文章数量、字数”等经验规则当作硬性官方标准，只作为低价值内容风险判断的参考。
- 由于当前是 AI 图片/视频生成工具，不按传统博客站点强行要求文章体系，但会要求补足足够的产品说明、帮助文档、政策页面和可信度页面。
- 不检查线上 HTTPS、域名年龄、索引状态、流量质量、Google Search Console、真实 `ads.txt` 可访问性；这些会列入“待确认项”。
- 不执行代码修改，不运行构建，不启动服务，除非用户后续明确批准进入执行阶段并要求修复。

## Verification Steps

审计报告完成前将进行以下只读验证：

1. 使用 `rg` 确认是否存在隐私政策、条款、联系、关于、Cookie、AdSense、ads.txt、robots.txt、sitemap 等关键文件或文案。
2. 读取 `App.tsx`、`ImageGenerate.tsx`、`VideoGenerate.tsx`、`TaskHistory.tsx`、`i18n.ts`、`index.html`，记录证据行。
3. 对照 AdSense 首次审核和持续投放常见要求，形成风险矩阵。
4. 输出中文审计报告，包含“不符合点、原因、影响、建议修复方式、优先级”。

