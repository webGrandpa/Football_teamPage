// src/app/page.tsx

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          ფეხბურთი
        </h1>
        <p className="text-lg text-gray-300">
          სატესტო პროექტი
        </p>
        <div>
          <Link
            href="/team/barcelona"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            შემადგენლობის ნახვა
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}