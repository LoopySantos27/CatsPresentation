import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";
import React from 'react';

Sentry.init({
  dsn: "https://012f8d5e1a22db5e08b1143c4c5713fe@o4509396118208512.ingest.us.sentry.io/4509396120240128",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations:[
    Sentry.browserTracingIntegration(),
    //Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
   tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
 // tracePropagationTargets: ["localhost", /^https:/ / yourserver.io / api / ],
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
