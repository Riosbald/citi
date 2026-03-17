import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { registerServiceWorker, captureInstallPrompt } from "./utils/pwa";

// Initialize PWA features
if (import.meta.env.PROD) {
  registerServiceWorker();
  captureInstallPrompt();
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}