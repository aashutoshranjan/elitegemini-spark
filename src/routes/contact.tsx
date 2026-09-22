import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Paperclip,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { GlassCard, Section, Eyebrow, SectionHeading } from "../components/ui-kit";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Elitegemini Innovations | Bangalore HQ" },
      {
        name: "description",
        content:
          "Talk to our Bangalore team on M.G. Road. Share your project brief, budget and timeline, or book a 45-minute architecture session.",
      },
      { property: "og:title", content: "Contact Elitegemini Innovations — Bengaluru" },
      {
        property: "og:description",
        content:
          "K39/7, Mahatma Gandhi Rd, Ashok Nagar, Bengaluru 560001. Enquiries answered within one business day.",
      },
      { property: "og:url", content: "https://elitegemini-spark.lovable.app/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://elitegemini-spark.lovable.app/contact" }],
  }),
  component: Contact,
});

const servicesList = [
  "Custom AI & Generative AI",
  "Cloud Transformation & DevOps",
  "Web & Mobile Engineering",
  "Enterprise Modernization & Security",
];
const budgets = ["< $25K", "$25K – $100K", "$100K – $500K", "$500K+"];

const slots = ["Tue 10:30", "Tue 15:00", "Wed 11:00", "Wed 16:30", "Thu 09:30", "Thu 14:00"];

const inputClass =
  "w-full rounded-2xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: servicesList[0],
    budget: budgets[1],
    message: "",
  });
  const [file, setFile] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [slot, setSlot] = useState(slots[0]);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = "Enter a valid business email";
    if (form.phone.replace(/\D/g, "").length < 8) next.phone = "Enter a reachable phone number";
    if (form.message.trim().length < 20) next.message = "Tell us a bit more (20+ characters)";
    setErrors(next);
    if (Object.keys(next).length) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    setSent(true);
    toast.success("Brief received — an architect will reply within one business day.");
  };

  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="text-center">
          <Eyebrow>Let's Talk</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Start a conversation with <span className="text-gradient">our architects</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Every enquiry is read by a senior engineer, not a sales queue.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <GlassCard hover={false} className="p-8 sm:p-10 lg:col-span-3">
            {sent ? (
              <div className="py-16 text-center">
                <CheckCircle2 className="mx-auto size-14 text-primary" />
                <h2 className="mt-6 text-2xl font-extrabold">Thank you, {form.name.split(" ")[0]}</h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                  Your brief on <strong>{form.service}</strong> is with our Bangalore team. Expect a
                  reply at {form.email} within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-full border border-glass-border bg-glass px-6 py-3 text-sm font-semibold"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h2 className="text-xl font-bold">Project enquiry</h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--subheading)" }}>
                      Full name
                    </label>
                    <input
                      className={`${inputClass} mt-2 ${errors.name ? "border-destructive" : ""}`}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Ananya Rao"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--subheading)" }}>
                      Business email
                    </label>
                    <input
                      className={`${inputClass} mt-2 ${errors.email ? "border-destructive" : ""}`}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--subheading)" }}>
                      Phone
                    </label>
                    <input
                      className={`${inputClass} mt-2 ${errors.phone ? "border-destructive" : ""}`}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--subheading)" }}>
                      Service interested in
                    </label>
                    <select
                      className={`${inputClass} mt-2`}
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                    >
                      {servicesList.map((s) => (
                        <option key={s} value={s} className="bg-popover text-popover-foreground">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--subheading)" }}>
                    Budget range
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => set("budget", b)}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                          form.budget === b
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--subheading)" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`${inputClass} mt-2 resize-none ${errors.message ? "border-destructive" : ""}`}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="What are you trying to build, and what's blocking it today?"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-glass-border bg-glass px-5 py-4 text-sm text-muted-foreground transition-colors hover:border-primary/60">
                  <Paperclip className="size-4 text-primary" />
                  {file ?? "Attach an RFP, brief or architecture doc (PDF, DOCX — max 10MB)"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--glow-primary)" }}
                >
                  Send enquiry <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </GlassCard>

          <div className="grid gap-6 lg:col-span-2">
            <GlassCard hover={false} className="p-8">
              <h2 className="text-lg font-bold">Bangalore Headquarters</h2>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  K39/7, Mahatma Gandhi Rd, behind Oriental Bank of Commerce, Craig Park Layout,
                  Ashok Nagar, Bengaluru, Karnataka 560001
                </li>
                <li className="flex gap-3">
                  <Phone className="size-4 shrink-0 text-primary" /> +91 80 4718 2200
                </li>
                <li className="flex gap-3">
                  <Mail className="size-4 shrink-0 text-primary" /> support@elitegemini.com
                </li>
                <li className="flex gap-3">
                  <Clock className="size-4 shrink-0 text-primary" /> Mon–Fri, 09:30–19:00 IST
                </li>
              </ul>
              <div className="mt-6 overflow-hidden rounded-2xl border border-glass-border">
                <iframe
                  title="Elitegemini Innovations Bangalore office map"
                  src="https://maps.google.com/maps?q=Mahatma%20Gandhi%20Road%2C%20Ashok%20Nagar%2C%20Bengaluru%20560001&z=15&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </GlassCard>

            <GlassCard hover={false} className="p-8">
              <div className="flex items-center gap-2">
                <CalendarCheck className="size-5 text-primary" />
                <h2 className="text-lg font-bold">Book a 45-min session</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Pick a slot (IST) and we'll confirm the invite by email.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors ${
                      slot === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-glass-border bg-glass text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button
                onClick={() => toast.success(`Slot requested: ${slot} IST — confirmation on its way.`)}
                className="mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                Confirm {slot} IST
              </button>
            </GlassCard>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Response Promise"
          title="One business day, always"
          subtitle="Enquiries received before 18:00 IST are triaged the same day by a delivery lead."
        />
      </Section>
    </>
  );
}
