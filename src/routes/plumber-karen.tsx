import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Karen",
  "eta": "30–50 minutes",
  "slug": "/plumber-karen",
  "intro": [
    "Karen properties are usually larger, with boreholes, pumps and long runs of exposed pipework. We're comfortable with all of it.",
    "For emergencies out in Karen we make sure the on-call team is briefed to bring the right kit the first time."
  ],
  "commonIssues": [
    "Borehole and pump service",
    "Long-run pipe repairs",
    "Septic and drainage issues",
    "Guest cottage plumbing",
    "Outdoor and garden taps"
  ],
  "mapQuery": "Karen, Nairobi, Kenya"
};

export const Route = createFileRoute("/plumber-karen")({
  head: () => ({
    meta: [
      { title: "Plumber in Karen | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Karen, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 30–50 minutes." },
      { property: "og:title", content: "Plumber Karen Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Karen, day or night." },
      { property: "og:url", content: "/plumber-karen" },
    ],
    links: [{ rel: "canonical", href: "/plumber-karen" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Karen, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
