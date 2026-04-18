import { Link } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { SurfaceCard } from "@/components/common/SurfaceCard";

export function ResetPasswordPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl items-center justify-center">
      <SurfaceCard className="w-full space-y-6 p-8 sm:p-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600">
            Reset password
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950">
            We can send a secure reset link
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600">
            This is a static frontend screen, so the action routes back into the app without making any backend request.
          </p>
        </div>

        <label className="block space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Email address
          </span>
          <input
            className="h-14 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
            defaultValue="ahmad@healthsync.app"
            type="email"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            className="inline-flex h-14 items-center justify-center rounded-[20px] bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            to={healthSyncRoutes.login}
          >
            Send mock reset link
          </Link>
          <Link
            className="inline-flex h-14 items-center justify-center rounded-[20px] border border-slate-200 px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            to={healthSyncRoutes.login}
          >
            Back to sign in
          </Link>
        </div>
      </SurfaceCard>
    </div>
  );
}
