import { Fragment } from "react";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import {
  Building2,
  Sparkles,
  MessageSquareReply,
  CalendarCheck,
  Wallet,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Step = {
  pill: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  tile: string;
  highlight?: boolean;
};

const STEPS: Step[] = [
  {
    pill: "Step 01",
    title: "Set up",
    desc: "Tell BizPilot your business, services, and goal for the month.",
    Icon: Building2,
    tile: "bg-brand-soft text-brand",
  },
  {
    pill: "Step 02",
    title: "AI plans",
    desc: "Get a content calendar, captions, and ad ideas tailored to you.",
    Icon: Sparkles,
    tile: "bg-[#ede9fe] text-[#7c3aed]",
  },
  {
    pill: "Step 03",
    title: "Win leads",
    desc: "Reply to enquiries and follow up automatically until they book.",
    Icon: MessageSquareReply,
    tile: "bg-surface text-brand shadow-soft",
    highlight: true,
  },
  {
    pill: "Step 04",
    title: "Get bookings",
    desc: "Turn conversations into confirmed bookings and repeat visits.",
    Icon: CalendarCheck,
    tile: "bg-accent-amber-soft text-accent-amber",
  },
  {
    pill: "Step 05",
    title: "Track sales",
    desc: "Watch revenue grow and see which campaigns make the most money.",
    Icon: Wallet,
    tile: "bg-accent-green-soft text-accent-green",
  },
];

const CONNECTORS = ["Plan", "Post", "Convert", "Grow"];

const PILLS: { label: string; c: string }[] = [
  { label: "AI-powered", c: "#3b82f6" },
  { label: "No marketing skills needed", c: "#16a34a" },
  { label: "Works on WhatsApp & IG", c: "#f59e0b" },
  { label: "Set up in 2 minutes", c: "#3b82f6" },
  { label: "Real-time tracking", c: "#16a34a" },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-14">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          How it works — your growth flow
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:gap-0">
          {STEPS.map((step, i) => (
            <Fragment key={step.pill}>
              <div
                className={cn(
                  "relative flex flex-1 flex-col items-center rounded-2xl border px-4 pb-6 pt-9 text-center",
                  step.highlight
                    ? "border-brand/40 bg-gradient-to-b from-[#e8f1fe] to-[#ecfdf3] shadow-float"
                    : "border-border-subtle bg-surface shadow-card"
                )}
              >
                <span
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white",
                    step.highlight ? "bg-accent-green" : "bg-ink"
                  )}
                >
                  {step.pill}
                </span>

                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl",
                    step.tile
                  )}
                >
                  <step.Icon className="size-6" />
                </span>

                <h3 className="mt-4 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-secondary">
                  {step.desc}
                </p>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden shrink-0 flex-col items-center justify-center gap-1 self-center px-2 lg:flex">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-ink-muted">
                    {CONNECTORS[i]}
                  </span>
                  <ChevronRight className="size-4 text-brand" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {PILLS.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-ink shadow-soft"
            >
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: p.c }}
              />
              {p.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
