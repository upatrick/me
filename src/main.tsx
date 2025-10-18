import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import "./i18n/config";

// Simple FPS counter for development
if (import.meta.env.DEV) {
  let frameCount = 0;
  let lastTime = performance.now();

  const updateFPS = () => {
    frameCount++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
      console.log(`FPS: ${Math.round((frameCount * 1000) / (now - lastTime))}`);
      frameCount = 0;
      lastTime = now;
    }
    requestAnimationFrame(updateFPS);
  };
  requestAnimationFrame(updateFPS);
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
