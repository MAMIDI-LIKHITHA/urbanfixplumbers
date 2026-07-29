export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-primary/80">
        <span className="absolute inset-1 rounded-full bg-[oklch(0.09_0.006_60)]" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-8.5Z" />
          <path d="M14 14h5" stroke="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-[15px] font-extrabold tracking-[0.14em] text-ivory">
          URBAN <span className="text-primary">FIX</span>
        </span>
        <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Plumbers
        </span>
      </span>
    </div>
  );
}