import { useEffect, useRef, useState } from 'react';
import { PromptForm } from '../components/PromptForm';
import { Uploader } from '../components/Uploader';
import { PromptOptimizeButton } from '../components/PromptOptimizeButton';
import { PromptCompleteness } from '../components/PromptCompleteness';
import { ImageUnderstandPanel } from '../components/ImageUnderstandPanel';
import { SubmitFeedback } from '../components/SubmitFeedback';
import { TaskHistory } from '../components/TaskHistory';
import { Eyebrow, SegmentedControl } from '../components/ui';
import { useTaskQueue } from '../useTaskQueue';
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
import { isGenerationSizeValue } from '../utils/generationSizes';
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
  const [size, setSize] = useState(() => {
    const draftSize = readImageDraft()?.size || null;
    return isGenerationSizeValue(draftSize) ? draftSize : readImageSizePreference();
  });
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

  // 模式切换：切到「图生图」（仅允许 1 张参考图）时，保留第一张、清空其余，
  // 避免把多图模式下上传的多张图片继续带过去。
  function onModeChange(nextMode: ImageTaskType) {
    if (nextMode === 'img2img') {
      if (files.length > 0) {
        setFiles(files.slice(0, 1));
        setUrls([]);
      } else if (urls.length > 0) {
        setUrls(urls.slice(0, 1));
      }
    }
    setMode(nextMode);
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
    if (isGenerationSizeValue(nextSize)) setSize(nextSize);
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
        <Eyebrow>{t('image.eyebrow')}</Eyebrow>
        <h2>{t('page.image.title')}</h2>
        <section className="landing-intro" aria-label={t('imageLanding.title')}>
          <p className="eyebrow">{t('imageLanding.title')}</p>
          <p>{t('imageLanding.body')}</p>
        </section>

        <div className="method-line" aria-label={t('image.eyebrow')}>
          <span>{t('image.method.calibrate')}</span>
          <span>{t('image.method.reveal')}</span>
          <span>{t('image.method.recall')}</span>
        </div>

        <div className="field">
          <span>{t('image.mode')}</span>
          <SegmentedControl<ImageTaskType>
            ariaLabel={t('image.mode')}
            value={mode}
            onChange={onModeChange}
            options={MODES.map((m) => ({ value: m.value, label: t(m.labelKey) }))}
          />
        </div>

        <p className="desc">{t(descKey)}</p>

        {needsImage && (
          <>
            <Uploader
              files={files}
              urls={urls}
              onFilesChange={setFiles}
              onUrlsChange={setUrls}
              maxItems={mode === 'img2img' ? 1 : 8}
              variant="slots"
              note={
                <span className={`badge ${enoughImages ? 'ok' : 'warn'}`}>
                  {t('asset.noteRequired', { count: minImages })}
                </span>
              }
            />
            <ImageUnderstandPanel
              files={files}
              urls={urls}
              mode={mode}
              prompt={prompt}
              onUseAsPrompt={(text) => {
                setPrompt(text);
                setFormKey((k) => k + 1);
              }}
            />
          </>
        )}

        <PromptForm
          key={formKey}
          prompt={prompt}
          size={size}
          responseFormat={responseFormat}
          placeholder={t(placeholderKey)}
          defaultSize={DEFAULT_IMAGE_SIZE}
          promptAction={(
            <PromptOptimizeButton
              prompt={prompt}
              mode={mode}
              onOptimized={(text) => {
                setPrompt(text);
                setFormKey((k) => k + 1);
              }}
            />
          )}
          onPromptChange={setPrompt}
          onSizeChange={onSizeChange}
          onResponseFormatChange={setResponseFormat}
          onSizePreferenceClear={onSizePreferenceClear}
          onSizeValidChange={setSizeValid}
        />

        <PromptCompleteness prompt={prompt} mode={mode} />

        <button
          className={`btn-primary btn-block generate-submit-btn ${accepted ? 'accepted' : ''} ${submitLocked ? 'locked' : ''}`}
          disabled={!canSubmit || !queueHasRoom || submitLocked}
          onClick={onSubmit}
        >
          {buttonLabel}
        </button>
        <SubmitFeedback visible={accepted} message={t('tasks.acceptedHint')} />

        <section className="landing-faq">
          <h3>{t('imageLanding.faqTitle')}</h3>
          <p>{t('imageLanding.faqModes')}</p>
          <p>{t('imageLanding.faqRights')}</p>
          <p>
            <a href="/privacy">{t('imageLanding.faqPrivacy')}</a>
          </p>
        </section>
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
