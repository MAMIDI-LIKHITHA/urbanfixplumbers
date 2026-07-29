import { Link } from "@tanstack/react-router";
import {
  Droplets,
  Waves,
  Wrench,
  Flame,
  Bath,
  Building2,
  ArrowRight,
} from "lucide-react";
import { CORE_SERVICES } from "@/lib/site";
import { Reveal } from "./reveal";

const ICONS = [Droplets, Waves, Wrench, Flame, Bath, Building2];

export function ServicesGrid({ heading = "What we fix, install and service" }: { heading?: string }) {
  return (
    <section className="container-tight py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Services</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ivory md:text-4xl">{heading}</h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_SERVICES.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to={s.slug}
                className="surface-card surface-card-hover group block h-full p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ivory">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}