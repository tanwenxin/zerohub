import { useEffect, useRef, useState } from 'react';
import { PromptForm } from '../components/PromptForm';
import { Uploader } from '../components/Uploader';
import { SubmitFeedback } from '../components/SubmitFeedback';
import { TaskHistory } from '../components/TaskHistory';
import { useTaskQueue } from '../useTaskQueue';
import { ensurePermission } from '../utils/notify';
import {
  DEFAULT_IMAGE_SIZE,
  clearImageSizePreference,
  readImageSizePreference,
  saveImageSizePreference,
} from '../utils/sizePreference';
import {
  clearImageDraft,
  readImageDraft,
  readImageDraftFiles,
  saveImageDraft,
  saveImageDraftFiles,
} from '../utils/draftStorage';
import type { ImageTaskType, ResponseFormat, Task } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

const IMAGE_MODES: ImageTaskType[] = ['text2img', 'img2img', 'multi'];

// 统一「图片生成」模块：文生图 / 图生图 / 多图合成 三种模式可切换
const MODES: { value: ImageTaskType; labelKey: TranslationKey }[] = [
  { value: 'text2img', labelKey: 'nav.text2img' },
  { value: 'img2img', labelKey: 'nav.img2img' },
  { value: 'multi', labelKey: 'nav.multi' },
];

export function ImageGenerate() {
  const { t } = usePreferences();
  const [mode, setMode] = useState<ImageTaskType>(() => {
    const d = readImageDraft();
    return d && IMAGE_MODES.includes(d.mode) ? d.mode : 'text2img';
  });
  const [prompt, setPrompt] = useState(() => readImageDraft()?.prompt ?? '');
  const [size, setSize] = useState(() => readImageDraft()?.size || readImageSizePreference());
  const [responseFormat, setResponseFormat] = useState<ResponseFormat>(
    () => readImageDraft()?.responseFormat ?? 'url'
  );
  const [sizeValid, setSizeValid] = useState(true);
  const [files, setFiles] = useState<File[]>(() => readImageDraftFiles());
  const [urls, setUrls] = useState<string[]>(() => readImageDraft()?.urls ?? []);
  const [submitFeedback, setSubmitFeedback] = useState<'idle' | 'accepted'>('idle');
  const [historyKey, setHistoryKey] = useState(0); // 提交后触发历史刷新
  const [formKey, setFormKey] = useState(0); // 回填/清空时强制 PromptForm 重新初始化
  const feedbackTimerRef = useRef<number | null>(null);

  const { submit, canSubmit: queueHasRoom, maxActive, submitLocked } = useTaskQueue();

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  // 草稿自动保存：文本/参数同步；上传图片单独序列化（含 base64）
  useEffect(() => {
    saveImageDraft({ mode, prompt, size, responseFormat, urls });
  }, [mode, prompt, size, responseFormat, urls]);

  useEffect(() => {
    void saveImageDraftFiles(files);
  }, [files]);

  const needsImage = mode !== 'text2img';
  const minImages = mode === 'multi' ? 2 : 1;
  const imageCount = files.length + urls.length;
  const enoughImages = !needsImage || imageCount >= minImages;
  const canSubmit = Boolean(prompt.trim()) && enoughImages && sizeValid;
  const accepted = submitFeedback === 'accepted';

  const descKey: TranslationKey =
    mode === 'text2img' ? 'page.text2img.desc' : mode === 'img2img' ? 'page.img2img.desc' : 'page.multi.desc';
  const placeholderKey: TranslationKey =
    mode === 'text2img'
      ? 'page.text2img.placeholder'
      : mode === 'img2img'
        ? 'page.img2img.placeholder'
        : 'page.multi.placeholder';

  const buttonLabel = needsImage && !enoughImages
    ? t('task.needImages', { count: minImages - imageCount })
    : !queueHasRoom
      ? t('tasks.full', { max: maxActive })
      : accepted
        ? t('tasks.accepted')
        : submitLocked
          ? t('tasks.submitting')
          : mode === 'multi'
            ? t('task.compose')
            : t('task.generate');

  function onSubmit() {
    if (!canSubmit || !queueHasRoom || submitLocked) return;
    const wasAccepted = submit({
      type: mode,
      prompt,
      size,
      responseFormat,
      files: needsImage ? files : undefined,
      imageUrls: needsImage ? urls : undefined,
    });
    if (!wasAccepted) return;
    ensurePermission();
    setSubmitFeedback('accepted');
    // 提交成功后清空当前输入与草稿，为下一次生成准备干净环境
    setPrompt('');
    setUrls([]);
    setFiles([]);
    clearImageDraft();
    setFormKey((k) => k + 1);
    // 触发历史列表刷新（任务已落库）
    window.setTimeout(() => setHistoryKey((k) => k + 1), 300);
    if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = window.setTimeout(() => setSubmitFeedback('idle'), 1400);
  }

  function onSizeChange(nextSize: string) {
    setSize(nextSize);
    saveImageSizePreference(nextSize);
  }

  function onSizePreferenceClear() {
    clearImageSizePreference();
    setSize(DEFAULT_IMAGE_SIZE);
  }

  // 历史回填：将某条记录的提示词、参数、参考图片回填到当前输入
  function onHistoryFill(task: Task) {
    const params = task.params || {};
    const nextMode = IMAGE_MODES.includes(task.type as ImageTaskType)
      ? (task.type as ImageTaskType)
      : mode;
    setMode(nextMode);
    if (typeof params.prompt === 'string') setPrompt(params.prompt);
    const nextSize = (params.size as string) || (task.result?.size as string) || '';
    if (/^\d+x\d+$/.test(nextSize)) setSize(nextSize);
    if (params.responseFormat === 'url' || params.responseFormat === 'b64_json') {
      setResponseFormat(params.responseFormat);
    }
    // 参考图：仅 URL 类可回填（历史未持久化本地文件 base64）
    const fillUrls = Array.isArray(params.imageUrls) ? (params.imageUrls as string[]) : [];
    setUrls(fillUrls);
    setFiles([]);
    setFormKey((k) => k + 1);
  }

  return (
    <div className="page">
      <div className="panel">
        <h2>{t('page.image.title')}</h2>

        <label className="field">
          <span>{t('image.mode')}</span>
          <select value={mode} onChange={(e) => setMode(e.target.value as ImageTaskType)}>
            {MODES.map((m) => (
              <option key={m.value} value={m.value}>
                {t(m.labelKey)}
              </option>
            ))}
          </select>
        </label>

        <p className="desc">{t(descKey)}</p>

        {needsImage && (
          <Uploader
            files={files}
            urls={urls}
            onFilesChange={setFiles}
            onUrlsChange={setUrls}
            maxItems={mode === 'img2img' ? 1 : 8}
          />
        )}

        <PromptForm
          key={formKey}
          prompt={prompt}
          size={size}
          responseFormat={responseFormat}
          placeholder={t(placeholderKey)}
          defaultSize={DEFAULT_IMAGE_SIZE}
          onPromptChange={setPrompt}
          onSizeChange={onSizeChange}
          onResponseFormatChange={setResponseFormat}
          onSizePreferenceClear={onSizePreferenceClear}
          onSizeValidChange={setSizeValid}
        />

        <button
          className={`btn-primary btn-block generate-submit-btn ${accepted ? 'accepted' : ''} ${submitLocked ? 'locked' : ''}`}
          disabled={!canSubmit || !queueHasRoom || submitLocked}
          onClick={onSubmit}
        >
          {buttonLabel}
        </button>
        <SubmitFeedback visible={accepted} message={t('tasks.acceptedHint')} />
      </div>

      <div className="panel output">
        <h3 className="history-title">{t('task.historyTitle')}</h3>
        <TaskHistory
          category="image"
          refreshSignal={historyKey}
          currentPrompt={prompt}
          onPromptFill={setPrompt}
          onFill={onHistoryFill}
        />
      </div>
    </div>
  );
}
