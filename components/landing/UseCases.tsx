import { Container, SectionLabel } from "@/components/shared/Container";
import {
  Sparkles,
  Scissors,
  Coffee,
  Wrench,
  Cpu,
  type LucideIcon,
} from "lucide-react";

type UseCaseCard = {
  Icon: LucideIcon;
  line1: string;
  line2: string;
  desc: string;
};

const CARDS: UseCaseCard[] = [
  {
    Icon: Sparkles,
    line1: "Salons &",
    line2: "Beauty",
    desc: "Fill your calendar with promos, reminders, and glowing review posts.",
  },
  {
    Icon: Scissors,
    line1: "Barber",
    line2: "Shops",
    desc: "Show off before/after cuts and push weekend bookings on autopilot.",
  },
  {
    Icon: Coffee,
    line1: "Cafes &",
    line2: "Eateries",
    desc: "Plan daily specials and seasonal campaigns in just a few minutes.",
  },
  {
    Icon: Wrench,
    line1: "Home",
    line2: "Services",
    desc: "Turn enquiries into booked jobs with fast, friendly follow-ups.",
  },
];

function Card({ data }: { data: UseCaseCard }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border-subtle bg-surface p-5">
      <span className="flex size-9 items-center justify-center rounded-lg bg-surface-muted text-ink-secondary">
        <data.Icon className="size-4.5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold leading-tight tracking-tight text-ink">
        {data.line1}
        <br />
        {data.line2}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
        {data.desc}
      </p>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="hidden rounded-2xl border border-border-subtle/60 bg-surface-muted/30 sm:block" />
  );
}

function HubCircle() {
  return (
    <div className="relative flex items-center justify-center">
      <span className="pointer-events-none absolute right-1 top-1 size-12 rounded-full bg-brand/20 blur-xl" />
      <div className="relative flex size-20 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 size-full -rotate-90"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="var(--color-border-subtle)"
            strokeWidth="5"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="var(--color-brand)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="264"
            strokeDashoffset="186"
          />
        </svg>
        <span className="flex size-12 items-center justify-center rounded-full bg-surface text-ink shadow-card">
          <Cpu className="size-6" />
        </span>
      </div>
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
            Made for local, service-based businesses
          </h2>
          <p className="mt-4 text-pretty text-ink-secondary">
            Salons, barbers, cafes, tuition centres, agencies, and home services
            — if you win customers through messages and bookings, BizPilot fits.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[28px] border border-border-subtle bg-surface p-4 shadow-card sm:p-6">
          {/* desktop 3x3 bento */}
          <div className="hidden gap-4 sm:grid sm:grid-cols-3">
            <Card data={CARDS[0]} />
            <Placeholder />
            <Card data={CARDS[1]} />

            <Placeholder />
            <div className="flex items-center justify-center rounded-2xl border border-border-subtle bg-surface">
              <HubCircle />
            </div>
            <Placeholder />

            <Card data={CARDS[2]} />
            <Placeholder />
            <Card data={CARDS[3]} />
          </div>

          {/* mobile */}
          <div className="sm:hidden">
            <div className="flex justify-center py-4">
              <HubCircle />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {CARDS.map((c) => (
                <Card key={c.line1} data={c} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
