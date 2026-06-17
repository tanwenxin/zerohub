import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Uploader } from '../components/Uploader';
import { SubmitFeedback } from '../components/SubmitFeedback';
import { PromptOptimizeButton } from '../components/PromptOptimizeButton';
import { PromptCompleteness } from '../components/PromptCompleteness';
import { ImageUnderstandPanel } from '../components/ImageUnderstandPanel';
import { Eyebrow, SegmentedControl } from '../components/ui';
import { useTaskQueue } from '../useTaskQueue';
import {
  DEFAULT_VIDEO_FRAME_RATE,
  DEFAULT_VIDEO_FRAMES,
  DEFAULT_VIDEO_MODE,
  DEFAULT_VIDEO_SIZE,
  clearVideoSizePreference,
  getDefaultVideoNegativePrompt,
  isDefaultVideoNegativePrompt,
  readVideoFrameRatePreference,
  readVideoFramesPreference,
  readVideoModePreference,
  readVideoNegativePromptPreference,
  readVideoSeedPreference,
  readVideoSizePreference,
  saveVideoFrameRatePreference,
  saveVideoFramesPreference,
  saveVideoModePreference,
  saveVideoNegativePromptPreference,
  saveVideoSeedPreference,
  saveVideoSizePreference,
} from '../utils/sizePreference';
import {
  clearVideoDraft,
  readVideoDraft,
  readVideoDraftFiles,
  saveVideoDraft,
  saveVideoDraftFiles,
} from '../utils/draftStorage';
import { GENERATION_SIZE_OPTIONS, isGenerationSizeValue } from '../utils/generationSizes';
import type { Task, VideoTaskType } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

const VIDEO_MODES: VideoTaskType[] = ['text2vid', 'img2vid', 'multivid', 'keyframes'];
const HISTORY_BOOT_DELAY_MS = 900;

const TaskHistory = lazy(() =>
  import('../components/TaskHistory').then((module) => ({ default: module.TaskHistory }))
);

const MODES: { value: VideoTaskType; labelKey: TranslationKey }[] = [
  { value: 'text2vid', labelKey: 'video.mode.text2vid' },
  { value: 'img2vid', labelKey: 'video.mode.img2vid' },
  { value: 'multivid', labelKey: 'video.mode.multivid' },
  { value: 'keyframes', labelKey: 'video.mode.keyframes' },
];

// 时长预设：num_frames 必须满足 8n+1 且 ≤ 441
const DURATIONS: { frames: number; labelKey: TranslationKey }[] = [
  { frames: 81, labelKey: 'video.duration.3s' },
  { frames: 121, labelKey: 'video.duration.5s' },
  { frames: 241, labelKey: 'video.duration.10s' },
  { frames: 441, labelKey: 'video.duration.18s' },
];

function readInitialVideoNegativePrompt(defaultValue: string): string {
  const draftPrompt = readVideoDraft()?.negativePrompt;
  if (typeof draftPrompt === 'string' && draftPrompt.trim() && !isDefaultVideoNegativePrompt(draftPrompt)) {
    return draftPrompt;
  }
  return readVideoNegativePromptPreference(defaultValue);
}

export function VideoGenerate() {
  const { language, t } = usePreferences();
  const defaultNegativePrompt = getDefaultVideoNegativePrompt(language);
  const [mode, setMode] = useState<VideoTaskType>(DEFAULT_VIDEO_MODE);
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState(defaultNegativePrompt);
  const [frames, setFrames] = useState(DEFAULT_VIDEO_FRAMES);
  const [frameRate, setFrameRate] = useState(DEFAULT_VIDEO_FRAME_RATE);
  const [sizeStr, setSizeStr] = useState(DEFAULT_VIDEO_SIZE);
  const [seed, setSeed] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const [submitFeedback, setSubmitFeedback] = useState<'idle' | 'accepted'>('idle');
  const [hiddenSubmitFailureId, setHiddenSubmitFailureId] = useState<string | null>(null);
  const [promptAssessKey, setPromptAssessKey] = useState(0);
  const [draftRestored, setDraftRestored] = useState(false);
  const [historyReady, setHistoryReady] = useState(false);
  const feedbackTimerRef = useRef<number | null>(null);
  const promptDirtyRef = useRef(false);
  const draftLoadedRef = useRef(false);

  const {
    submitVideo,
    canSubmit: queueHasRoom,
    maxActive,
    submitLocked,
    lastSubmitFailure,
    clearSubmitFailure,
  } = useTaskQueue();

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (draftLoadedRef.current) return;
    draftLoadedRef.current = true;
    const timerId = globalThis.setTimeout(() => {
      const draft = readVideoDraft();
      setMode(draft && VIDEO_MODES.includes(draft.mode) ? draft.mode : readVideoModePreference());
      setPrompt(draft?.prompt || '');
      setNegativePrompt(readInitialVideoNegativePrompt(defaultNegativePrompt));
      setFrames(draft?.frames ?? readVideoFramesPreference());
      setFrameRate(draft?.frameRate ?? readVideoFrameRatePreference());
      setSizeStr(isGenerationSizeValue(draft?.size || null) ? draft!.size : readVideoSizePreference());
      setSeed(draft?.seed ?? readVideoSeedPreference());
      setUrls(Array.isArray(draft?.urls) ? draft.urls : []);
      setFiles(readVideoDraftFiles());
      setDraftRestored(true);
    }, 0);
    return () => globalThis.clearTimeout(timerId);
  }, [defaultNegativePrompt]);

  useEffect(() => {
    const run = () => setHistoryReady(true);
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(run, { timeout: HISTORY_BOOT_DELAY_MS });
      return () => window.cancelIdleCallback(idleId);
    }
    const timerId = globalThis.setTimeout(run, HISTORY_BOOT_DELAY_MS);
    return () => globalThis.clearTimeout(timerId);
  }, []);

  // 草稿自动保存：文本/参数同步；上传图片单独序列化（含 base64）
  useEffect(() => {
    if (!draftRestored) return;
    saveVideoDraft({ mode, prompt, negativePrompt, frames, frameRate, size: sizeStr, seed, urls });
  }, [draftRestored, mode, prompt, negativePrompt, frames, frameRate, sizeStr, seed, urls]);

  useEffect(() => {
    if (!draftRestored) return;
    void saveVideoDraftFiles(files);
  }, [draftRestored, files]);

  useEffect(() => {
    if (!draftRestored) return;
    const id = window.setTimeout(() => {
      setNegativePrompt((prev) => (
        isDefaultVideoNegativePrompt(prev) ? defaultNegativePrompt : prev
      ));
    }, 0);
    return () => window.clearTimeout(id);
  }, [defaultNegativePrompt, draftRestored]);

  const needsImage = mode !== 'text2vid';
  const minImages = mode === 'multivid' || mode === 'keyframes' ? 2 : 1;
  const imageCount = files.length + urls.length;
  const enoughImages = !needsImage || imageCount >= minImages;
  const canSubmit = Boolean(prompt.trim()) && enoughImages;
  const videoSubmitFailure =
    lastSubmitFailure && VIDEO_MODES.includes(lastSubmitFailure.type as VideoTaskType)
      ? lastSubmitFailure
      : null;
  const failed = Boolean(
    videoSubmitFailure && hiddenSubmitFailureId !== videoSubmitFailure.localId
  );
  const accepted = submitFeedback === 'accepted' && !failed;
  const estSeconds = (frames / frameRate).toFixed(1);

  const buttonLabel = needsImage && !enoughImages
    ? t('video.needImages', { count: minImages - imageCount })
    : !queueHasRoom
      ? t('tasks.full', { max: maxActive })
      : accepted
        ? t('tasks.accepted')
        : submitLocked
          ? t('tasks.submitting')
          : t('video.generate');

  function onPromptChange(value: string) {
    promptDirtyRef.current = true;
    setPrompt(value);
  }

  function onPromptBlur() {
    if (!promptDirtyRef.current) return;
    promptDirtyRef.current = false;
    setPromptAssessKey((k) => k + 1);
  }

  useEffect(() => {
    if (!videoSubmitFailure) return;

    if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = window.setTimeout(() => {
      setHiddenSubmitFailureId(videoSubmitFailure.localId);
      clearSubmitFailure();
    }, 6000);
  }, [clearSubmitFailure, videoSubmitFailure]);

  function onSubmit() {
    if (!canSubmit || !queueHasRoom || submitLocked) return;
    clearSubmitFailure();
    setHiddenSubmitFailureId(null);
    const [w, h] = sizeStr.split('x').map((v) => Number(v));
    const wasAccepted = submitVideo(
      {
        type: mode,
        prompt,
        negativePrompt: negativePrompt.trim() || undefined,
        width: w,
        height: h,
        numFrames: frames,
        frameRate,
        seed: seed.trim() ? Number(seed) : undefined,
        files: needsImage ? files : undefined,
        imageUrls: needsImage ? urls : undefined,
      },
      {
        onTaskAccepted: () => {
          // 服务端确认创建任务后再清空输入；若被内容策略拒绝，用户仍可直接修改原 prompt。
          setSubmitFeedback('accepted');
          setPrompt('');
          setFiles([]);
          setUrls([]);
          clearVideoDraft();
          if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
          feedbackTimerRef.current = window.setTimeout(() => setSubmitFeedback('idle'), 1400);
        },
      }
    );
    if (!wasAccepted) return;
  }

  function onVideoSizeChange(nextSize: string) {
    setSizeStr(nextSize);
    saveVideoSizePreference(nextSize);
  }

  function onVideoModeChange(nextMode: VideoTaskType) {
    setMode(nextMode);
    saveVideoModePreference(nextMode);
    setFiles([]);
    setUrls([]);
  }

  function onVideoNegativePromptChange(nextPrompt: string) {
    setNegativePrompt(nextPrompt);
    saveVideoNegativePromptPreference(nextPrompt);
  }

  function onVideoFramesChange(nextFrames: number) {
    setFrames(nextFrames);
    saveVideoFramesPreference(nextFrames);
  }

  function onVideoFrameRateChange(nextFrameRate: number) {
    setFrameRate(nextFrameRate);
    saveVideoFrameRatePreference(nextFrameRate);
  }

  function onVideoSeedChange(nextSeed: string) {
    setSeed(nextSeed);
    saveVideoSeedPreference(nextSeed);
  }

  function resetVideoSizePreference() {
    clearVideoSizePreference();
    setSizeStr(DEFAULT_VIDEO_SIZE);
  }

  // 历史回填：将某条记录的提示词、参数、参考图片回填到当前输入
  function onHistoryFill(task: Task) {
    const params = task.params || {};
    if (VIDEO_MODES.includes(task.type as VideoTaskType)) onVideoModeChange(task.type as VideoTaskType);
    if (typeof params.prompt === 'string') setPrompt(params.prompt);
    if (typeof params.negativePrompt === 'string') onVideoNegativePromptChange(params.negativePrompt);
    if (Number.isFinite(Number(params.numFrames))) onVideoFramesChange(Number(params.numFrames));
    if (Number.isFinite(Number(params.frameRate))) onVideoFrameRateChange(Number(params.frameRate));
    const w = Number(params.width);
    const h = Number(params.height);
    const nextSize = `${w}x${h}`;
    if (isGenerationSizeValue(nextSize)) onVideoSizeChange(nextSize);
    onVideoSeedChange(params.seed != null ? String(params.seed) : '');
    // 参考图：仅 URL 类可回填（历史未持久化本地文件 base64）
    const fillUrls = Array.isArray(params.imageUrls) ? (params.imageUrls as string[]) : [];
    setUrls(fillUrls);
    setFiles([]);
  }

  return (
    <div className="page">
      <div className="panel">
        <Eyebrow>{t('video.eyebrow')}</Eyebrow>
        <h2>{t('page.video.title')}</h2>
        <section className="landing-intro" aria-label={t('videoLanding.title')}>
          <p className="eyebrow">{t('videoLanding.title')}</p>
          <p>{t('videoLanding.body')}</p>
          <p>{t('videoLanding.disclosure')}</p>
        </section>

        <div className="method-line" aria-label={t('video.eyebrow')}>
          <span>{t('video.method.plan')}</span>
          <span>{t('video.method.trace')}</span>
          <span>{t('video.method.review')}</span>
        </div>

        <p className="desc">{t('page.video.desc')}</p>

        <div className="field">
          <span>{t('video.mode')}</span>
          <SegmentedControl<VideoTaskType>
            ariaLabel={t('video.mode')}
            value={mode}
            onChange={onVideoModeChange}
            options={MODES.map((m) => ({ value: m.value, label: t(m.labelKey) }))}
          />
        </div>

        {needsImage && (
          <>
            <Uploader
              files={files}
              urls={urls}
              onFilesChange={setFiles}
              onUrlsChange={setUrls}
              maxItems={mode === 'img2vid' ? 1 : 8}
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
              onUseAsPrompt={setPrompt}
            />
          </>
        )}

        <label className="field">
          <span>{t('form.prompt')}</span>
          <div className="prompt-input-wrap">
            <textarea
              rows={4}
              value={prompt}
              placeholder={t('page.video.placeholder')}
              onChange={(e) => onPromptChange(e.target.value)}
              onBlur={onPromptBlur}
            />
            <PromptOptimizeButton prompt={prompt} mode={mode} onOptimized={setPrompt} />
          </div>
        </label>

        <PromptCompleteness
          prompt={prompt}
          mode={mode}
          assessKey={promptAssessKey}
          onSanitized={setPrompt}
        />

        <label className="field">
          <span>{t('video.negativePrompt')}</span>
          <textarea
            rows={2}
            value={negativePrompt}
            placeholder={t('video.negativePlaceholder')}
            onChange={(e) => onVideoNegativePromptChange(e.target.value)}
          />
        </label>

        <div className="field-row">
          <label className="field">
            <span>{t('video.duration')}</span>
            <select value={frames} onChange={(e) => onVideoFramesChange(Number(e.target.value))}>
              {DURATIONS.map((d) => (
                <option key={d.frames} value={d.frames}>
                  {t(d.labelKey)}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>{t('video.frameRate')}</span>
            <select value={frameRate} onChange={(e) => onVideoFrameRateChange(Number(e.target.value))}>
              {[8, 12, 16, 24, 30].map((r) => (
                <option key={r} value={r}>
                  {r} FPS
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="field-row">
          <label className="field">
            <span>{t('video.size')}</span>
            <div className="size-control">
              <select value={sizeStr} onChange={(e) => onVideoSizeChange(e.target.value)}>
                {GENERATION_SIZE_OPTIONS.map((sizeOption) => (
                  <option key={sizeOption.value} value={sizeOption.value}>
                    {sizeOption.label} ({t(sizeOption.descKey)})
                  </option>
                ))}
              </select>
              <button className="size-reset" type="button" onClick={resetVideoSizePreference}>
                {t('form.resetSize')}
              </button>
            </div>
          </label>
          <label className="field">
            <span>{t('video.seed')}</span>
            <input
              type="number"
              value={seed}
              placeholder={t('video.seedPlaceholder')}
              onChange={(e) => onVideoSeedChange(e.target.value)}
            />
          </label>
        </div>

        <p className="hint">{t('video.estimate', { seconds: estSeconds })}</p>

        <div className="generate-actions">
          <button
            className={`btn-primary btn-block generate-submit-btn ${accepted ? 'accepted' : ''} ${submitLocked ? 'locked' : ''}`}
            disabled={!canSubmit || !queueHasRoom || submitLocked}
            onClick={onSubmit}
          >
            {buttonLabel}
          </button>
          <SubmitFeedback
            visible={accepted || failed}
            tone={failed ? 'error' : 'success'}
            message={failed && videoSubmitFailure ? `${t('gallery.error')}${videoSubmitFailure.message}` : t('tasks.acceptedHint')}
          />
        </div>

        <section className="landing-faq">
          <h3>{t('videoLanding.faqTitle')}</h3>
          <p>{t('videoLanding.faqModes')}</p>
          <p>{t('videoLanding.faqTiming')}</p>
          <p>
            <a href="/privacy">{t('nav.privacy')}</a>
          </p>
        </section>
      </div>

      <div className="panel output">
        <h3 className="history-title">{t('task.historyTitle')}</h3>
        {historyReady ? (
          <Suspense fallback={<div className="history-deferred-placeholder" aria-hidden="true" />}>
            <TaskHistory
              category="video"
              currentPrompt={prompt}
              onPromptFill={setPrompt}
              onFill={onHistoryFill}
            />
          </Suspense>
        ) : (
          <div className="history-deferred-placeholder" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
