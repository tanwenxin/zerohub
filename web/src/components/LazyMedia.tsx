import { memo, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';

const DEFAULT_ROOT_MARGIN = '80px';
const requestedCache = new Set<string>();
const loadedCache = new Set<string>();

function useLazyMedia<T extends HTMLElement>(src: string, rootMargin = DEFAULT_ROOT_MARGIN) {
  const ref = useRef<T | null>(null);
  const [shouldLoad, setShouldLoad] = useState(() => requestedCache.has(src) || loadedCache.has(src));

  useEffect(() => {
    if (shouldLoad) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      const timerId = globalThis.setTimeout(() => {
        requestedCache.add(src);
        setShouldLoad(true);
      }, 0);
      return () => globalThis.clearTimeout(timerId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        requestedCache.add(src);
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad, src]);

  return { ref, shouldLoad };
}

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(' ');
}

interface LazyImageSource {
  type: string;
  srcSet: string;
}

interface LazyImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  sources?: LazyImageSource[];
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  rootMargin?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
  placeholder?: ReactNode;
  onError?: () => void;
}

export const LazyImage = memo(function LazyImage({
  src,
  alt,
  aspectRatio,
  className,
  contentClassName,
  imageClassName,
  sources = [],
  srcSet,
  sizes,
  width,
  height,
  rootMargin,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  placeholder,
  onError,
}: LazyImageProps) {
  const { ref, shouldLoad } = useLazyMedia<HTMLSpanElement>(src, rootMargin);
  const [loaded, setLoaded] = useState(() => loadedCache.has(src));
  const style = useMemo<CSSProperties | undefined>(() => (
    aspectRatio ? { aspectRatio } : undefined
  ), [aspectRatio]);

  function markLoaded() {
    requestedCache.add(src);
    loadedCache.add(src);
    setLoaded(true);
  }

  const image = (
    <img
      className={classNames('lazy-media-content', contentClassName, imageClassName, loaded && 'is-loaded')}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onLoad={markLoaded}
      onError={() => {
        markLoaded();
        onError?.();
      }}
    />
  );

  return (
    <span
      ref={ref}
      style={style}
      className={classNames('lazy-media', 'lazy-media-image', className, shouldLoad && 'is-requested', loaded && 'is-loaded')}
    >
      {shouldLoad ? (
        sources.length ? (
          <picture className="lazy-media-picture">
            {sources.map((source) => (
              <source key={`${source.type}:${source.srcSet}`} type={source.type} srcSet={source.srcSet} sizes={sizes} />
            ))}
            {image}
          </picture>
        ) : image
      ) : placeholder}
    </span>
  );
});

interface LazyVideoProps {
  src: string;
  label: string;
  className?: string;
  contentClassName?: string;
  aspectRatio?: string;
  rootMargin?: string;
  controls?: boolean;
  autoPlay?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

export const LazyVideo = memo(function LazyVideo({
  src,
  label,
  className,
  contentClassName,
  aspectRatio = '16 / 9',
  rootMargin,
  controls = true,
  autoPlay = false,
  preload = 'metadata',
}: LazyVideoProps) {
  const { ref, shouldLoad } = useLazyMedia<HTMLDivElement>(src, rootMargin);
  const [loaded, setLoaded] = useState(() => loadedCache.has(src));
  const style = useMemo<CSSProperties>(() => ({ aspectRatio }), [aspectRatio]);

  function markLoaded() {
    requestedCache.add(src);
    loadedCache.add(src);
    setLoaded(true);
  }

  return (
    <div
      ref={ref}
      style={style}
      className={classNames('lazy-media', 'lazy-media-video', className, shouldLoad && 'is-requested', loaded && 'is-loaded')}
    >
      {shouldLoad ? (
        <video
          className={classNames('lazy-media-content', contentClassName, loaded && 'is-loaded')}
          src={src}
          controls={controls}
          autoPlay={autoPlay}
          playsInline
          preload={preload}
          onLoadedMetadata={markLoaded}
          onCanPlay={markLoaded}
          onError={markLoaded}
        >
          {label}
        </video>
      ) : null}
    </div>
  );
});
