import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

const paths = [
  "/",
  "/plumber-nairobi",
  "/about",
  "/contact",
  "/get-a-quote",
  "/emergency-plumbing-nairobi",
  "/leak-repair-nairobi",
  "/drainage-services-nairobi",
  "/pipe-installation-nairobi",
  "/water-heater-installation-repair",
  "/bathroom-kitchen-plumbing",
  "/commercial-plumbing-nairobi",
  "/plumber-westlands",
  "/plumber-kilimani",
  "/plumber-lavington",
  "/plumber-karen",
  "/plumber-kileleshwa",
  "/plumber-upper-hill",
  "/plumber-nairobi-cbd",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) =>
            `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});