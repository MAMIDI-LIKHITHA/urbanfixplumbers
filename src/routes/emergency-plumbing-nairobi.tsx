import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Droplets, Waves, Gauge, Flame } from "lucide-react";
import { Hero } from "@/components/hero";
import { WhatsAppPanel } from "@/components/whatsapp-panel";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { localBusinessJsonLd } from "@/components/schema";

const CASES = [
  { icon: Droplets, title: "Burst pipes", body: "Isolate, dry and repair before water damage takes hold." },
  { icon: AlertTriangle, title: "Major leaks", body: "Under-sink, wall or ceiling leaks tracked to the source." },
  { icon: Waves, title: "Blocked drains & sewage backup", body: "Cleared quickly and cleanly, day or night." },
  { icon: Gauge, title: "No water pressure", body: "Diagnose pumps, tanks, valves and mains." },
  { icon: Flame, title: "Water heater failures", body: "Cold showers fixed same-day where possible." },
];

export const Route = createFileRoute("/emergency-plumbing-nairobi")({
  head: () => ({
    meta: [
      { title: "24-Hour Emergency Plumber Nairobi | Urban Fix Plumbers" },
      { name: "description", content: "Emergency plumber in Nairobi, available 24/7. Burst pipes, major leaks, blocked drains and no water pressure — call now for fast on-site response." },
      { property: "og:title", content: "Emergency Plumber Nairobi | Urban Fix" },
      { property: "og:description", content: "24-hour emergency plumbing across Nairobi." },
      { property: "og:url", content: "/emergency-plumbing-nairobi" },
    ],
    links: [{ rel: "canonical", href: "/emergency-plumbing-nairobi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: Emergency,
});

function Emergency() {
  return (
    <>
      <Hero
        eyebrow="24/7 Emergency"
        title="Emergency plumber Nairobi,"
        highlight="answering right now."
        subtitle="Burst pipe? Flooded kitchen? Sewage backing up? Call Urban Fix Plumbers — we answer 24 hours a day, every day of the year."
      />
      <section className="container-tight py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">We handle</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ivory md:text-4xl">Common Nairobi plumbing emergencies.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="surface-card surface-card-hover h-full p-6">
                <c.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-ivory">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <WhatsAppPanel />
      <CtaBand title="Emergency? Call us right now." subtitle="Someone always picks up — Nairobi and surrounding estates, 24 hours a day." />
    </>
  );
}