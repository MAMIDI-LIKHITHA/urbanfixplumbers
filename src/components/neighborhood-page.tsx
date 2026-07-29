import { Link } from "@tanstack/react-router";
import { MapPin, Clock3, ArrowRight } from "lucide-react";
import { Hero } from "./hero";
import { Reveal } from "./reveal";
import { CtaBand } from "./cta-band";
import { WhatsAppPanel } from "./whatsapp-panel";
import { CORE_SERVICES } from "@/lib/site";

export type NeighborhoodContent = {
  name: string;
  eta: string;
  slug: string;
  intro: string[];
  commonIssues: string[];
  mapQuery: string;
};

export function NeighborhoodPage({ n }: { n: NeighborhoodContent }) {
  return (
    <>
      <Hero
        eyebrow={`Nairobi · ${n.name}`}
        title={`Plumber in ${n.name},`}
        highlight="available 24 hours."
        subtitle={`Urban Fix Plumbers covers ${n.name} day and night. Typical arrival: ${n.eta}.`}
      />

      <section className="container-tight py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">About the area</p>
            <h2 className="mt-2 text-3xl font-bold text-ivory md:text-4xl">
              Trusted plumbers for {n.name} homes and businesses.
            </h2>
            <div className="mt-6 space-y-4 text-ivory/80">
              {n.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-ivory/85 sm:grid-cols-2">
              {n.commonIssues.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-card overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 p-4">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-ivory">Serving {n.name}</div>
                  <div className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                    <Clock3 className="h-3 w-3" /> Typical arrival: {n.eta}
                  </div>
                </div>
              </div>
              <iframe
                title={`Map of ${n.name}, Nairobi`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(n.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                className="h-72 w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-tight py-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-ivory md:text-4xl">Services offered in {n.name}</h2>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((s) => (
            <Link key={s.slug} to={s.slug} className="surface-card surface-card-hover flex items-center justify-between gap-4 p-5">
              <div>
                <div className="text-sm font-semibold text-ivory">{s.title}</div>
                <div className="text-xs text-muted-foreground">{s.short}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <WhatsAppPanel />
      <CtaBand
        title={`Call or WhatsApp for service in ${n.name}, any time.`}
        subtitle="24-hour emergency plumbing across Nairobi and surrounding estates."
      />
    </>
  );
}