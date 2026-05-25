import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChartMock } from "@/components/dashboard/RevenueChartMock";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Avatar } from "@/components/shared/Avatar";
import { Table, THead, TH, TBody, TR, TD } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import {
  REVENUE_MONTHLY,
  SALES,
  CAMPAIGNS,
  type Metric,
} from "@/lib/mock-data";
import { formatRM } from "@/lib/utils";
import { Download } from "lucide-react";

const REV_METRICS: Metric[] = [
  {
    label: "Revenue this month",
    value: "RM12,450",
    hint: "+18% vs last month",
    trend: "up",
    accent: "green",
  },
  {
    label: "Closed sales",
    value: "48",
    hint: "+11 this month",
    trend: "up",
    accent: "blue",
  },
  {
    label: "Avg. order value",
    value: "RM86",
    hint: "+RM6 vs last month",
    trend: "up",
    accent: "neutral",
  },
  {
    label: "Conversion rate",
    value: "32%",
    hint: "-2% vs last month",
    trend: "down",
    accent: "amber",
  },
];

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Revenue"
        description="Track sales, conversion, and which campaigns make you money."
        actions={
          <Button variant="secondary">
            <Download className="size-4" />
            Export
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {REV_METRICS.map((m) => (
          <MetricCard key={m.label} metric={m} />
        ))}
      </div>

      <DashboardCard
        title="Revenue trend"
        description="Last 5 months"
        action={
          <span className="text-sm font-medium text-accent-green">
            RM48,250 total
          </span>
        }
      >
        <RevenueChartMock data={REVENUE_MONTHLY} height={240} />
      </DashboardCard>

      <div className="grid gap-6 lg:grid-cols-5">
        <DashboardCard
          title="Recent sales"
          className="lg:col-span-3"
          bodyClassName="p-0"
        >
          <Table>
            <THead>
              <TH className="text-left">Customer</TH>
              <TH className="text-left">Service</TH>
              <TH className="text-left">Date</TH>
              <TH className="text-left">Status</TH>
              <TH className="text-right">Amount</TH>
            </THead>
            <TBody>
              {SALES.map((sale) => (
                <TR key={sale.id}>
                  <TD>
                    <div className="flex items-center gap-2.5">
                      <Avatar name={sale.customer} size="sm" />
                      <span className="font-medium text-ink">
                        {sale.customer}
                      </span>
                    </div>
                  </TD>
                  <TD>{sale.service}</TD>
                  <TD>{sale.date}</TD>
                  <TD>
                    <StatusBadge
                      tone={sale.status === "Paid" ? "green" : "amber"}
                      dot
                    >
                      {sale.status}
                    </StatusBadge>
                  </TD>
                  <TD className="text-right font-semibold text-ink">
                    {formatRM(sale.amount)}
                  </TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </DashboardCard>

        <DashboardCard
          title="Campaign performance"
          className="lg:col-span-2"
          bodyClassName="space-y-3"
        >
          {CAMPAIGNS.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border-subtle bg-canvas/50 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-ink">{c.name}</p>
                <StatusBadge tone={c.roas >= 6 ? "green" : "amber"}>
                  {c.roas}x ROAS
                </StatusBadge>
              </div>
              <p className="mt-0.5 text-xs text-ink-muted">{c.channel}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-ink-secondary">
                <span>Spend {formatRM(c.spend)}</span>
                <span>Revenue {formatRM(c.revenue)}</span>
                <span>{c.bookings} bookings</span>
              </div>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${Math.min(c.roas / 10, 1) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </DashboardCard>
      </div>
    </div>
  );
}
