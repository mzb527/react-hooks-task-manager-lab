import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import { TaskProvider } from './context/TaskContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider> {/* Wrapping App with TaskProvider for global context */}
      <App />
    </TaskProvider>
  </StrictMode>
);