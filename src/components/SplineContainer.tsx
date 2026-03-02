"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "./ThemeProvider";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineSkeleton />,
});

interface SplineContainerProps {
  scene?: string;
}

function SplineSkeleton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800/50 animate-shimmer-dark relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
            <div className="w-24 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SplineError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-900/50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
            <polyline points="7.5 19.79 7.5 14.6 3 12" />
            <polyline points="21 12 16.5 14.6 16.5 19.79" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" x2="12" y1="22" y2="12" />
          </svg>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          3D scene failed to load
        </p>
        <button
          onClick={onRetry}
          className="text-xs text-zinc-600 dark:text-zinc-300 hover:underline"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function SplineContainer({ scene }: SplineContainerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const placeholderUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setError(false);
  };

  if (!mounted) {
    return <SplineSkeleton />;
  }

  const sceneUrl = scene || placeholderUrl;

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <SplineSkeleton />
        </div>
      )}
      {error ? (
        <SplineError onRetry={handleRetry} />
      ) : (
        <Suspense fallback={<SplineSkeleton />}>
          <Spline
            scene={sceneUrl}
            onLoad={handleLoad}
            onError={handleError}
            className="w-full h-full"
          />
        </Suspense>
      )}
    </div>
  );
}
