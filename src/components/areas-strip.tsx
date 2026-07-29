import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { NEIGHBORHOODS } from "@/lib/site";
import { Reveal } from "./reveal";

export function AreasStrip() {
  return (
    <section className="container-tight py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Areas we serve</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ivory md:text-4xl">
          Fast to Westlands, Kilimani, Karen and beyond.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {NEIGHBORHOODS.map((n, i) => (
          <Reveal key={n.slug} delay={i * 40}>
            <Link
              to={n.slug}
              className="surface-card surface-card-hover group flex items-center justify-between gap-4 p-5"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-ivory">Plumber in {n.name}</div>
                  <div className="text-xs text-muted-foreground">Typical arrival: {n.eta}</div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}