import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BrainCircuit,
  Cloud,
  Smartphone,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Search,
  PenTool,
  Cog,
  TrendingUp,
} from "lucide-react";
import { GlassCard, Section, SectionHeading, Eyebrow } from "../components/ui-kit";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | AI, Cloud, Product & Security Engineering — Elitegemini" },
      {
        name: "description",
        content:
          "Custom AI and generative AI, cloud transformation and DevOps, web and mobile platform engineering, and enterprise modernization and security.",
      },
      { property: "og:title", content: "Elitegemini Services — AI, Cloud, Product, Security" },
      {
        property: "og:description",
        content:
          "Explore our four service lines, technology stack and the four-step Discover → Architect → Execute → Scale engagement model.",
      },
    ],
  }),
  component: Services,
});

const categories = ["All", "AI", "Cloud", "Product", "Security"] as const;

const services = [
  {
    icon: BrainCircuit,
    cat: "AI",
    title: "Custom AI & Generative AI Solutions",
    summary: "Production LLM systems, retrieval pipelines and predictive models tuned to your data.",
    points: [
      "RAG platforms over private knowledge bases with citation-grade accuracy",
      "Agentic workflows for document, claims and support operations",
      "Model evaluation harnesses, guardrails and hallucination monitoring",
      "Forecasting, anomaly detection and computer vision at edge or cloud",
    ],
  },
  {
    icon: Cloud,
    cat: "Cloud",
    title: "Cloud Transformation & DevOps",
    summary: "Migrate, modernise and operate on AWS, Azure or GCP with FinOps discipline.",
    points: [
      "Landing zones, multi-account governance and IaC with Terraform",
      "Kubernetes platform engineering and progressive delivery",
      "Observability stacks with SLOs, tracing and error budgets",
      "Cost engineering that typically returns 25–40% of monthly spend",
    ],
  },
  {
    icon: Smartphone,
    cat: "Product",
    title: "Web & Mobile Platform Engineering",
    summary: "Design-led product teams shipping performant, accessible experiences.",
    points: [
      "React, Next-gen SSR and edge-rendered web platforms",
      "React Native and native mobile with offline-first sync",
      "Design systems, accessibility audits and Core Web Vitals tuning",
      "Embedded analytics and experimentation infrastructure",
    ],
  },
  {
    icon: ShieldCheck,
    cat: "Security",
    title: "Enterprise Modernization & Security",
    summary: "Retire legacy risk without pausing the business.",
    points: [
      "Monolith decomposition with strangler-fig migration paths",
      "Zero-trust identity, secrets management and policy-as-code",
      "Threat modelling, pen-test remediation and SOC2/ISO evidence",
      "Data platform modernisation and lineage governance",
    ],
  },
];

const stackTabs = {
  Frontend: ["React 19", "TypeScript", "TanStack", "Tailwind CSS", "Vite", "React Native", "Storybook"],
  Backend: ["Node.js", "Go", "Python FastAPI", "GraphQL", "PostgreSQL", "Kafka", "Redis"],
  "AI / ML": ["PyTorch", "LangGraph", "Hugging Face", "pgvector", "Ray", "MLflow", "ONNX"],
  "Cloud & DevOps": ["AWS", "Azure", "Kubernetes", "Terraform", "ArgoCD", "Grafana", "GitHub Actions"],
} as const;

const process = [
  { icon: Search, title: "Discover", body: "Workshops, system audit and a costed opportunity map in 2 weeks." },
  { icon: PenTool, title: "Architect", body: "Reference architecture, ADRs, security model and delivery plan." },
  { icon: Cog, title: "Execute", body: "Cross-functional pods shipping to production every sprint." },
  { icon: TrendingUp, title: "Scale", body: "Hardening, enablement and managed run with clear SLOs." },
];

function Services() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<string | null>(services[0].title);
  const [tab, setTab] = useState<keyof typeof stackTabs>("Frontend");

  const visible = services.filter((s) => filter === "All" || s.cat === filter);

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="text-center">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Services engineered for <span className="text-gradient">enterprise reality</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Four service lines, one senior delivery standard — from first prototype to regulated
            production.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4">
          {visible.map((s) => {
            const isOpen = open === s.title;
            return (
              <GlassCard key={s.title} hover={false} className="overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : s.title)}
                  className="flex w-full items-center gap-5 p-7 text-left"
                >
                  <span
                    className="grid size-12 shrink-0 place-items-center rounded-2xl"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <s.icon className="size-6 text-primary-foreground" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold">{s.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{s.summary}</span>
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-3 border-t border-glass-border px-7 py-6 sm:pl-24">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--brand-cyan)" }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Stack Explorer"
          title="The tools we trust in production"
          subtitle="Opinionated, boring where it matters, modern where it pays off."
        />
        <GlassCard hover={false} className="mt-10 p-7 sm:p-10">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(stackTabs) as (keyof typeof stackTabs)[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  tab === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stackTabs[tab].map((item) => (
              <div
                key={item}
                className="animate-rise rounded-2xl border border-glass-border bg-glass px-5 py-4 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      <Section>
        <SectionHeading eyebrow="Engagement Model" title="Four steps from idea to scale" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <GlassCard key={p.title} className="relative p-7">
              <span className="font-display text-sm font-extrabold text-muted-foreground/50">
                STEP 0{i + 1}
              </span>
              <span
                className="mt-4 grid size-12 place-items-center rounded-2xl"
                style={{ background: "var(--gradient-brand)" }}
              >
                <p.icon className="size-6 text-primary-foreground" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-primary)" }}
          >
            Start with a discovery call <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
