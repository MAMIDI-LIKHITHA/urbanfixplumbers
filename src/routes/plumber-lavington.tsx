import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Lavington",
  "eta": "25–40 minutes",
  "slug": "/plumber-lavington",
  "intro": [
    "Lavington's villas and townhouses often mix copper and PPR pipework across older extensions — exactly the kind of work we enjoy.",
    "We handle full plumbing overhauls, gate-house borehole pumps, and everyday fixture repairs."
  ],
  "commonIssues": [
    "Underground and slab leaks",
    "Booster pump and tank issues",
    "Old copper pipework repairs",
    "Kitchen remodels",
    "Outdoor tap and irrigation"
  ],
  "mapQuery": "Lavington, Nairobi, Kenya"
};

export const Route = createFileRoute("/plumber-lavington")({
  head: () => ({
    meta: [
      { title: "Plumber in Lavington | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Lavington, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 25–40 minutes." },
      { property: "og:title", content: "Plumber Lavington Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Lavington, day or night." },
      { property: "og:url", content: "/plumber-lavington" },
    ],
    links: [{ rel: "canonical", href: "/plumber-lavington" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Lavington, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
