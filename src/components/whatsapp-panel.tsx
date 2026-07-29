import { MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink, SITE } from "@/lib/site";

export function WhatsAppPanel() {
  return (
    <section className="container-tight py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f2a1f] to-[#0a1512] p-8 md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#25D366]">Fastest way to reach us</p>
              <h2 className="mt-2 text-3xl font-bold text-ivory md:text-4xl">Message us on WhatsApp, day or night.</h2>
              <p className="mt-3 max-w-xl text-ivory/80">
                Describe the plumbing issue, send a photo or short video if you can, and we'll come back with a rough quote or an ETA — usually within a few minutes.
              </p>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp · {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}