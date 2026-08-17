import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Rocket, Ruler, Layers, Lock, MapPin } from "lucide-react";
import { GlassCard, Section, SectionHeading, Eyebrow } from "../components/ui-kit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Elitegemini Technologies | Bangalore Engineering Studio" },
      {
        name: "description",
        content:
          "From the Silicon Valley of India to global enterprises — the story, pillars and leadership behind Elitegemini Technologies.",
      },
      { property: "og:title", content: "About Elitegemini Technologies" },
      {
        property: "og:description",
        content:
          "Our vision, core pillars, executive leadership and the Bangalore Innovation Lab powering enterprise AI delivery.",
      },
      { property: "og:url", content: "https://elitegemini-spark.lovable.app/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://elitegemini-spark.lovable.app/about" }],
  }),
  component: About,
});

const pillars = [
  {
    icon: Rocket,
    title: "Innovation",
    body: "A dedicated 20% research budget keeps applied AI prototypes ahead of the market cycle.",
  },
  {
    icon: Ruler,
    title: "Precision",
    body: "Architecture decision records, typed contracts and measurable acceptance criteria on every sprint.",
  },
  {
    icon: Layers,
    title: "Scalability",
    body: "Systems designed for the 10x load you will have, not the load you have today.",
  },
  {
    icon: Lock,
    title: "Security",
    body: "Zero-trust defaults, secret hygiene and compliance evidence baked into the pipeline.",
  },
];

const leaders = [
  { name: "Arjun Nair", role: "Founder & Chief Executive", init: "AN" },
  { name: "Shruti Iyer", role: "Chief Technology Officer", init: "SI" },
  { name: "Vikram Deshpande", role: "Head of AI Research", init: "VD" },
  { name: "Meera Krishnan", role: "VP, Cloud & Platform", init: "MK" },
];

const stack = ["AWS", "Azure", "PyTorch", "React", "Kubernetes", "Terraform", "Snowflake", "LangGraph"];

function About() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Built in the <span className="text-gradient">Silicon Valley of India</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Elitegemini Technologies began in 2017 with four engineers in an Ashok Nagar walk-up and
              a stubborn belief: enterprise software should feel like consumer software and reason
              like a domain expert.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A decade later we run delivery pods for banks, hospital networks, marketplaces and
              global SaaS platforms across three continents — still headquartered on M.G. Road,
              still shipping every week.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["2017", "Founded in Bengaluru"],
              ["230+", "Engineers & researchers"],
              ["18", "Countries served"],
              ["4.9/5", "Client satisfaction"],
            ].map(([a, b]) => (
              <GlassCard key={a} className="p-7">
                <div className="text-3xl font-extrabold text-gradient">{a}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{b}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Core Pillars"
          title="What every engagement stands on"
          subtitle="Four commitments that shape how we scope, staff and ship."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <GlassCard key={p.title} className="group p-7">
              <div className="flex items-center justify-between">
                <span
                  className="grid size-12 place-items-center rounded-2xl"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <p.icon className="size-6 text-primary-foreground" />
                </span>
                <span className="font-display text-3xl font-extrabold text-muted-foreground/25">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership" title="The people accountable for your outcome" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((l) => (
            <GlassCard key={l.name} className="group relative overflow-hidden p-7 text-center">
              <div
                className="mx-auto grid size-20 place-items-center rounded-full font-display text-xl font-extrabold text-primary-foreground transition-all duration-500 group-hover:blur-[2px]"
                style={{ background: "var(--gradient-brand)" }}
              >
                {l.init}
              </div>
              <h3 className="mt-5 text-base font-bold">{l.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{l.role}</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-3.5" /> Connect
              </a>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <GlassCard hover={false} className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Bangalore Innovation Lab</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              A research floor, not a <span className="text-gradient">delivery factory</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our M.G. Road lab houses model evaluation rigs, a private inference cluster and a
              dedicated security range where we rehearse failure before production ever sees it.
            </p>
            <div className="mt-6 flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              K39/7, Mahatma Gandhi Rd, behind Oriental Bank of Commerce, Craig Park Layout, Ashok
              Nagar, Bengaluru, Karnataka 560001
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech stack highlights
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-glass-border bg-glass px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["24/7", "Follow-the-sun coverage"],
                ["SOC2 · ISO 27001", "Compliance posture"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-2xl border border-glass-border bg-glass p-5">
                  <div className="text-lg font-bold">{a}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
