"use client";

import { useState } from "react";
import { Container, SectionLabel } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Scissors,
  Coffee,
  Wrench,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const BRAND = "#3b82f6";

type UseCaseCard = {
  Icon: LucideIcon;
  line1: string;
  line2: string;
  desc: string;
  angle: number; // direction from hub toward this card
  color: string;
  pos: { x: number; y: number }; // normalized card center for the connector line
};

// 0 top-left, 1 top-right, 2 bottom-left, 3 bottom-right
const CARDS: UseCaseCard[] = [
  {
    Icon: Sparkles,
    line1: "Salons &",
    line2: "Beauty",
    desc: "Fill your calendar with promos, reminders, and glowing review posts.",
    angle: -45,
    color: "#7c3aed",
    pos: { x: 17, y: 17 },
  },
  {
    Icon: Scissors,
    line1: "Barber",
    line2: "Shops",
    desc: "Show off before/after cuts and push weekend bookings on autopilot.",
    angle: 45,
    color: "#3b82f6",
    pos: { x: 83, y: 17 },
  },
  {
    Icon: Coffee,
    line1: "Cafes &",
    line2: "Eateries",
    desc: "Plan daily specials and seasonal campaigns in just a few minutes.",
    angle: 225,
    color: "#f59e0b",
    pos: { x: 17, y: 83 },
  },
  {
    Icon: Wrench,
    line1: "Home",
    line2: "Services",
    desc: "Turn enquiries into booked jobs with fast, friendly follow-ups.",
    angle: 135,
    color: "#16a34a",
    pos: { x: 83, y: 83 },
  },
];

function Card({
  data,
  active,
  onHover,
  onLeave,
}: {
  data: UseCaseCard;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative z-10 flex flex-col rounded-2xl border bg-surface p-6 transition-all duration-300"
      style={{
        borderColor: active ? data.color : "var(--color-border-subtle)",
        boxShadow: active
          ? `0 18px 40px -16px ${data.color}66`
          : "var(--shadow-card)",
      }}
    >
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-xl transition-colors duration-300",
          !active && "bg-surface-muted text-ink-secondary"
        )}
        style={active ? { backgroundColor: data.color, color: "#fff" } : undefined}
      >
        <data.Icon className="size-5" />
      </span>
      <h3 className="mt-6 text-xl font-semibold leading-tight tracking-tight text-ink">
        {data.line1}
        <br />
        {data.line2}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
        {data.desc}
      </p>
    </div>
  );
}

function Hub({ angle, color }: { angle: number; color: string }) {
  return (
    <div className="relative z-10 flex size-32 items-center justify-center">
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <span
          className="absolute left-1/2 top-0 size-14 -translate-x-1/2 -translate-y-1 rounded-full opacity-40 blur-xl transition-colors duration-500"
          style={{ backgroundColor: color }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" fill="none">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="var(--color-border-subtle)"
            strokeWidth="5"
          />
          <path
            d="M15.6 25.9 A42 42 0 0 1 84.4 25.9"
            strokeWidth="5"
            strokeLinecap="round"
            style={{ stroke: color, transition: "stroke .4s" }}
          />
        </svg>
      </div>
      <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-surface text-ink shadow-card">
        <Cpu className="size-8" />
      </span>
    </div>
  );
}

export function UseCases() {
  const [active, setActive] = useState<number | null>(null);
  const angle = active === null ? 45 : CARDS[active].angle;
  const color = active === null ? BRAND : CARDS[active].color;

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

        {/* desktop constellation grid */}
        <div className="relative mx-auto mt-14 hidden max-w-5xl gap-6 sm:grid sm:grid-cols-3">
          {/* connector lines behind cards */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full"
          >
            {CARDS.map((c, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={c.pos.x}
                y2={c.pos.y}
                strokeLinecap="round"
                style={{
                  stroke: active === i ? c.color : "var(--color-border-strong)",
                  strokeWidth: active === i ? 1.3 : 0.7,
                  opacity: active === i ? 1 : 0.5,
                  transition: "all .35s ease",
                }}
              />
            ))}
          </svg>

          <Card data={CARDS[0]} active={active === 0} onHover={() => setActive(0)} onLeave={() => setActive(null)} />
          <div />
          <Card data={CARDS[1]} active={active === 1} onHover={() => setActive(1)} onLeave={() => setActive(null)} />

          <div />
          <div className="flex items-center justify-center">
            <Hub angle={angle} color={color} />
          </div>
          <div />

          <Card data={CARDS[2]} active={active === 2} onHover={() => setActive(2)} onLeave={() => setActive(null)} />
          <div />
          <Card data={CARDS[3]} active={active === 3} onHover={() => setActive(3)} onLeave={() => setActive(null)} />
        </div>

        {/* mobile */}
        <div className="mx-auto mt-10 max-w-md sm:hidden">
          <div className="flex justify-center py-2">
            <Hub angle={angle} color={color} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {CARDS.map((c, i) => (
              <Card
                key={c.line1}
                data={c}
                active={active === i}
                onHover={() => setActive(i)}
                onLeave={() => setActive(null)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
