import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { Sparkles, Sparkle, TrendingUp } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "How it works", href: "#how" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#6a9fd9_0%,#8abae8_34%,#bdd9f2_66%,#dcebfa_100%)] sm:rounded-[32px]">
        {/* cloud / glow blobs */}
        <div className="pointer-events-none absolute -left-20 top-10 size-72 rounded-full bg-white/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-24 left-1/3 size-72 rounded-full bg-white/30 blur-3xl" />

        {/* header */}
        <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/">
            <Logo light />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-white" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/sign-in" className="hidden sm:block">
              <span className="px-2 text-sm font-medium text-white/85 transition-colors hover:text-white">
                Sign in
              </span>
            </Link>
            <Link href="/sign-up">
              <Button variant="white" size="sm" className="rounded-full px-4">
                Start for Free
              </Button>
            </Link>
          </div>
        </header>

        {/* hero copy */}
        <div className="relative z-10 px-5 pt-10 text-center sm:pt-14">
          <div className="relative inline-flex">
            {/* soft glow */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/30 blur-md" />
            {/* decorative sparkles */}
            <Sparkle className="pointer-events-none absolute -right-3 -top-2 size-3 fill-white/90 text-white/90" />
            <Sparkle className="pointer-events-none absolute -right-5 top-2 size-2 fill-white/70 text-white/70" />
            <Sparkle className="pointer-events-none absolute -left-3 -bottom-2 size-2.5 fill-white/70 text-white/70" />
            <span className="pointer-events-none absolute -top-1 right-2 size-1 rounded-full bg-white/80" />

            <span className="relative inline-flex items-center gap-2 rounded-full border border-white/45 bg-gradient-to-b from-white/35 to-white/10 px-4 py-1.5 text-[13px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-inset ring-white/15 backdrop-blur-md">
              <Sparkles className="size-3.5" />
              Ai Marketing
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[3.4rem]">
            Your <span className="font-bold">all-in-one</span> AI assistant for
            smarter business{" "}
            <span className="inline-flex translate-y-1 items-center justify-center rounded-xl bg-white/20 p-1.5 align-middle ring-1 ring-white/30">
              <TrendingUp className="size-7 text-white sm:size-8" />
            </span>{" "}
            growth
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] text-white/85 sm:text-base">
            Plan content, win leads, follow up with customers, and track sales —
            all from one simple workspace, start to finish.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/sign-up">
              <Button size="lg" className="w-full sm:w-auto">
                <Sparkles className="size-4" />
                Start free
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="white" size="lg" className="w-full sm:w-auto">
                Book a demo
              </Button>
            </Link>
          </div>
        </div>

        {/* product preview anchored to bottom */}
        <div className="relative z-10 mt-12 px-5 sm:px-8">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
