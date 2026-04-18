import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { SurfaceCard } from "@/components/common/SurfaceCard";

export function SignupPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <SurfaceCard className="space-y-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(235,243,255,0.92))]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
            Create account
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            Set up your care dashboard
          </h1>
          <p className="text-sm leading-6 text-slate-600">
            The sign-up flow is now organized like a web form instead of a narrow mobile-only sequence.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            "Personal details are grouped for faster completion on desktop.",
            "Health profile information sits beside contact fields on tablet and desktop.",
            "Mobile still stacks naturally to preserve the original app feel.",
          ].map((item) => (
            <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6 text-slate-600 shadow-[0_10px_30px_rgba(15,31,61,0.05)]">
              {item}
            </div>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard className="space-y-8">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { label: "Full name", value: "Ahmad Al-Rashidi" },
            { label: "Email address", value: "ahmad@healthsync.app" },
            { label: "Phone number", value: "+20 100 000 0000" },
            { label: "Date of birth", value: "1958-04-15" },
            { label: "Primary condition", value: "Hypertension Stage 1" },
            { label: "Preferred language", value: "English" },
          ].map((field) => (
            <label key={field.label} className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {field.label}
              </span>
              <input
                className="h-14 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
                defaultValue={field.value}
                type="text"
              />
            </label>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            { label: "Weight", value: "82 kg" },
            { label: "Height", value: "175 cm" },
            { label: "Daily reminders", value: "Enabled" },
            { label: "Care goal", value: "Reduce blood pressure spikes" },
          ].map((field) => (
            <label key={field.label} className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {field.label}
              </span>
              <input
                className="h-14 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
                defaultValue={field.value}
                type="text"
              />
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex h-14 items-center justify-center gap-2 rounded-[20px] bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            to={healthSyncRoutes.dashboard}
          >
            Create mock account
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex h-14 items-center justify-center rounded-[20px] border border-slate-200 px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            to={healthSyncRoutes.login}
          >
            Already have an account
          </Link>
        </div>
      </SurfaceCard>
    </div>
  );
}
