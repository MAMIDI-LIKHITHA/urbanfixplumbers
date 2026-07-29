import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/service-page";
import { localBusinessJsonLd } from "@/components/schema";

const content: ServiceContent = {
  slug: "/water-heater-installation-repair",
  title: "Water Heater Installation & Repair",
  hero: "Water heaters,",
  highlight: "hot showers restored.",
  subtitle: "Instant showers, electric geysers and solar water heaters — installed, serviced and repaired across Nairobi.",
  intro: [
    "Cold showers usually mean one of a few things: a failed heating element, a tripped thermostat, scale build-up, or a solar unit needing service. We diagnose quickly and, where possible, fix on the same visit.",
    "For new installations we advise on the right unit for your household — instant, storage or solar — factoring in pressure, usage and wiring.",
    "We handle apartment block installs too, coordinating with the building where required.",
  ],
  bullets: [
    "Instant showers, geysers and solar heaters",
    "Same-day repairs where parts allow",
    "Advice on capacity, pressure and safety",
    "Neat, code-conscious installations",
  ],
  faqs: [
    { q: "My shower is lukewarm — what's wrong?", a: "Usually a scaled element, failed thermostat or dropping mains pressure. We can diagnose in one visit." },
    { q: "Do you install solar water heaters?", a: "Yes — installation and service on solar systems, including panels and controllers." },
    { q: "Which brands do you service?", a: "We work across most major brands sold in Nairobi and can source parts for many." },
    { q: "Can you upgrade my capacity?", a: "Yes — we'll advise on the right unit for your household size and usage pattern." },
  ],
};

export const Route = createFileRoute("/water-heater-installation-repair")({
  head: () => ({
    meta: [
      { title: "Water Heater Installation & Repair Nairobi | Urban Fix" },
      { name: "description", content: "Water heater installation and repair in Nairobi — instant showers, geysers and solar water heaters, serviced by experienced plumbers." },
      { property: "og:title", content: "Water Heater Repair Nairobi | Urban Fix" },
      { property: "og:description", content: "Hot showers restored, day or night." },
      { property: "og:url", content: content.slug },
    ],
    links: [{ rel: "canonical", href: content.slug }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: () => <ServicePage content={content} />,
});