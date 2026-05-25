import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Avatar } from "@/components/shared/Avatar";
import { Sparkles, Target, Wallet, FileText, Check, ThumbsUp } from "lucide-react";

const STEPS = [
  {
    icon: Target,
    title: "Pick your audience",
    status: "Recommended",
    tone: "green" as const,
    body: "Men, 25–34, within 10km of Shah Alam. Interests: grooming, streetwear, local lifestyle.",
    detail: "Est. reach 18,000 people",
  },
  {
    icon: Wallet,
    title: "Set your budget",
    status: "Suggested",
    tone: "blue" as const,
    body: "RM30/day for 5 days. Start small, then scale the winning ad.",
    detail: "Est. 9–14 bookings",
  },
  {
    icon: FileText,
    title: "Write your ad",
    status: "Ready",
    tone: "amber" as const,
    body: "Lead with the offer, show a before/after, end with a clear booking CTA.",
    detail: "2 variations drafted",
  },
];

const CHECKLIST = [
  "Use a real before/after photo, not a stock image",
  "Mention your location in the first line",
  "Add a clear offer with a deadline",
  "Send clicks straight to your booking link",
  "Turn off the ad after 48h if cost-per-booking is high",
];

export default function AdsCoachPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ads Coach"
        description="Run a Meta Ad that actually fills your calendar — step by step."
        actions={
          <Button>
            <Sparkles className="size-4" />
            Build my ad
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-card border border-border-subtle bg-surface p-5 shadow-card"
            >
              <div className="flex flex-col items-center">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-sm font-semibold text-white">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-border-subtle" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <step.icon className="size-4 text-ink-secondary" />
                    <h3 className="text-[15px] font-semibold text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <StatusBadge tone={step.tone}>{step.status}</StatusBadge>
                </div>
                <p className="mt-2 text-sm text-ink-secondary">{step.body}</p>
                <p className="mt-2 text-xs font-medium text-ink-muted">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}

          <DashboardCard title="Best practices" bodyClassName="space-y-2.5">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
                  <Check className="size-3" />
                </span>
                <span className="text-sm text-ink-secondary">{item}</span>
              </div>
            ))}
          </DashboardCard>
        </div>

        {/* ad preview */}
        <div className="space-y-6">
          <DashboardCard title="Ad preview" description="How it looks on Meta">
            <div className="overflow-hidden rounded-2xl border border-border-subtle">
              <div className="flex items-center gap-2.5 p-3">
                <Avatar name="UrbanFade Studio" size="sm" />
                <div className="leading-tight">
                  <p className="text-[13px] font-medium text-ink">
                    UrbanFade Studio
                  </p>
                  <p className="text-[11px] text-ink-muted">Sponsored</p>
                </div>
              </div>
              <p className="px-3 pb-3 text-sm text-ink-secondary">
                Sharpest fades in Shah Alam ✂️ New clients get RM5 off the first
                visit. Limited weekend slots — book today.
              </p>
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-surface-muted to-canvas">
                <span className="text-xs font-medium text-ink-muted">
                  Before / After photo
                </span>
              </div>
              <div className="flex items-center justify-between bg-canvas/60 px-3 py-2.5">
                <div>
                  <p className="text-[11px] text-ink-muted">URBANFADE.STUDIO</p>
                  <p className="text-[13px] font-medium text-ink">
                    Book your fade
                  </p>
                </div>
                <Button size="sm" variant="secondary">
                  Book now
                </Button>
              </div>
            </div>
          </DashboardCard>

          <div className="rounded-card border border-border-subtle bg-accent-green-soft/60 p-5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
              <ThumbsUp className="size-4.5" />
            </span>
            <h3 className="mt-3 text-sm font-semibold text-ink">
              Projected result
            </h3>
            <p className="mt-1 text-sm text-ink-secondary">
              At RM150 total spend, expect ~11 bookings and roughly RM720 in
              revenue — a 4.8x return.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
