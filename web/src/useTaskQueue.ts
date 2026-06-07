import { useContext } from 'react';
import { TaskQueueContext, type TaskQueueContextValue } from './taskQueueContext';

export function useTaskQueue(): TaskQueueContextValue {
  const value = useContext(TaskQueueContext);
  if (!value) {
    throw new Error('useTaskQueue must be used within TaskQueueProvider');
  }
  return value;
}
