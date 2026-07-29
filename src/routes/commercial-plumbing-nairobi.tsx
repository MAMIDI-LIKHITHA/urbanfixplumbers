import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/service-page";
import { localBusinessJsonLd } from "@/components/schema";

const content: ServiceContent = {
  slug: "/commercial-plumbing-nairobi",
  title: "Commercial Plumbing",
  hero: "Commercial plumbing Nairobi,",
  highlight: "on your schedule.",
  subtitle: "Offices, restaurants, apartments and property managers — reliable plumbing for businesses that can't afford downtime.",
  intro: [
    "Commercial plumbing lives and dies on responsiveness. We work around your hours, arrange after-hours visits, and can be on standing retainer for larger buildings.",
    "We handle restaurant kitchens (grease and drainage), office towers (mixed pipework, pressure), apartments (stacks and shared systems) and hospitality (guest experience matters).",
    "Property managers: ask us about scheduled inspections to catch problems before your tenants do.",
  ],
  bullets: [
    "After-hours and weekend work available",
    "Scheduled maintenance for property managers",
    "Restaurants, offices and residential blocks",
    "Clear invoicing and reporting",
  ],
  faqs: [
    { q: "Do you offer service contracts?", a: "Yes — we'll tailor a scheduled maintenance plan for your building or estate." },
    { q: "Can you work outside business hours?", a: "Always. Night and weekend work is standard for our commercial clients." },
    { q: "Do you invoice on account?", a: "Yes — we work on account with regular commercial clients." },
    { q: "Do you cover restaurants?", a: "Yes — grease traps, drainage and kitchen plumbing included." },
  ],
};

export const Route = createFileRoute("/commercial-plumbing-nairobi")({
  head: () => ({
    meta: [
      { title: "Commercial Plumbing Nairobi | Offices, Restaurants, Estates" },
      { name: "description", content: "Commercial plumbing in Nairobi for offices, restaurants and property managers. After-hours work and scheduled maintenance available." },
      { property: "og:title", content: "Commercial Plumbing Nairobi | Urban Fix" },
      { property: "og:description", content: "Reliable commercial plumbing across Nairobi." },
      { property: "og:url", content: content.slug },
    ],
    links: [{ rel: "canonical", href: content.slug }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => <ServicePage content={content} />,
});