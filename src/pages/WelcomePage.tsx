import { ArrowRight, ShieldPlus } from "lucide-react";
import { Link } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { onboardingSteps } from "@/data/healthData";

export function WelcomePage() {
  return (
    <div className="grid min-h-[calc(100vh-3rem)] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <SurfaceCard className="relative overflow-hidden border-none bg-[linear-gradient(160deg,#0f2a5c_0%,#1a6bcc_60%,#0dc9b1_140%)] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -right-8 top-4 h-40 w-40 rounded-full bg-teal-300/20 blur-2xl" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white/15">
              <ShieldPlus className="h-7 w-7 text-teal-300" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">HealthSync</p>
              <p className="text-sm text-white/70">Your health, now responsive everywhere</p>
            </div>
          </div>

          <div className="mt-10 max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-200">
              Healthcare dashboard
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A mobile-inspired experience rebuilt as a real web application.
            </h1>
            <p className="max-w-xl text-base leading-7 text-white/75">
              The design language stays calm, clinical, and modern, while the layout now expands cleanly across desktop, tablet, and mobile breakpoints.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              to={healthSyncRoutes.dashboard}
            >
              Enter dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              to={healthSyncRoutes.login}
            >
              Sign in flow
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {onboardingSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                  Step 0{index + 1}
                </p>
                <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/72">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SurfaceCard>

      <div className="grid gap-6">
        <SurfaceCard className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
            What changed
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">
            Fully routed, reusable, and responsive
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            This version uses static mock data, React Router navigation, and reusable page sections instead of a phone preview container.
          </p>
          <div className="grid gap-3">
            {[
              "Desktop uses a wide workspace with sidebar navigation and support rail.",
              "Tablet adapts into flexible card grids without collapsing the hierarchy.",
              "Mobile keeps the stacked card feel and bottom navigation from the original direction.",
            ].map((item) => (
              <div key={item} className="rounded-[20px] bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Quick routes
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Login", to: healthSyncRoutes.login },
              { label: "Create account", to: healthSyncRoutes.signup },
              { label: "Reset password", to: healthSyncRoutes.resetPassword },
              { label: "AI Analysis", to: healthSyncRoutes.aiAnalysis },
            ].map((item) => (
              <Link
                key={item.to}
                className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </div>
  );
}
