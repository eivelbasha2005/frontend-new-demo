import { healthSyncRoutes } from "@/app/navigation";

export type VitalTone = "rose" | "emerald" | "amber" | "sky";
export type AlertSeverity = "critical" | "warning" | "info" | "resolved";

export interface VitalSummary {
  slug: string;
  label: string;
  shortLabel: string;
  route: string;
  value: string;
  unit: string;
  trend: string;
  note: string;
  status: string;
  tone: VitalTone;
  spark: number[];
  weekly: number[];
  range: string;
  lastReading: string;
}

export interface AlertItem {
  id: string;
  severity: AlertSeverity;
  title: string;
  body: string;
  source: string;
  time: string;
  actionLabel: string;
  actionTo: string;
  unread: boolean;
}

export interface AnalysisCard {
  title: string;
  score: number;
  tone: VitalTone;
  level: string;
  summary: string;
  bullets: string[];
}

export interface ReadingEntry {
  id: string;
  date: string;
  time: string;
  systolic: number;
  diastolic: number;
  heartRate: number;
  oxygen: number;
  glucose: number;
  status: "Normal" | "Elevated" | "High";
}

export const overviewStats = [
  { label: "Health score", value: "78", helper: "Good", tone: "emerald" },
  { label: "Open alerts", value: "3", helper: "2 urgent", tone: "amber" },
  { label: "Care plan", value: "92%", helper: "This week", tone: "sky" },
] as const;

export const vitals: VitalSummary[] = [
  {
    slug: "heart-rate",
    label: "Heart Rate",
    shortLabel: "Heart",
    route: healthSyncRoutes.vitalHeartRate,
    value: "72",
    unit: "bpm",
    trend: "Down 2 bpm vs. yesterday",
    note: "Resting rate is stable this morning.",
    status: "Normal",
    tone: "rose",
    spark: [64, 58, 69, 52, 60, 46, 50],
    weekly: [70, 72, 73, 69, 71, 74, 72],
    range: "60-100 bpm",
    lastReading: "Updated 8:32 AM",
  },
  {
    slug: "blood-pressure",
    label: "Blood Pressure",
    shortLabel: "BP",
    route: healthSyncRoutes.vitalBloodPressure,
    value: "128/82",
    unit: "mmHg",
    trend: "Slightly elevated this week",
    note: "Worth monitoring after lunch and before bed.",
    status: "Watch",
    tone: "amber",
    spark: [72, 74, 65, 78, 59, 70, 66],
    weekly: [126, 130, 134, 129, 138, 132, 128],
    range: "Below 120/80 ideal",
    lastReading: "Updated 12:15 PM",
  },
  {
    slug: "blood-oxygen",
    label: "Blood Oxygen",
    shortLabel: "SpO2",
    route: healthSyncRoutes.vitalBloodOxygen,
    value: "98",
    unit: "%",
    trend: "Consistent all day",
    note: "No unusual dips detected across the last 24 hours.",
    status: "Excellent",
    tone: "emerald",
    spark: [46, 42, 39, 44, 35, 37, 34],
    weekly: [97, 98, 98, 97, 99, 98, 98],
    range: "95-100%",
    lastReading: "Updated 3 minutes ago",
  },
  {
    slug: "blood-glucose",
    label: "Blood Glucose",
    shortLabel: "Glucose",
    route: healthSyncRoutes.vitalBloodGlucose,
    value: "96",
    unit: "mg/dL",
    trend: "Within target range",
    note: "Morning readings remain the most stable window.",
    status: "Balanced",
    tone: "sky",
    spark: [60, 52, 56, 45, 49, 42, 46],
    weekly: [101, 97, 104, 100, 99, 95, 96],
    range: "80-130 mg/dL",
    lastReading: "Updated 7:45 AM",
  },
];

export const alerts: AlertItem[] = [
  {
    id: "alert-bp-high",
    severity: "critical",
    title: "High blood pressure detected",
    body: "Your 3:45 PM reading was 158/98 mmHg. Sit comfortably, rest for 10 minutes, and remeasure.",
    source: "Blood pressure",
    time: "2 minutes ago",
    actionLabel: "Review history",
    actionTo: healthSyncRoutes.healthHistory,
    unread: true,
  },
  {
    id: "alert-bp-trend",
    severity: "warning",
    title: "BP has trended upward this week",
    body: "Three afternoon readings landed above your preferred range. A low-sodium dinner is recommended tonight.",
    source: "AI pattern check",
    time: "1 hour ago",
    actionLabel: "Open AI analysis",
    actionTo: healthSyncRoutes.aiAnalysis,
    unread: true,
  },
  {
    id: "alert-hydration",
    severity: "info",
    title: "Hydration reminder",
    body: "Your oxygen and heart-rate patterns suggest a lighter activity day. Aim for 2 more glasses of water.",
    source: "Daily routine",
    time: "4 hours ago",
    actionLabel: "View dashboard",
    actionTo: healthSyncRoutes.dashboard,
    unread: false,
  },
  {
    id: "alert-resolved",
    severity: "resolved",
    title: "Heart rate returned to baseline",
    body: "Your morning spike has resolved, and your resting heart rate is back inside its normal range.",
    source: "Heart rate",
    time: "Yesterday",
    actionLabel: "Open details",
    actionTo: healthSyncRoutes.vitalHeartRate,
    unread: false,
  },
];

export const analysisCards: AnalysisCard[] = [
  {
    title: "Cardiovascular outlook",
    score: 55,
    tone: "amber",
    level: "Moderate",
    summary:
      "Cardiovascular indicators are mostly steady, but blood pressure spikes are happening more often after lunch.",
    bullets: [
      "Afternoon BP was elevated in 3 of the last 7 check-ins.",
      "Resting heart rate variability remains healthy.",
      "A 15-minute post-meal walk is your highest-impact habit today.",
    ],
  },
  {
    title: "Metabolic health",
    score: 78,
    tone: "sky",
    level: "Stable",
    summary:
      "Glucose readings remain inside target range, with the most predictable readings appearing in the morning.",
    bullets: [
      "Estimated HbA1c trend remains in a favorable range.",
      "Morning fasting numbers are the most consistent.",
      "Evening meals with less sodium seem to improve next-day readings.",
    ],
  },
  {
    title: "Respiratory status",
    score: 96,
    tone: "emerald",
    level: "Excellent",
    summary:
      "Blood oxygen remains consistently strong, with no concerning overnight dips in this mock dataset.",
    bullets: [
      "SpO2 stayed above 96% through the last 24 hours.",
      "No fatigue-related trend appears in the afternoon.",
      "Breathing quality looks strong for light exercise today.",
    ],
  },
];

export const historyReadings: ReadingEntry[] = [
  {
    id: "r1",
    date: "Today",
    time: "08:30 AM",
    systolic: 128,
    diastolic: 82,
    heartRate: 72,
    oxygen: 98,
    glucose: 96,
    status: "Normal",
  },
  {
    id: "r2",
    date: "Today",
    time: "12:15 PM",
    systolic: 135,
    diastolic: 88,
    heartRate: 78,
    oxygen: 97,
    glucose: 112,
    status: "Elevated",
  },
  {
    id: "r3",
    date: "Today",
    time: "03:45 PM",
    systolic: 158,
    diastolic: 98,
    heartRate: 88,
    oxygen: 96,
    glucose: 104,
    status: "High",
  },
  {
    id: "r4",
    date: "Yesterday",
    time: "08:20 AM",
    systolic: 126,
    diastolic: 80,
    heartRate: 70,
    oxygen: 98,
    glucose: 94,
    status: "Normal",
  },
  {
    id: "r5",
    date: "Yesterday",
    time: "08:50 PM",
    systolic: 132,
    diastolic: 85,
    heartRate: 74,
    oxygen: 97,
    glucose: 108,
    status: "Elevated",
  },
];

export const onboardingSteps = [
  {
    title: "Heart monitoring",
    description: "Follow your daily rhythm, changes in recovery, and the readings that matter most.",
  },
  {
    title: "Blood oxygen confidence",
    description: "See oxygen changes clearly across desktop, tablet, and mobile views.",
  },
  {
    title: "AI-assisted insights",
    description: "Surface understandable patterns without any backend or live medical integrations.",
  },
  {
    title: "Smart alerts",
    description: "Keep urgent information visible while giving quieter updates a cleaner home.",
  },
] as const;

export const careTeam = [
  { name: "Dr. Layla Hassan", role: "Primary doctor", contact: "Next follow-up on Monday" },
  { name: "Mona Kamel", role: "Cardiac nurse", contact: "Available for device questions" },
  { name: "Omar Adel", role: "Nutrition coach", contact: "Meal plan refreshed yesterday" },
] as const;

export const profile = {
  name: "Ahmad Al-Rashidi",
  memberId: "HS-20580415",
  bloodType: "O+",
  age: 66,
  height: "175 cm",
  weight: "82 kg",
  conditions: ["Hypertension Stage 1", "Type 2 Diabetes"],
  adherence: "92%",
  language: "English",
  notifications: "Enabled",
  doctor: "Dr. Layla Hassan",
};

export const nextSteps = [
  "Retake blood pressure in a calm seated position before dinner.",
  "Aim for a short walk after lunch to reduce the midday rise.",
  "Review the AI analysis summary before tomorrow's morning check-in.",
] as const;
