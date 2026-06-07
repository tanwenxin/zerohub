import { useState } from 'react';

interface BlobDownloadButtonProps {
  href: string;
  fileName: string;
  label: string;
  loadingLabel: string;
  className?: string;
}

export function BlobDownloadButton({
  href,
  fileName,
  label,
  loadingLabel,
  className = 'btn-primary',
}: BlobDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  async function onDownload() {
    setLoading(true);
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
    } catch (e) {
      alert((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className={`${className} download-btn ${loading ? 'is-loading' : ''}`}
      type="button"
      onClick={onDownload}
      disabled={loading}
    >
      <span className="download-spinner" aria-hidden="true" />
      {loading ? loadingLabel : label}
    </button>
  );
}
