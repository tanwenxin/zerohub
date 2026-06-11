import './App.css';
import App from './App';
import { PreferencesProvider } from './preferences';
import { TaskQueueProvider } from './taskQueue';

// 根布局：包裹全局 Provider 与站点外壳 App，页面通过 App 内的 <Outlet/> 渲染。
export function RootLayout() {
  return (
    <PreferencesProvider>
      <TaskQueueProvider>
        <App />
      </TaskQueueProvider>
    </PreferencesProvider>
  );
}
