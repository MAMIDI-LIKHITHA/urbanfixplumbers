import heroImg from "@/assets/hero.jpg";
import { CtaButtons } from "./cta-buttons";
import { Star, Clock, Zap, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero({
  eyebrow = "Nairobi · Open 24 Hours",
  title,
  highlight,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover animate-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.09_0.006_60/0.55)] via-[oklch(0.09_0.006_60/0.78)] to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_60%)]" />
      </div>
      <div className="container-tight py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            {eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ivory sm:text-5xl md:text-6xl">
            {title}{" "}
            {highlight ? <span className="gold-text">{highlight}</span> : null}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ivory/80 sm:text-lg">
            {subtitle}
          </p>
          <p className="mt-4 text-sm font-medium tracking-widest text-primary uppercase">
            {SITE.tagline}
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ivory/80">
            <Badge icon={<Star className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />} label={`${SITE.rating}★ · ${SITE.reviewCount}+ Google reviews`} />
            <Badge icon={<Clock className="h-4 w-4 text-primary" />} label="Open 24 hours" />
            <Badge icon={<Zap className="h-4 w-4 text-primary" />} label="Fast response" />
            <Badge icon={<ShieldCheck className="h-4 w-4 text-primary" />} label="Experienced & reliable" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
      {icon}
      {label}
    </span>
  );
}