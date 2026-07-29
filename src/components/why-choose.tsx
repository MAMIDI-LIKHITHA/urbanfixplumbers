import { Clock3, Zap, Wallet, Award } from "lucide-react";
import { Reveal } from "./reveal";
import { Counter } from "./counter";
import { SITE } from "@/lib/site";

const REASONS = [
  { icon: Clock3, title: "Available 24 hours, every day", body: "Burst pipe at 2am? Blocked drain on a Sunday? We pick up." },
  { icon: Zap, title: "Fast, dependable response", body: "We aim to be at your door across Nairobi within the hour." },
  { icon: Wallet, title: "Fair, transparent pricing", body: "Quote before we start. No surprises when the invoice arrives." },
  { icon: Award, title: "Homes and businesses alike", body: "From studio apartments to office towers and restaurants." },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(50%_100%_at_50%_0%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]" />
      <div className="container-tight">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Why Urban Fix</p>
            <h2 className="mt-2 text-3xl font-bold text-ivory md:text-4xl">
              A plumber Nairobi actually{" "}
              <span className="gold-text">trusts</span> when things go wrong.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              We built Urban Fix Plumbers around one idea: when water is where it shouldn't be, you need a real professional now — not a voicemail. Reliable. Professional. On time.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6">
              <Stat value={<><Counter to={SITE.rating} decimals={1} />★</>} label={`Google (${SITE.reviewCount}+ reviews)`} />
              <Stat value={<><Counter to={24} />/7</>} label="Availability" />
              <Stat value={<><Counter to={500} suffix="+" /></>} label="Happy customers" />
            </dl>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="surface-card surface-card-hover h-full p-5">
                  <r.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-base font-semibold text-ivory">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold text-primary md:text-4xl">{value}</div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}