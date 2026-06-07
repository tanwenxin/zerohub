import { useEffect, useRef, useState } from 'react';
import { Uploader } from '../components/Uploader';
import { TaskHistory } from '../components/TaskHistory';
import { SubmitFeedback } from '../components/SubmitFeedback';
import { useTaskQueue } from '../useTaskQueue';
import { ensurePermission } from '../utils/notify';
import {
  DEFAULT_VIDEO_SIZE,
  clearVideoSizePreference,
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
import type { Task, VideoTaskType } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

const VIDEO_MODES: VideoTaskType[] = ['text2vid', 'img2vid', 'multivid', 'keyframes'];

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

const SIZES = ['1152x768', '768x1152', '1024x1024', '1280x720', '720x1280'];

export function VideoGenerate() {
  const { t } = usePreferences();
  const [mode, setMode] = useState<VideoTaskType>(() => {
    const d = readVideoDraft();
    return d && VIDEO_MODES.includes(d.mode) ? d.mode : readVideoModePreference();
  });
  const [prompt, setPrompt] = useState(() => readVideoDraft()?.prompt ?? '');
  const [negativePrompt, setNegativePrompt] = useState(
    () => readVideoDraft()?.negativePrompt ?? readVideoNegativePromptPreference()
  );
  const [frames, setFrames] = useState(() => readVideoDraft()?.frames ?? readVideoFramesPreference());
  const [frameRate, setFrameRate] = useState(
    () => readVideoDraft()?.frameRate ?? readVideoFrameRatePreference()
  );
  const [sizeStr, setSizeStr] = useState(() => readVideoDraft()?.size || readVideoSizePreference());
  const [seed, setSeed] = useState(() => readVideoDraft()?.seed ?? readVideoSeedPreference());
  const [files, setFiles] = useState<File[]>(() => readVideoDraftFiles());
  const [urls, setUrls] = useState<string[]>(() => readVideoDraft()?.urls ?? []);
  const [submitFeedback, setSubmitFeedback] = useState<'idle' | 'accepted'>('idle');
  const [historyKey, setHistoryKey] = useState(0);
  const feedbackTimerRef = useRef<number | null>(null);

  const { submitVideo, canSubmit: queueHasRoom, maxActive, submitLocked } = useTaskQueue();

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  // 草稿自动保存：文本/参数同步；上传图片单独序列化（含 base64）
  useEffect(() => {
    saveVideoDraft({ mode, prompt, negativePrompt, frames, frameRate, size: sizeStr, seed, urls });
  }, [mode, prompt, negativePrompt, frames, frameRate, sizeStr, seed, urls]);

  useEffect(() => {
    void saveVideoDraftFiles(files);
  }, [files]);

  const needsImage = mode !== 'text2vid';
  const minImages = mode === 'multivid' || mode === 'keyframes' ? 2 : 1;
  const imageCount = files.length + urls.length;
  const enoughImages = !needsImage || imageCount >= minImages;
  const canSubmit = Boolean(prompt.trim()) && enoughImages;
  const accepted = submitFeedback === 'accepted';
  const estSeconds = (frames / frameRate).toFixed(1);

  const uploadHintKey: TranslationKey =
    mode === 'img2vid'
      ? 'video.uploadHintImg'
      : mode === 'multivid'
        ? 'video.uploadHintMulti'
        : 'video.uploadHintKey';

  const buttonLabel = needsImage && !enoughImages
    ? t('video.needImages', { count: minImages - imageCount })
    : !queueHasRoom
      ? t('tasks.full', { max: maxActive })
      : accepted
        ? t('tasks.accepted')
        : submitLocked
          ? t('tasks.submitting')
          : t('video.generate');

  function onSubmit() {
    if (!canSubmit || !queueHasRoom || submitLocked) return;
    const [w, h] = sizeStr.split('x').map((v) => Number(v));
    const wasAccepted = submitVideo({
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
    });
    if (!wasAccepted) return;
    ensurePermission();
    setSubmitFeedback('accepted');
    // 提交成功后清空临时输入（提示词与上传/参考图）与草稿，参数设置仍按偏好保留
    setPrompt('');
    setFiles([]);
    setUrls([]);
    clearVideoDraft();
    window.setTimeout(() => setHistoryKey((k) => k + 1), 300);
    if (feedbackTimerRef.current) window.clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = window.setTimeout(() => setSubmitFeedback('idle'), 1400);
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
    if (Number.isFinite(w) && Number.isFinite(h) && w > 0 && h > 0) onVideoSizeChange(`${w}x${h}`);
    onVideoSeedChange(params.seed != null ? String(params.seed) : '');
    // 参考图：仅 URL 类可回填（历史未持久化本地文件 base64）
    const fillUrls = Array.isArray(params.imageUrls) ? (params.imageUrls as string[]) : [];
    setUrls(fillUrls);
    setFiles([]);
  }

  return (
    <div className="page">
      <div className="panel">
        <h2>{t('page.video.title')}</h2>
        <p className="desc">{t('page.video.desc')}</p>

        <label className="field">
          <span>{t('video.mode')}</span>
          <select value={mode} onChange={(e) => onVideoModeChange(e.target.value as VideoTaskType)}>
            {MODES.map((m) => (
              <option key={m.value} value={m.value}>
                {t(m.labelKey)}
              </option>
            ))}
          </select>
        </label>

        {needsImage && (
          <>
            <p className="hint">{t(uploadHintKey)}</p>
            <Uploader
              files={files}
              urls={urls}
              onFilesChange={setFiles}
              onUrlsChange={setUrls}
              maxItems={mode === 'img2vid' ? 1 : 8}
            />
          </>
        )}

        <label className="field">
          <span>{t('form.prompt')}</span>
          <textarea
            rows={4}
            value={prompt}
            placeholder={t('page.video.placeholder')}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>

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
                {SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
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
          category="video"
          refreshSignal={historyKey}
          currentPrompt={prompt}
          onPromptFill={setPrompt}
          onFill={onHistoryFill}
        />
      </div>
    </div>
  );
}
