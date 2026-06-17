export function aspectRatioFromSize(size: string, fallback = '4 / 3'): string {
  const match = size.match(/^(\d{2,5})x(\d{2,5})$/);
  if (!match) return fallback;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return fallback;
  return `${width} / ${height}`;
}
