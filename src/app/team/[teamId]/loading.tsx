// src/app/team/[teamId]/loading.tsx

import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center justify-center text-white">
      <Loader className="h-12 w-12 animate-spin text-blue-500" />
      <p className="mt-4 text-lg font-semibold">Loading Team Data...</p>
      <p className="text-gray-400">Please wait a moment.</p>
    </div>
  );
}