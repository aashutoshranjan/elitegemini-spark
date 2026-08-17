import { Link } from "@tanstack/react-router";
import { Gem, Github, Globe, Linkedin, MapPin, Mail, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "./theme";

export function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-24 px-3 pb-6 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid size-9 place-items-center rounded-xl"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Gem className="size-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-extrabold">Elitegemini</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Bangalore-born engineering studio building enterprise AI, cloud and product platforms
              for global teams.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social profile"
                  className="grid size-9 place-items-center rounded-full border border-glass-border bg-glass text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/case-studies", "Case Studies"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Bangalore HQ
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                K39/7, Mahatma Gandhi Rd, behind Oriental Bank of Commerce, Craig Park Layout, Ashok
                Nagar, Bengaluru, Karnataka 560001
              </li>
              <li className="flex gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:support@elitegemini.com" className="hover:text-primary">
                  support@elitegemini.com
                </a>
              </li>
              <li className="flex gap-2.5">
                <Globe className="size-4 shrink-0 text-primary" /> elitegemini.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Monthly briefings on applied AI and cloud architecture.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.includes("@")) return toast.error("Enter a valid email address");
                setEmail("");
                toast.success("You're subscribed to the Elitegemini briefing.");
              }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-full border border-glass-border bg-glass px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-10 shrink-0 place-items-center rounded-full text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Send className="size-4" />
              </button>
            </form>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              Theme: {theme === "dark" ? "Deep Space Dark" : "Frosted Light"}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-glass-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Elitegemini Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Bengaluru · Karnataka · India</p>
        </div>
      </div>
    </footer>
  );
}
