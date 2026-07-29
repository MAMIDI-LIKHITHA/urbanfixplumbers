import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Nairobi CBD",
  "eta": "20–35 minutes",
  "slug": "/plumber-nairobi-cbd",
  "intro": [
    "CBD buildings often mix old and new pipework, which means every diagnosis matters. We take the time to get it right the first visit.",
    "Shops, offices and older residential buildings — we work around foot traffic and building hours."
  ],
  "commonIssues": [
    "Old pipework repairs",
    "Shop and office plumbing",
    "Blocked toilets and drains",
    "Roof-tank and pressure issues",
    "Emergency leak isolation"
  ],
  "mapQuery": "Nairobi CBD, Kenya"
};

export const Route = createFileRoute("/plumber-nairobi-cbd")({
  head: () => ({
    meta: [
      { title: "Plumber in Nairobi CBD | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Nairobi CBD, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 20–35 minutes." },
      { property: "og:title", content: "Plumber Nairobi CBD Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Nairobi CBD, day or night." },
      { property: "og:url", content: "/plumber-nairobi-cbd" },
    ],
    links: [{ rel: "canonical", href: "/plumber-nairobi-cbd" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Nairobi CBD, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
