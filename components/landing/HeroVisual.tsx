import {
  LayoutGrid,
  Inbox,
  CalendarRange,
  Users,
  TrendingUp,
  Settings,
  Search,
  Plus,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { Avatar } from "@/components/shared/Avatar";
import { MiniAreaChart } from "@/components/shared/MiniChart";

const NAV_ICONS = [LayoutGrid, Inbox, CalendarRange, Users, TrendingUp, Settings];

const STATS = [
  {
    label: "Leads this week",
    value: "78",
    delta: "+8 new",
    tint: "from-[#e8f1fe] to-[#f4f8ff]",
    bar: "bg-brand",
  },
  {
    label: "Follow-ups",
    value: "24",
    delta: "due today",
    tint: "from-[#fff3e6] to-[#fff9f2]",
    bar: "bg-accent-amber",
  },
  {
    label: "Closed sales",
    value: "19",
    delta: "+4 today",
    tint: "from-[#e9f9ef] to-[#f4fdf7]",
    bar: "bg-accent-green",
  },
];

export function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-t-[20px] border border-white/60 bg-surface shadow-float">
      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-52 flex-col gap-4 border-r border-border-subtle bg-surface-muted/60 p-4 sm:flex">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-white">
              <svg viewBox="0 0 24 24" fill="none" className="size-4">
                <path
                  d="M6 6 18 18M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-[13px] font-semibold text-ink">BizPilot</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-2.5 py-1.5">
            <Search className="size-3.5 text-ink-muted" />
            <span className="text-[11px] text-ink-muted">Search…</span>
          </div>

          <div className="space-y-1">
            <p className="px-1 text-[10px] font-medium uppercase tracking-wide text-ink-muted">
              Workspace
            </p>
            {NAV_ICONS.map((Icon, i) => (
              <div
                key={i}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 ${
                  i === 0
                    ? "bg-brand text-white"
                    : "text-ink-secondary"
                }`}
              >
                <Icon className="size-3.5" />
                <span className="h-2 w-16 rounded-full bg-current opacity-70" />
              </div>
            ))}
          </div>
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1">
          {/* topbar */}
          <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Avatar name="UrbanFade Studio" size="sm" />
              <div className="leading-tight">
                <p className="text-[12px] font-medium text-ink">
                  UrbanFade Studio
                </p>
                <p className="text-[10px] text-ink-muted">Marketing overview</p>
              </div>
            </div>
            <div className="hidden items-center gap-1 rounded-lg border border-border-subtle bg-surface-muted p-0.5 md:flex">
              {["Overview", "Leads", "Content"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${
                    i === 0 ? "bg-surface text-ink shadow-soft" : "text-ink-muted"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1 rounded-lg border border-border-subtle px-2 py-1 text-[11px] text-ink-secondary lg:flex">
                Dec 2024 <ChevronDown className="size-3" />
              </span>
              <span className="flex items-center gap-1 rounded-lg bg-brand px-2.5 py-1 text-[11px] font-medium text-white">
                <Plus className="size-3" /> Add
              </span>
            </div>
          </div>

          {/* body */}
          <div className="space-y-4 p-4">
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className={`relative overflow-hidden rounded-xl border border-border-subtle bg-gradient-to-br ${s.tint} p-3`}
                >
                  <span
                    className={`absolute right-3 top-3 size-1.5 rounded-full ${s.bar}`}
                  />
                  <p className="text-[10px] text-ink-secondary">{s.label}</p>
                  <p className="mt-1 text-xl font-semibold text-ink">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-ink-muted">{s.delta}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border-subtle bg-surface p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-semibold text-ink">
                    Revenue activity
                  </p>
                  <p className="text-[10px] text-ink-muted">
                    Jan – Sep · trending up
                  </p>
                </div>
                <MoreHorizontal className="size-4 text-ink-muted" />
              </div>
              <MiniAreaChart
                data={[28, 36, 30, 44, 40, 52, 48, 60, 66]}
                className="mt-3 h-24 w-full"
              />
            </div>

            <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-surface p-3">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <CalendarRange className="size-3.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-medium text-ink">
                    Weekend promo post
                  </p>
                  <p className="text-[10px] text-ink-muted">
                    Scheduled · today 11:00
                  </p>
                </div>
              </div>
              <div className="flex -space-x-1.5">
                {["Aiman", "Sarah", "Muiz"].map((n) => (
                  <Avatar key={n} name={n} size="xs" className="ring-2 ring-white" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
