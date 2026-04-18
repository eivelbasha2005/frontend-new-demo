import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function Onboarding1() {
  return (
    <MobileFrame bg="#FFFFFF">
      <div style={{ height: 820, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        {/* Illustration area */}
        <div style={{
          background: "linear-gradient(160deg, #EBF3FF 0%, #E6FAF8 100%)",
          flex: "0 0 380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
          overflow: "hidden",
        }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(26,107,204,0.08)" }} />
          <div style={{ position: "absolute", bottom: -20, left: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(13,201,177,0.1)" }} />

          {/* Illustration: Heart rate monitor */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              width: 200,
              height: 200,
              background: "white",
              borderRadius: 40,
              boxShadow: "0 20px 60px rgba(26,107,204,0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}>
              <div style={{ position: "relative", marginBottom: 16 }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="36" fill="#EBF3FF"/>
                  <path d="M22 36C22 27.163 29.163 20 38 20C41.5 20 44.8 21.2 47.4 23.2C50 21.2 53.3 20 57 20C65.837 20 73 27.163 73 36C73 52 47.4 65 47.4 65C47.4 65 22 52 22 36Z"
                    fill="#EF4444" opacity="0.15"/>
                  <path d="M25 38C25 30.268 31.268 24 39 24C42.1 24 45 25 47.4 26.8C49.8 25 52.7 24 56 24C63.732 24 70 30.268 70 38C70 52 47.4 63 47.4 63C47.4 63 25 52 25 38Z"
                    fill="#EF4444"/>
                  <path d="M28 40 H36 L40 32 L44 48 L47 36 L50 40 H58"
                    stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D" }}>72</span>
              <span style={{ fontSize: 13, color: "#4A6080", fontWeight: 500 }}>bpm · Normal</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "36px 32px 20px" }}>
          {/* Dots */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 32 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{
                width: i === 0 ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === 0 ? "#1A6BCC" : "#E2EAF4",
              }} />
            ))}
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", margin: "0 0 12px", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            Monitor Your Heart Health
          </h2>
          <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.7, margin: "0 0 36px", fontWeight: 400 }}>
            Track your heart rate in real-time and receive instant alerts when readings are outside your normal range.
          </p>

          {/* CTA */}
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
            letterSpacing: "0.01em",
          }}>
            Next
          </button>

          <button style={{
            background: "none",
            border: "none",
            color: "#8BA3C0",
            fontSize: 15,
            fontWeight: 500,
            marginTop: 16,
            cursor: "pointer",
          }}>
            Skip for now
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}
