'use client'; // This component must be a Client Component

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // New state to track if component is mounted on client

  useEffect(() => {
    // This effect runs only on the client-side after initial render.
    // Set mounted to true once the component has successfully mounted on the client.
    setMounted(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust this timeout as needed for your app's initial load

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (!isLoading) {
    return null; // Don't render anything once loading is complete
  }

  // Only attempt to render the portal if the component is mounted on the client
  // and 'document' is available (which it will be if 'mounted' is true).
  if (mounted) {
    return createPortal(
      <div id="loading-overlay">
        <p>Loading Divevora...</p>
      </div>,
      document.body // This will now only execute on the client where 'document.body' exists
    );
  }

  // During SSR (when mounted is false), return null or a minimal placeholder
  // This ensures no 'document' access on the server.
  return null;
}