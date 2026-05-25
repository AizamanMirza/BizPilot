import { Avatar } from "@/components/shared/Avatar";
import { DASHBOARD_NAV } from "@/lib/constants";
import { METRICS, AI_SUGGESTIONS, FOLLOW_UPS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import {
  Bell,
  Sparkles,
  Plus,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const ACCENT_BAR: Record<string, string> = {
  green: "bg-accent-green",
  blue: "bg-brand",
  amber: "bg-accent-amber",
  neutral: "bg-ink-muted",
};

const HINT_COLOR: Record<string, string> = {
  up: "text-accent-green",
  down: "text-accent-red",
  neutral: "text-ink-secondary",
};

function dueTone(due: string) {
  if (due === "Due today") return "bg-accent-red-soft text-accent-red";
  if (due === "Due tomorrow") return "bg-accent-amber-soft text-accent-amber";
  return "bg-surface-muted text-ink-secondary";
}

export function HeroVisual() {
  return (
    // glass stroke frame
    <div className="mx-auto w-full max-w-5xl rounded-t-[26px] border-x border-t border-white/55 bg-white/20 p-2 shadow-float backdrop-blur-md">
      <div className="overflow-hidden rounded-t-[18px] border border-b-0 border-border-subtle bg-canvas">
        <div className="flex">
          {/* sidebar */}
          <aside className="hidden w-[172px] shrink-0 flex-col justify-between border-r border-border-subtle bg-surface p-2.5 lg:flex">
            <div>
              <div className="flex items-center gap-2 px-1 py-1">
                <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="size-3.5">
                    <path
                      d="M6 6 18 18M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="leading-none">
                  <p className="text-[11px] font-semibold text-ink">BizPilot</p>
                  <p className="mt-0.5 text-[8px] font-medium text-ink-muted">
                    AI Marketing OS
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-0.5">
                {DASHBOARD_NAV.map((item, i) => (
                  <div
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium",
                      i === 0
                        ? "bg-brand text-white"
                        : "text-ink-secondary"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-3",
                        i === 0 ? "text-white" : "text-ink-muted"
                      )}
                    />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <div className="rounded-lg border border-border-subtle bg-canvas/70 p-2">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-semibold text-ink">Pro Trial</p>
                  <Sparkles className="size-2.5 text-brand" />
                </div>
                <p className="mt-0.5 text-[8px] text-ink-muted">
                  9 days left in trial
                </p>
                <div className="mt-1.5 rounded-md bg-brand py-1 text-center text-[9px] font-medium text-white">
                  Upgrade plan
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 px-1">
                <Avatar name="Mirza Aizaman" size="xs" />
                <p className="text-[9px] font-medium text-ink">Mirza Aizaman</p>
              </div>
            </div>
          </aside>

          {/* main */}
          <div className="min-w-0 flex-1">
            {/* topbar */}
            <div className="flex items-center justify-between gap-2 border-b border-border-subtle bg-canvas/60 px-3 py-2">
              <div>
                <p className="text-[11px] font-semibold text-ink">Dashboard</p>
                <p className="text-[8px] text-ink-muted">
                  Your marketing at a glance.
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="hidden items-center gap-1.5 rounded-md border border-border-subtle bg-surface px-1.5 py-1 md:flex">
                  <Avatar name="UrbanFade Studio" size="xs" />
                  <div className="leading-none">
                    <p className="text-[9px] font-medium text-ink">
                      UrbanFade Studio
                    </p>
                    <p className="text-[7px] text-ink-muted">
                      Barber · Shah Alam
                    </p>
                  </div>
                  <ChevronDown className="size-2.5 text-ink-muted" />
                </div>
                <span className="flex items-center gap-1 rounded-md bg-brand px-2 py-1 text-[9px] font-medium text-white">
                  <Sparkles className="size-2.5" /> Generate with AI
                </span>
                <span className="flex size-5 items-center justify-center rounded-md border border-border-subtle bg-surface text-ink-secondary">
                  <Bell className="size-2.5" />
                </span>
              </div>
            </div>

            {/* content */}
            <div className="space-y-3 p-3">
              {/* greeting */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[13px] font-semibold text-ink">
                    Good morning, Mirza
                  </p>
                  <p className="text-[8px] text-ink-muted">
                    Here’s what needs your attention today.
                  </p>
                </div>
                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="flex items-center gap-1 rounded-md border border-border-subtle bg-surface px-2 py-1 text-[9px] font-medium text-ink">
                    <Plus className="size-2.5" /> Add Lead
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-brand px-2 py-1 text-[9px] font-medium text-white">
                    <Sparkles className="size-2.5" /> Generate with AI
                  </span>
                </div>
              </div>

              {/* metrics */}
              <div className="grid grid-cols-5 gap-2">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="relative overflow-hidden rounded-lg border border-border-subtle bg-surface p-2"
                  >
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 w-0.5 rounded-r-full",
                        ACCENT_BAR[m.accent]
                      )}
                    />
                    <p className="truncate text-[8px] text-ink-secondary">
                      {m.label}
                    </p>
                    <p className="mt-0.5 truncate text-[13px] font-semibold tabular-nums text-ink">
                      {m.value}
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 flex items-center gap-0.5 truncate text-[7px] font-medium",
                        HINT_COLOR[m.trend]
                      )}
                    >
                      {m.trend === "up" && (
                        <ArrowUpRight className="size-2 shrink-0" />
                      )}
                      <span className="truncate">{m.hint}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* two columns */}
              <div className="grid grid-cols-3 gap-2">
                {/* AI suggestions */}
                <div className="col-span-2 rounded-lg border border-border-subtle bg-surface p-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold text-ink">
                        Today’s AI Suggestions
                      </p>
                      <p className="text-[8px] text-ink-muted">
                        Smart moves for today, ranked by impact.
                      </p>
                    </div>
                    <span className="flex size-5 items-center justify-center rounded-md bg-brand-soft text-brand">
                      <Sparkles className="size-2.5" />
                    </span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {AI_SUGGESTIONS.slice(0, 2).map((s) => (
                      <div
                        key={s.id}
                        className="flex items-start justify-between gap-2 rounded-md border border-border-subtle bg-canvas/50 p-2"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="truncate text-[9px] font-medium text-ink">
                              {s.title}
                            </p>
                            <span className="shrink-0 rounded-full bg-brand-soft px-1.5 py-0.5 text-[7px] font-medium text-brand">
                              {s.tag}
                            </span>
                          </div>
                          <p className="mt-0.5 line-clamp-1 text-[8px] text-ink-secondary">
                            {s.detail}
                          </p>
                        </div>
                        <ArrowRight className="size-3 shrink-0 text-ink-muted" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* follow-ups */}
                <div className="rounded-lg border border-border-subtle bg-surface p-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold text-ink">
                      Follow-ups Due
                    </p>
                    <span className="text-[8px] font-medium text-brand">
                      View all
                    </span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {FOLLOW_UPS.slice(0, 3).map((f) => (
                      <div
                        key={f.id}
                        className="rounded-md border border-border-subtle bg-canvas/50 p-2"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-[9px] font-medium text-ink">
                            {f.name}
                          </p>
                          <span
                            className={cn(
                              "shrink-0 rounded-full px-1.5 py-0.5 text-[7px] font-medium",
                              dueTone(f.due)
                            )}
                          >
                            {f.due}
                          </span>
                        </div>
                        <p className="mt-0.5 line-clamp-1 text-[8px] text-ink-secondary">
                          {f.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
