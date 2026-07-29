import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/service-page";
import { localBusinessJsonLd } from "@/components/schema";

const content: ServiceContent = {
  slug: "/drainage-services-nairobi",
  title: "Drainage Services",
  hero: "Drainage services Nairobi,",
  highlight: "blockages cleared cleanly.",
  subtitle: "Blocked sinks, toilets, showers, floor drains and sewer lines — cleared quickly with the right tools for the job.",
  intro: [
    "Blockages get worse quickly. We show up ready with augers, rodding tools and pressure equipment so most drainage jobs are fully sorted in a single visit.",
    "For recurring blockages we look for the root cause — grease build-up, root ingress, collapsed pipework — and give you honest options.",
    "We handle apartment stacks, standalone houses, restaurants and offices across Nairobi.",
  ],
  bullets: [
    "Same-day clearance for most blockages",
    "Sewer, stack and floor-drain specialists",
    "Honest advice when replacement makes more sense than another clear-out",
    "Clean, respectful work indoors",
  ],
  faqs: [
    { q: "Can you clear a sewer blockage the same day?", a: "In most cases yes — call early and we'll plan around it." },
    { q: "Do you handle recurring blockages?", a: "Yes. We diagnose the underlying cause and recommend a proper fix, not just another clear-out." },
    { q: "Do you work on commercial premises?", a: "Restaurants, offices and apartment blocks — we handle them regularly." },
    { q: "What areas do you cover?", a: "All of Nairobi and surrounding estates, 24 hours a day." },
  ],
};

export const Route = createFileRoute("/drainage-services-nairobi")({
  head: () => ({
    meta: [
      { title: "Drainage Services Nairobi | Blocked Drains & Sewer Clearance" },
      { name: "description", content: "24-hour drainage services in Nairobi. Blocked sinks, toilets, floor drains and sewer lines cleared by experienced plumbers." },
      { property: "og:title", content: "Drainage Services Nairobi | Urban Fix" },
      { property: "og:description", content: "Blocked drains cleared cleanly, day or night." },
      { property: "og:url", content: content.slug },
    ],
    links: [{ rel: "canonical", href: content.slug }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => <ServicePage content={content} />,
});