import Link from "next/link";
import { Container, SectionLabel } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Scissors,
  Coffee,
  GraduationCap,
  Briefcase,
  Wrench,
  Dumbbell,
  Store,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Type = { area: string; Icon: LucideIcon; label: string };

const TYPES: Type[] = [
  { area: "salon", Icon: Sparkles, label: "salons" },
  { area: "barber", Icon: Scissors, label: "barbers" },
  { area: "cafe", Icon: Coffee, label: "cafes" },
  { area: "tuition", Icon: GraduationCap, label: "tuition centres" },
  { area: "agency", Icon: Briefcase, label: "agencies" },
  { area: "home", Icon: Wrench, label: "home services" },
  { area: "fit", Icon: Dumbbell, label: "fitness studios" },
];

const gridStyle: React.CSSProperties = {
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateAreas: `
    "salon hero hero barber"
    "cafe hero hero tuition"
    "agency home fit desc"
  `,
  gridAutoRows: "minmax(132px, 1fr)",
};

function TypeCard({ type }: { type: Type }) {
  return (
    <div
      style={{ gridArea: type.area }}
      className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-muted/60 p-5 transition-colors duration-300 hover:bg-surface"
    >
      <type.Icon
        className="size-6 text-ink-secondary transition-colors group-hover:text-brand"
        strokeWidth={1.6}
      />
      <span className="text-[15px] font-medium lowercase text-ink-secondary transition-colors group-hover:text-ink">
        {type.label}
      </span>
    </div>
  );
}

function HeroCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      style={mobile ? undefined : { gridArea: "hero" }}
      className={cn(
        "relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 shadow-card",
        mobile && "col-span-2"
      )}
    >
      <Link
        href="/sign-up"
        className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-brand text-white shadow-soft transition-colors hover:bg-brand-deep"
        aria-label="Start free"
      >
        <ArrowUpRight className="size-4" />
      </Link>
      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
        <Store className="size-6" strokeWidth={1.6} />
      </span>
      <div className="mt-6">
        <p className="text-xl font-semibold tracking-tight text-ink">
          service businesses
        </p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-secondary">
          If your customers come from messages, DMs, and bookings, BizPilot was
          built for you.
        </p>
      </div>
    </div>
  );
}

function DescCard({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      style={mobile ? undefined : { gridArea: "desc" }}
      className={cn(
        "flex items-center rounded-2xl border border-dashed border-border-subtle bg-surface-muted/30 p-5",
        mobile && "col-span-2"
      )}
    >
      <p className="text-sm leading-relaxed text-ink-muted">
        <span className="font-semibold text-ink-secondary">+ </span>
        and any small business that grows through chats and bookings.
      </p>
    </div>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Who it’s for</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Made for <span className="text-brand">local businesses</span> like
            yours.
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            From salons to home services, BizPilot adapts to how you sell — no
            marketing team required.
          </p>
        </div>

        {/* desktop bento */}
        <div className="mx-auto mt-12 hidden max-w-4xl gap-4 md:grid" style={gridStyle}>
          <HeroCard />
          {TYPES.map((t) => (
            <TypeCard key={t.area} type={t} />
          ))}
          <DescCard />
        </div>

        {/* mobile */}
        <div className="mx-auto mt-10 grid max-w-md grid-cols-2 gap-3 md:hidden">
          <HeroCard mobile />
          {TYPES.map((t) => (
            <div
              key={t.area}
              className="group flex h-28 flex-col justify-between rounded-2xl border border-border-subtle bg-surface-muted/60 p-4"
            >
              <t.Icon className="size-5 text-ink-secondary" strokeWidth={1.6} />
              <span className="text-sm font-medium lowercase text-ink-secondary">
                {t.label}
              </span>
            </div>
          ))}
          <DescCard mobile />
        </div>
      </Container>
    </section>
  );
}
