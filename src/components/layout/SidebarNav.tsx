import {
  Activity,
  Bell,
  BrainCircuit,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { primaryNavItems } from "@/app/navigation";
import { cn } from "@/lib/utils";

const navIcons = [LayoutDashboard, BrainCircuit, Activity, Bell, UserRound];

export function SidebarNav() {
  return (
    <aside className="hidden w-[290px] shrink-0 flex-col rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,rgba(15,42,92,0.96),rgba(26,107,204,0.92))] p-6 text-white shadow-[0_30px_70px_rgba(15,31,61,0.18)] lg:flex">
      <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <Activity className="h-6 w-6 text-teal-300" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">HealthSync</p>
            <p className="text-sm text-white/70">Responsive care workspace</p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        {primaryNavItems.map((item, index) => {
          const Icon = navIcons[index];

          return (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-4 rounded-[24px] px-4 py-3 transition",
                  isActive
                    ? "bg-white text-slate-950 shadow-[0_16px_30px_rgba(15,31,61,0.18)]"
                    : "text-white/80 hover:bg-white/10 hover:text-white",
                )
              }
              to={item.to}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-current/60">{item.description}</p>
              </div>
            </NavLink>
          );
        })}
      </div>

      <div className="mt-auto rounded-[28px] border border-white/10 bg-white/10 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
          Today
        </p>
        <p className="mt-3 text-2xl font-bold tracking-tight">Morning review is ready</p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Your current mock dataset shows strong oxygen levels and a blood pressure follow-up worth checking later.
        </p>
      </div>
    </aside>
  );
}
