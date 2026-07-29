export const SITE = {
  name: "Urban Fix Plumbers",
  tagline: "Reliable. Professional. On Time.",
  phone: "+254714409033",
  phoneDisplay: "+254 714 409033",
  email: "info@urbanfixplumbers.com",
  city: "Nairobi",
  country: "Kenya",
  region: "Nairobi County",
  hours: "Open 24 hours, 7 days a week",
  rating: 4.7,
  reviewCount: 14,
  instagram: "https://instagram.com/lawly_lawrance",
  facebook: "https://www.facebook.com/Losela.losela",
  whatsappText:
    "Hi Urban Fix Plumbers, I have a plumbing issue I need help with.",
};

export const waLink = (msg = SITE.whatsappText) =>
  `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone}`;

export const CORE_SERVICES = [
  { slug: "/leak-repair-nairobi", title: "Leak Repair", short: "Fast leak detection and repairs, before water damage spreads." },
  { slug: "/drainage-services-nairobi", title: "Drainage Services", short: "Blocked drains, sewer clearing and unclogging, day or night." },
  { slug: "/pipe-installation-nairobi", title: "Pipe Installation", short: "Copper, PPR and PEX pipe fitting for homes and offices." },
  { slug: "/water-heater-installation-repair", title: "Water Heater Repair", short: "Instant showers, geysers and solar water heater service." },
  { slug: "/bathroom-kitchen-plumbing", title: "Bathroom & Kitchen Plumbing", short: "Fixtures, remodels and finishes done cleanly." },
  { slug: "/commercial-plumbing-nairobi", title: "Commercial Plumbing", short: "Offices, restaurants, apartments and property managers." },
] as const;

export const NEIGHBORHOODS = [
  { slug: "/plumber-westlands", name: "Westlands", eta: "20–30 minutes", note: "Central to our team — one of our fastest response zones." },
  { slug: "/plumber-kilimani", name: "Kilimani", eta: "20–35 minutes", note: "Frequent calls from apartments along Argwings Kodhek and Yaya." },
  { slug: "/plumber-lavington", name: "Lavington", eta: "25–40 minutes", note: "Villas and townhouses with copper and PPR systems we know well." },
  { slug: "/plumber-karen", name: "Karen", eta: "30–50 minutes", note: "Large properties, borehole and pump systems included." },
  { slug: "/plumber-kileleshwa", name: "Kileleshwa", eta: "25–40 minutes", note: "Modern apartments, pressure and geyser issues especially." },
  { slug: "/plumber-upper-hill", name: "Upper Hill", eta: "20–35 minutes", note: "Corporate offices and mixed-use buildings — after-hours friendly." },
  { slug: "/plumber-nairobi-cbd", name: "Nairobi CBD", eta: "20–35 minutes", note: "Shops, offices and older buildings with mixed pipework." },
] as const;