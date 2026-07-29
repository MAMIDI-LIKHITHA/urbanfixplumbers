import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/service-page";
import { localBusinessJsonLd } from "@/components/schema";

const content: ServiceContent = {
  slug: "/bathroom-kitchen-plumbing",
  title: "Bathroom & Kitchen Plumbing",
  hero: "Bathroom & kitchen plumbing,",
  highlight: "finished cleanly.",
  subtitle: "Fixtures, sinks, toilets, showers and remodels — quality plumbing that lasts and looks the part.",
  intro: [
    "Bathroom and kitchen work is where plumbing meets your daily life — details matter. We install taps, sinks, toilets, showers, water filters and appliances with a proper finish.",
    "For remodels we work with your interior designer or contractor and take responsibility for anything water touches.",
    "Bring us your Pinterest board — we'll tell you what actually works with Nairobi pressure, water quality and drainage.",
  ],
  bullets: [
    "Fixture installations that don't leak in six months",
    "Full bathroom and kitchen remodels",
    "Coordinated with your designer or contractor",
    "Realistic advice about pressure, water quality and layout",
  ],
  faqs: [
    { q: "Do you install client-supplied fixtures?", a: "Yes — we're happy to work with fittings you've bought yourself." },
    { q: "Can you handle a full bathroom remodel?", a: "The plumbing side, yes. We coordinate with tilers and finishers." },
    { q: "Do you offer warranty on installations?", a: "Yes — labour warranty on all installs." },
    { q: "How much notice do you need for a remodel?", a: "A few days is usually enough for planning; site work is scheduled around your contractor." },
  ],
};

export const Route = createFileRoute("/bathroom-kitchen-plumbing")({
  head: () => ({
    meta: [
      { title: "Bathroom & Kitchen Plumbing Nairobi | Urban Fix Plumbers" },
      { name: "description", content: "Bathroom and kitchen plumbing in Nairobi — fixture installs, remodels and repairs by experienced local plumbers." },
      { property: "og:title", content: "Bathroom & Kitchen Plumbing Nairobi" },
      { property: "og:description", content: "Quality plumbing for kitchens and bathrooms." },
      { property: "og:url", content: content.slug },
    ],
    links: [{ rel: "canonical", href: content.slug }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => <ServicePage content={content} />,
});