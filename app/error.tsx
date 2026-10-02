'use client';

import { AlertCircle } from 'lucide-react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-zinc-950 p-4 text-zinc-50">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-950/40">
          <AlertCircle className="h-6 w-6 text-red-400" />
        </div>
        <h1 className="text-2xl font-semibold text-white">Something went wrong</h1>
        <p className="text-sm leading-6 text-zinc-400">
          The page encountered an unexpected error. You can retry without leaving the current route.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
