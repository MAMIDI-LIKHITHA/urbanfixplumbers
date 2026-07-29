import { Star, Quote } from "lucide-react";
import { Reveal } from "./reveal";

const REVIEWS = [
  { name: "Wanjiru M.", area: "Kilimani", body: "Called after a burst pipe late in the evening. They arrived within the hour, sorted the leak and cleaned up. Fair price too." },
  { name: "David K.", area: "Westlands", body: "Have used Urban Fix for our office block twice now. Professional, on time, and honest about what needs to be replaced vs repaired." },
  { name: "Amina S.", area: "Lavington", body: "Repeat customer. Our geyser had been unreliable for months — they diagnosed it in minutes and it's been solid since." },
];

export function Reviews() {
  return (
    <section className="container-tight py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Reviews</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ivory md:text-4xl">
          Rated 4.7★ on Google by neighbours across Nairobi.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 80}>
            <figure className="surface-card h-full p-6">
              <Quote className="h-6 w-6 text-[color:var(--gold)]/80" />
              <blockquote className="mt-3 text-sm leading-relaxed text-ivory/90">"{r.body}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-ivory">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
                <div className="flex gap-0.5 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}