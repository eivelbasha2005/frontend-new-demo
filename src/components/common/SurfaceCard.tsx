import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function SurfaceCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/70 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,31,61,0.08)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
