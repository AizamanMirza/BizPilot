# BizPilot — PROJECT_CONTEXT

> **Purpose of this file:** A complete, self-contained rebuild spec for BizPilot.
> If the chat/history is ever lost, hand this file to the AI assistant and it can
> recover, rebuild, or redesign the project from scratch — design, copy, tokens,
> structure, and decisions are all captured here.
>
> **MAINTENANCE RULE (important):** Whenever the design, copy, structure, tokens,
> or behaviour changes, **update this file in the same change** — keep the
> "Changelog" section at the bottom current. Treat PROJECT_CONTEXT.md as the
> single source of truth.

---

## 1. Product overview

- **Name:** BizPilot
- **Tagline / label:** "AI Marketing OS"
- **One-liner:** Your AI marketing assistant for small business.
- **What it does:** Helps small business owners create content, reply to leads,
  follow up with customers, run better ads, and track sales — all from one
  AI-powered workspace.
- **Positioning:** Premium, clean, modern enterprise-SaaS feel. Not childish.
- **Target users:** Salons, barber shops, beauty/spa, cafes, tuition centres,
  small agencies, fitness studios, home-service businesses, local service SMEs.
- **Status:** Frontend-only MVP. **Mock/static data only.** No real backend.

### Planned future integrations (NOT implemented yet — structure left clean for them)
- **Clerk** — authentication (`/sign-in`, `/sign-up` are mock placeholders).
- **Convex** — database (mock data in `lib/mock-data.ts` is shaped to swap in).
- **Claude API / Anthropic** — AI generation (AI Generator, lead replies, plans).
- **Stripe** — payments/subscriptions.
- **Vercel** — deployment.
The Settings page has an "Integrations" tab listing these as "Planned".

---

## 2. Tech stack

- **Next.js** 15.1.6 (App Router)
- **React** 19.0.0
- **TypeScript** 5.7
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `@import "tailwindcss"` + `@theme`)
- **lucide-react** (icons)
- **clsx** + **tailwind-merge** (the `cn()` helper)
- **Font:** Inter via `next/font/google` (variable `--font-inter`), with global
  tightened tracking: body `letter-spacing: -0.011em`, headings `-0.021em`.
- No Framer Motion (scroll animation uses a plain scroll listener + Intersection
  logic). Do NOT add heavy libraries unless necessary.

Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.

---

## 3. Design system (sky-blue theme)

Defined in `app/globals.css` under `@theme`. Tailwind utilities reference these
as `bg-canvas`, `text-ink`, `border-border-subtle`, `bg-brand`, etc.

| Token | Value | Use |
|---|---|---|
| `--color-canvas` | `#e9f1fb` | page background (light blue) |
| `--color-surface` | `#ffffff` | cards |
| `--color-surface-muted` | `#f1f5fc` | muted fills, icon tiles |
| `--color-border-subtle` | `#e1e8f3` | default borders/dividers |
| `--color-border-strong` | `#cbd6e8` | stronger borders, muted dots |
| `--color-ink` | `#14233f` | primary text (dark navy) |
| `--color-ink-secondary` | `#51617d` | secondary text |
| `--color-ink-muted` | `#93a1b8` | muted text/labels |
| `--color-brand` | `#3b82f6` | primary blue (buttons, active flow) |
| `--color-brand-deep` | `#2563eb` | hover/darker blue |
| `--color-brand-soft` | `#e8f1fe` | soft blue fills |
| `--color-accent-green` | `#16a34a` | success / completed |
| `--color-accent-green-soft` | `#ecfdf3` | |
| `--color-accent-amber` | `#f59e0b` | warning / action accent (use sparingly) |
| `--color-accent-amber-soft` | `#fffaeb` | |
| `--color-accent-red` | `#ef4444` | danger / "no reply" |
| `--color-accent-red-soft` | `#fef3f2` | |
| `--color-sky` / `--color-sky-light` | `#6ea3da` / `#c7def4` | hero sky helpers |
| `--radius-card` | `16px` | card radius (`rounded-card`) |
| `--shadow-soft` / `--shadow-card` / `--shadow-float` | see globals.css | elevation |

**Color usage rules:** blue = active/primary flow; green = completed/success;
amber = small warning/action accents only; monochrome navy base. Avoid loud
gradients elsewhere, glassmorphism overuse, childish graphics.

**Hero animations** (globals.css): `.hero-animated-bg` (moving blue gradient,
`heroGradient` 10s, bg-size 320%), `.animate-blob`/`-2`/`-3` (`blobDrift`,
drifting cloud blobs). All disabled under `prefers-reduced-motion: reduce`.

---

## 4. File structure

```
app/
├─ layout.tsx          # Inter font, metadata, <html>/<body>
├─ globals.css         # Tailwind v4 @theme tokens + base + hero animations
├─ page.tsx            # Landing page (assembles landing sections)
├─ sign-in/page.tsx    # Mock auth (no Clerk)
├─ sign-up/page.tsx    # Mock auth (no Clerk)
└─ dashboard/
   ├─ layout.tsx       # wraps children in <DashboardLayout>
   ├─ page.tsx         # dashboard home
   ├─ setup/page.tsx
   ├─ ai-generator/page.tsx
   ├─ content/page.tsx
   ├─ leads/page.tsx
   ├─ follow-ups/page.tsx
   ├─ ads-coach/page.tsx
   ├─ revenue/page.tsx
   └─ settings/page.tsx

components/
├─ ui/         Button, Card, Input, Textarea, Select, Tabs, Table, Drawer, StatusBadge
├─ landing/    Hero, HeroVisual, ProductPreview, Problem, Features, HowItWorks,
│              UseCases, Pricing, Faq, FinalCta, Footer, MarketingSplit (ORPHAN*)
├─ dashboard/  DashboardLayout, Sidebar, Topbar, MetricCard, DashboardCard,
│              LeadCard, ContentCard, FollowUpCard, RevenueChartMock, KanbanColumn
└─ shared/     Logo, Avatar, Container (+SectionLabel), PageHeader, EmptyState,
               AuthShell, MiniChart (MiniAreaChart, MiniBarChart)

lib/
├─ constants.ts   # APP_NAME, nav, FEATURES, PRICING, FAQS, USE_CASES, PROCESS_STEPS
├─ mock-data.ts   # BUSINESS, USER, METRICS, LEADS, CONTENT, FOLLOW_UPS, SALES, ...
└─ utils.ts       # cn(), formatRM(), formatNumber(), initials()
```

\* **MarketingSplit.tsx** exists but is NOT imported in `app/page.tsx` (was
built then the user reverted it out of the page). Safe to keep or delete.

### Path alias
`@/*` → project root (tsconfig). Import as `@/components/...`, `@/lib/...`.

---

## 5. Routes

Public: `/`
Auth (mock placeholders): `/sign-in`, `/sign-up`
Dashboard: `/dashboard`, `/dashboard/setup`, `/dashboard/ai-generator`,
`/dashboard/content`, `/dashboard/leads`, `/dashboard/follow-ups`,
`/dashboard/ads-coach`, `/dashboard/revenue`, `/dashboard/settings`

---

## 6. Landing page (`app/page.tsx`)

Render order (no separate sticky navbar — the header lives inside the Hero panel):
`Hero → ProductPreview → Problem → Features → HowItWorks → UseCases → Pricing → Faq → FinalCta → Footer`

### 6.1 Hero (`Hero.tsx` + `HeroVisual.tsx`) — client-free except visual
- A **contained, rounded (28–32px) sky panel** with an **animated moving blue
  gradient** background (`hero-animated-bg`) + 3 **drifting cloud blobs**
  (`animate-blob*`). Sits inset on the canvas (`px-3 pt-3`).
- **Integrated header** (inside the panel, white text on blue):
  - Left: Logo (white "X" mark + "BizPilot"), `light` variant.
  - Center nav (md+): **Home** (active, with a small dot under it), How it works,
    Use cases, Pricing, FAQ → anchors `#`, `#how`, `#use-cases`, `#pricing`, `#faq`.
  - Right: "Sign in" (text link) + **"Start for Free"** white pill button.
- **Badge:** glassy **blue-gradient pill** `from-[#bcdaf8] to-[#4f93da]`, larger
  size (`px-6 py-3 text-[15px]`), sparkle icon, text **"Ai Marketing"**, with
  small decorative `Sparkle` accents around it.
- **Headline:** `Your **all-in-one** AI assistant for smarter business [↗ chip] growth`
  ("all-in-one" bold; inline white rounded chip with a `TrendingUp` icon before "growth").
- **Sub:** "Plan content, win leads, follow up with customers, and track sales —
  all from one simple workspace, start to finish."
- **CTAs:** "Start free" (blue primary, sparkle icon) + "Book a demo" (white).
- **Product visual (`HeroVisual`):** a faithful **miniature of the real BizPilot
  dashboard** wrapped in a **frosted glass-stroke frame** (`bg-white/20`
  backdrop-blur, `border-white/55`, rounded-top, anchored to panel bottom):
  full sidebar (BizPilot · AI Marketing OS, all 9 nav items with Dashboard active
  in blue, Pro Trial + Upgrade, Mirza Aizaman), topbar ("Dashboard / Your
  marketing at a glance", UrbanFade Studio selector, blue "Generate with AI",
  bell), "Good morning, Mirza" greeting, the 5 metric cards, "Today's AI
  Suggestions" + "Follow-ups Due". Pulls from `DASHBOARD_NAV`, `METRICS`,
  `AI_SUGGESTIONS`, `FOLLOW_UPS`.

### 6.2 ProductPreview ("The product") — `ProductPreview.tsx`
> NOTE: This was redesigned once then **reverted by the user** to the original.
> Current = the original 3-panel version. Keep as-is unless asked.
- Eyebrow "The product"; headline "One workspace to run all your **marketing**";
  sub "Everything you need to plan content, win leads, and grow revenue — without
  juggling five different tools."
- 3 `PanelCard`s (icon + title + description + a mini mock UI inside):
  1. **Generate content in seconds** — "Captions, hooks, promos, and ad copy
     tuned to your business." (mock: sparkle + "Weekend promo post" + skeleton lines)
  2. **Reply to every lead** — "On-brand replies and follow-ups drafted and ready
     to send." (mock: chat bubbles, the sent bubble is blue `bg-brand`)
  3. **Track what sells** — "See revenue, conversion, and your best campaigns at a
     glance." (mock: "This month RM12,450", +18% green pill, `MiniAreaChart`)

### 6.3 Problem ("Your marketing, perfectly handled.") — `Problem.tsx`
- Bento section (NO outer white box — sits on canvas). Eyebrow "Clean and simple".
- Headline "Your marketing, perfectly handled."; sub about precision/speed.
- **2×2 grid** with thin divider lines + small **"+" markers** at the 4 corners
  and the center cross. Each quadrant = a dotted-grid mini area + an uppercase
  label + a description:
  1. **ONE WORKSPACE, FULL CONTROL** — macOS-style app window (traffic lights +
     two cols: "Performance" Conversion 32% / Bookings 34 / Follow-ups 12, and
     "Channels" @instagram / @whatsapp / @walk-in).
  2. **AI THAT DOES THE WORK** — automation flow: Trigger (red) → Condition card
     (purple header "Condition", "Is high value / Data", "Check if they asked
     about a service") → Action (blue).
  3. **CONNECTS TO YOUR CHANNELS** — integrations hub: center "Integrations" pill
     with connector lines to colored app icons (Instagram, Facebook, WhatsApp,
     Telegram, Calendar).
  4. **SECURE & RELIABLE** — secure login card (lock, Email, Key, "Log In") flanked
     by two faded cards.

### 6.4 Features ("Everything you need to grow your business") — `Features.tsx`
- Bento "how it works"-style. Header: brand icon tile with a faint connector-node
  graphic behind, "Features" eyebrow, two-tone headline "Everything you need to
  **grow your business**", sub "From content to closed sales, BizPilot gives small
  business owners one AI-powered workspace — no marketing skills required."
- **Row 1 (2:3):** *Caption & copy generator* (AI tile **+** BizPilot tile connect
  visual) | *Works with the channels you already use* (7×2 grid of 14 colored app
  icon tiles, edges faded).
- **Row 2 (3 cols):** *Lead reply assistant* (Trigger→Action dropdown mock with
  options) | *Revenue dashboard* (sync pills Leads/Sales/Content → arrow → layers
  tile) | **Blue gradient CTA card** ("Set up BizPilot right now!", trial sub,
  white "Try for Free" button → `/sign-up`).

### 6.5 HowItWorks ("How it works — your growth flow") — `HowItWorks.tsx` (CLIENT)
- **Scroll-animated tall workflow (~2.4 screens)**. `id="how"`.
- Eyebrow "How it works — your growth flow"; headline "From content idea to closed
  sale, BizPilot keeps the flow moving."; sub "Set up your business once, then let
  BizPilot help you plan content, respond to leads, follow up, and track what
  actually brings revenue."
- **NO white background box** — open on canvas with a subtle dotted grid, faint
  dashed vertical guides, and scattered ghost cards for depth.
- **Vertical alternating flow** (desktop): cards zig-zag left/right of a centre
  spine; mobile = left spine, cards stacked. A grey spine **track** + a **blue
  fill** whose height = scroll progress (NO dots/ticks on the line — removed).
- **6 steps** — each a card with category dot+label, icon, title, description.
  States: pending (muted) → active (blue border + soft glow + slight scale) →
  completed (green check badge in card corner):
  1. **Setup** (slate) · Business profile — "Tell BizPilot your business,
     services, offers, tone, and monthly goal — set it once."
  2. **Content** (blue) · AI content plan — "Get weekly content ideas, captions,
     CTAs, and visual prompts tailored to your business."
  3. **Campaign** (amber/action) · Launch campaign — "Turn your offer into posts,
     promos, WhatsApp messages, and Meta Ads direction."
  4. **Leads** (blue) · Capture leads — "Track interested customers from
     Instagram, WhatsApp, Facebook, or manual entry."
  5. **Engage** (green) · Follow up — "Generate natural replies, objection
     handling, and follow-up messages that convert."
  6. **Revenue** (green) · Track revenue — "See closed sales, campaign performance,
     conversion rate, and monthly revenue."
- **Footer badges: REMOVED** (previously had AI-powered / Built for small
  businesses / etc. — user asked to remove them).
- **Scroll animation logic (tuned):** a `scroll`+`resize` listener computes
  `progress` (0..1) tied 1:1 to scrolling THROUGH the section:
  `denom = max(rect.height − 0.8·vh, 1)`, `p = (0.2·vh − rect.top) / denom`,
  clamped. Fill height = `progress`. `activeIndex = floor(progress · 6)`.
  Reaches 100% exactly as the section bottom hits the viewport bottom. Respects
  `prefers-reduced-motion` (sets progress = 1, no listener). NOTE: progress uses
  a plain listener (no rAF) so it works even in throttled/preview contexts.

### 6.6 UseCases ("Who it's for") — `UseCases.tsx`
- **Bento mosaic** (CSS `grid-template-areas`, 9 cells), inspired by a
  "key features & benefits" reference. `id="use-cases"`.
- Eyebrow "Who it's for"; headline "Made for **local businesses** like yours.";
  sub "From salons to home services, BizPilot adapts to how you sell — no
  marketing team required."
- **Prominent center card** ("hero" area): Store icon tile, label "service
  businesses", blurb "If your customers come from messages, DMs, and bookings,
  BizPilot was built for you.", and a **blue circular ↗ button** (top-right →
  `/sign-up`).
- **7 business-type cards** (thin line icons + lowercase labels): salons,
  barbers, cafes, tuition centres, agencies, home services, fitness studios.
- **Faint dashed "+ and any small business that grows through chats and bookings."**
- Desktop grid areas:
  `"salon hero hero barber" / "cafe hero hero tuition" / "agency home fit desc"`.
  Mobile = 2-col grid (hero + desc span 2).

### 6.7 Pricing — `Pricing.tsx` (data in `lib/constants.ts`)
- Eyebrow "Pricing"; headline "Simple pricing, **no surprises**".
- **Starter — RM39/mo**, **Pro — RM89/mo (highlighted, blue gradient card,
  "Most popular")**, **Business — RM199/mo**. (See PRICING in constants for
  feature lists & CTAs: Start free / Start free / Talk to sales.)

### 6.8 Faq — `Faq.tsx` (CLIENT, accordion; data in constants `FAQS`)
- 6 Q&As (no marketing experience needed, which businesses, auto-replies, paid
  ads, revenue tracking, free trial). Open/close with `+` that rotates to blue.

### 6.9 FinalCta — `FinalCta.tsx`
- **Blue gradient panel** (`#3b82f6 → #2563eb → #1e40af`), white text.
  "Put your marketing on autopilot" + sub + "Start free" (white) and "View live
  demo" (translucent → `/dashboard`).

### 6.10 Footer — `Footer.tsx`
- Logo + tagline, 3 link columns (Product / Use cases / Company), copyright + Terms/Privacy/Cookies.

---

## 7. Dashboard

- **Shell:** `DashboardLayout` (client) → fixed **Sidebar** (260px) + **Topbar** +
  scrollable main. Background = canvas.
- **Sidebar:** Logo + "AI Marketing OS"; 9 nav items (active = `bg-brand` blue,
  white text); bottom = "Pro Trial / 9 days left" card + "Upgrade plan" + user
  (Mirza Aizaman). Collapses to a hamburger drawer on mobile.
- **Topbar:** route-based title + description (PAGE_META map in `Topbar.tsx`),
  business selector (UrbanFade Studio · Barber · Shah Alam), "Generate with AI"
  (blue), bell, avatar. Sticky, blurred.
- **Pages** (all mock UI, realistic, no empty placeholders):
  - **Home:** "Good morning, Mirza" + Add Lead / Generate with AI; 5 metric cards;
    Today's AI Suggestions; Follow-ups Due; This Week's Content Plan; Lead Pipeline
    (5-col kanban); Revenue Overview (`RevenueChartMock`); Best Performing Campaign.
  - **Setup:** business details form, audience & voice, monthly goal selector
    (active = blue), active channels, "Setup 80% complete" blue gradient card.
  - **AI Generator:** tabs (Caption/Ad/Promo/Lead Reply/Visual Prompt), input form
    (context, tone, length), generate → sample outputs (`GENERATOR_SAMPLE`).
  - **Content Planner:** week board (Mon–Sun) + all planned content cards.
  - **Leads:** Pipeline (kanban) / List (table) toggle, stats, search.
  - **Follow-ups:** Due today / Coming up lists; "Draft reply" opens a `Drawer`
    with an AI-drafted editable reply + Send.
  - **Ads Coach:** numbered stepper (audience/budget/ad) + best-practices checklist
    + Meta ad preview + projected result card.
  - **Revenue:** 4 metric cards, revenue trend (`RevenueChartMock`), recent sales
    table, campaign performance bars.
  - **Settings:** tabs Profile / Workspace / Plan & billing / Notifications /
    **Integrations** (Clerk, Convex, Claude API, Stripe → "Planned").

---

## 8. Mock data (`lib/mock-data.ts`)

- **BUSINESS:** UrbanFade Studio · Barber · Shah Alam · goal "Get more bookings this month".
- **USER:** Mirza Aizaman · mirza@urbanfade.studio · plan "Pro Trial".
- **METRICS (5):** Leads Today 12 (+3), Sales Today RM850 (4 closed), Revenue This
  Month RM12,450 (+18%), Follow-ups Needed 8 (Due today), Content Scheduled 16 (7 days ready).
- **LEADS (5):** Aiman (Interested, Weekend haircut, RM45), Sarah (Follow-up
  Needed, Hair treatment, RM120), Muiz (New Lead, Fade haircut, RM35), Daniel
  (Closed, Beard trim + haircut, RM65), Nisha (Contacted, Beauty package, RM180).
- **CONTENT (5):** Before/After Haircut Reel, Haircare Tip Carousel, Weekend Promo
  Post, Customer Review Story, Last Call Booking Push.
- **SALES (3):** Aiman Haircut RM45 Paid, Daniel Haircut+Beard RM65 Paid, Sarah
  Hair Treatment RM120 Pending.
- Also: `FOLLOW_UPS`, `AI_SUGGESTIONS`, `REVENUE_TREND`, `REVENUE_MONTHLY`,
  `CAMPAIGNS`/`BEST_CAMPAIGN` (Weekend Fade Promo, Meta Ads, 8.2x ROAS),
  `GENERATOR_TYPES`, `GENERATOR_SAMPLE`.

---

## 9. Reusable components (contracts)

- **Button** (`ui/Button`): variants `primary`(blue) | `secondary`(white) |
  `ghost` | `subtle` | `danger` | `white`; sizes `sm|md|lg`.
- **StatusBadge** (`ui/StatusBadge`): tones green/blue/amber/red/neutral +
  `leadStatusTone()` map. **Tabs, Table, Drawer, Input, Textarea, Select, Card.**
- **Logo** (`shared/Logo`): `light` prop (white-on-blue) + `withTagline`. Mark = an "X".
- **Avatar**: initials, deterministic pastel color, sizes xs/sm/md/lg.
- **MiniChart**: `MiniAreaChart` (SVG area), `MiniBarChart`.
- **Container** + **SectionLabel** (pill eyebrow). **PageHeader**, **EmptyState**.
- **Dashboard:** MetricCard (accent bar), DashboardCard, LeadCard, ContentCard,
  FollowUpCard, RevenueChartMock (SVG line chart w/ grid), KanbanColumn.

---

## 10. Conventions & guardrails

- No real backend / no Clerk / no Convex / no Claude / no payments yet.
- Keep TypeScript clean; `npx tsc --noEmit` must pass; `npm run build` must compile.
- Responsive, no horizontal scroll; cards/grids reflow; mobile-friendly.
- Don't run `npm run build` while `next dev` is running (they share `.next` and
  the build can clobber the dev server — symptom: styles vanish; fix = stop dev,
  `rm -rf .next`, restart).
- Nav anchors depend on section IDs: `#how` (HowItWorks), `#use-cases` (UseCases),
  `#pricing` (Pricing), `#faq` (Faq), `#features` (Features), `#product`
  (ProductPreview). Preserve these.

---

## 11. Changelog (keep this updated on every change)

- **v1 — Initial build:** Full frontend MVP — landing + 9 dashboard pages + auth
  placeholders, mock data, monochrome theme, Inter font.
- **v2 — Font/tracking:** Confirmed Inter everywhere; tightened letter-spacing.
- **v3 — Sky-blue rebrand:** New blue palette; Hero became a contained
  sky-gradient panel with integrated header; blue primary buttons; blue accents
  across dashboard; Logo gained `light` variant.
- **v4 — "Ai Marketing" badge:** renamed + glassy → then **blue-gradient** pill,
  enlarged.
- **v5 — Hero gradient animation:** moving gradient + drifting cloud blobs
  (`heroGradient`/`blobDrift`), reduced-motion safe; made motion more obvious.
- **v6 — Section spacing:** all sections `py-20` → `py-14` (tighter).
- **v7 — Hero dashboard visual:** replaced floating cards with a real-dashboard
  miniature inside a **glass-stroke frame**.
- **v8 — Problem section:** rebuilt as the 2×2 bento ("Your marketing, perfectly
  handled.") with mockups + plus markers; removed the diagonal line background.
- **v9 — Features section:** rebuilt as the bento ("Everything you need to grow
  your business") with app-icon grid, dropdown/sync mocks, and a blue CTA card.
- **v10 — HowItWorks:** rebuilt as a scroll-animated workflow; iterated to a tall
  (~2 screens) vertical alternating flow; removed white box; removed line dots;
  removed footer badges; **scroll pacing tuned to track 1:1 and finish as the
  section bottom reaches the viewport bottom**.
- **v11 — UseCases ("Who it's for"):** iterated (constellation hub w/ hover →) to
  the current **bento mosaic** with a prominent center card, 7 type cards, a
  "+more" card, and a blue ↗ accent. More points added.
- **v12 — Docs:** added `README.md` and this `PROJECT_CONTEXT.md`.

> When you make the next change, add a `v13 —` entry here describing what changed
> (design + copy + files touched).
