import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function Onboarding3() {
  return (
    <MobileFrame bg="#FFFFFF">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{
          background: "linear-gradient(160deg, #FEF3C7 0%, #EBF3FF 100%)",
          flex: "0 0 380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(245,158,11,0.1)" }} />

          {/* AI Analysis illustration */}
          <div style={{
            width: 220,
            height: 200,
            background: "white",
            borderRadius: 40,
            boxShadow: "0 20px 60px rgba(245,158,11,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            gap: 12,
          }}>
            <div style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              background: "linear-gradient(135deg, #1A6BCC 0%, #0DC9B1 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16C8 11.582 11.582 8 16 8C20.418 8 24 11.582 24 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="20" r="3" fill="white"/>
                <path d="M11 22L9 26M21 22L23 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="1.5" fill="white" opacity="0.5"/>
              </svg>
            </div>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
              {["Risk Analysis", "Health Trends", "AI Insights"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "#22C55E" : i === 1 ? "#1A6BCC" : "#F59E0B" }} />
                  <span style={{ fontSize: 13, color: "#4A6080", fontWeight: 500 }}>{t}</span>
                  <div style={{ flex: 1, height: 6, borderRadius: 3, background: "#F4F7FB", overflow: "hidden" }}>
                    <div style={{ width: `${[85, 70, 60][i]}%`, height: "100%", borderRadius: 3, background: ["#22C55E","#1A6BCC","#F59E0B"][i] }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "36px 32px 20px" }}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ width: i === 2 ? 24 : 8, height: 8, borderRadius: 4, background: i === 2 ? "#1A6BCC" : "#E2EAF4" }} />
            ))}
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", margin: "0 0 12px", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            AI-Powered Health Insights
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, margin: "0 0 36px", fontWeight: 400 }}>
            Our AI analyzes your health patterns and provides personalized recommendations to help you stay ahead of potential issues.
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
