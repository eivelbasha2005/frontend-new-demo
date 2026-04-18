import {
  Activity,
  Bell,
  BrainCircuit,
  LayoutDashboard,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { healthSyncRoutes } from "@/app/navigation";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", to: healthSyncRoutes.dashboard, icon: LayoutDashboard },
  { label: "AI", to: healthSyncRoutes.aiAnalysis, icon: BrainCircuit },
  { label: "History", to: healthSyncRoutes.healthHistory, icon: Activity },
  { label: "Alerts", to: healthSyncRoutes.notifications, icon: Bell },
  { label: "Profile", to: healthSyncRoutes.profile, icon: UserRound },
] as const;

export function MobileNav() {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-40 rounded-[28px] border border-white/70 bg-white/90 p-2 shadow-[0_20px_45px_rgba(15,31,61,0.14)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center gap-1 rounded-[22px] px-2 py-2 text-[11px] font-medium",
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-500 hover:bg-slate-100",
                )
              }
              to={item.to}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
