import { SITE } from "@/lib/site";

export function localBusinessJsonLd(extra?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber"],
    name: SITE.name,
    slogan: SITE.tagline,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    areaServed: [
      "Nairobi",
      "Westlands",
      "Kilimani",
      "Lavington",
      "Karen",
      "Kileleshwa",
      "Upper Hill",
      "Nairobi CBD",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviewCount,
    },
    sameAs: [SITE.facebook, SITE.instagram],
    ...extra,
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}