import { CalendarDays, Menu, Search } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";

import { getPageMeta } from "@/app/navigation";
import { SurfaceCard } from "@/components/common/SurfaceCard";
import { MobileNav } from "@/components/layout/MobileNav";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { careTeam, nextSteps, overviewStats } from "@/data/healthData";

export function AppShell() {
  const location = useLocation();
  const meta = getPageMeta(location.pathname);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(26,107,204,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(13,201,177,0.14),transparent_20%),#eef4fa] pb-28 lg:pb-0">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <SidebarNav />

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <SurfaceCard className="px-5 py-4 sm:px-6 lg:px-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden">
                  <Menu className="h-5 w-5" />
                </button>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-600">
                    {meta.eyebrow}
                  </p>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      {meta.title}
                    </h1>
                    <p className="max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
                      {meta.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <Search className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-500">Search mock records</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-white">
                  <CalendarDays className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-semibold">Sunday, April 18</p>
                    <p className="text-xs text-white/65">Morning review synced</p>
                  </div>
                </div>
              </div>
            </div>
          </SurfaceCard>

          <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <main className="min-w-0">
              <Outlet />
            </main>

            <aside className="hidden xl:flex xl:flex-col xl:gap-5">
              <SurfaceCard className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                    Snapshot
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    Daily care overview
                  </h2>
                </div>
                <div className="grid gap-3">
                  {overviewStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] bg-slate-50 px-4 py-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {stat.label}
                      </p>
                      <div className="mt-2 flex items-end justify-between gap-3">
                        <p className="text-3xl font-bold tracking-tight text-slate-950">
                          {stat.value}
                        </p>
                        <p className="text-sm font-medium text-slate-500">{stat.helper}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SurfaceCard>

              <SurfaceCard className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                    Next steps
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    Focus for today
                  </h2>
                </div>
                <div className="space-y-3">
                  {nextSteps.map((step) => (
                    <div key={step} className="flex gap-3 rounded-[20px] bg-slate-50 p-4">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-400" />
                      <p className="text-sm leading-6 text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>
              </SurfaceCard>

              <SurfaceCard className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                    Care team
                  </p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    People supporting Ahmad
                  </h2>
                </div>
                <div className="space-y-3">
                  {careTeam.map((member) => (
                    <div key={member.name} className="rounded-[22px] bg-slate-50 p-4">
                      <p className="font-semibold text-slate-950">{member.name}</p>
                      <p className="text-sm text-slate-500">{member.role}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {member.contact}
                      </p>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
            </aside>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
