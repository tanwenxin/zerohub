import { usePreferences } from '../usePreferences';

export type HistoryLayout = 'list' | 'masonry';
export type HistoryStatusFilter = 'all' | 'active' | 'done' | 'error';
export type HistorySort = 'newest' | 'oldest';

interface HistoryToolbarProps {
  visibleCount: number;
  totalCount: number;
  searchText: string;
  filtering: boolean;
  statusFilter: HistoryStatusFilter;
  sortOrder: HistorySort;
  layout: HistoryLayout;
  onSearchTextChange: (value: string) => void;
  onStatusFilterChange: (value: HistoryStatusFilter) => void;
  onSortOrderChange: (value: HistorySort) => void;
  onLayoutChange: (value: HistoryLayout) => void;
}

export function HistoryToolbar({
  visibleCount,
  totalCount,
  searchText,
  filtering,
  statusFilter,
  sortOrder,
  layout,
  onSearchTextChange,
  onStatusFilterChange,
  onSortOrderChange,
  onLayoutChange,
}: HistoryToolbarProps) {
  const { t } = usePreferences();

  return (
    <div className="history-head history-head-rich">
      <div className="history-tools">
        <div className="history-count-badge" aria-label={t('history.count', { count: visibleCount })}>
          <span className="history-count-icon" aria-hidden="true">◆</span>
          <span>{t('history.count', { count: visibleCount })}</span>
          {visibleCount !== totalCount && <span className="history-total">/ {totalCount}</span>}
        </div>
        <label className="history-search">
          <span className="history-search-icon" aria-hidden="true">⌘</span>
          <input
            type="search"
            value={searchText}
            onChange={(event) => onSearchTextChange(event.target.value)}
            placeholder={t('history.searchPlaceholder')}
            aria-label={t('history.searchLabel')}
          />
          {filtering && <span className="history-filtering">{t('history.filtering')}</span>}
        </label>
        <div className="history-control-deck">
          <label className="history-select">
            <span className="history-select-label">
              <span aria-hidden="true">◌</span>
              {t('history.statusFilterLabel')}
            </span>
            <select
              value={statusFilter}
              onChange={(event) => onStatusFilterChange(event.target.value as HistoryStatusFilter)}
              aria-label={t('history.statusFilterLabel')}
            >
              <option value="all">{t('history.statusAll')}</option>
              <option value="active">{t('history.statusActive')}</option>
              <option value="done">{t('status.done')}</option>
              <option value="error">{t('status.error')}</option>
            </select>
          </label>
          <label className="history-select">
            <span className="history-select-label">
              <span aria-hidden="true">↕</span>
              {t('history.sortLabel')}
            </span>
            <select
              value={sortOrder}
              onChange={(event) => onSortOrderChange(event.target.value as HistorySort)}
              aria-label={t('history.sortLabel')}
            >
              <option value="newest">{t('history.sortNewest')}</option>
              <option value="oldest">{t('history.sortOldest')}</option>
            </select>
          </label>
        </div>
        <div className="layout-toggle" role="group" aria-label={t('history.layoutLabel')}>
          <button
            className={layout === 'list' ? 'active' : ''}
            type="button"
            onClick={() => onLayoutChange('list')}
            aria-pressed={layout === 'list'}
            title={t('history.layoutList')}
          >
            <span aria-hidden="true">☰</span>
            <span className="layout-toggle-text">{t('history.layoutList')}</span>
          </button>
          <button
            className={layout === 'masonry' ? 'active' : ''}
            type="button"
            onClick={() => onLayoutChange('masonry')}
            aria-pressed={layout === 'masonry'}
            title={t('history.layoutMasonry')}
          >
            <span aria-hidden="true">▦</span>
            <span className="layout-toggle-text">{t('history.layoutMasonry')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
