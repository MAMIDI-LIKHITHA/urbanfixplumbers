import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { SITE, telLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/leak-repair-nairobi", label: "Services" },
  { to: "/emergency-plumbing-nairobi", label: "Emergency" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.09_0.006_60/0.82)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="shrink-0" aria-label={SITE.name}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-ivory/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-[oklch(0.09_0.006_60/0.96)] backdrop-blur md:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ivory/85 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={telLink}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}