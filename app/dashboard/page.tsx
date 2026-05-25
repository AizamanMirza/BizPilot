import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { FollowUpCard } from "@/components/dashboard/FollowUpCard";
import { ContentCard } from "@/components/dashboard/ContentCard";
import { KanbanColumn } from "@/components/dashboard/KanbanColumn";
import { RevenueChartMock } from "@/components/dashboard/RevenueChartMock";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  METRICS,
  AI_SUGGESTIONS,
  FOLLOW_UPS,
  CONTENT,
  LEADS,
  LEAD_STATUSES,
  REVENUE_TREND,
  BEST_CAMPAIGN,
  USER,
} from "@/lib/mock-data";
import { formatRM } from "@/lib/utils";
import {
  Sparkles,
  Plus,
  ArrowRight,
  Megaphone,
  TrendingUp,
  Trophy,
} from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* greeting */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            Good morning, {USER.firstName}
          </h1>
          <p className="mt-1 text-sm text-ink-secondary">
            Here’s what needs your attention today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="md">
            <Plus className="size-4" />
            Add Lead
          </Button>
          <Link href="/dashboard/ai-generator">
            <Button size="md">
              <Sparkles className="size-4" />
              Generate with AI
            </Button>
          </Link>
        </div>
      </div>

      {/* metrics */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {METRICS.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      {/* AI suggestions + follow-ups */}
      <div className="grid gap-6 lg:grid-cols-3">
        <DashboardCard
          title="Today’s AI Suggestions"
          description="Smart moves for today, ranked by impact."
          className="lg:col-span-2"
          action={
            <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <Sparkles className="size-4" />
            </span>
          }
          bodyClassName="space-y-3"
        >
          {AI_SUGGESTIONS.map((s) => (
            <div
              key={s.id}
              className="flex items-start justify-between gap-4 rounded-2xl border border-border-subtle bg-canvas/50 p-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-ink">{s.title}</p>
                  <StatusBadge tone="blue">{s.tag}</StatusBadge>
                </div>
                <p className="mt-1 text-sm text-ink-secondary">{s.detail}</p>
              </div>
              <Button size="sm" variant="ghost" className="shrink-0">
                <ArrowRight className="size-4" />
              </Button>
            </div>
          ))}
        </DashboardCard>

        <DashboardCard
          title="Follow-ups Due"
          description={`${FOLLOW_UPS.length} customers need a nudge`}
          action={
            <Link href="/dashboard/follow-ups">
              <Button size="sm" variant="ghost">
                View all
              </Button>
            </Link>
          }
          bodyClassName="space-y-2.5"
        >
          {FOLLOW_UPS.slice(0, 3).map((fu) => (
            <div
              key={fu.id}
              className="rounded-2xl border border-border-subtle bg-canvas/50 p-3.5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-ink">{fu.name}</p>
                <StatusBadge
                  tone={
                    fu.priority === "high"
                      ? "red"
                      : fu.priority === "medium"
                        ? "amber"
                        : "neutral"
                  }
                >
                  {fu.due}
                </StatusBadge>
              </div>
              <p className="mt-1 text-xs text-ink-secondary">{fu.reason}</p>
            </div>
          ))}
        </DashboardCard>
      </div>

      {/* content plan */}
      <DashboardCard
        title="This Week’s Content Plan"
        description="7 days ready to post"
        action={
          <Link href="/dashboard/content">
            <Button size="sm" variant="ghost">
              Open planner
            </Button>
          </Link>
        }
        bodyClassName="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CONTENT.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </DashboardCard>

      {/* lead pipeline */}
      <DashboardCard
        title="Lead Pipeline"
        description="Drag-and-drop view of your enquiries"
        action={
          <Link href="/dashboard/leads">
            <Button size="sm" variant="ghost">
              View leads
            </Button>
          </Link>
        }
        bodyClassName="overflow-x-auto"
      >
        <div className="flex gap-4 lg:grid lg:grid-cols-5">
          {LEAD_STATUSES.map((status) => (
            <KanbanColumn
              key={status}
              title={status}
              leads={LEADS.filter((l) => l.status === status)}
            />
          ))}
        </div>
      </DashboardCard>

      {/* revenue + best campaign */}
      <div className="grid gap-6 lg:grid-cols-3">
        <DashboardCard
          title="Revenue Overview"
          description="Last 4 weeks"
          className="lg:col-span-2"
          action={
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-green">
              <TrendingUp className="size-4" /> +18%
            </span>
          }
        >
          <RevenueChartMock data={REVENUE_TREND} />
        </DashboardCard>

        <DashboardCard
          title="Best Performing Campaign"
          action={
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent-amber-soft text-accent-amber">
              <Trophy className="size-4" />
            </span>
          }
        >
          <div className="flex items-center gap-2">
            <Megaphone className="size-4 text-ink-secondary" />
            <p className="text-sm font-medium text-ink">{BEST_CAMPAIGN.name}</p>
          </div>
          <p className="mt-1 text-xs text-ink-muted">{BEST_CAMPAIGN.channel}</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border-subtle bg-canvas/50 p-3">
              <p className="text-xs text-ink-muted">Revenue</p>
              <p className="mt-0.5 text-base font-semibold text-ink">
                {formatRM(BEST_CAMPAIGN.revenue)}
              </p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-canvas/50 p-3">
              <p className="text-xs text-ink-muted">ROAS</p>
              <p className="mt-0.5 text-base font-semibold text-accent-green">
                {BEST_CAMPAIGN.roas}x
              </p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-canvas/50 p-3">
              <p className="text-xs text-ink-muted">Spend</p>
              <p className="mt-0.5 text-base font-semibold text-ink">
                {formatRM(BEST_CAMPAIGN.spend)}
              </p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-canvas/50 p-3">
              <p className="text-xs text-ink-muted">Bookings</p>
              <p className="mt-0.5 text-base font-semibold text-ink">
                {BEST_CAMPAIGN.bookings}
              </p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
