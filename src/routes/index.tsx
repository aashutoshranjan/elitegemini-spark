import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BrainCircuit,
  Cloud,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Quote,
  Code2,
  BarChart3,
  Workflow,
  Lightbulb,
  Check,
  Users,
  Globe2,
  Rocket,
  Target,
  Layers,
  Plus,
  Minus,
} from "lucide-react";
import { useMemo, useState } from "react";
import { GlassCard, Section, SectionHeading, Eyebrow } from "../components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elitegemini Innovations | AI & Software Company in Bangalore" },
      {
        name: "description",
        content:
          "Elitegemini Innovations builds custom AI, cloud, data and enterprise software solutions for startups, SMEs and enterprises from Bangalore, India.",
      },
      { property: "og:title", content: "Elitegemini Innovations | AI & Software Company" },
      {
        property: "og:description",
        content:
          "Bangalore's premier custom AI, cloud and enterprise software innovation hub. 150+ enterprise apps delivered.",
      },
      { property: "og:url", content: "https://elitegemini-spark.lovable.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://elitegemini-spark.lovable.app" }],
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
      "Elitegemini Innovations rebuilt our claims engine around an LLM pipeline. Processing time dropped from 4 days to 40 minutes.",
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

const services = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Machine Learning",
    body: "LLM copilots, RAG systems, predictive models and computer vision built for production reliability.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    body: "Bespoke platforms engineered around your workflows, not around an off-the-shelf template.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    body: "Design-led React, React Native and edge-rendered experiences that feel instant everywhere.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & DevOps",
    body: "Kubernetes, IaC, CI/CD and FinOps-tuned platforms across AWS, Azure and Google Cloud.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    body: "Modern data stacks, warehouses, semantic layers and dashboards leaders actually use.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    body: "Zero-trust architecture, threat modelling, SOC2/ISO readiness and continuous security automation.",
  },
  {
    icon: Workflow,
    title: "Enterprise Automation & Digital Transformation",
    body: "Process mining, intelligent document workflows and legacy modernisation with measurable ROI.",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting & Managed Services",
    body: "Architecture reviews, technology roadmaps and 24/7 managed operations from Bengaluru.",
  },
];

const whyUs = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    body: "Every engagement starts with your business goals, budget reality and delivery constraints — never a template.",
  },
  {
    icon: Target,
    title: "Experienced Technology Experts",
    body: "Senior architects and engineers who have shipped regulated, high-volume systems since 2017.",
  },
  {
    icon: Layers,
    title: "Scalable & Secure Solutions",
    body: "Architecture that survives 100x growth, with security and compliance designed in from day one.",
  },
  {
    icon: Rocket,
    title: "Innovation-Driven Development",
    body: "Applied AI research folded into everyday delivery, so your roadmap stays ahead of the market.",
  },
  {
    icon: Globe2,
    title: "Global Delivery Standards",
    body: "Bengaluru engineering with overlapping hours, transparent reporting and enterprise-grade governance.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Excellence",
    body: "Fixed commitments, honest estimates and code you own outright — no lock-in, no surprises.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    body: "Workshops with your stakeholders to map processes, data and the commercial outcome we are chasing.",
  },
  {
    step: "02",
    title: "Architect",
    body: "Solution blueprint, technology selection, security model and a delivery plan with clear milestones.",
  },
  {
    step: "03",
    title: "Build",
    body: "Two-week sprints, demoable increments, automated testing and continuous deployment pipelines.",
  },
  {
    step: "04",
    title: "Scale",
    body: "Observability, performance tuning, managed operations and a quarterly innovation roadmap.",
  },
];

const industriesServed = [
  "FinTech & Banking",
  "Healthcare & Life Sciences",
  "Retail & E-Commerce",
  "Manufacturing & Supply Chain",
  "SaaS & Technology",
  "Logistics & Mobility",
  "EdTech",
  "Energy & Utilities",
];

const techStack = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Go",
  "PyTorch",
  "LangChain",
  "Kubernetes",
  "Terraform",
  "AWS",
  "Azure",
  "GCP",
  "PostgreSQL",
  "Snowflake",
  "Kafka",
  "Databricks",
];

const engagementModels = [
  {
    title: "Dedicated Product Team",
    body: "A cross-functional squad — architect, engineers, designer, QA — embedded with your business for the long run.",
    points: ["Monthly rolling contract", "Your tooling and rituals", "Scale up or down each quarter"],
  },
  {
    title: "Fixed-Scope Delivery",
    body: "A defined outcome, a defined budget and a defined date. Ideal for MVPs, migrations and modernisation.",
    points: ["Milestone-based billing", "Signed-off scope document", "Warranty period included"],
  },
  {
    title: "Managed Services & Support",
    body: "24/7 operations, SRE cover and continuous improvement for platforms already running in production.",
    points: ["SLA-backed response", "Proactive cost optimisation", "Quarterly roadmap reviews"],
  },
];

const faqs = [
  {
    q: "How quickly can a team start?",
    a: "For most engagements we mobilise a discovery lead within a week and a full squad within two to three weeks, depending on the specialisations required.",
  },
  {
    q: "Do you work with startups as well as enterprises?",
    a: "Yes. We deliberately serve startups, SMEs and large enterprises — the engineering standard is identical, only the engagement model and cadence change.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do, completely. All source code, infrastructure definitions and documentation are transferred to your accounts as they are written.",
  },
  {
    q: "How do you approach AI safety and data privacy?",
    a: "Data residency, PII redaction, evaluation harnesses and human-in-the-loop review are part of every AI programme, alongside DPDP and GDPR alignment.",
  },
  {
    q: "Can you work with our existing in-house team?",
    a: "Frequently. We integrate into your sprint rituals, review your pull requests and hand over knowledge continuously so your team grows with the platform.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <GlassCard hover={false} className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold">{q}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-glass-border bg-glass text-primary">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      {open && <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </GlassCard>
  );
}

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
            ["$500M+", "Client value created since 2017"],
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
                style={{
                  background: "color-mix(in oklab, var(--emerald) 88%, transparent)",
                  boxShadow: "0 10px 30px -12px color-mix(in oklab, var(--emerald) 70%, transparent)",
                }}
              >
                <e.icon className="size-6" style={{ color: "oklch(0.99 0 0)" }} />
              </span>

              <h3 className="mt-5 text-lg font-bold">{e.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title={
                <>
                  Future-ready technology that drives{" "}
                  <span className="text-gradient">measurable impact</span>
                </>
              }
              subtitle="We empower startups, SMEs and enterprises with intelligent, reliable and scalable systems — combining deep technical expertise with a genuinely customer-first way of working."
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              From concept to deployment, our Bengaluru team builds high-quality digital products
              tailored to each client's business goals — engineered for efficiency, innovation and
              sustainable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Innovation", "Integrity", "Excellence"].map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-glass-border bg-glass px-5 py-2 text-sm font-semibold"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["2017", "Founded in Bengaluru"],
              ["40+", "Engineers, designers & architects"],
              ["12", "Countries served"],
              ["96%", "Client retention rate"],
            ].map(([stat, label]) => (
              <GlassCard key={stat} className="p-7">
                <div className="text-3xl font-extrabold text-gradient">{stat}</div>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Eight practices, one <span className="text-gradient">delivery standard</span>
            </>
          }
          subtitle="A complete engineering partner — from applied AI research through to managed operations."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <GlassCard key={s.title} className="flex h-full flex-col p-7">
              <span
                className="grid size-11 place-items-center rounded-2xl"
                style={{
                  background: "color-mix(in oklab, var(--emerald) 88%, transparent)",
                  boxShadow:
                    "0 10px 30px -12px color-mix(in oklab, var(--emerald) 70%, transparent)",
                }}
              >
                <s.icon className="size-5" style={{ color: "oklch(0.99 0 0)" }} />
              </span>
              <h3 className="mt-5 text-base font-bold leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            See how we deliver <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why Elitegemini Innovations"
          title={
            <>
              Chosen for <span className="text-gradient">rigour</span>, retained for results
            </>
          }
          subtitle="Innovation. Integrity. Excellence. Building tomorrow's technology, today."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <GlassCard key={w.title} className="p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-glass-border bg-glass text-primary">
                  <w.icon className="size-5" />
                </span>
                <h3 className="text-base font-bold">{w.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Domains we know from the inside"
          subtitle="Regulated, data-heavy and operationally complex sectors are where our architecture work pays for itself fastest."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industriesServed.map((i) => (
            <GlassCard key={i} className="flex items-center gap-3 p-5">
              <Check className="size-4 shrink-0 text-primary" />
              <span className="text-sm font-semibold">{i}</span>
            </GlassCard>
          ))}
        </div>

        <div className="glass mt-10 overflow-hidden rounded-3xl py-5">
          <div className="flex w-max animate-ticker gap-10 px-6">
            {[...techStack, ...techStack].map((t, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-muted-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>
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
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              From concept to <span className="text-gradient">deployment</span>
            </>
          }
          subtitle="A four-stage delivery model refined across 150+ enterprise programmes."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <GlassCard key={p.step} className="relative p-7">
              <span
                className="text-4xl font-extrabold"
                style={{ color: "color-mix(in oklab, var(--emerald) 85%, transparent)" }}
              >
                {p.step}
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Engagement Models"
          title="Work with us the way that fits"
          subtitle="Startup, SME or enterprise — the commercial model flexes, the engineering standard does not."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((m) => (
            <GlassCard key={m.title} className="flex h-full flex-col p-8">
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {m.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Discuss this model <ArrowRight className="size-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear before kick-off"
          subtitle="Still unsure? Write to support@elitegemini.com and an architect will reply, not a sales team."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
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
