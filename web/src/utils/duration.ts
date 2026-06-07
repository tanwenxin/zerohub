// 将毫秒时长格式化为「时分秒」展示，精度到秒级。
// 规则：
// - 不足 1 分钟：仅显示秒，如 `45s`
// - 1 分钟到 1 小时：显示分和秒，如 `3m 20s`
// - 超过 1 小时：显示时、分、秒，如 `1h 02m 05s`
// 无效或缺失时长返回空字符串。
export function formatDuration(ms: number | null | undefined): string {
  if (ms == null || !Number.isFinite(ms) || ms < 0) return '';
  const totalSeconds = Math.round(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    return `${hours}h ${mm}m ${ss}s`;
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}
