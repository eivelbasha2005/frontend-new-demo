import "./_group.css";
import { MobileFrame, BottomNav } from "./_shared/MobileFrame";

function Row({ icon, label, value, color = "#1A6BCC" }: { icon: React.ReactNode; label: string; value?: string; color?: string }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "13px 0",
    }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "#F2F6FC", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F1F3D", margin: 0 }}>{label}</p>
        {value && <p style={{ fontSize: 12, color: "#8BA3C0", margin: "2px 0 0", fontWeight: 500 }}>{value}</p>}
      </div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12" stroke="#C4D4E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function Profile() {
  return (
    <MobileFrame bg="#F2F6FC">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px 10px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", margin: 0, letterSpacing: "-0.03em" }}>My Profile</h2>
          <button style={{
            padding: "8px 16px",
            borderRadius: 10,
            border: "1.5px solid #E4EBF5",
            background: "white",
            fontSize: 13,
            fontWeight: 700,
            color: "#1A6BCC",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(15,31,61,0.04)",
          }}>
            Edit
          </button>
        </div>

        <div style={{ flex: 1, overflow: "auto" }}>

          {/* Identity card */}
          <div style={{ margin: "0 16px 16px", background: "#0F2A5C", borderRadius: 24, padding: "20px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(13,201,177,0.15)" }} />
            <div style={{ position: "absolute", bottom: -30, left: 60, width: 100, height: 100, borderRadius: "50%", background: "rgba(26,107,204,0.3)" }} />

            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative", zIndex: 1 }}>
              {/* Avatar */}
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "linear-gradient(135deg, #1A6BCC, #0DC9B1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "2.5px solid rgba(255,255,255,0.2)",
              }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="11" r="5.5" stroke="white" strokeWidth="2"/>
                  <path d="M5.5 27C5.5 21.75 10.25 17.5 16 17.5C21.75 17.5 26.5 21.75 26.5 27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ color: "white", fontSize: 18, fontWeight: 800, margin: "0 0 2px", letterSpacing: "-0.02em" }}>Ahmad Al-Rashidi</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, margin: "0 0 10px", fontWeight: 500 }}>ID #HS-20580415 · O+</p>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { label: "Age", value: "66" },
                    { label: "Height", value: "175 cm" },
                    { label: "Weight", value: "82 kg" },
                  ].map((s, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 8, padding: "5px 10px" }}>
                      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, margin: "0 0 1px", fontWeight: 500 }}>{s.label}</p>
                      <p style={{ color: "white", fontSize: 13, margin: 0, fontWeight: 700 }}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 10, margin: "0 16px 20px" }}>
            {[
              { label: "Health Score", value: "78", color: "#22C55E", suffix: "/100" },
              { label: "Days Active", value: "142", color: "#1A6BCC", suffix: "" },
              { label: "Alerts This Month", value: "11", color: "#F59E0B", suffix: "" },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, background: "white", borderRadius: 14, padding: "12px 10px", textAlign: "center", boxShadow: "0 1px 4px rgba(15,31,61,0.05)" }}>
                <p style={{ fontSize: 20, fontWeight: 900, color: s.color, margin: "0 0 2px", letterSpacing: "-0.03em" }}>
                  {s.value}<span style={{ fontSize: 12, fontWeight: 600 }}>{s.suffix}</span>
                </p>
                <p style={{ fontSize: 10, color: "#8BA3C0", margin: 0, fontWeight: 600, lineHeight: 1.3 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Conditions */}
          <div style={{ margin: "0 16px 16px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", margin: "0 0 10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Diagnosed Conditions</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { label: "Hypertension Stage 1", color: "#F59E0B", bg: "#FEF3C7" },
                { label: "Diabetes Type 2", color: "#3B82F6", bg: "#DBEAFE" },
              ].map((c, i) => (
                <div key={i} style={{ padding: "6px 14px", borderRadius: 20, background: c.bg, fontSize: 12, fontWeight: 700, color: c.color }}>
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          {/* Info sections */}
          {[
            {
              title: "Personal Details",
              rows: [
                { label: "Date of Birth", value: "April 15, 1958", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="12" rx="2" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M5.5 2V5M12.5 2V5M2 7.5H16" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/></svg> },
                { label: "Primary Doctor", value: "Dr. Layla Hassan", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M3 15C3 12.24 5.69 10 9 10C12.31 10 15 12.24 15 15" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/><path d="M11 7H13M12 6V8" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/></svg> },
              ],
            },
            {
              title: "App Settings",
              rows: [
                { label: "Notifications", value: "Enabled", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C6.79 2 5 3.79 5 6V11L3.5 13H14.5L13 11V6C13 3.79 11.21 2 9 2Z" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M7.5 14C7.5 14.83 8.17 15.5 9 15.5C9.83 15.5 10.5 14.83 10.5 14" stroke="#1A6BCC" strokeWidth="1.4"/></svg> },
                { label: "Language", value: "English", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M9 2C9 2 6.5 5.5 6.5 9C6.5 12.5 9 16 9 16" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M9 2C9 2 11.5 5.5 11.5 9C11.5 12.5 9 16 9 16" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M2 9H16" stroke="#1A6BCC" strokeWidth="1.4"/></svg> },
                { label: "Privacy & Data", value: "", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3.5" y="8" width="11" height="8" rx="1.5" stroke="#1A6BCC" strokeWidth="1.4"/><path d="M5.5 8V5.5C5.5 3.57 7.07 2 9 2C10.93 2 12.5 3.57 12.5 5.5V8" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/><circle cx="9" cy="12.5" r="1.2" fill="#1A6BCC"/></svg> },
              ],
            },
          ].map((section, si) => (
            <div key={si} style={{ margin: "0 16px 16px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", margin: "0 0 6px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{section.title}</p>
              <div style={{ background: "white", borderRadius: 18, padding: "0 16px", boxShadow: "0 1px 4px rgba(15,31,61,0.05)" }}>
                {section.rows.map((row, ri) => (
                  <div key={ri} style={{ borderBottom: ri < section.rows.length - 1 ? "1px solid #F2F6FC" : "none" }}>
                    <Row icon={row.icon} label={row.label} value={row.value} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Sign out */}
          <div style={{ margin: "0 16px 24px" }}>
            <button style={{
              width: "100%",
              height: 48,
              borderRadius: 14,
              border: "1.5px solid #FEE2E2",
              background: "#FFF5F5",
              color: "#EF4444",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M10.5 3H13C13.55 3 14 3.45 14 4V14C14 14.55 13.55 15 13 15H10.5M7 12L4 9L7 6M4 9H12" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sign Out
            </button>
          </div>
        </div>

        <BottomNav active="profile" />
      </div>
    </MobileFrame>
  );
}
