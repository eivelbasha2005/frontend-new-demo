export const healthSyncRoutes = {
  welcome: "/",
  login: "/login",
  signup: "/signup",
  resetPassword: "/reset-password",
  dashboard: "/dashboard",
  aiAnalysis: "/ai-analysis",
  healthHistory: "/history",
  notifications: "/alerts",
  profile: "/profile",
  vitalHeartRate: "/vitals/heart-rate",
  vitalBloodPressure: "/vitals/blood-pressure",
  vitalBloodOxygen: "/vitals/blood-oxygen",
  vitalBloodGlucose: "/vitals/blood-glucose",
} as const;

export const primaryNavItems = [
  {
    label: "Dashboard",
    description: "Today at a glance",
    to: healthSyncRoutes.dashboard,
  },
  {
    label: "AI Analysis",
    description: "Personalized insights",
    to: healthSyncRoutes.aiAnalysis,
  },
  {
    label: "History",
    description: "Recent readings",
    to: healthSyncRoutes.healthHistory,
  },
  {
    label: "Alerts",
    description: "Smart notifications",
    to: healthSyncRoutes.notifications,
  },
  {
    label: "Profile",
    description: "Account and care team",
    to: healthSyncRoutes.profile,
  },
] as const;

export function getPageMeta(pathname: string) {
  if (pathname === healthSyncRoutes.dashboard) {
    return {
      eyebrow: "Daily Overview",
      title: "Health dashboard",
      description:
        "Track the most important signals for today, with quick actions for follow-up.",
    };
  }

  if (pathname === healthSyncRoutes.aiAnalysis) {
    return {
      eyebrow: "AI Review",
      title: "Clinical-style insights",
      description:
        "Static mock analysis that summarizes your patterns in a cleaner desktop layout.",
    };
  }

  if (pathname === healthSyncRoutes.healthHistory) {
    return {
      eyebrow: "Health History",
      title: "Reading trends and logs",
      description:
        "A broader historical view with easier comparison across devices and time ranges.",
    };
  }

  if (pathname === healthSyncRoutes.notifications) {
    return {
      eyebrow: "Alerts Center",
      title: "Smart alerts",
      description:
        "Prioritized notifications with clearer scanning on tablet and desktop.",
    };
  }

  if (pathname === healthSyncRoutes.profile) {
    return {
      eyebrow: "Profile",
      title: "Patient profile",
      description:
        "Medical profile, care team, settings, and support information in one place.",
    };
  }

  if (pathname.startsWith("/vitals/")) {
    return {
      eyebrow: "Vital Detail",
      title: "Vital deep dive",
      description:
        "Review the selected signal with snapshots, recent trends, and recommended next steps.",
    };
  }

  return {
    eyebrow: "HealthSync",
    title: "Responsive health workspace",
    description: "A clean and modern healthcare dashboard built with static mock data.",
  };
}
