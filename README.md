# BizPilot

**Your AI marketing assistant for small business.**

BizPilot helps small business owners create content, reply to leads, follow up
with customers, run better ads, and track sales — all from one AI-powered
workspace ("AI Marketing OS"). Built for salons, barbers, beauty/spa, cafes,
tuition centres, agencies, fitness studios, and local service businesses.

> **This is a frontend-only MVP.** All data is mock/static. There is no backend
> yet — authentication, database, AI, and payments are placeholders, structured
> so they can be wired up later.

---

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **lucide-react** icons · **clsx** + **tailwind-merge** (`cn()`)
- **Inter** font (via `next/font`)

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (do NOT run while `npm run dev` is running)
npm run start    # serve the production build
npm run lint     # next lint
npx tsc --noEmit # type-check
```

> ⚠️ Don't run `npm run build` while the dev server is running — they share the
> `.next` folder and the build can break the dev server's styles. If styles
> vanish: stop dev, `rm -rf .next`, then `npm run dev` again.

---

## Project structure

```
app/            App Router pages (landing, auth, dashboard) + globals.css
components/
  ui/           Primitives (Button, Input, Tabs, Table, Drawer, …)
  landing/      Landing-page sections (Hero, Features, HowItWorks, …)
  dashboard/    Dashboard shell + cards (Sidebar, Topbar, MetricCard, …)
  shared/       Logo, Avatar, Container, MiniChart, AuthShell, …
lib/            constants.ts, mock-data.ts, utils.ts
```

Path alias: `@/*` → project root (e.g. `import { Button } from "@/components/ui/Button"`).

---

## Routes

| Area | Path |
|---|---|
| Landing | `/` |
| Auth (mock) | `/sign-in`, `/sign-up` |
| Dashboard | `/dashboard` |
| Dashboard pages | `/dashboard/{setup, ai-generator, content, leads, follow-ups, ads-coach, revenue, settings}` |

---

## Design

Premium, clean, modern SaaS look on a **sky-blue** theme (light-blue canvas,
white cards, thin borders, soft shadows, blue primary, green for success, amber
for small accents). Full design tokens live in `app/globals.css` (`@theme`).

The landing hero uses an **animated moving gradient** and **drifting clouds**
(disabled under `prefers-reduced-motion`). The "How it works" section is a
**scroll-animated workflow** whose blue flow line fills as you scroll.

---

## Planned integrations (not implemented yet)

- **Clerk** — auth · **Convex** — database · **Claude / Anthropic API** — AI
- **Stripe** — payments · **Vercel** — deployment

---

## 📄 PROJECT_CONTEXT.md

See [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md) for the **complete rebuild spec**
— every section's design, copy, tokens, structure, behaviour, and a changelog.
It is the single source of truth; keep it updated whenever the design or copy
changes so the project can be rebuilt from it if needed.
