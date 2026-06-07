import { TaskCard } from './TaskCard';
import { useTaskQueue } from '../useTaskQueue';
import { usePreferences } from '../usePreferences';

interface Props {
  open: boolean;
  onClose: () => void;
}

// 右侧滑出抽屉：集中展示所有任务的排队/进度/结果
export function TasksDrawer({ open, onClose }: Props) {
  const { tasks, removeTask, retryTask, activeCount, maxActive } = useTaskQueue();
  const { t } = usePreferences();

  return (
    <>
      {open && <div className="drawer-overlay" onClick={onClose} />}
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>
            {t('tasks.drawerTitle')} {activeCount}/{maxActive}
          </h3>
          <button
            className="drawer-close"
            onClick={onClose}
            aria-label={t('tasks.close')}
            title={t('tasks.close')}
          >
            ×
          </button>
        </div>
        <div className="drawer-body">
          {tasks.length === 0 ? (
            <div className="empty">{t('tasks.empty')}</div>
          ) : (
            <div className="task-list">
              {tasks.map((item) => (
                <TaskCard key={item.localId} item={item} onRemove={removeTask} onRetry={retryTask} />
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
