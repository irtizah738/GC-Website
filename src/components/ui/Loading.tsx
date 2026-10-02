export function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-zinc-950" role="status" aria-live="polite">
      <div className="flex items-center gap-3 text-sm text-zinc-500">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-800 border-t-zinc-300" aria-hidden="true" />
        Loading
      </div>
    </div>
  );
}
