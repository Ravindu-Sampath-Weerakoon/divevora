"use client";

import { useEffect } from "react";

export default function SplashRemover() {
  useEffect(() => {
    const splash = document.getElementById('initial-loading-splash');
    const appRoot = document.getElementById('app-root');

    if (splash) splash.classList.add('hidden');
    if (appRoot) appRoot.classList.remove('app-hidden');
  }, []);

  return null; // Nothing to render
}
