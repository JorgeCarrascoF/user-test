import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as Sentry from '@sentry/react'
import App from './App.jsx'
import { PostHogProvider } from 'posthog-js/react'

// Sentry.init({
//   dsn: "https://c8f07b4b38b745219e04a09995e7f343@backend-llwm.onrender.com/42",
//   sendDefaultPii: true,
//   environment: import.meta.env.VITE_SENTRY_ENVIRONMENT || "development",
//   integrations: [
//     Sentry.captureConsoleIntegration({
//       levels: ["error", "warn", "info"],
//     }),
//   ],
// });

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-11-30',
} as const

const el = document.getElementById("root") as HTMLElement;

createRoot(el).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
  )