// src/app/team/[teamId]/error.tsx
'use client';

import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center justify-center text-white text-center">
      <AlertTriangle className="h-16 w-16 text-red-500" />
      <h2 className="mt-4 text-2xl font-bold">Something went wrong!</h2>
      <p className="mt-2 text-gray-400">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}