import team from "@/assets/team.jpg";
import pipes from "@/assets/pipes.jpg";
import bathroom from "@/assets/bathroom.jpg";
import tools from "@/assets/tools.jpg";
import { Reveal } from "./reveal";

const SHOTS = [
  { src: team, alt: "Urban Fix plumber in branded uniform", w: 1400, h: 1000, className: "row-span-2" },
  { src: bathroom, alt: "Finished bathroom fixture install", w: 1200, h: 900 },
  { src: pipes, alt: "Copper pipework detail", w: 1200, h: 1500 },
  { src: tools, alt: "Tools laid out on the work van", w: 1200, h: 900 },
];

export function Gallery() {
  return (
    <section className="container-tight py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">On the job</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold text-ivory md:text-4xl">
          Real work, real Urban Fix team.
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A few shots from recent jobs across Nairobi. Ask us for before/after photos on WhatsApp — we're happy to share.
        </p>
      </Reveal>
      <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
        {SHOTS.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 60}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${s.className ?? ""}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}