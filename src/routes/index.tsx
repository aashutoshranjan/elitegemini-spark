import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Cloud,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";
import { useMemo, useState } from "react";
import { GlassCard, Section, SectionHeading, Eyebrow } from "../components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elitegemini Innovations | Enterprise AI & Cloud Agency in Bangalore" },
      {
        name: "description",
        content:
          "Architecting tomorrow's intelligence today. Custom AI, cloud-native engineering and enterprise software from Bangalore, India.",
      },
      { property: "og:title", content: "Elitegemini Innovations | Enterprise AI & Cloud Agency" },
      {
        property: "og:description",
        content:
          "Bangalore's premier custom AI, cloud and enterprise software innovation hub. 150+ enterprise apps delivered.",
      },
    ],
  }),
  component: Home,
});

const expertise = [
  {
    icon: BrainCircuit,
    title: "Enterprise AI & ML",
    body: "LLM copilots, RAG platforms, forecasting and computer vision engineered for regulated, high-volume environments.",
  },
  {
    icon: Cloud,
    title: "Cloud Native Engineering",
    body: "Kubernetes, event-driven microservices and FinOps-tuned platforms across AWS, Azure and GCP.",
  },
  {
    icon: Smartphone,
    title: "Next-Gen Web & Mobile",
    body: "Design-led product engineering with React, React Native and edge-rendered experiences at global scale.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Resilience",
    body: "Zero-trust architecture, threat modelling, SOC2/ISO readiness and continuous security automation.",
  },
];

const industries = [
  { key: "FinTech", multiplier: 1.35 },
  { key: "Healthcare", multiplier: 1.2 },
  { key: "Retail & E-Commerce", multiplier: 1.28 },
  { key: "Manufacturing", multiplier: 1.15 },
  { key: "SaaS", multiplier: 1.42 },
];

const scales = [
  { key: "Startup (1–50)", base: 12 },
  { key: "Growth (51–500)", base: 26 },
  { key: "Enterprise (500+)", base: 41 },
];

const clients = [
  "NimbusPay",
  "Medhya Health",
  "Vertex Retail",
  "Orbit Logistics",
  "Kavach Bank",
  "Lumen SaaS",
  "Aeris Motors",
  "Zenfold",
];

const testimonials = [
  {
    quote:
      "Elitegemini rebuilt our claims engine around an LLM pipeline. Processing time dropped from 4 days to 40 minutes.",
    name: "Ananya Rao",
    role: "CTO, Medhya Health",
  },
  {
    quote:
      "Their Bangalore team operates like an extension of ours. Cloud spend down 38%, deploy frequency up 6x.",
    name: "Daniel Kerr",
    role: "VP Engineering, NimbusPay",
  },
  {
    quote:
      "Genuinely the most rigorous architecture review we've had. They found risks our auditors missed.",
    name: "Priya Menon",
    role: "Head of Platform, Kavach Bank",
  },
];

function Home() {
  const [industry, setIndustry] = useState(industries[0].key);
  const [scale, setScale] = useState(scales[1].key);
  const [maturity, setMaturity] = useState(50);

  const result = useMemo(() => {
    const ind = industries.find((i) => i.key === industry)!;
    const sc = scales.find((s) => s.key === scale)!;
    const efficiency = Math.min(72, sc.base * ind.multiplier * (1 + (100 - maturity) / 180));
    const savings = efficiency * (sc.base > 30 ? 0.42 : sc.base > 20 ? 0.16 : 0.05);
    return {
      efficiency: efficiency.toFixed(1),
      savings: savings.toFixed(2),
      payback: Math.max(3, Math.round(18 - efficiency / 5)),
    };
  }, [industry, scale, maturity]);

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="animate-rise text-center">
          <Eyebrow>Bengaluru · India</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
            Architecting <span className="text-gradient">Tomorrow's Intelligence</span>, Today
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Bangalore's premier custom AI, cloud & enterprise software innovation hub.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-primary)" }}
            >
              Explore Solutions <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            ["99.8%", "Platform uptime across managed workloads"],
            ["150+", "Enterprise applications shipped"],
            ["$500M+", "Client value created since 2016"],
          ].map(([stat, label]) => (
            <GlassCard key={stat} className="p-8 text-center">
              <div className="text-4xl font-extrabold text-gradient">{stat}</div>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Core Expertise"
          title={<>Four disciplines, one engineering standard</>}
          subtitle="Every engagement is staffed with senior architects who own outcomes end to end."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e) => (
            <GlassCard key={e.title} className="p-7">
              <span
                className="grid size-12 place-items-center rounded-2xl"
                style={{ background: "var(--gradient-brand)" }}
              >
                <e.icon className="size-6 text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{e.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Live Assessment"
              title={
                <>
                  AI transformation <span className="text-gradient">ROI calculator</span>
                </>
              }
              subtitle="Pick your industry, organisation scale and current digital maturity to model the efficiency lift a targeted AI programme can unlock."
            />
            <GlassCard hover={false} className="mt-8 p-7">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Industry
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {industries.map((i) => (
                  <button
                    key={i.key}
                    onClick={() => setIndustry(i.key)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                      industry === i.key
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {i.key}
                  </button>
                ))}
              </div>

              <label className="mt-7 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Organisation scale
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {scales.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setScale(s.key)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                      scale === s.key
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.key}
                  </button>
                ))}
              </div>

              <label
                htmlFor="maturity"
                className="mt-7 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                Current digital maturity — {maturity}%
              </label>
              <input
                id="maturity"
                type="range"
                min={10}
                max={95}
                value={maturity}
                onChange={(e) => setMaturity(Number(e.target.value))}
                className="mt-4 w-full accent-primary"
              />
            </GlassCard>
          </div>

          <GlassCard hover={false} className="p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Sparkles className="size-4 text-primary" /> Projected 12-month impact
            </div>
            <div className="mt-6 text-6xl font-extrabold text-gradient">{result.efficiency}%</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Operational efficiency gain for {industry.toLowerCase()} at {scale.toLowerCase()}{" "}
              scale.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-glass-border bg-glass p-5">
                <div className="text-2xl font-bold">${result.savings}M</div>
                <p className="mt-1 text-xs text-muted-foreground">Annualised cost avoidance</p>
              </div>
              <div className="rounded-2xl border border-glass-border bg-glass p-5">
                <div className="text-2xl font-bold">{result.payback} mo</div>
                <p className="mt-1 text-xs text-muted-foreground">Estimated payback period</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              Validate this with an architect <ArrowRight className="size-4" />
            </Link>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Indicative model based on 150+ delivered programmes.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Enterprise Trust" title="Teams that build with us" />
        <div className="glass mt-10 overflow-hidden rounded-3xl py-6">
          <div className="flex w-max animate-ticker gap-12 px-6">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-xl font-bold text-muted-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-7">
              <Quote className="size-7 text-primary" />
              <p className="mt-4 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard hover={false} className="mt-8 overflow-hidden p-10 text-center sm:p-14">
          <h3 className="text-3xl font-extrabold sm:text-4xl">
            Ready to build your <span className="text-gradient">intelligence layer</span>?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a 45-minute architecture session with our Bangalore innovation lab. No pitch decks
            — just engineers.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-primary)" }}
          >
            Schedule Consultation <ArrowRight className="size-4" />
          </Link>
        </GlassCard>
      </Section>
    </>
  );
}
