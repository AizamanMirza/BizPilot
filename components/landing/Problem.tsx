import { Container, SectionLabel } from "@/components/shared/Container";
import {
  Plus,
  Zap,
  GitBranch,
  Clock,
  Workflow,
  MoreHorizontal,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  CalendarDays,
  Lock,
  AtSign,
  KeyRound,
} from "lucide-react";

const dotGrid: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(20,35,63,0.07) 1px, transparent 1.5px)",
  backgroundSize: "13px 13px",
};

/* ---------- quadrant visuals ---------- */

function WindowVisual() {
  const perf: [string, string][] = [
    ["Conversion", "32%"],
    ["Bookings", "34"],
    ["Follow-ups", "12"],
  ];
  const channels = ["@instagram", "@whatsapp", "@walk-in"];
  return (
    <div className="w-full max-w-[320px] overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-card">
      <div className="flex items-center gap-1.5 border-b border-border-subtle px-3 py-2">
        <span className="size-2 rounded-full bg-[#ef4444]" />
        <span className="size-2 rounded-full bg-[#f59e0b]" />
        <span className="size-2 rounded-full bg-[#22c55e]" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-border-subtle">
        <div className="p-3">
          <p className="text-[11px] font-semibold text-ink">Performance</p>
          <div className="mt-2 space-y-1.5">
            {perf.map(([k, v], i) => (
              <div key={k} className="flex items-center justify-between">
                <span className="text-[11px] text-ink-secondary">{k}</span>
                <span
                  className={
                    i === 0
                      ? "text-[11px] font-semibold text-brand"
                      : "text-[11px] font-semibold text-ink"
                  }
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3">
          <p className="text-[11px] font-semibold text-ink">Channels</p>
          <div className="mt-2 space-y-1.5">
            {channels.map((c) => (
              <div key={c} className="flex items-center justify-between">
                <span className="text-[11px] text-ink-secondary">{c}</span>
                <span className="size-3.5 rounded-full bg-surface-muted ring-1 ring-border-subtle" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="flex w-full items-center justify-center gap-1.5">
      <span className="flex shrink-0 items-center gap-1 rounded-lg border border-border-subtle bg-surface px-2 py-1 text-[11px] font-medium text-ink shadow-soft">
        <Zap className="size-3 text-accent-red" />
        Trigger
      </span>
      <span className="h-px w-3 shrink-0 bg-border-strong" />
      <div className="w-[170px] shrink-0 overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-card">
        <div className="flex items-center gap-1 bg-[#f3e8ff] px-2.5 py-1.5 text-[11px] font-medium text-[#7c3aed]">
          <GitBranch className="size-3" />
          Condition
          <MoreHorizontal className="ml-auto size-3 opacity-60" />
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between rounded-md border border-border-subtle px-2 py-1">
            <span className="flex items-center gap-1 text-[11px] font-medium text-ink">
              <Clock className="size-3 text-ink-secondary" />
              Is high value
            </span>
            <span className="text-[9px] text-ink-muted">Data</span>
          </div>
          <p className="mt-1.5 text-[10px] text-ink-muted">
            Check if they asked about a service
          </p>
        </div>
      </div>
      <span className="h-px w-3 shrink-0 bg-border-strong" />
      <span className="flex shrink-0 items-center gap-1 rounded-lg border border-border-subtle bg-surface px-2 py-1 text-[11px] font-medium text-brand shadow-soft">
        <Workflow className="size-3" />
        Action
      </span>
    </div>
  );
}

const APPS = [
  { x: 16, y: 24, bg: "bg-gradient-to-br from-[#f58529] to-[#dd2a7b]", Icon: Instagram },
  { x: 84, y: 20, bg: "bg-[#1877f2]", Icon: Facebook },
  { x: 12, y: 76, bg: "bg-[#25d366]", Icon: MessageCircle },
  { x: 88, y: 72, bg: "bg-[#229ed9]", Icon: Send },
  { x: 62, y: 90, bg: "bg-brand", Icon: CalendarDays },
];

function IntegrationsVisual() {
  return (
    <div className="relative h-40 w-full max-w-[320px]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {APPS.map((a, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={a.x}
            y2={a.y}
            stroke="var(--color-border-strong)"
            strokeWidth="0.6"
          />
        ))}
      </svg>
      <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle bg-surface px-3 py-1.5 text-[11px] font-medium text-ink shadow-card">
        Integrations
      </span>
      {APPS.map((a, i) => (
        <span
          key={i}
          className={`absolute z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-card ring-2 ring-surface ${a.bg}`}
          style={{ left: `${a.x}%`, top: `${a.y}%` }}
        >
          <a.Icon className="size-4" />
        </span>
      ))}
    </div>
  );
}

function SecureVisual() {
  return (
    <div className="relative flex h-40 w-full max-w-[340px] items-center justify-center">
      <div className="absolute left-2 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-xl border border-border-subtle bg-surface/70 p-2 opacity-60 shadow-soft sm:block">
        <div className="h-2 w-10 rounded-full bg-surface-muted" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-surface-muted" />
          <div className="h-1.5 w-3/4 rounded-full bg-surface-muted" />
        </div>
      </div>
      <div className="absolute right-2 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-xl border border-border-subtle bg-surface/70 p-2 opacity-60 shadow-soft sm:block">
        <div className="h-2 w-10 rounded-full bg-surface-muted" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-surface-muted" />
          <div className="h-1.5 w-3/4 rounded-full bg-surface-muted" />
        </div>
      </div>

      <div className="relative z-10 w-[170px] rounded-xl border border-border-subtle bg-surface p-3 shadow-card">
        <div className="flex justify-center">
          <span className="flex size-7 items-center justify-center rounded-full bg-surface-muted text-ink-secondary">
            <Lock className="size-3.5" />
          </span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          <div className="flex items-center gap-1.5 rounded-md border border-border-subtle px-2 py-1.5 text-[10px] text-ink-muted">
            <AtSign className="size-3" />
            Email
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-border-subtle px-2 py-1.5 text-[10px] text-ink-muted">
            <KeyRound className="size-3" />
            Key
          </div>
          <div className="rounded-md bg-ink py-1.5 text-center text-[10px] font-medium text-white">
            Log In
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- section ---------- */

const QUADRANTS = [
  {
    Visual: WindowVisual,
    label: "One workspace, full control",
    desc: "Plan, manage, and track every part of your marketing from one simple dashboard — no app-switching.",
  },
  {
    Visual: FlowVisual,
    label: "AI that does the work",
    desc: "Generate content, replies, and follow-ups with smart steps you set once and let run automatically.",
  },
  {
    Visual: IntegrationsVisual,
    label: "Connects to your channels",
    desc: "Plug into Instagram, WhatsApp, and the tools you already use, and trigger actions across them.",
  },
  {
    Visual: SecureVisual,
    label: "Secure & reliable",
    desc: "Your data and customer chats stay private, with secure access and reliable delivery built in.",
  },
];

const PLUS_POS = [
  "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-0 translate-x-1/2 -translate-y-1/2",
  "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
  "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
  "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
];

export function Problem() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Clean and simple</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Your marketing, perfectly handled.
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Plan, automate, and track your marketing with precision and speed —
            everything you need to turn busywork into booked customers.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="overflow-hidden rounded-3xl border border-border-subtle bg-border-subtle">
            <div className="grid gap-px bg-border-subtle sm:grid-cols-2">
              {QUADRANTS.map(({ Visual, label, desc }) => (
                <div key={label} className="flex flex-col bg-surface px-6 py-8 sm:px-8">
                  <div
                    className="flex h-44 items-center justify-center overflow-hidden rounded-xl"
                    style={dotGrid}
                  >
                    <Visual />
                  </div>
                  <p className="mt-6 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {label}
                  </p>
                  <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-ink-secondary">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* plus markers */}
          {PLUS_POS.map((pos) => (
            <span
              key={pos}
              className={`pointer-events-none absolute z-20 ${pos}`}
            >
              <Plus className="size-3.5 text-ink-muted" />
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
