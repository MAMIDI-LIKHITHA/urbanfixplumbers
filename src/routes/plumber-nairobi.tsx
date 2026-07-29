import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChoose } from "@/components/why-choose";
import { WhatsAppPanel } from "@/components/whatsapp-panel";
import { Reviews } from "@/components/reviews";
import { AreasStrip } from "@/components/areas-strip";
import { CtaBand } from "@/components/cta-band";
import { localBusinessJsonLd } from "@/components/schema";

export const Route = createFileRoute("/plumber-nairobi")({
  head: () => ({
    meta: [
      { title: "Plumber Nairobi | Urban Fix Plumbers — Open 24 Hours" },
      { name: "description", content: "Looking for a plumber in Nairobi? Urban Fix Plumbers is a 24-hour team covering Westlands, Kilimani, Karen, Lavington, Kileleshwa, Upper Hill and CBD." },
      { property: "og:title", content: "Plumber Nairobi | Urban Fix Plumbers" },
      { property: "og:description", content: "24-hour plumber serving all of Nairobi. Call or WhatsApp anytime." },
      { property: "og:url", content: "/plumber-nairobi" },
    ],
    links: [{ rel: "canonical", href: "/plumber-nairobi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => (
    <>
      <Hero
        eyebrow="Nairobi · Primary Location"
        title="Nairobi's 24-hour plumber,"
        highlight="on call day or night."
        subtitle="Urban Fix Plumbers covers Nairobi and surrounding estates with fast, professional plumbing service — from leaks and blocked drains to full installs."
      />
      <ServicesGrid />
      <WhyChoose />
      <WhatsAppPanel />
      <Reviews />
      <AreasStrip />
      <CtaBand />
    </>
  ),
});