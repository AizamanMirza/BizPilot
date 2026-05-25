import { Container, SectionLabel } from "@/components/shared/Container";
import { MiniAreaChart } from "@/components/shared/MiniChart";
import { Avatar } from "@/components/shared/Avatar";
import { Sparkles, Send, CalendarRange } from "lucide-react";

function PanelCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-card border border-border-subtle bg-surface p-5 shadow-card">
      <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-ink-secondary">{description}</p>
      <div className="mt-4 flex-1 rounded-2xl border border-border-subtle bg-canvas/50 p-4">
        {children}
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <section id="product" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>The product</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            One workspace to run all your{" "}
            <span className="text-brand">marketing</span>
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Everything you need to plan content, win leads, and grow revenue —
            without juggling five different tools.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <PanelCard
            title="Generate content in seconds"
            description="Captions, hooks, promos, and ad copy tuned to your business."
          >
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Sparkles className="size-3.5" />
              </span>
              <span className="text-xs font-medium text-ink">
                Weekend promo post
              </span>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-full rounded-full bg-surface-muted" />
              <div className="h-2 w-11/12 rounded-full bg-surface-muted" />
              <div className="h-2 w-3/4 rounded-full bg-surface-muted" />
              <div className="h-2 w-2/3 rounded-full bg-surface-muted" />
            </div>
          </PanelCard>

          <PanelCard
            title="Reply to every lead"
            description="On-brand replies and follow-ups drafted and ready to send."
          >
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Avatar name="Sarah K" size="xs" />
                <p className="rounded-xl rounded-tl-sm bg-surface-muted px-3 py-2 text-[11px] text-ink-secondary">
                  How much for a hair treatment?
                </p>
              </div>
              <div className="flex items-start justify-end gap-2">
                <p className="rounded-xl rounded-tr-sm bg-brand px-3 py-2 text-[11px] text-white">
                  It’s RM120 and takes 45 mins. Thu 3pm or Sat 11am?
                </p>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-[11px] font-medium text-accent-green">
                <Send className="size-3" /> Suggested reply
              </div>
            </div>
          </PanelCard>

          <PanelCard
            title="Track what sells"
            description="See revenue, conversion, and your best campaigns at a glance."
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-ink-muted">This month</p>
                <p className="text-lg font-semibold text-ink">RM12,450</p>
              </div>
              <span className="rounded-full bg-accent-green-soft px-2 py-0.5 text-[11px] font-medium text-accent-green">
                +18%
              </span>
            </div>
            <MiniAreaChart className="mt-3 h-16 w-full" />
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-ink-secondary">
              <CalendarRange className="size-3" /> Updated live
            </div>
          </PanelCard>
        </div>
      </Container>
    </section>
  );
}
