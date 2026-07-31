import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X, Gauge, Timer, TrendingUp, Boxes } from "lucide-react";
import { GlassCard, Section, SectionHeading, Eyebrow } from "../components/ui-kit";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Enterprise AI & Cloud Results — Elitegemini" },
      {
        name: "description",
        content:
          "FinTech, healthcare, AI/SaaS and e-commerce transformations with measurable outcomes: +300% efficiency, 45ms latency, 38% cloud savings.",
      },
      { property: "og:title", content: "Elitegemini Case Studies & Portfolio" },
      {
        property: "og:description",
        content:
          "Detailed problem statements, solution architectures and metrics from delivered enterprise programmes.",
      },
    ],
  }),
  component: CaseStudies,
});

const filters = ["All", "FinTech", "Healthcare", "AI/SaaS", "E-Commerce"] as const;

type Study = {
  id: string;
  cat: (typeof filters)[number];
  client: string;
  title: string;
  problem: string;
  solution: string[];
  architecture: string[][];
  metrics: { icon: typeof Gauge; value: string; label: string }[];
  story: string;
};

const studies: Study[] = [
  {
    id: "nimbuspay",
    cat: "FinTech",
    client: "NimbusPay",
    title: "Real-time fraud scoring for 4M daily transactions",
    problem:
      "Batch fraud review ran overnight, so chargebacks were discovered up to 26 hours after settlement and the rules engine could not adapt to new attack patterns.",
    solution: [
      "Streaming feature store on Kafka + Redis with 300ms freshness",
      "Gradient-boosted ensemble plus an LLM narrative reviewer for edge cases",
      "Shadow-mode rollout with automated model promotion gates",
    ],
    architecture: [
      ["Edge API", "Kafka Ingest", "Feature Store"],
      ["Scoring Service", "Model Registry", "Rules Engine"],
      ["Case Review UI", "Audit Ledger", "Observability"],
    ],
    metrics: [
      { icon: Timer, value: "45ms", label: "p95 scoring latency" },
      { icon: TrendingUp, value: "+300%", label: "Review team efficiency" },
      { icon: Gauge, value: "-62%", label: "Chargeback losses" },
    ],
    story:
      "We embedded a five-person pod for 22 weeks. The first six were spent instrumenting the existing monolith so we could replay a year of transactions against candidate models. Once the streaming feature store was live, the scoring service was deployed in shadow mode for eight weeks before taking production traffic — no customer-facing incident during cutover. NimbusPay now retrains weekly on a self-service pipeline owned entirely by their in-house team.",
  },
  {
    id: "medhya",
    cat: "Healthcare",
    client: "Medhya Health",
    title: "Generative AI claims adjudication across 40 hospitals",
    problem:
      "Claim packets arrived as scanned PDFs in six languages. Manual adjudication averaged four days and denial rates were rising due to inconsistent documentation checks.",
    solution: [
      "Multilingual OCR pipeline with layout-aware document parsing",
      "RAG adjudication agent grounded in payer policy documents with citations",
      "Human-in-the-loop console with confidence thresholds and full audit trail",
    ],
    architecture: [
      ["Intake Gateway", "OCR & Layout", "PHI Redaction"],
      ["Policy Vector Store", "Adjudication Agent", "Guardrails"],
      ["Reviewer Console", "FHIR Sync", "Compliance Log"],
    ],
    metrics: [
      { icon: Timer, value: "40 min", label: "Median adjudication" },
      { icon: TrendingUp, value: "94.6%", label: "Agent agreement rate" },
      { icon: Gauge, value: "-71%", label: "Denials from doc errors" },
    ],
    story:
      "PHI never left the customer's VPC — inference ran on a private cluster we provisioned in-region. Every agent decision carries a citation back to the exact policy clause, which is what unlocked clinical sign-off. Reviewers now handle exceptions only; the console routes anything below the confidence threshold to a specialist queue with the model's reasoning attached.",
  },
  {
    id: "vertex",
    cat: "E-Commerce",
    client: "Vertex Retail",
    title: "Replatforming a 12-year-old commerce monolith",
    problem:
      "Peak-season deploys were frozen for six weeks a year, page loads averaged 4.8s, and cloud spend grew 9% per quarter with flat traffic.",
    solution: [
      "Strangler-fig migration to domain services behind an edge gateway",
      "Edge-rendered storefront with per-route caching and image pipeline",
      "Kubernetes platform with autoscaling, SLOs and FinOps dashboards",
    ],
    architecture: [
      ["Edge CDN", "Storefront SSR", "BFF Gateway"],
      ["Catalog Svc", "Cart & Pricing", "Order Svc"],
      ["Search Cluster", "Event Bus", "Legacy Adapter"],
    ],
    metrics: [
      { icon: Timer, value: "0.9s", label: "LCP on mobile" },
      { icon: TrendingUp, value: "+41%", label: "Conversion on mobile" },
      { icon: Gauge, value: "-38%", label: "Monthly cloud spend" },
    ],
    story:
      "The monolith stayed in production the entire time. We routed traffic domain by domain through an edge gateway, starting with catalog reads and ending with checkout eleven months later. Deploy freezes are gone: Vertex now ships during Diwali peak with progressive delivery and automatic rollback on SLO burn.",
  },
];

function CaseStudies() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Study | null>(null);

  const visible = studies.filter((s) => filter === "All" || s.cat === filter);

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="text-center">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Outcomes, not <span className="text-gradient">screenshots</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Selected programmes with the architecture and the numbers behind them.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No published case studies in this sector yet — talk to us about the work under NDA.
          </p>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visible.map((s) => (
            <GlassCard key={s.id} className="animate-rise flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {s.cat}
                </span>
                <span className="font-display text-sm font-bold text-gradient">{s.client}</span>
              </div>
              <h2 className="mt-5 text-xl font-bold leading-snug">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.problem}</p>

              <div className="mt-6 rounded-2xl border border-glass-border bg-glass p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <Boxes className="size-3.5 text-primary" /> Solution architecture
                </div>
                <div className="mt-3 space-y-2">
                  {s.architecture.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2">
                      {row.map((node) => (
                        <div
                          key={node}
                          className="truncate rounded-lg border border-glass-border bg-background/30 px-2 py-2 text-center text-[10px] font-medium"
                        >
                          {node}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {s.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <m.icon className="mx-auto size-4 text-primary" />
                    <div className="mt-1.5 text-base font-extrabold" style={{ color: "var(--aqua)" }}>{m.value}</div>
                    <div className="text-[10px] leading-tight text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setActive(s)}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                Read Full Story <ArrowRight className="size-4" />
              </button>
            </GlassCard>
          ))}
        </div>
      </Section>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="glass animate-rise max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl p-8 sm:rounded-3xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {active.cat} · {active.client}
                </span>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{active.title}</h2>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-glass-border bg-glass"
              >
                <X className="size-4" />
              </button>
            </div>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              The problem
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.problem}</p>

            <h3 className="mt-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              What we built
            </h3>
            <ul className="mt-3 space-y-2.5">
              {active.solution.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--brand-cyan)" }}
                  />
                  {p}
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              How it went
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.story}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {active.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-glass-border bg-glass p-5 text-center"
                >
                  <div className="text-2xl font-extrabold" style={{ color: "var(--aqua)" }}>{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
