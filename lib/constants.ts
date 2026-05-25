import {
  LayoutDashboard,
  Building2,
  Sparkles,
  CalendarRange,
  Users,
  MessageSquareReply,
  Megaphone,
  TrendingUp,
  Settings,
  type LucideIcon,
} from "lucide-react";

export const APP_NAME = "BizPilot";
export const APP_TAGLINE = "AI Marketing OS";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const DASHBOARD_NAV: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Business Setup", href: "/dashboard/setup", icon: Building2 },
  { label: "AI Generator", href: "/dashboard/ai-generator", icon: Sparkles },
  { label: "Content Planner", href: "/dashboard/content", icon: CalendarRange },
  { label: "Leads", href: "/dashboard/leads", icon: Users },
  {
    label: "Follow-ups",
    href: "/dashboard/follow-ups",
    icon: MessageSquareReply,
  },
  { label: "Ads Coach", href: "/dashboard/ads-coach", icon: Megaphone },
  { label: "Revenue", href: "/dashboard/revenue", icon: TrendingUp },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: Feature[] = [
  {
    title: "AI Content Planner",
    description:
      "Generate weekly and monthly content plans based on your business goals.",
    icon: CalendarRange,
  },
  {
    title: "Caption & Copy Generator",
    description:
      "Write captions, hooks, CTAs, promo copy, and ad copy in seconds.",
    icon: Sparkles,
  },
  {
    title: "Visual Prompt Generator",
    description:
      "Generate creative prompts and design briefs for posters, reels, ads, and AI image tools.",
    icon: LayoutDashboard,
  },
  {
    title: "Ads Coach",
    description:
      "Get step-by-step guidance to run Meta Ads with better audience, budget, and copy.",
    icon: Megaphone,
  },
  {
    title: "Lead Reply Assistant",
    description:
      "Generate natural replies, handle objections, and follow up with customers.",
    icon: MessageSquareReply,
  },
  {
    title: "Revenue Dashboard",
    description:
      "Track leads, closed sales, revenue, conversion rate, and campaign performance.",
    icon: TrendingUp,
  },
];

export type PricingTier = {
  name: string;
  price: number;
  period: string;
  blurb: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: 39,
    period: "/month",
    blurb: "For solo owners getting their marketing off the ground.",
    features: [
      "1 business workspace",
      "AI content planner",
      "Caption & copy generator",
      "Up to 100 leads",
      "Email support",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: 89,
    period: "/month",
    blurb: "For growing businesses that sell every week.",
    features: [
      "Everything in Starter",
      "Visual prompt generator",
      "Lead reply assistant",
      "Follow-up automation queue",
      "Revenue dashboard",
      "Up to 1,000 leads",
    ],
    cta: "Start free",
    highlighted: true,
  },
  {
    name: "Business",
    price: 199,
    period: "/month",
    blurb: "For teams running ads and multiple locations.",
    features: [
      "Everything in Pro",
      "Ads coach & campaign tracking",
      "Multiple business workspaces",
      "Unlimited leads",
      "Priority support",
    ],
    cta: "Talk to sales",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "Do I need any marketing experience to use BizPilot?",
    answer:
      "No. BizPilot is built for busy small business owners. You answer a few questions about your business and the AI handles the planning, writing, and follow-up suggestions for you.",
  },
  {
    question: "What kind of businesses is BizPilot for?",
    answer:
      "Salons, barber shops, beauty studios, cafes, tuition centres, small agencies, and local service businesses. If you get customers through messages and bookings, BizPilot fits.",
  },
  {
    question: "Can BizPilot reply to my leads automatically?",
    answer:
      "BizPilot drafts natural, on-brand replies and follow-ups you can review and send. You stay in control of every message that goes out.",
  },
  {
    question: "Does it help with paid ads?",
    answer:
      "Yes. The Ads Coach walks you through audience, budget, and copy step by step, so you can run Meta Ads without guessing.",
  },
  {
    question: "Can I track my revenue and sales?",
    answer:
      "The revenue dashboard tracks leads, closed sales, conversion rate, and which campaigns bring the most money — all in one place.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a free trial. No card required to explore the workspace and generate your first content plan.",
  },
];

export type UseCase = {
  title: string;
  description: string;
};

export const USE_CASES: UseCase[] = [
  {
    title: "Salons & Beauty",
    description: "Fill the calendar with promos, reminders, and review posts.",
  },
  {
    title: "Barber Shops",
    description: "Show off before/after cuts and push weekend bookings.",
  },
  {
    title: "Cafes",
    description: "Plan daily specials and seasonal campaigns in minutes.",
  },
  {
    title: "Tuition Centres",
    description: "Reply to parent enquiries and follow up on trial classes.",
  },
  {
    title: "Small Agencies",
    description: "Spin up client content and ad copy at scale.",
  },
  {
    title: "Home Services",
    description: "Turn enquiries into booked jobs with fast follow-ups.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Set up your business",
    description:
      "Tell BizPilot what you sell, who you serve, and your goal for the month. Takes two minutes.",
  },
  {
    step: "02",
    title: "Generate your plan",
    description:
      "The AI builds a content calendar, captions, and ad ideas tailored to your business.",
  },
  {
    step: "03",
    title: "Reply and follow up",
    description:
      "Turn enquiries into bookings with drafted replies and a smart follow-up queue.",
  },
  {
    step: "04",
    title: "Track what sells",
    description:
      "Watch leads, sales, and revenue grow — and see which campaigns drive the most money.",
  },
];
