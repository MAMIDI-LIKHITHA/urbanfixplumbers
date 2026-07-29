import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { WhyChoose } from "@/components/why-choose";
import { Gallery } from "@/components/gallery";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { localBusinessJsonLd } from "@/components/schema";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Urban Fix Plumbers | Trusted Plumbers, Nairobi" },
      { name: "description", content: "Meet Urban Fix Plumbers — a Nairobi-based team of experienced plumbers building a reputation for reliable, professional, on-time work." },
      { property: "og:title", content: "About Urban Fix Plumbers" },
      { property: "og:description", content: "Nairobi's reliable 24-hour plumbing team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="A Nairobi plumbing team built on"
        highlight="trust and turn-up-on-time."
        subtitle="We started Urban Fix Plumbers because Nairobi deserved better than voicemail and no-shows. Every job we take on is a chance to earn a repeat customer."
      />
      <section className="container-tight py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Our story</p>
            <h2 className="mt-2 text-3xl font-bold text-ivory md:text-4xl">Reliable. Professional. On time.</h2>
            <div className="mt-6 space-y-4 text-ivory/80">
              <p>Urban Fix Plumbers is a Nairobi-based plumbing crew that has quietly built a strong reputation across Westlands, Kilimani, Lavington, Karen, Kileleshwa and Upper Hill.</p>
              <p>We handle everything from a dripping tap at midnight to full bathroom and kitchen installs — for households, landlords, property managers and businesses.</p>
              <p>Our promise is simple: you get a real plumber on the phone, a clear quote before we start, and clean, dependable work when we're done.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="surface-card p-6">
              <h3 className="text-lg font-semibold text-ivory">What sets us apart</h3>
              <ul className="mt-4 space-y-3 text-sm text-ivory/85">
                {["Real 24-hour availability — no answering machine","Uniformed, experienced technicians","Transparent, upfront pricing","Residential and commercial jobs","We tidy up after ourselves"].map((b) => (
                  <li key={b} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <WhyChoose />
      <Gallery />
      <CtaBand />
    </>
  );
}