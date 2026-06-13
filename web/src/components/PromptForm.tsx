import type { ReactNode } from 'react';
import type { ResponseFormat } from '../api/client';
import { usePreferences } from '../usePreferences';
import { GENERATION_SIZE_OPTIONS, isGenerationSizeValue } from '../utils/generationSizes';

interface Props {
  prompt: string;
  size: string;
  responseFormat: ResponseFormat;
  placeholder?: string;
  disabled?: boolean;
  defaultSize?: string;
  promptAction?: ReactNode;
  onPromptChange: (v: string) => void;
  onPromptBlur?: () => void;
  onSizeChange: (v: string) => void;
  onResponseFormatChange: (v: ResponseFormat) => void;
  onSizePreferenceClear?: () => void;
  onSizeValidChange?: (valid: boolean) => void;
}

function optionLabel(label: string, desc: string | undefined): string {
  return desc ? `${label} (${desc})` : label;
}

// 通用参数表单：prompt + size 预设 + 输出格式
export function PromptForm({
  prompt,
  size,
  responseFormat,
  placeholder,
  disabled,
  defaultSize = '1024x1024',
  promptAction,
  onPromptChange,
  onPromptBlur,
  onSizeChange,
  onResponseFormatChange,
  onSizePreferenceClear,
  onSizeValidChange,
}: Props) {
  const { t } = usePreferences();
  const selectedSize = isGenerationSizeValue(size) ? size : defaultSize;

  function onModeChange(v: string) {
    onSizeChange(v);
    onSizeValidChange?.(true);
  }

  function resetSizePreference() {
    onSizeChange(defaultSize);
    onSizeValidChange?.(true);
    onSizePreferenceClear?.();
  }

  return (
    <>
      <label className="field">
        <span>{t('form.prompt')}</span>
        <div className="prompt-input-wrap">
          <textarea
            name="prompt"
            rows={4}
            value={prompt}
            disabled={disabled}
            placeholder={placeholder || t('form.promptPlaceholder')}
            onChange={(e) => onPromptChange(e.target.value)}
            onBlur={onPromptBlur}
          />
          {promptAction}
        </div>
      </label>

      <div className="field-row">
        <label className="field">
          <span>{t('form.size')}</span>
          <div className="size-control">
            <select name="size" value={selectedSize} disabled={disabled} onChange={(e) => onModeChange(e.target.value)}>
              {GENERATION_SIZE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {optionLabel(o.label, t(o.descKey))}
                </option>
              ))}
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
    </>
  );
}
