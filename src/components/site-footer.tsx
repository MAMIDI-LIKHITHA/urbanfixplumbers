import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { SITE, telLink, waLink, CORE_SERVICES, NEIGHBORHOODS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[oklch(0.09_0.006_60)]">
      <div className="container-tight py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {SITE.tagline} Nairobi's trusted 24-hour plumbing team for homes,
              apartments and businesses.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 p-2 text-ivory/80 hover:border-primary hover:text-primary transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-2 text-ivory/80 hover:border-primary hover:text-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full border border-white/10 p-2 text-ivory/80 hover:border-primary hover:text-primary transition">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <FooterCol title="Services">
            {CORE_SERVICES.slice(0, 4).map((s) => (
              <FooterLink key={s.slug} to={s.slug}>{s.title}</FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="More Services">
            {CORE_SERVICES.slice(4).map((s) => (
              <FooterLink key={s.slug} to={s.slug}>{s.title}</FooterLink>
            ))}
            <FooterLink to="/emergency-plumbing-nairobi">Emergency Plumbing</FooterLink>
          </FooterCol>
          <FooterCol title="Areas We Serve">
            {NEIGHBORHOODS.slice(1, 6).map((n) => (
              <FooterLink key={n.slug} to={n.slug}>{n.name}</FooterLink>
            ))}
          </FooterCol>
        </div>
        <div className="mt-12 grid gap-6 border-t border-white/5 pt-8 md:grid-cols-3">
          <div className="flex items-start gap-3 text-sm text-ivory/80">
            <Phone className="mt-0.5 h-4 w-4 text-primary" />
            <a href={telLink}>{SITE.phoneDisplay}</a>
          </div>
          <div className="flex items-start gap-3 text-sm text-ivory/80">
            <Mail className="mt-0.5 h-4 w-4 text-primary" />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="flex items-start gap-3 text-sm text-ivory/80">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <span>Nairobi &amp; surrounding estates · {SITE.hours}</span>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <Link to="/get-a-quote" className="hover:text-primary">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-ivory/75 hover:text-primary transition">
        {children}
      </Link>
    </li>
  );
}