import React from "react";

interface MobileFrameProps {
  children: React.ReactNode;
  bg?: string;
}

export function MobileFrame({ children, bg = "#F4F7FB" }: MobileFrameProps) {
  return (
    <div
      style={{
        width: 390,
        minHeight: 844,
        background: bg,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px 4px",
          background: "transparent",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "inherit" }}>9:41</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <rect x="0" y="3" width="3" height="9" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="4.5" y="2" width="3" height="10" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="currentColor"/>
            <rect x="13.5" y="0" width="3.5" height="12" rx="1" fill="currentColor"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 2.5C10.2 2.5 12.2 3.4 13.7 4.8L15.2 3.3C13.3 1.5 10.8 0.5 8 0.5C5.2 0.5 2.7 1.5 0.8 3.3L2.3 4.8C3.8 3.4 5.8 2.5 8 2.5Z" fill="currentColor"/>
            <path d="M8 5.5C9.5 5.5 10.9 6.1 11.9 7.1L13.4 5.6C12 4.2 10.1 3.5 8 3.5C5.9 3.5 4 4.2 2.6 5.6L4.1 7.1C5.1 6.1 6.5 5.5 8 5.5Z" fill="currentColor" opacity="0.7"/>
            <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <div style={{ width: 25, height: 12, border: "1.5px solid currentColor", borderRadius: 3, padding: "1.5px", opacity: 0.8 }}>
              <div style={{ width: "75%", height: "100%", background: "currentColor", borderRadius: 1.5 }} />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export function BottomNav({ active }: { active: "home" | "history" | "profile" | "notifs" }) {
  const items = [
    {
      id: "home",
      label: "Home",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 9.5L11 3L19 9.5V19C19 19.55 18.55 20 18 20H14V14H8V20H4C3.45 20 3 19.55 3 19V9.5Z"
            fill={active === "home" ? "#1A6BCC" : "none"}
            stroke={active === "home" ? "#1A6BCC" : "#8BA3C0"}
            strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: "history",
      label: "History",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="8" stroke={active === "history" ? "#1A6BCC" : "#8BA3C0"} strokeWidth="1.8"/>
          <path d="M11 7V11.5L14 13.5" stroke={active === "history" ? "#1A6BCC" : "#8BA3C0"} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "notifs",
      label: "Alerts",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 3C7.686 3 5 5.686 5 9V14L3 16H19L17 14V9C17 5.686 14.314 3 11 3Z"
            fill={active === "notifs" ? "#EBF3FF" : "none"}
            stroke={active === "notifs" ? "#1A6BCC" : "#8BA3C0"} strokeWidth="1.8"/>
          <path d="M9 17C9 18.105 9.895 19 11 19C12.105 19 13 18.105 13 17" stroke={active === "notifs" ? "#1A6BCC" : "#8BA3C0"} strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="8" r="3.5" stroke={active === "profile" ? "#1A6BCC" : "#8BA3C0"} strokeWidth="1.8"/>
          <path d="M4 19C4 15.686 7.134 13 11 13C14.866 13 18 15.686 18 19" stroke={active === "profile" ? "#1A6BCC" : "#8BA3C0"} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{
      position: "sticky",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#FFFFFF",
      borderTop: "1px solid #E2EAF4",
      display: "flex",
      alignItems: "center",
      padding: "8px 0 20px",
      boxShadow: "0 -4px 20px rgba(15,31,61,0.06)",
    }}>
      {items.map((item) => (
        <div key={item.id} style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          cursor: "pointer",
        }}>
          {item.icon}
          <span style={{
            fontSize: 11,
            fontWeight: active === item.id ? 600 : 400,
            color: active === item.id ? "#1A6BCC" : "#8BA3C0",
            letterSpacing: "0.01em",
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
