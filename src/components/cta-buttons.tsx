import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { telLink, waLink } from "@/lib/site";

export function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "sm:gap-4"}`}>
      <a
        href={telLink}
        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ivory backdrop-blur transition hover:border-primary hover:text-primary"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
      <Link
        to="/get-a-quote"
        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-6 py-3 text-sm font-semibold text-[color:var(--gold)] transition hover:bg-[color:var(--gold)]/10"
      >
        <FileText className="h-4 w-4" />
        Get a Free Quote
      </Link>
    </div>
  );
}