import { useEffect, useState } from 'react';
import type { ResponseFormat } from '../api/client';
import { usePreferences } from '../usePreferences';
import type { TranslationKey } from '../i18n';

// 尺寸预设，按行业用途分组
const SIZE_GROUPS: {
  labelKey: TranslationKey;
  options: { value: string; label: string; descKey?: TranslationKey }[];
}[] = [
  {
    labelKey: 'size.group.general',
    options: [
      { value: '1024x1024', label: '1024×1024', descKey: 'size.square' },
      { value: '1024x768', label: '1024×768 (4:3)' },
      { value: '768x1024', label: '768×1024 (3:4)' },
      { value: '512x512', label: '512×512', descKey: 'size.small' },
    ],
  },
  {
    labelKey: 'size.group.social',
    options: [
      { value: '1080x1080', label: '1080×1080', descKey: 'size.ins' },
      { value: '1200x630', label: '1200×630', descKey: 'size.fb' },
      { value: '1080x1920', label: '1080×1920', descKey: 'size.story' },
    ],
  },
  {
    labelKey: 'size.group.wallpaper',
    options: [
      { value: '1920x1080', label: '1920×1080 (1080P)' },
      { value: '2560x1440', label: '2560×1440 (2K)' },
    ],
  },
  {
    labelKey: 'size.group.print',
    options: [
      { value: '2480x3508', label: 'A4 (2480×3508)' },
      { value: '3508x4961', label: 'A3 (3508×4961)' },
    ],
  },
];

const CUSTOM = '__custom__';
const ALL_PRESETS = SIZE_GROUPS.flatMap((g) => g.options.map((o) => o.value));

// 自定义尺寸的合理范围（像素）
const MIN_SIDE = 256;
const MAX_SIDE = 4096;

interface Props {
  prompt: string;
  size: string;
  responseFormat: ResponseFormat;
  placeholder?: string;
  disabled?: boolean;
  defaultSize?: string;
  onPromptChange: (v: string) => void;
  onSizeChange: (v: string) => void;
  onResponseFormatChange: (v: ResponseFormat) => void;
  onSizePreferenceClear?: () => void;
  // 自定义尺寸校验状态上报，供父组件禁用提交
  onSizeValidChange?: (valid: boolean) => void;
}

function optionLabel(label: string, desc: string | undefined): string {
  return desc ? `${label} (${desc})` : label;
}

function validateSide(
  n: number,
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
): string | null {
  if (!Number.isFinite(n)) return t('form.errNumber');
  if (!Number.isInteger(n)) return t('form.errInteger');
  if (n < MIN_SIDE) return t('form.errMin', { min: MIN_SIDE });
  if (n > MAX_SIDE) return t('form.errMax', { max: MAX_SIDE });
  return null;
}

// 通用参数表单：prompt + size（预设/自定义）+ 输出格式
export function PromptForm({
  prompt,
  size,
  responseFormat,
  placeholder,
  disabled,
  defaultSize = '1024x1024',
  onPromptChange,
  onSizeChange,
  onResponseFormatChange,
  onSizePreferenceClear,
  onSizeValidChange,
}: Props) {
  const { t } = usePreferences();
  // 当前 size 是否落在预设里；否则视为自定义
  const initialCustom = !ALL_PRESETS.includes(size);
  const [mode, setMode] = useState<string>(initialCustom ? CUSTOM : size);
  const [w, setW] = useState<string>(initialCustom ? size.split('x')[0] || '' : '1024');
  const [h, setH] = useState<string>(initialCustom ? size.split('x')[1] || '' : '1024');

  const isCustom = mode === CUSTOM;
  const wErr = isCustom ? validateSide(Number(w), t) : null;
  const hErr = isCustom ? validateSide(Number(h), t) : null;
  const customValid = isCustom ? !wErr && !hErr : true;

  // 同步自定义尺寸到父组件
  useEffect(() => {
    if (isCustom && customValid) {
      onSizeChange(`${Number(w)}x${Number(h)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCustom, customValid, w, h]);

  useEffect(() => {
    onSizeValidChange?.(customValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customValid]);

  function onModeChange(v: string) {
    setMode(v);
    if (v !== CUSTOM) {
      onSizeChange(v);
      onSizeValidChange?.(true);
    } else {
      onSizeValidChange?.(!validateSide(Number(w), t) && !validateSide(Number(h), t));
    }
  }

  function resetSizePreference() {
    const [nextW, nextH] = defaultSize.split('x');
    const nextCustom = !ALL_PRESETS.includes(defaultSize);
    setMode(nextCustom ? CUSTOM : defaultSize);
    setW(nextW || '1024');
    setH(nextH || '1024');
    onSizeChange(defaultSize);
    onSizeValidChange?.(true);
    onSizePreferenceClear?.();
  }

  return (
    <>
      <label className="field">
        <span>{t('form.prompt')}</span>
        <textarea
          name="prompt"
          rows={4}
          value={prompt}
          disabled={disabled}
          placeholder={placeholder || t('form.promptPlaceholder')}
          onChange={(e) => onPromptChange(e.target.value)}
        />
      </label>

      <div className="field-row">
        <label className="field">
          <span>{t('form.size')}</span>
          <div className="size-control">
            <select name="size" value={mode} disabled={disabled} onChange={(e) => onModeChange(e.target.value)}>
              {SIZE_GROUPS.map((g) => (
                <optgroup key={g.labelKey} label={t(g.labelKey)}>
                  {g.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {optionLabel(o.label, o.descKey ? t(o.descKey) : undefined)}
                    </option>
                  ))}
                </optgroup>
              ))}
              <option value={CUSTOM}>{t('form.customSize')}</option>
            </select>
            <button className="size-reset" type="button" disabled={disabled} onClick={resetSizePreference}>
              {t('form.resetSize')}
            </button>
          </div>
        </label>

        <label className="field">
          <span>{t('form.format')}</span>
          <select
            name="responseFormat"
            value={responseFormat}
            disabled={disabled}
            onChange={(e) => onResponseFormatChange(e.target.value as ResponseFormat)}
          >
            <option value="url">URL</option>
            <option value="b64_json">Base64</option>
          </select>
        </label>
      </div>

      {isCustom && (
        <div className="custom-size">
          <div className="field-row">
            <label className="field">
              <span>{t('form.width')}</span>
              <input
                type="number"
                name="customWidth"
                value={w}
                min={MIN_SIDE}
                max={MAX_SIDE}
                disabled={disabled}
                onChange={(e) => setW(e.target.value)}
                className={wErr ? 'invalid' : ''}
              />
            </label>
            <span className="size-x">×</span>
            <label className="field">
              <span>{t('form.height')}</span>
              <input
                type="number"
                name="customHeight"
                value={h}
                min={MIN_SIDE}
                max={MAX_SIDE}
                disabled={disabled}
                onChange={(e) => setH(e.target.value)}
                className={hErr ? 'invalid' : ''}
              />
            </label>
          </div>
          {(wErr || hErr) && (
            <p className="size-error">
              {wErr && t('form.widthError', { error: wErr })}{' '}
              {hErr && t('form.heightError', { error: hErr })}
            </p>
          )}
          <p className="hint">{t('form.range', { min: MIN_SIDE, max: MAX_SIDE })}</p>
        </div>
      )}
    </>
  );
}
