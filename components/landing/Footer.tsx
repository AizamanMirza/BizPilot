import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Salons & Beauty", href: "#use-cases" },
      { label: "Barber shops", href: "#use-cases" },
      { label: "Cafes", href: "#use-cases" },
      { label: "Home services", href: "#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo withTagline />
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
              The AI marketing workspace for small, service-based businesses.
              Plan, post, reply, and grow — all in one place.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-secondary transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} BizPilot. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-xs text-ink-muted hover:text-ink">
              Terms
            </Link>
            <Link href="#" className="text-xs text-ink-muted hover:text-ink">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-ink-muted hover:text-ink">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
