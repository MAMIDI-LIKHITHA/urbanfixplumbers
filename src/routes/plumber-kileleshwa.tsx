import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Kileleshwa",
  "eta": "25–40 minutes",
  "slug": "/plumber-kileleshwa",
  "intro": [
    "Kileleshwa's modern apartments mean we see a lot of pressure, geyser and blockage issues — usually a same-visit fix.",
    "We're happy to work with building caretakers and property managers when the issue crosses units."
  ],
  "commonIssues": [
    "Instant shower faults",
    "Blocked stacks",
    "Toilet flush issues",
    "Water pressure diagnosis",
    "Fixture leaks"
  ],
  "mapQuery": "Kileleshwa, Nairobi, Kenya"
};

export const Route = createFileRoute("/plumber-kileleshwa")({
  head: () => ({
    meta: [
      { title: "Plumber in Kileleshwa | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Kileleshwa, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 25–40 minutes." },
      { property: "og:title", content: "Plumber Kileleshwa Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Kileleshwa, day or night." },
      { property: "og:url", content: "/plumber-kileleshwa" },
    ],
    links: [{ rel: "canonical", href: "/plumber-kileleshwa" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Kileleshwa, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
