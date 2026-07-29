import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Kilimani",
  "eta": "20–35 minutes",
  "slug": "/plumber-kilimani",
  "intro": [
    "Kilimani is one of our busiest zones — we know the pipework patterns of the newer apartment blocks well and can usually diagnose common issues on the phone before we even arrive.",
    "From Argwings Kodhek to Yaya, we cover residents, landlords and short-let hosts."
  ],
  "commonIssues": [
    "Blocked kitchen and shower drains",
    "Low-pressure showers",
    "Leaking toilet cisterns",
    "Water heater faults",
    "Under-sink leaks"
  ],
  "mapQuery": "Kilimani, Nairobi, Kenya"
};

export const Route = createFileRoute("/plumber-kilimani")({
  head: () => ({
    meta: [
      { title: "Plumber in Kilimani | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Kilimani, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 20–35 minutes." },
      { property: "og:title", content: "Plumber Kilimani Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Kilimani, day or night." },
      { property: "og:url", content: "/plumber-kilimani" },
    ],
    links: [{ rel: "canonical", href: "/plumber-kilimani" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Kilimani, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
