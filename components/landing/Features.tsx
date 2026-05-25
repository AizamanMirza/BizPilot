import Link from "next/link";
import { Container, SectionLabel } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Plus,
  ChevronDown,
  Check,
  ArrowDown,
  Layers,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  Mail,
  CalendarDays,
  Megaphone,
  Camera,
  Music2,
  Globe,
  Phone,
  MapPin,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M6 6 18 18M18 6 6 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- card visuals ---------- */

function ConnectVisual() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] text-white shadow-card">
        <Sparkles className="size-6" />
      </span>
      <Plus className="size-4 text-ink-muted" />
      <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white shadow-card">
        <XMark className="size-6" />
      </span>
    </div>
  );
}

const APPS: { Icon: LucideIcon; color: string }[] = [
  { Icon: Instagram, color: "#dd2a7b" },
  { Icon: Send, color: "#229ed9" },
  { Icon: Phone, color: "#16a34a" },
  { Icon: Music2, color: "#111827" },
  { Icon: Mail, color: "#3b82f6" },
  { Icon: Facebook, color: "#1877f2" },
  { Icon: Megaphone, color: "#f59e0b" },
  { Icon: MessageCircle, color: "#25d366" },
  { Icon: CalendarDays, color: "#ef4444" },
  { Icon: Camera, color: "#6d28d9" },
  { Icon: Star, color: "#f59e0b" },
  { Icon: MapPin, color: "#34a853" },
  { Icon: Globe, color: "#0ea5e9" },
  { Icon: Users, color: "#3b82f6" },
];

function AppsVisual() {
  return (
    <div className="grid w-full grid-cols-7 gap-2">
      {APPS.map(({ Icon, color }, i) => (
        <div
          key={i}
          className={`flex aspect-square items-center justify-center rounded-lg border border-border-subtle bg-surface shadow-soft ${
            i === 6 || i === 13 ? "opacity-40" : ""
          }`}
        >
          <Icon className="size-4" style={{ color }} />
        </div>
      ))}
    </div>
  );
}

function ActionsVisual() {
  return (
    <div className="w-[210px] space-y-2 rounded-xl border border-border-subtle bg-surface p-2.5 shadow-card">
      <div className="flex items-center gap-2 rounded-lg border border-border-subtle px-2 py-1.5">
        <span className="flex size-5 items-center justify-center rounded-md bg-brand text-white">
          <XMark className="size-3" />
        </span>
        <span className="text-[11px] font-medium text-ink">New lead</span>
        <ChevronDown className="ml-auto size-3 text-ink-muted" />
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border-subtle px-2 py-1.5">
        <span className="text-[11px] font-medium text-ink">Action</span>
        <ChevronDown className="size-3 text-ink-muted" />
      </div>
      <div className="space-y-1 rounded-lg border border-border-subtle bg-canvas/50 p-1.5">
        {["Reply with price", "Suggest a time slot", "Send a follow-up"].map(
          (o) => (
            <p key={o} className="px-1.5 py-0.5 text-[11px] text-ink-secondary">
              {o}
            </p>
          )
        )}
      </div>
    </div>
  );
}

function SyncVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-1.5">
        {["Leads", "Sales", "Content"].map((p) => (
          <span
            key={p}
            className="flex items-center gap-1 rounded-full border border-border-subtle bg-surface px-2 py-1 text-[10px] font-medium text-ink shadow-soft"
          >
            <Check className="size-2.5 text-brand" />
            {p}
          </span>
        ))}
      </div>
      <ArrowDown className="size-4 text-ink-muted" />
      <span className="flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-surface text-brand shadow-card">
        <Layers className="size-6" />
      </span>
    </div>
  );
}

/* ---------- cards ---------- */

function FeatureCard({
  span,
  visual,
  title,
  desc,
}: {
  span: string;
  visual: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-border-subtle bg-surface-muted p-5 ${span}`}
    >
      <div className="flex min-h-[150px] flex-1 items-center justify-center py-2">
        {visual}
      </div>
      <h3 className="mt-2 text-[15px] font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{desc}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mx-auto mb-6 flex h-16 w-40 items-center justify-center">
            <svg
              viewBox="0 0 160 60"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M80 52 C80 30 30 34 22 14"
                stroke="var(--color-border-strong)"
                strokeWidth="1"
              />
              <path
                d="M80 52 C80 30 130 34 138 14"
                stroke="var(--color-border-strong)"
                strokeWidth="1"
              />
              <rect x="16" y="8" width="12" height="12" rx="3" fill="var(--color-surface)" stroke="var(--color-border-subtle)" />
              <rect x="132" y="8" width="12" height="12" rx="3" fill="var(--color-surface)" stroke="var(--color-border-subtle)" />
            </svg>
            <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-brand text-white shadow-card">
              <XMark className="size-7" />
            </span>
          </div>

          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything you need to{" "}
            <span className="text-brand">grow your business</span>
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            From content to closed sales, BizPilot gives small business owners
            one AI-powered workspace — no marketing skills required.
          </p>
        </div>

        {/* row 1 */}
        <div className="mt-14 grid gap-4 sm:grid-cols-5">
          <FeatureCard
            span="sm:col-span-2"
            visual={<ConnectVisual />}
            title="Caption & copy generator"
            desc="Write captions, hooks, CTAs, and ad copy in your brand voice in seconds — no blank-page stress."
          />
          <FeatureCard
            span="sm:col-span-3"
            visual={<AppsVisual />}
            title="Works with the channels you already use"
            desc="Plan and post to Instagram, WhatsApp, Facebook, and more — all from one place."
          />
        </div>

        {/* row 2 */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <FeatureCard
            span=""
            visual={<ActionsVisual />}
            title="Lead reply assistant"
            desc="Draft natural replies, handle objections, and follow up — pick a tone and let AI write it."
          />
          <FeatureCard
            span=""
            visual={<SyncVisual />}
            title="Revenue dashboard"
            desc="Track leads, closed sales, conversion, and your best campaigns in real time."
          />

          {/* CTA card */}
          <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#dbeafe] to-[#bcdcfb] p-5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/70 text-brand shadow-soft">
              <Sparkles className="size-5" />
            </span>
            <h3 className="mt-auto pt-8 text-[17px] font-semibold leading-snug text-ink">
              Set up BizPilot right now!
            </h3>
            <p className="mt-2 text-sm text-ink-secondary">
              Unlock the full workspace with a free 7-day trial.
            </p>
            <Link href="/sign-up" className="mt-4 block">
              <Button variant="white" className="w-full">
                Try for Free
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
