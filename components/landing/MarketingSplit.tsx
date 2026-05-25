import Link from "next/link";
import { Container, SectionLabel } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  Bell,
  Zap,
  BadgeCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const FEATURE_CARDS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: CalendarDays,
    title: "AI Content Planner",
    desc: "Generate weekly and monthly plans with captions, CTAs, and visual prompts.",
  },
  {
    icon: Bell,
    title: "Smarter Follow-ups",
    desc: "Reply to leads faster and keep every opportunity moving.",
  },
];

const ACTIVITY: { title: string; sub: string; dim?: boolean }[] = [
  { title: "Weekend promo generated", sub: "Content · just now", dim: true },
  { title: "me.bizpilot.app", sub: "23 leads" },
  { title: "Glow Beauty", sub: "Follow-up due today" },
  { title: "UrbanFade Studio", sub: "67 clicks" },
  { title: "Kopi Haus weekend deal", sub: "39 leads", dim: true },
];

export function MarketingSplit() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16">
          {/* left */}
          <div>
            <SectionLabel>Smarter Marketing, Better Sales</SectionLabel>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Marketing that works harder than you do
            </h2>
            <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-ink-secondary">
              Turn scattered content ideas, customer messages, and manual
              follow-ups into a simple AI-powered workflow.
            </p>

            <Link href="/sign-up">
              <Button size="lg" className="mt-7">
                Explore
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            {/* feature cards */}
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle shadow-card sm:grid-cols-2">
              {FEATURE_CARDS.map((card) => (
                <div key={card.title} className="bg-surface p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <card.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                    {card.desc}
                  </p>
                  <a
                    href="#features"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-deep"
                  >
                    Learn more
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="lg:border-l lg:border-border-subtle lg:pl-12">
            <div className="space-y-3.5">
              {ACTIVITY.map((row) => (
                <div
                  key={row.title}
                  className={cn(
                    "flex items-center justify-between gap-4 rounded-2xl border border-border-subtle bg-surface px-5 py-4 shadow-soft transition-shadow hover:shadow-card",
                    row.dim && "opacity-45"
                  )}
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-full",
                        row.dim
                          ? "bg-surface-muted text-ink-muted"
                          : "bg-brand text-white"
                      )}
                    >
                      <Zap className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[15px] font-semibold text-ink">
                        {row.title}
                      </p>
                      <p className="truncate text-[13px] text-ink-muted">
                        {row.sub}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-green-soft px-3 py-1.5 text-[13px] font-medium text-accent-green">
                    <BadgeCheck className="size-4" />
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
