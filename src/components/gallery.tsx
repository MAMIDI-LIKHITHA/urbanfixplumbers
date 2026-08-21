import team from "@/assets/team.jpg";
import pipes from "@/assets/pipes.jpg";
import bathroom from "@/assets/bathroom.jpg";
import tools from "@/assets/tools.jpg";
import kitchenSink from "@/assets/kitchen-sink.jpg";
import waterHeater from "@/assets/water-heater.jpg";
import drainClearing from "@/assets/drain-clearing.jpg";
import pipeManifold from "@/assets/pipe-manifold.jpg";
import burstPipe from "@/assets/burst-pipe.jpg";
import showerFinish from "@/assets/shower-finish.jpg";
import { Reveal } from "./reveal";

const SHOTS = [
  { src: team, alt: "Urban Fix plumber in branded uniform on a Nairobi job", w: 1400, h: 1000, caption: "Uniformed, vetted team", className: "md:col-span-2 md:row-span-2" },
  { src: kitchenSink, alt: "Plumber repairing pipework under a kitchen sink", w: 1200, h: 912, caption: "Kitchen sink repair · Kilimani" },
  { src: showerFinish, alt: "Completed walk-in shower with matte black fittings", w: 1200, h: 1504, caption: "Shower fit-out · Lavington", className: "row-span-2" },
  { src: drainClearing, alt: "Night-time blocked drain clearing with a drain snake", w: 1200, h: 912, caption: "Blocked drain · 1am callout" },
  { src: waterHeater, alt: "Technician servicing a wall-mounted water heater", w: 1200, h: 1504, caption: "Geyser service · Kileleshwa", className: "row-span-2" },
  { src: pipeManifold, alt: "Neatly installed copper and PPR pipe manifold", w: 1200, h: 912, caption: "Manifold install · Upper Hill" },
  { src: burstPipe, alt: "Emergency burst pipe repair with water spraying", w: 1200, h: 912, caption: "Burst pipe emergency" },
  { src: bathroom, alt: "Finished bathroom fixture installation", w: 1200, h: 900, caption: "Bathroom remodel · Westlands" },
  { src: pipes, alt: "Copper pipework detail", w: 1200, h: 1500, caption: "Copper pipework detail" },
  { src: tools, alt: "Plumbing tools laid out on the work van", w: 1200, h: 900, caption: "Fully stocked work van" },
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
      <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:auto-rows-[190px]">
        {SHOTS.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 50}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${s.className ?? ""}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="absolute inset-x-3 bottom-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/90 opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 md:text-xs">
              {s.caption}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
