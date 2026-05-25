import { Container, SectionLabel } from "@/components/shared/Container";
import { Clock, MessagesSquare, LineChart, Layers } from "lucide-react";

const PROBLEMS = [
  {
    icon: Clock,
    title: "No time to post",
    text: "You're running the floor all day. Content always slips to “later”.",
  },
  {
    icon: MessagesSquare,
    title: "Leads go cold",
    text: "DMs pile up, replies are slow, and enquiries quietly disappear.",
  },
  {
    icon: Layers,
    title: "Too many tools",
    text: "Canva, notes, spreadsheets, ad manager — nothing talks to each other.",
  },
  {
    icon: LineChart,
    title: "No clear numbers",
    text: "You can't tell which posts or promos actually brought in money.",
  },
];

export function Problem() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-card border border-border-subtle bg-surface p-8 shadow-card sm:p-12">
          <div className="max-w-2xl">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Marketing shouldn’t feel like a second job
            </h2>
            <p className="mt-4 text-pretty text-ink-secondary">
              Most small business owners are great at their craft — not at
              posting daily, chasing leads, and reading ad dashboards. BizPilot
              takes that weight off.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border-subtle bg-canvas/50 p-5"
              >
                <span className="flex size-9 items-center justify-center rounded-xl border border-border-subtle bg-surface text-ink-secondary">
                  <p.icon className="size-4.5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
