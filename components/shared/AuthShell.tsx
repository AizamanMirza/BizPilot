import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { MiniAreaChart } from "@/components/shared/MiniChart";
import { Check } from "lucide-react";

const HIGHLIGHTS = [
  "Generate a month of content in minutes",
  "Reply to every lead without lifting a finger",
  "See exactly which campaigns make money",
];

export function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* form side */}
      <div className="flex flex-col px-6 py-8 sm:px-10">
        <Link href="/" className="inline-flex">
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl font-semibold tracking-tight text-ink">
              {title}
            </h1>
            <p className="mt-1.5 text-sm text-ink-secondary">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
        <p className="text-center text-xs text-ink-muted">
          Protected by BizPilot · Frontend preview
        </p>
      </div>

      {/* visual side */}
      <div className="relative hidden overflow-hidden border-l border-border-subtle bg-surface lg:block">
        <div className="flex h-full flex-col justify-center px-12">
          <span className="inline-flex w-fit items-center rounded-full border border-border-subtle bg-canvas px-3 py-1 text-xs font-medium text-ink-secondary">
            AI Marketing OS
          </span>
          <h2 className="mt-6 max-w-md text-balance text-3xl font-semibold tracking-tight text-ink">
            Run all your marketing from one calm workspace.
          </h2>
          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-5 items-center justify-center rounded-full bg-accent-green-soft text-accent-green">
                  <Check className="size-3" />
                </span>
                <span className="text-sm text-ink-secondary">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-sm rounded-card border border-border-subtle bg-canvas/60 p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-xs text-ink-muted">Revenue this month</span>
              <span className="rounded-full bg-accent-green-soft px-2 py-0.5 text-[11px] font-medium text-accent-green">
                +18%
              </span>
            </div>
            <p className="mt-1 text-2xl font-semibold text-ink">RM12,450</p>
            <MiniAreaChart className="mt-3 h-16 w-full" />
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-brand/10 blur-3xl" />
      </div>
    </div>
  );
}
