import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function Onboarding2() {
  return (
    <MobileFrame bg="#FFFFFF">
      <div style={{ height: 820, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        {/* Illustration area */}
        <div style={{
          background: "linear-gradient(160deg, #E6FAF8 0%, #EBF3FF 100%)",
          flex: "0 0 380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(13,201,177,0.1)" }} />
          <div style={{ position: "absolute", bottom: -20, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(26,107,204,0.08)" }} />

          {/* Oxygen illustration */}
          <div style={{
            width: 200,
            height: 200,
            background: "white",
            borderRadius: 40,
            boxShadow: "0 20px 60px rgba(13,201,177,0.18)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="36" fill="#E6FAF8"/>
              <circle cx="40" cy="40" r="24" fill="#0DC9B1" opacity="0.15"/>
              <circle cx="40" cy="40" r="16" fill="#0DC9B1"/>
              <text x="40" y="46" textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">O₂</text>
            </svg>
            <span style={{ fontSize: 32, fontWeight: 800, color: "#0F1F3D", marginTop: 12 }}>98%</span>
            <span style={{ fontSize: 13, color: "#4A6080", fontWeight: 500 }}>SpO₂ · Excellent</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "36px 32px 20px" }}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                width: i === 1 ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === 1 ? "#1A6BCC" : "#E2EAF4",
              }} />
            ))}
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", margin: "0 0 12px", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            Track Blood Oxygen Levels
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, margin: "0 0 36px", fontWeight: 400 }}>
            Continuously monitor your SpO₂ levels and get notified if your oxygen saturation drops below safe thresholds.
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
            Next
          </button>
          <button style={{ background: "none", border: "none", color: "#8BA3C0", fontSize: 15, fontWeight: 500, marginTop: 16, cursor: "pointer" }}>
            Skip for now
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}
