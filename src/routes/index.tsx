import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChoose } from "@/components/why-choose";
import { WhatsAppPanel } from "@/components/whatsapp-panel";
import { Reviews } from "@/components/reviews";
import { Gallery } from "@/components/gallery";
import { AreasStrip } from "@/components/areas-strip";
import { CtaBand } from "@/components/cta-band";
import { localBusinessJsonLd } from "@/components/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Fix Plumbers | 24-Hour Plumber in Nairobi, Kenya" },
      { name: "description", content: "24-hour plumbing services in Nairobi. Leak repair, drainage, pipe installation, water heaters and emergency plumbers across Westlands, Kilimani, Karen and beyond." },
      { property: "og:title", content: "Urban Fix Plumbers | 24-Hour Plumber in Nairobi" },
      { property: "og:description", content: "Fast, reliable plumbing repairs and installations across Nairobi — day or night." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero
        title="Trusted 24-Hour Plumbing"
        highlight="across Nairobi."
        subtitle="Fast, reliable plumbing repairs and installations, day or night, from a team Nairobi actually calls back."
      />
      <ServicesGrid />
      <WhyChoose />
      <WhatsAppPanel />
      <Gallery />
      <Reviews />
      <AreasStrip />
      <CtaBand />
    </>
  );
}
