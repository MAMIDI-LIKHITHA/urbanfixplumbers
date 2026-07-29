import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Upper Hill",
  "eta": "20–35 minutes",
  "slug": "/plumber-upper-hill",
  "intro": [
    "Upper Hill's mix of offices and mixed-use buildings means our commercial team is on call after hours — repairs shouldn't cost you a working day.",
    "We handle WC blocks, pantries, boardroom bathrooms and building-wide pressure issues."
  ],
  "commonIssues": [
    "Office WC and pantry plumbing",
    "After-hours emergency service",
    "Building-wide pressure faults",
    "Water heater servicing",
    "Blocked drains"
  ],
  "mapQuery": "Upper Hill, Nairobi, Kenya"
};

export const Route = createFileRoute("/plumber-upper-hill")({
  head: () => ({
    meta: [
      { title: "Plumber in Upper Hill | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Upper Hill, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 20–35 minutes." },
      { property: "og:title", content: "Plumber Upper Hill Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Upper Hill, day or night." },
      { property: "og:url", content: "/plumber-upper-hill" },
    ],
    links: [{ rel: "canonical", href: "/plumber-upper-hill" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Upper Hill, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
