import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as Sentry from '@sentry/react'
import App from './App.jsx'


Sentry.init({
  dsn: "https://c8f07b4b38b745219e04a09995e7f343@backend-llwm.onrender.com/42",
  sendDefaultPii: true,
  environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || "development",
  integrations: [
    Sentry.captureConsoleIntegration({
      levels: ["error", "warn", "info"],
    }),
  ],
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)