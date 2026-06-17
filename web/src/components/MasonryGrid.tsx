import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

interface MasonryGridProps {
  children: ReactNode;
  /** 列间距与行间距（px） */
  gap?: number;
  /** 单列最小宽度（px），用于按容器宽度推导列数 */
  minColumnWidth?: number;
  /** 最大列数，控制宽屏下的列上限 */
  maxColumns?: number;
  className?: string;
}

type Offset = { x: number; y: number };

/**
 * 自适应瀑布流（砖石堆砌墙）布局：
 * - 不依赖 CSS Grid/column，按每个 item 的真实高度把它放入当前最矮的列，形成错落堆砌效果；
 * - 通过容器宽度推导列数，配合 ResizeObserver + window resize 在各尺寸下稳定自适应；
 * - 用 rAF 合并重排请求，避免频繁布局计算造成卡顿；
 * - item 用 transform 定位，新增/重排时平滑过渡，不破坏整体布局。
 */
export function MasonryGrid({
  children,
  gap = 12,
  minColumnWidth = 220,
  maxColumns = 2,
  className = '',
}: MasonryGridProps) {
  const items = Children.toArray(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const frameRef = useRef<number | null>(null);

  const [offsets, setOffsets] = useState<Offset[]>([]);
  const [columnWidth, setColumnWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [ready, setReady] = useState(false);

  // 重排序签名：item 数量或顺序变化时强制重新测量定位
  const signature = items
    .map((child, index) => (isValidElement(child) && child.key != null ? child.key : index))
    .join('|');

  // 核心测量：设定每个 item 的列宽（高度依赖宽度，必须先定宽再测高），
  // 再把它放入当前最矮的列，记录 x/y 偏移与容器总高度。
  // 首次渲染时在容器尺寸固定后再测量，避免从 "预占位" 切换到 "真实布局"
  // 时产生肉眼可见的跳动。
  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.clientWidth;
    if (width <= 0) return;

    const columns = Math.max(
      1,
      Math.min(maxColumns, Math.floor((width + gap) / (minColumnWidth + gap)))
    );
    const colWidth = (width - gap * (columns - 1)) / columns;
    const columnHeights = new Array<number>(columns).fill(0);
    const nextOffsets: Offset[] = [];

    for (let i = 0; i < itemRefs.current.length; i += 1) {
      const el = itemRefs.current[i];
      if (!el) {
        nextOffsets[i] = { x: 0, y: 0 };
        continue;
      }
      // 先固定列宽，再读取真实高度，保证测量准确
      el.style.width = `${colWidth}px`;
      let target = 0;
      for (let c = 1; c < columns; c += 1) {
        if (columnHeights[c] < columnHeights[target] - 0.5) target = c;
      }
      nextOffsets[i] = {
        x: Math.round(target * (colWidth + gap)),
        y: Math.round(columnHeights[target]),
      };
      columnHeights[target] += el.getBoundingClientRect().height + gap;
    }

    setColumnWidth(colWidth);
    setOffsets(nextOffsets);
    setHeight(Math.max(0, Math.max(0, ...columnHeights) - gap));
    setReady(true);
  }, [gap, maxColumns, minColumnWidth]);

  // 用 rAF 合并多次重排请求（容器/子项尺寸连续变化、窗口拖拽缩放等）
  const schedule = useCallback(() => {
    if (frameRef.current != null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      measure();
    });
  }, [measure]);

  // 数量/顺序变化后在绘制前同步重排，避免闪烁与错位
  useLayoutEffect(() => {
    measure();
  }, [signature, measure]);

  // 监听容器宽度与每个 item 高度变化（图片/视频加载、提示词展开、状态更新等）
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => schedule());
    observer.observe(container);
    for (const el of itemRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [signature, schedule]);

  // 窗口尺寸变化兜底重排（覆盖个别不触发容器 RO 的场景）
  useEffect(() => {
    window.addEventListener('resize', schedule);
    return () => window.removeEventListener('resize', schedule);
  }, [schedule]);

  useEffect(
    () => () => {
      if (frameRef.current != null) window.cancelAnimationFrame(frameRef.current);
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={`masonry-grid ${ready ? 'is-ready' : ''} ${className}`.trim()}
      style={{
        position: 'relative',
        height: ready ? height : 0,
      }}
    >
      {items.map((child, index) => {
        const offset = offsets[index];
        const style: CSSProperties =
          ready && offset
            ? {
                position: 'absolute',
                top: 0,
                left: 0,
                width: columnWidth,
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
              }
            : {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: 0,
                visibility: 'hidden',
                pointerEvents: 'none',
              };
        return (
          <div
            key={isValidElement(child) && child.key != null ? child.key : index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="masonry-item"
            style={style}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
