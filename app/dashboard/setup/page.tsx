import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { BUSINESS } from "@/lib/mock-data";
import { Check, Sparkles } from "lucide-react";

const GOALS = [
  "Get more bookings this month",
  "Grow Instagram following",
  "Launch a new service",
  "Bring back past customers",
  "Increase average spend",
];

const CHANNELS = ["Instagram", "WhatsApp", "Facebook", "TikTok", "Walk-in"];

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      {children}
      {hint && <p className="text-xs text-ink-muted">{hint}</p>}
    </div>
  );
}

export default function SetupPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Business Setup"
        description="The more BizPilot knows, the sharper your AI content and replies."
        actions={
          <Button>
            <Check className="size-4" />
            Save changes
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <DashboardCard
            title="Business details"
            bodyClassName="grid gap-5 sm:grid-cols-2"
          >
            <Field label="Business name">
              <Input defaultValue={BUSINESS.name} />
            </Field>
            <Field label="Business type">
              <Select defaultValue={BUSINESS.type}>
                {["Barber", "Salon", "Beauty", "Cafe", "Tuition Centre", "Agency", "Home Service"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  )
                )}
              </Select>
            </Field>
            <Field label="Location">
              <Input defaultValue={BUSINESS.location} />
            </Field>
            <Field label="Price range">
              <Select defaultValue="RM30 – RM200">
                {["Under RM30", "RM30 – RM200", "RM200 – RM500", "RM500+"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  )
                )}
              </Select>
            </Field>
            <div className="sm:col-span-2">
              <Field
                label="What do you sell?"
                hint="List your main services or products, separated by commas."
              >
                <Textarea
                  rows={3}
                  defaultValue="Fade haircuts, beard trims, hair treatments, kids cuts, grooming packages"
                />
              </Field>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Audience & voice"
            bodyClassName="grid gap-5 sm:grid-cols-2"
          >
            <Field label="Who are your customers?">
              <Input defaultValue="Men 18–40 in Shah Alam" />
            </Field>
            <Field label="Brand tone">
              <Select defaultValue="Friendly & confident">
                {["Friendly & confident", "Premium & calm", "Bold & energetic", "Warm & local"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  )
                )}
              </Select>
            </Field>
            <div className="sm:col-span-2">
              <Field label="Anything BizPilot should always mention?" hint="Promos, booking link, unique selling points.">
                <Textarea
                  rows={2}
                  defaultValue="Online booking via link in bio. New clients get RM5 off the first visit."
                />
              </Field>
            </div>
          </DashboardCard>
        </div>

        {/* sidebar column */}
        <div className="space-y-6">
          <DashboardCard title="This month’s goal">
            <div className="space-y-2">
              {GOALS.map((goal) => {
                const active = goal === BUSINESS.goal;
                return (
                  <label
                    key={goal}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition-colors ${
                      active
                        ? "border-transparent bg-brand text-white"
                        : "border-border-subtle bg-surface text-ink-secondary hover:bg-surface-muted"
                    }`}
                  >
                    <span
                      className={`flex size-4 items-center justify-center rounded-full border ${
                        active ? "border-white bg-white" : "border-border-strong"
                      }`}
                    >
                      {active && <span className="size-2 rounded-full bg-brand" />}
                    </span>
                    {goal}
                  </label>
                );
              })}
            </div>
          </DashboardCard>

          <DashboardCard title="Active channels">
            <div className="flex flex-wrap gap-2">
              {CHANNELS.map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                    i < 3
                      ? "border-ink/15 bg-brand-soft text-brand"
                      : "border-border-subtle bg-surface text-ink-muted"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Selected channels shape where content is planned.
            </p>
          </DashboardCard>

          <div className="rounded-card bg-[linear-gradient(150deg,#3b82f6_0%,#2563eb_100%)] p-5 text-white shadow-card">
            <span className="flex size-9 items-center justify-center rounded-xl bg-white/10">
              <Sparkles className="size-4.5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">Setup is 80% complete</h3>
            <p className="mt-1 text-sm text-white/70">
              Finish your profile to unlock sharper, more personal AI output.
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-4/5 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
