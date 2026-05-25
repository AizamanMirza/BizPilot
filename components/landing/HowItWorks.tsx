"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import {
  Building2,
  CalendarRange,
  Megaphone,
  Users,
  MessageSquareReply,
  TrendingUp,
  Check,
  type LucideIcon,
} from "lucide-react";

type Step = {
  cat: string;
  catColor: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    cat: "Setup",
    catColor: "#64748b",
    Icon: Building2,
    title: "Business profile",
    desc: "Tell BizPilot your business, services, offers, tone, and monthly goal — set it once.",
  },
  {
    cat: "Content",
    catColor: "#3b82f6",
    Icon: CalendarRange,
    title: "AI content plan",
    desc: "Get weekly content ideas, captions, CTAs, and visual prompts tailored to your business.",
  },
  {
    cat: "Campaign",
    catColor: "#f59e0b",
    Icon: Megaphone,
    title: "Launch campaign",
    desc: "Turn your offer into posts, promos, WhatsApp messages, and Meta Ads direction.",
  },
  {
    cat: "Leads",
    catColor: "#3b82f6",
    Icon: Users,
    title: "Capture leads",
    desc: "Track interested customers from Instagram, WhatsApp, Facebook, or manual entry.",
  },
  {
    cat: "Engage",
    catColor: "#16a34a",
    Icon: MessageSquareReply,
    title: "Follow up",
    desc: "Generate natural replies, objection handling, and follow-up messages that convert.",
  },
  {
    cat: "Revenue",
    catColor: "#16a34a",
    Icon: TrendingUp,
    title: "Track revenue",
    desc: "See closed sales, campaign performance, conversion rate, and monthly revenue.",
  },
];

const dotGrid: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(20,35,63,0.05) 1px, transparent 1.5px)",
  backgroundSize: "24px 24px",
};

type Status = "pending" | "active" | "completed";

function StepCard({
  step,
  status,
  align,
}: {
  step: Step;
  status: Status;
  align: "left" | "right";
}) {
  const active = status === "active";
  const completed = status === "completed";
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-surface p-6 transition-all duration-500",
        active &&
          "border-brand shadow-[0_24px_50px_-20px_rgba(59,130,246,0.55)] md:scale-[1.03]",
        completed && "border-border-subtle shadow-card",
        status === "pending" && "border-border-subtle opacity-55"
      )}
    >
      {completed && (
        <span className="absolute right-4 top-4 flex size-5 items-center justify-center rounded-full bg-accent-green text-white">
          <Check className="size-3" />
        </span>
      )}
      <div
        className={cn(
          "flex items-center gap-2",
          align === "right" && "md:flex-row-reverse"
        )}
      >
        <span
          className="size-2 rounded-full"
          style={{ backgroundColor: step.catColor }}
        />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
          {step.cat}
        </span>
      </div>
      <div
        className={cn(
          "mt-4 flex items-center gap-3",
          align === "right" && "md:flex-row-reverse md:text-right"
        )}
      >
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-500",
            active ? "bg-brand text-white" : "bg-surface-muted text-ink-secondary"
          )}
        >
          <step.Icon className="size-5" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-ink">
          {step.title}
        </h3>
      </div>
      <p
        className={cn(
          "mt-3 text-[15px] leading-relaxed text-ink-secondary",
          align === "right" && "md:text-right"
        )}
      >
        {step.desc}
      </p>
    </div>
  );
}

const GHOST_CARDS = [
  "right-[7%] top-[9%] h-20 w-44",
  "left-[6%] top-[30%] h-16 w-40",
  "right-[9%] top-[55%] h-20 w-44",
  "left-[8%] top-[78%] h-16 w-40",
];

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // tie fill 1:1 to scrolling through the section: 0 as it enters,
      // 100% exactly when its bottom reaches the bottom of the viewport
      const denom = Math.max(rect.height - 0.8 * vh, 1);
      const p = (0.2 * vh - rect.top) / denom;
      const clamped = Math.max(0, Math.min(1, p));
      setProgress((prev) =>
        Math.abs(prev - clamped) > 0.004 ? clamped : prev
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const n = STEPS.length;
  const activeIndex = Math.max(0, Math.min(n - 1, Math.floor(progress * n)));
  const statusOf = (i: number): Status =>
    i < activeIndex ? "completed" : i === activeIndex ? "active" : "pending";

  return (
    <section id="how" ref={ref} className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            How it works — your growth flow
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            From content idea to closed sale, BizPilot keeps the flow moving.
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Set up your business once, then let BizPilot help you plan content,
            respond to leads, follow up, and track what actually brings revenue.
          </p>
        </div>

        <div
          className="relative mt-14 px-2 py-8 sm:px-6 sm:py-12"
          style={dotGrid}
        >
          {/* decorative dashed vertical guides */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {[25, 50, 75].map((x) => (
              <span
                key={x}
                className="absolute bottom-8 top-8 border-l border-dashed border-border-subtle/70"
                style={{ left: `${x}%` }}
              />
            ))}
          </div>
          {/* scattered ghost cards for depth */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {GHOST_CARDS.map((pos, i) => (
              <span
                key={i}
                className={cn(
                  "absolute rounded-2xl border border-border-subtle/60 bg-surface-muted/30",
                  pos
                )}
              />
            ))}
          </div>

          {/* flow rows + spine */}
          <div className="relative">
            {/* spine track */}
            <span className="absolute bottom-2 left-5 top-2 w-0.5 rounded-full bg-border-subtle md:left-1/2 md:-translate-x-1/2" />
            {/* spine fill */}
            <span
              className="absolute left-5 top-2 w-0.5 rounded-full bg-brand transition-[height] duration-300 ease-out md:left-1/2 md:-translate-x-1/2"
              style={{ height: `calc((100% - 1rem) * ${progress})` }}
            />

            <div className="relative space-y-10 md:space-y-0">
              {STEPS.map((step, i) => {
                const align = i % 2 === 0 ? "left" : "right";
                const s = statusOf(i);
                return (
                  <div
                    key={step.title}
                    className="relative flex min-h-[150px] md:min-h-[230px] md:items-center"
                  >
                    {/* card */}
                    <div
                      className={cn(
                        "relative z-10 w-full pl-12 md:w-[calc(50%-2.5rem)] md:pl-0",
                        align === "left"
                          ? "md:mr-auto md:pr-10"
                          : "md:ml-auto md:pl-10"
                      )}
                    >
                      <StepCard step={step} status={s} align={align} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
