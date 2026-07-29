import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { SITE, telLink, waLink } from "@/lib/site";
import { localBusinessJsonLd } from "@/components/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Urban Fix Plumbers | Nairobi, 24 Hours" },
      { name: "description", content: "Call, WhatsApp or email Urban Fix Plumbers in Nairobi. Available 24 hours a day for emergency and scheduled plumbing." },
      { property: "og:title", content: "Contact Urban Fix Plumbers" },
      { property: "og:description", content: "Reach Nairobi's 24-hour plumbing team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, label: "Call", value: SITE.phoneDisplay, href: telLink },
    { icon: MessageCircle, label: "WhatsApp", value: SITE.phoneDisplay, href: waLink() },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Serving", value: "Nairobi & surrounding estates" },
    { icon: Clock, label: "Hours", value: SITE.hours },
  ];
  return (
    <>
      <section className="pt-36 pb-8">
        <div className="container-tight">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Contact</p>
            <h1 className="mt-2 text-4xl font-extrabold text-ivory md:text-5xl">Talk to a plumber right now.</h1>
            <p className="mt-4 max-w-2xl text-ivory/80">Fastest way to reach us is a call or WhatsApp. We answer 24/7 across Nairobi.</p>
          </Reveal>
        </div>
      </section>
      <section className="container-tight pb-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 50}>
              {it.href ? (
                <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="surface-card surface-card-hover block p-6">
                  <it.icon className="h-6 w-6 text-primary" />
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{it.label}</div>
                  <div className="mt-1 text-lg font-semibold text-ivory">{it.value}</div>
                </a>
              ) : (
                <div className="surface-card p-6">
                  <it.icon className="h-6 w-6 text-primary" />
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{it.label}</div>
                  <div className="mt-1 text-lg font-semibold text-ivory">{it.value}</div>
                </div>
              )}
            </Reveal>
          ))}
          <Reveal delay={250}>
            <div className="surface-card p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Social</div>
              <div className="mt-3 flex gap-3">
                <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory hover:border-primary hover:text-primary"><Facebook className="h-4 w-4" /></a>
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory hover:border-primary hover:text-primary"><Instagram className="h-4 w-4" /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}