"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Tabs } from "@/components/ui/Tabs";
import { Avatar } from "@/components/shared/Avatar";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { USER, BUSINESS } from "@/lib/mock-data";
import { Check, Sparkles } from "lucide-react";

const TABS = [
  { id: "profile", label: "Profile" },
  { id: "workspace", label: "Workspace" },
  { id: "plan", label: "Plan & billing" },
  { id: "notifications", label: "Notifications" },
  { id: "integrations", label: "Integrations" },
];

const INTEGRATIONS = [
  { name: "Clerk", desc: "Authentication & user management", status: "Planned" },
  { name: "Convex", desc: "Realtime database & sync", status: "Planned" },
  { name: "Claude API", desc: "AI generation engine", status: "Planned" },
  { name: "Stripe", desc: "Subscriptions & payments", status: "Planned" },
];

const NOTIFICATIONS = [
  { label: "New lead arrives", on: true },
  { label: "Follow-up due today", on: true },
  { label: "Weekly content ready", on: true },
  { label: "Campaign performance digest", on: false },
  { label: "Product updates & tips", on: false },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-ink">{label}</label>
      {children}
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
        on ? "bg-brand" : "bg-border-strong"
      }`}
    >
      <span
        className={`inline-block size-4 transform rounded-full bg-white transition-transform ${
          on ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </span>
  );
}

export default function SettingsPage() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your profile, workspace, plan, and integrations."
      />

      <Tabs tabs={TABS} active={tab} onChange={setTab} className="flex-wrap" />

      {tab === "profile" && (
        <DashboardCard title="Your profile" bodyClassName="space-y-5">
          <div className="flex items-center gap-4">
            <Avatar name={USER.fullName} size="lg" />
            <div>
              <Button size="sm" variant="secondary">
                Change photo
              </Button>
              <p className="mt-1.5 text-xs text-ink-muted">
                JPG or PNG, up to 2MB.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name">
              <Input defaultValue={USER.fullName} />
            </Field>
            <Field label="Email">
              <Input defaultValue={USER.email} type="email" />
            </Field>
          </div>
          <div className="flex justify-end">
            <Button>
              <Check className="size-4" />
              Save profile
            </Button>
          </div>
        </DashboardCard>
      )}

      {tab === "workspace" && (
        <DashboardCard title="Workspace" bodyClassName="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Business name">
              <Input defaultValue={BUSINESS.name} />
            </Field>
            <Field label="Type">
              <Select defaultValue={BUSINESS.type}>
                {["Barber", "Salon", "Cafe", "Tuition Centre", "Agency"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  )
                )}
              </Select>
            </Field>
            <Field label="Location">
              <Input defaultValue={BUSINESS.location} />
            </Field>
            <Field label="Timezone">
              <Select defaultValue="GMT+8 Kuala Lumpur">
                {["GMT+8 Kuala Lumpur", "GMT+7 Bangkok", "GMT+0 London"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  )
                )}
              </Select>
            </Field>
          </div>
          <div className="flex justify-end">
            <Button>
              <Check className="size-4" />
              Save workspace
            </Button>
          </div>
        </DashboardCard>
      )}

      {tab === "plan" && (
        <div className="grid gap-6 lg:grid-cols-3">
          <DashboardCard
            title="Current plan"
            className="lg:col-span-2"
            bodyClassName="space-y-4"
          >
            <div className="flex items-center justify-between rounded-2xl border border-border-subtle bg-canvas/50 p-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{USER.plan}</p>
                  <p className="text-xs text-ink-muted">9 days remaining</p>
                </div>
              </div>
              <StatusBadge tone="blue">Trial</StatusBadge>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Starter", p: "RM39" },
                { l: "Pro", p: "RM89" },
                { l: "Business", p: "RM199" },
              ].map((tier, i) => (
                <div
                  key={tier.l}
                  className={`rounded-2xl border p-4 text-center ${
                    i === 1
                      ? "border-transparent bg-brand text-white"
                      : "border-border-subtle bg-surface"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      i === 1 ? "text-white" : "text-ink"
                    }`}
                  >
                    {tier.l}
                  </p>
                  <p
                    className={`mt-1 text-lg font-semibold ${
                      i === 1 ? "text-white" : "text-ink"
                    }`}
                  >
                    {tier.p}
                  </p>
                </div>
              ))}
            </div>
            <Button className="w-full">Upgrade to Pro</Button>
          </DashboardCard>

          <DashboardCard title="Billing" bodyClassName="space-y-3">
            <div className="rounded-2xl border border-dashed border-border-subtle p-4 text-center">
              <p className="text-sm font-medium text-ink">No card on file</p>
              <p className="mt-1 text-xs text-ink-muted">
                Add a payment method before your trial ends.
              </p>
              <Button size="sm" variant="secondary" className="mt-3">
                Add payment method
              </Button>
            </div>
            <p className="text-xs text-ink-muted">
              Payments will be handled securely once billing is connected.
            </p>
          </DashboardCard>
        </div>
      )}

      {tab === "notifications" && (
        <DashboardCard title="Notifications" bodyClassName="divide-y divide-border-subtle">
          {NOTIFICATIONS.map((n) => (
            <div
              key={n.label}
              className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
            >
              <span className="text-sm text-ink">{n.label}</span>
              <Toggle on={n.on} />
            </div>
          ))}
        </DashboardCard>
      )}

      {tab === "integrations" && (
        <DashboardCard
          title="Integrations"
          description="Connect BizPilot to the services that power it."
          bodyClassName="grid gap-3 sm:grid-cols-2"
        >
          {INTEGRATIONS.map((it) => (
            <div
              key={it.name}
              className="flex items-center justify-between rounded-2xl border border-border-subtle bg-canvas/50 p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-border-subtle bg-surface text-sm font-semibold text-ink">
                  {it.name[0]}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{it.name}</p>
                  <p className="text-xs text-ink-muted">{it.desc}</p>
                </div>
              </div>
              <StatusBadge tone="neutral">{it.status}</StatusBadge>
            </div>
          ))}
        </DashboardCard>
      )}
    </div>
  );
}
