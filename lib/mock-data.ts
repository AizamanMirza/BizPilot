export type Business = {
  name: string;
  type: string;
  location: string;
  goal: string;
};

export const BUSINESS: Business = {
  name: "UrbanFade Studio",
  type: "Barber",
  location: "Shah Alam",
  goal: "Get more bookings this month",
};

export const USER = {
  firstName: "Mirza",
  fullName: "Mirza Aizaman",
  email: "mirza@urbanfade.studio",
  plan: "Pro Trial",
};

export type Metric = {
  label: string;
  value: string;
  hint: string;
  trend: "up" | "down" | "neutral";
  accent: "green" | "blue" | "amber" | "neutral";
};

export const METRICS: Metric[] = [
  {
    label: "Leads Today",
    value: "12",
    hint: "+3 from yesterday",
    trend: "up",
    accent: "blue",
  },
  {
    label: "Sales Today",
    value: "RM850",
    hint: "4 closed sales",
    trend: "up",
    accent: "green",
  },
  {
    label: "Revenue This Month",
    value: "RM12,450",
    hint: "+18% from last month",
    trend: "up",
    accent: "green",
  },
  {
    label: "Follow-ups Needed",
    value: "8",
    hint: "Due today",
    trend: "neutral",
    accent: "amber",
  },
  {
    label: "Content Scheduled",
    value: "16",
    hint: "7 days ready",
    trend: "up",
    accent: "neutral",
  },
];

export type LeadStatus =
  | "New Lead"
  | "Contacted"
  | "Interested"
  | "Follow-up Needed"
  | "Closed";

export type Lead = {
  id: string;
  name: string;
  status: LeadStatus;
  interest: string;
  value: number;
  channel: string;
  lastContact: string;
};

export const LEADS: Lead[] = [
  {
    id: "ld-1",
    name: "Aiman",
    status: "Interested",
    interest: "Weekend haircut",
    value: 45,
    channel: "Instagram DM",
    lastContact: "2h ago",
  },
  {
    id: "ld-2",
    name: "Sarah",
    status: "Follow-up Needed",
    interest: "Hair treatment",
    value: 120,
    channel: "WhatsApp",
    lastContact: "1d ago",
  },
  {
    id: "ld-3",
    name: "Muiz",
    status: "New Lead",
    interest: "Fade haircut",
    value: 35,
    channel: "Walk-in",
    lastContact: "Just now",
  },
  {
    id: "ld-4",
    name: "Daniel",
    status: "Closed",
    interest: "Beard trim + haircut",
    value: 65,
    channel: "WhatsApp",
    lastContact: "3h ago",
  },
  {
    id: "ld-5",
    name: "Nisha",
    status: "Contacted",
    interest: "Beauty package",
    value: 180,
    channel: "Instagram DM",
    lastContact: "5h ago",
  },
];

export const LEAD_STATUSES: LeadStatus[] = [
  "New Lead",
  "Contacted",
  "Interested",
  "Follow-up Needed",
  "Closed",
];

export type ContentStatus = "Scheduled" | "Draft" | "Posted" | "Idea";

export type ContentItem = {
  id: string;
  title: string;
  format: string;
  day: string;
  status: ContentStatus;
  channel: string;
};

export const CONTENT: ContentItem[] = [
  {
    id: "ct-1",
    title: "Before/After Haircut Reel",
    format: "Reel",
    day: "Mon",
    status: "Scheduled",
    channel: "Instagram",
  },
  {
    id: "ct-2",
    title: "Haircare Tip Carousel",
    format: "Carousel",
    day: "Tue",
    status: "Draft",
    channel: "Instagram",
  },
  {
    id: "ct-3",
    title: "Weekend Promo Post",
    format: "Post",
    day: "Thu",
    status: "Scheduled",
    channel: "Facebook",
  },
  {
    id: "ct-4",
    title: "Customer Review Story",
    format: "Story",
    day: "Fri",
    status: "Idea",
    channel: "Instagram",
  },
  {
    id: "ct-5",
    title: "Last Call Booking Push",
    format: "Story",
    day: "Sat",
    status: "Scheduled",
    channel: "WhatsApp",
  },
];

export type FollowUp = {
  id: string;
  name: string;
  reason: string;
  due: string;
  channel: string;
  priority: "high" | "medium" | "low";
};

export const FOLLOW_UPS: FollowUp[] = [
  {
    id: "fu-1",
    name: "Sarah",
    reason: "Quoted hair treatment, no reply yet",
    due: "Due today",
    channel: "WhatsApp",
    priority: "high",
  },
  {
    id: "fu-2",
    name: "Nisha",
    reason: "Asked about beauty package pricing",
    due: "Due today",
    channel: "Instagram DM",
    priority: "high",
  },
  {
    id: "fu-3",
    name: "Faris",
    reason: "Came in last month — due for a trim",
    due: "Due tomorrow",
    channel: "WhatsApp",
    priority: "medium",
  },
  {
    id: "fu-4",
    name: "Hakim",
    reason: "Left a 5-star review — offer loyalty perk",
    due: "This week",
    channel: "WhatsApp",
    priority: "low",
  },
];

export type Sale = {
  id: string;
  customer: string;
  service: string;
  amount: number;
  status: "Paid" | "Pending";
  date: string;
};

export const SALES: Sale[] = [
  {
    id: "sl-1",
    customer: "Aiman",
    service: "Haircut",
    amount: 45,
    status: "Paid",
    date: "Today",
  },
  {
    id: "sl-2",
    customer: "Daniel",
    service: "Haircut + Beard",
    amount: 65,
    status: "Paid",
    date: "Today",
  },
  {
    id: "sl-3",
    customer: "Sarah",
    service: "Hair Treatment",
    amount: 120,
    status: "Pending",
    date: "Yesterday",
  },
];

export type AiSuggestion = {
  id: string;
  title: string;
  detail: string;
  tag: string;
};

export const AI_SUGGESTIONS: AiSuggestion[] = [
  {
    id: "ai-1",
    title: "Post a weekend promo today",
    detail:
      "Saturdays drive your most bookings. Push a limited 'RM5 off fades' story before noon.",
    tag: "Content",
  },
  {
    id: "ai-2",
    title: "Reply to Sarah's treatment enquiry",
    detail:
      "She asked 2 days ago. A friendly nudge with available slots usually converts.",
    tag: "Leads",
  },
  {
    id: "ai-3",
    title: "Boost your before/after reel",
    detail:
      "Your last reel got 3x reach. A RM30 boost to 25–34 men in Shah Alam could fill 3 slots.",
    tag: "Ads",
  },
];

export type RevenuePoint = {
  label: string;
  value: number;
};

export const REVENUE_TREND: RevenuePoint[] = [
  { label: "Week 1", value: 2400 },
  { label: "Week 2", value: 3100 },
  { label: "Week 3", value: 2950 },
  { label: "Week 4", value: 4000 },
];

export const REVENUE_MONTHLY: RevenuePoint[] = [
  { label: "Jan", value: 7800 },
  { label: "Feb", value: 8400 },
  { label: "Mar", value: 9100 },
  { label: "Apr", value: 10500 },
  { label: "May", value: 12450 },
];

export type Campaign = {
  name: string;
  channel: string;
  spend: number;
  revenue: number;
  bookings: number;
  roas: number;
};

export const BEST_CAMPAIGN: Campaign = {
  name: "Weekend Fade Promo",
  channel: "Meta Ads",
  spend: 120,
  revenue: 980,
  bookings: 14,
  roas: 8.2,
};

export const CAMPAIGNS: Campaign[] = [
  {
    name: "Weekend Fade Promo",
    channel: "Meta Ads",
    spend: 120,
    revenue: 980,
    bookings: 14,
    roas: 8.2,
  },
  {
    name: "Beard Care Bundle",
    channel: "Instagram",
    spend: 80,
    revenue: 540,
    bookings: 8,
    roas: 6.8,
  },
  {
    name: "First Visit RM5 Off",
    channel: "Meta Ads",
    spend: 150,
    revenue: 720,
    bookings: 11,
    roas: 4.8,
  },
];

export type ContentTab = {
  id: string;
  label: string;
};

export const GENERATOR_TYPES = [
  { id: "caption", label: "Caption", hint: "Instagram & Facebook posts" },
  { id: "ad", label: "Ad Copy", hint: "Meta ad headlines & body" },
  { id: "promo", label: "Promo", hint: "Limited-time offer copy" },
  { id: "reply", label: "Lead Reply", hint: "DM & WhatsApp responses" },
  { id: "visual", label: "Visual Prompt", hint: "Briefs for posters & reels" },
];

export const GENERATOR_SAMPLE: Record<string, string[]> = {
  caption: [
    "Fresh fade, fresh start. ✂️ Walk in looking sharp, walk out feeling unstoppable. Book your weekend slot at UrbanFade Studio, Shah Alam. Link in bio.",
    "Your cut says more than your words. Let's make it loud. 🔥 Tap to book this week — limited weekend slots left.",
  ],
  ad: [
    "Headline: Sharpest fades in Shah Alam.\nBody: Skilled barbers, no rushed cuts, easy online booking. New clients get RM5 off the first visit. Book today.",
    "Headline: Look your best this weekend.\nBody: UrbanFade Studio brings clean fades and beard trims to Shah Alam. Limited weekend slots — reserve yours now.",
  ],
  promo: [
    "🚨 Weekend only: RM5 off every fade. Book before Saturday noon and skip the queue. UrbanFade Studio, Shah Alam.",
    "Loyalty perk: Your 5th cut is on us. Show this message at the counter to redeem. Valid this month only.",
  ],
  reply: [
    "Hi Sarah! Thanks for reaching out 😊 Our hair treatment is RM120 and takes about 45 minutes. We have slots open Thu 3pm and Sat 11am — which works best for you?",
    "Hey! Yes, we do walk-ins, but weekends fill up fast. Want me to hold a slot for you so you don't wait? Just let me know your preferred time.",
  ],
  visual: [
    "Poster brief: Split-frame before/after fade. Left side messy grown-out hair, right side crisp clean fade. Bold 'BOOK THIS WEEKEND' text, brand navy + white, minimal background.",
    "Reel brief: 7-second close-up of clippers shaping a fade, fast cuts on the beat, end card with logo and 'Slots open — link in bio'.",
  ],
};
