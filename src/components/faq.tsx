import { Reveal } from "./reveal";

export function Faq({ items, heading = "Frequently asked" }: { items: { q: string; a: string }[]; heading?: string }) {
  return (
    <section className="container-tight py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">FAQ</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ivory md:text-4xl">{heading}</h2>
      </Reveal>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.q} delay={i * 50}>
            <details className="surface-card group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-ivory">
                {it.q}
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}