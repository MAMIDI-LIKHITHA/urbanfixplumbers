import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/service-page";
import { localBusinessJsonLd } from "@/components/schema";

const content: ServiceContent = {
  slug: "/pipe-installation-nairobi",
  title: "Pipe Installation",
  hero: "Pipe installation Nairobi,",
  highlight: "done right the first time.",
  subtitle: "PPR, PEX and copper pipework for new homes, renovations, apartments and commercial fit-outs.",
  intro: [
    "Good pipework isn't glamorous — it's just quietly reliable for years. We plan runs sensibly, size correctly, and pressure-test before signing off.",
    "We work alongside contractors and property owners on new builds, renovations, and re-plumbs of older houses whose pipework has run its course.",
    "Ask for our recommendations on materials and layout — we're happy to walk you through it.",
  ],
  bullets: [
    "PPR, PEX, copper and GI where appropriate",
    "Full pressure-testing before handover",
    "Clean routing coordinated with your finishes",
    "Warranty on labour, day-or-night follow-up",
  ],
  faqs: [
    { q: "Do you handle full re-plumbs of older houses?", a: "Yes — we plan the sequence with you to keep water running where possible." },
    { q: "Can you work with our contractor?", a: "Absolutely. We coordinate closely with builders and interior teams." },
    { q: "How long does a typical install take?", a: "Depends on scope. A small extension may be a day; a full villa is a multi-day job. We give you a realistic timeline upfront." },
    { q: "Do you provide materials?", a: "Yes, or work with client-supplied materials — your call." },
  ],
};

export const Route = createFileRoute("/pipe-installation-nairobi")({
  head: () => ({
    meta: [
      { title: "Pipe Installation Nairobi | PPR, PEX & Copper Plumbing" },
      { name: "description", content: "Pipe installation in Nairobi for homes, apartments and commercial fit-outs. PPR, PEX, copper and full re-plumbs by experienced plumbers." },
      { property: "og:title", content: "Pipe Installation Nairobi | Urban Fix" },
      { property: "og:description", content: "Reliable pipework, tested and signed off." },
      { property: "og:url", content: content.slug },
    ],
    links: [{ rel: "canonical", href: content.slug }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => <ServicePage content={content} />,
});