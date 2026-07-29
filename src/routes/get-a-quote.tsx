import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CORE_SERVICES, NEIGHBORHOODS, SITE, waLink } from "@/lib/site";
import { localBusinessJsonLd } from "@/components/schema";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  area: z.string().trim().min(2).max(80),
  service: z.string().min(1, "Select a service"),
  description: z.string().trim().max(1000).optional().or(z.literal("")),
  time: z.string().max(80).optional().or(z.literal("")),
});

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Plumbing Quote | Urban Fix Plumbers Nairobi" },
      { name: "description", content: "Request a free plumbing quote in Nairobi. Tell us the area and issue — we usually reply within minutes on WhatsApp." },
      { property: "og:title", content: "Free Plumbing Quote | Urban Fix Plumbers" },
      { property: "og:description", content: "Fast quotes for plumbing work in Nairobi." },
      { property: "og:url", content: "/get-a-quote" },
    ],
    links: [{ rel: "canonical", href: "/get-a-quote" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  component: Quote,
});

function Quote() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const msg = `Hi Urban Fix Plumbers,%0A%0AName: ${parsed.data.name}%0APhone: ${parsed.data.phone}%0AArea: ${parsed.data.area}%0AService: ${parsed.data.service}%0AIssue: ${parsed.data.description || "-"}%0APreferred time: ${parsed.data.time || "Any"}`;
    setTimeout(() => {
      setStatus("done");
      window.open(`${waLink().split("?")[0]}?text=${msg}`, "_blank");
    }, 400);
  };

  return (
    <>
      <section className="pt-36 pb-8">
        <div className="container-tight">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Free quote</p>
            <h1 className="mt-2 text-4xl font-extrabold text-ivory md:text-5xl">Request a quote in under a minute.</h1>
            <p className="mt-4 max-w-2xl text-ivory/80">Tell us the area, the issue and when it suits you — we'll come back with a clear quote, usually within minutes.</p>
          </Reveal>
        </div>
      </section>
      <section className="container-tight pb-24">
        <Reveal>
          <form onSubmit={onSubmit} className="surface-card grid gap-4 p-6 md:grid-cols-2 md:p-8">
            <Field name="name" label="Your name" required error={errors.name} />
            <Field name="phone" label="Phone / WhatsApp" required error={errors.phone} />
            <Field name="area" label="Area / Neighborhood" required error={errors.area}>
              <datalist id="areas">
                {NEIGHBORHOODS.map((n) => <option key={n.slug} value={n.name} />)}
              </datalist>
            </Field>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service needed *</label>
              <select name="service" required className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ivory outline-none focus:border-primary">
                <option value="">Select a service…</option>
                {CORE_SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                <option value="Emergency Plumbing">Emergency Plumbing</option>
                <option value="Other">Other</option>
              </select>
              {errors.service ? <span className="text-xs text-destructive">{errors.service}</span> : null}
            </div>
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Describe the issue</label>
              <textarea name="description" rows={4} maxLength={1000} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ivory outline-none focus:border-primary" />
            </div>
            <Field name="time" label="Preferred contact time" />
            <div className="md:col-span-2 mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">By submitting you'll be redirected to WhatsApp with your details prefilled — no data leaves this page.</p>
              <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] disabled:opacity-70">
                {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : status === "done" ? <Check className="h-4 w-4" /> : null}
                {status === "done" ? "Sent — check WhatsApp" : "Send request"}
              </button>
            </div>
            <p className="md:col-span-2 text-xs text-muted-foreground">Prefer to call? Dial {SITE.phoneDisplay}.</p>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({ name, label, required, error, children }: { name: string; label: string; required?: boolean; error?: string; children?: React.ReactNode }) {
  const listId = name === "area" ? "areas" : undefined;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}{required ? " *" : ""}</label>
      <input name={name} required={required} list={listId} maxLength={200} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ivory outline-none focus:border-primary" />
      {children}
      {error ? <span className="text-xs text-destructive">{error}</span> : null}
    </div>
  );
}