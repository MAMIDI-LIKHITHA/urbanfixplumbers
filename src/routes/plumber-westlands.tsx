import { createFileRoute } from "@tanstack/react-router";
import { NeighborhoodPage } from "@/components/neighborhood-page";
import { localBusinessJsonLd } from "@/components/schema";

const n = {
  "name": "Westlands",
  "eta": "20–30 minutes",
  "slug": "/plumber-westlands",
  "intro": [
    "Westlands is central to how Urban Fix Plumbers works. Most of our team can be dropping tools at your door in under 30 minutes, day or night.",
    "We handle everything from apartment leaks on Waiyaki Way to office fit-outs off Chiromo Road — with clean, quiet work that respects your building."
  ],
  "commonIssues": [
    "Apartment stack blockages",
    "Geyser and instant shower failures",
    "Office WC and pantry plumbing",
    "Roof-tank pressure issues",
    "Bathroom fixture leaks"
  ],
  "mapQuery": "Westlands, Nairobi, Kenya"
};

export const Route = createFileRoute("/plumber-westlands")({
  head: () => ({
    meta: [
      { title: "Plumber in Westlands | Urban Fix Plumbers — 24 Hours" },
      { name: "description", content: "24-hour plumber serving Westlands, Nairobi. Leak repair, blocked drains, water heaters and installations — typical arrival 20–30 minutes." },
      { property: "og:title", content: "Plumber Westlands Nairobi | Urban Fix" },
      { property: "og:description", content: "Fast plumbing service in Westlands, day or night." },
      { property: "og:url", content: "/plumber-westlands" },
    ],
    links: [{ rel: "canonical", href: "/plumber-westlands" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd({ areaServed: "Westlands, Nairobi" })) }],
  }),
  component: () => <NeighborhoodPage n={n} />,
});
