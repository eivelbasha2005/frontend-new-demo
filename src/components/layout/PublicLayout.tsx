import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(26,107,204,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(13,201,177,0.16),transparent_28%),#f3f7fc]">
      <div className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <Outlet />
      </div>
    </div>
  );
}
