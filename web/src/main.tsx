import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PreferencesProvider } from './preferences.tsx'
import { TaskQueueProvider } from './taskQueue.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider>
      <TaskQueueProvider>
        <App />
      </TaskQueueProvider>
    </PreferencesProvider>
  </StrictMode>,
)
