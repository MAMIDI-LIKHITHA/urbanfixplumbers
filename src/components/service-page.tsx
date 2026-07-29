import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, PhoneCall, MessageCircle, FileText } from "lucide-react";
import { Hero } from "./hero";
import { CtaBand } from "./cta-band";
import { WhatsAppPanel } from "./whatsapp-panel";
import { Faq } from "./faq";
import { Reveal } from "./reveal";
import { CORE_SERVICES } from "@/lib/site";

export type ServiceContent = {
  slug: string;
  title: string;
  hero: string;
  highlight: string;
  subtitle: string;
  intro: string[];
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export function ServicePage({ content }: { content: ServiceContent }) {
  const related = CORE_SERVICES.filter((s) => s.slug !== content.slug).slice(0, 2);
  return (
    <>
      <Hero
        eyebrow="Nairobi Service"
        title={content.hero}
        highlight={content.highlight}
        subtitle={content.subtitle}
      />
      <section className="container-tight py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="text-3xl font-bold text-ivory md:text-4xl">
              What we offer
            </h2>
            <div className="mt-6 space-y-4 text-ivory/80">
              {content.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface-card p-6">
              <h3 className="text-lg font-semibold text-ivory">Why choose us for {content.title.toLowerCase()}</h3>
              <ul className="mt-4 space-y-3 text-sm text-ivory/85">
                {content.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/get-a-quote" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
                  <FileText className="h-3.5 w-3.5" /> Get a quote
                </Link>
                <Link to="/emergency-plumbing-nairobi" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-ivory">
                  <PhoneCall className="h-3.5 w-3.5" /> Emergency
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-tight py-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-ivory md:text-4xl">Our process</h2>
        </Reveal>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { t: "1. Contact us", d: "Call or WhatsApp, any time." },
            { t: "2. Describe the issue", d: "A short message or photo helps us come prepared." },
            { t: "3. Scheduled visit", d: "On-site diagnosis with a clear quote before we start." },
            { t: "4. Repair & follow-up", d: "Clean work, then a follow-up check to confirm it's sorted." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div className="surface-card surface-card-hover h-full p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Step {i + 1}</div>
                <div className="mt-2 text-base font-semibold text-ivory">{s.t.replace(/^\d+\.\s*/, "")}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <WhatsAppPanel />
      <Faq items={content.faqs} />

      <section className="container-tight pb-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-ivory">Related services</h2>
        </Reveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {related.map((r) => (
            <Link key={r.slug} to={r.slug} className="surface-card surface-card-hover flex items-center justify-between gap-4 p-5">
              <div>
                <div className="text-sm font-semibold text-ivory">{r.title}</div>
                <div className="text-xs text-muted-foreground">{r.short}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={`Need ${content.title.toLowerCase()} in Nairobi today?`}
        subtitle="One call or WhatsApp — we'll be on our way."
      />
    </>
  );
}