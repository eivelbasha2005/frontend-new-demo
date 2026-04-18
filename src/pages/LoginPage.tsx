import { ArrowRight, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { SurfaceCard } from "@/components/common/SurfaceCard";

export function LoginPage() {
  return (
    <div className="grid min-h-[calc(100vh-3rem)] items-center gap-6 lg:grid-cols-[1fr_520px]">
      <SurfaceCard className="relative hidden min-h-[680px] overflow-hidden border-none bg-[linear-gradient(155deg,#0f2a5c_0%,#1a6bcc_62%,#0dc9b1_150%)] text-white lg:block">
        <div className="absolute -left-20 top-12 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-10 bottom-4 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white/15">
              <HeartPulse className="h-7 w-7 text-teal-300" />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">HealthSync</p>
              <p className="text-sm text-white/70">Responsive care companion</p>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-200">
              Welcome back
            </p>
            <h1 className="max-w-lg text-5xl font-bold tracking-tight">
              Good to see you again.
            </h1>
            <p className="max-w-md text-base leading-7 text-white/75">
              Sign in to review your daily overview, smart alerts, AI-supported analysis, and care-team notes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Today score", value: "78/100" },
              { label: "Open alerts", value: "3 active" },
              { label: "Readings synced", value: "24 today" },
              { label: "Care plan", value: "92% complete" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/15 bg-white/10 p-5">
                <p className="text-sm text-white/70">{item.label}</p>
                <p className="mt-2 text-2xl font-bold tracking-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </SurfaceCard>

      <SurfaceCard className="mx-auto w-full max-w-[560px] overflow-hidden p-0">
        <div className="bg-[linear-gradient(160deg,#0f2a5c_0%,#1a6bcc_100%)] px-6 py-8 text-white sm:px-8 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-200">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            Good to see you again.
          </h1>
        </div>

        <div className="space-y-6 px-6 py-8 sm:px-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
              Sign in
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Continue to your dashboard
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              This is a frontend-only mock flow, so the form is intentionally static.
            </p>
          </div>

          <div className="grid gap-5">
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Email
              </span>
              <input
                className="h-14 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
                defaultValue="ahmad@healthsync.app"
                type="email"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Password
              </span>
              <input
                className="h-14 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
                defaultValue="password123"
                type="password"
              />
            </label>
          </div>

          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-slate-500">Remember this device</span>
            <Link className="font-semibold text-sky-700" to={healthSyncRoutes.resetPassword}>
              Forgot password?
            </Link>
          </div>

          <Link
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            to={healthSyncRoutes.dashboard}
          >
            Sign in
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
            <div className="h-px flex-1 bg-slate-200" />
            Or
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {["Continue with Google", "Continue with Apple"].map((label) => (
              <button
                key={label}
                className="h-12 rounded-[18px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500">
            New to HealthSync?{" "}
            <Link className="font-semibold text-sky-700" to={healthSyncRoutes.signup}>
              Create account
            </Link>
          </p>
        </div>
      </SurfaceCard>
    </div>
  );
}
