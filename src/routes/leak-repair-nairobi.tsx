import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/service-page";
import { localBusinessJsonLd } from "@/components/schema";

const content: ServiceContent = {
  slug: "/leak-repair-nairobi",
  title: "Leak Repair",
  hero: "Leak repair Nairobi,",
  highlight: "fixed fast, day or night.",
  subtitle: "Pipe leaks, fixture leaks, wall and ceiling leaks — traced, sealed and repaired properly so damage doesn't spread.",
  intro: [
    "Water rarely leaks where it looks like it does. Urban Fix Plumbers uses a mix of pressure testing, thermal indicators and simple experience to trace leaks back to their real source — not just the wet patch on the ceiling.",
    "We repair pipe joints, replace corroded sections, service dripping taps and faulty valves, and re-seal fittings on toilets, showers, sinks and geysers.",
    "For hidden leaks in walls or slabs, we open the smallest possible area, repair cleanly, and coordinate with your finisher if needed.",
  ],
  bullets: [
    "24-hour availability to minimize water damage",
    "Experienced diagnosis of hidden leaks",
    "Fair, upfront pricing before any work starts",
    "Clean, tidy work — we leave it better than we found it",
  ],
  faqs: [
    { q: "How quickly can you respond to a leak?", a: "Across most of Nairobi we aim to be on-site within the hour. Emergency calls always jump the queue." },
    { q: "Do you charge more for night or emergency visits?", a: "A modest after-hours callout applies late at night. We tell you upfront — no surprise line items." },
    { q: "What areas of Nairobi do you cover?", a: "Westlands, Kilimani, Lavington, Karen, Kileleshwa, Upper Hill, CBD and surrounding estates." },
    { q: "Do you provide a quote before starting work?", a: "Always. Once we've seen the issue we give a clear quote and only proceed with your go-ahead." },
  ],
};

export const Route = createFileRoute("/leak-repair-nairobi")({
  head: () => ({
    meta: [
      { title: "Leak Repair Nairobi | Urban Fix Plumbers — 24-Hour Service" },
      { name: "description", content: "24-hour leak repair in Nairobi. We trace and fix pipe, fixture and hidden leaks fast, before water damage spreads." },
      { property: "og:title", content: "Leak Repair Nairobi | Urban Fix Plumbers" },
      { property: "og:description", content: "Fast, 24-hour leak repair across Nairobi." },
      { property: "og:url", content: content.slug },
    ],
    links: [{ rel: "canonical", href: content.slug }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => <ServicePage content={content} />,
});