import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function Onboarding4() {
  return (
    <MobileFrame bg="#FFFFFF">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{
          background: "linear-gradient(160deg, #DCFCE7 0%, #EBF3FF 100%)",
          flex: "0 0 380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", bottom: -20, left: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(34,197,94,0.1)" }} />

          {/* Notifications illustration */}
          <div style={{
            width: 200,
            height: 200,
            background: "white",
            borderRadius: 40,
            boxShadow: "0 20px 60px rgba(34,197,94,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "20px 16px",
          }}>
            {[
              { color: "#EF4444", bg: "#FEE2E2", label: "High BP detected", sub: "140/95 mmHg" },
              { color: "#F59E0B", bg: "#FEF3C7", label: "Low SpO₂", sub: "Below 94%" },
              { color: "#22C55E", bg: "#DCFCE7", label: "Heart rate normal", sub: "72 bpm" },
            ].map((n, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: n.bg,
                borderRadius: 12,
                padding: "10px 12px",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: n.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#0F1F3D" }}>{n.label}</div>
                  <div style={{ fontSize: 11, color: "#4A6080", fontWeight: 400 }}>{n.sub}</div>
                </div>
              </div>
            ))}
            <div style={{
              background: "#EBF3FF",
              borderRadius: 12,
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#1A6BCC" strokeWidth="1.5"/>
                <path d="M8 5V8.5" stroke="#1A6BCC" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="11" r="0.75" fill="#1A6BCC"/>
              </svg>
              <span style={{ fontSize: 11, color: "#1A6BCC", fontWeight: 600 }}>3 alerts today</span>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "36px 32px 20px" }}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ width: i === 3 ? 24 : 8, height: 8, borderRadius: 4, background: i === 3 ? "#1A6BCC" : "#E2EAF4" }} />
            ))}
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", margin: "0 0 12px", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            Smart Alerts & Notifications
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, margin: "0 0 36px", fontWeight: 400 }}>
            Receive timely, clear alerts when your vitals need attention, so you and your care team can act quickly.
          </p>

          <button style={{
            width: "100%",
            padding: "18px",
            borderRadius: 16,
            border: "none",
            background: "linear-gradient(135deg, #1A6BCC 0%, #1255A8 100%)",
            color: "white",
            fontSize: 17,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(26,107,204,0.35)",
          }}>
            Get Started
          </button>
          <button style={{ background: "none", border: "none", color: "#8BA3C0", fontSize: 15, fontWeight: 500, marginTop: 16, cursor: "pointer" }}>
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}
