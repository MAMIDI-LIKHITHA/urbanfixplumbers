import { CtaButtons } from "./cta-buttons";
import { Reveal } from "./reveal";

export function CtaBand({
  title = "Got a plumbing problem? We're available right now.",
  subtitle = "Call, WhatsApp or request a quote — one of the team will pick up.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-tight py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/25 bg-gradient-to-br from-[oklch(0.19_0.02_60)] to-[oklch(0.13_0.008_60)] p-10 md:p-14">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-2xl text-3xl font-bold text-ivory md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-ivory/80">{subtitle}</p>
            <div className="mt-8"><CtaButtons /></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}