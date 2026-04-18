import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function Splash() {
  return (
    <MobileFrame bg="#0F2A5C">
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 820,
        padding: "0 40px",
        position: "relative",
      }}>
        {/* Background gradient circles */}
        <div style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,107,204,0.5) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 80,
          left: -80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13,201,177,0.3) 0%, transparent 70%)",
        }} />

        {/* Logo */}
        <div style={{
          width: 96,
          height: 96,
          borderRadius: 28,
          background: "linear-gradient(135deg, #1A6BCC 0%, #0DC9B1 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          boxShadow: "0 16px 40px rgba(26,107,204,0.4)",
        }}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M26 8C26 8 14 14 14 26C14 32.627 18.373 38 26 40C33.627 38 38 32.627 38 26C38 14 26 8 26 8Z" fill="white" opacity="0.2"/>
            <path d="M19 26H24V21H28V26H33" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 30C12 30 16 36 26 36C36 36 40 30 40 30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            <circle cx="26" cy="26" r="1.5" fill="white"/>
          </svg>
        </div>

        {/* App name */}
        <h1 style={{
          fontSize: 38,
          fontWeight: 800,
          color: "#FFFFFF",
          margin: 0,
          letterSpacing: "-0.02em",
        }}>
          Health<span style={{ color: "#0DC9B1" }}>Sync</span>
        </h1>
        <p style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.6)",
          marginTop: 10,
          fontWeight: 400,
          letterSpacing: "0.02em",
          textAlign: "center",
        }}>
          Your health, always in sync
        </p>

        {/* Pulse animation indicator */}
        <div style={{
          marginTop: 64,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}>
          {/* ECG line */}
          <svg width="180" height="40" viewBox="0 0 180 40" fill="none">
            <path d="M0 20 H50 L60 5 L70 35 L80 10 L90 30 L100 20 H180"
              stroke="#0DC9B1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Loader dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === 0 ? "#0DC9B1" : "rgba(255,255,255,0.25)",
              }} />
            ))}
          </div>
        </div>

        {/* Version */}
        <p style={{
          position: "absolute",
          bottom: 40,
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
          margin: 0,
        }}>
          Version 2.0.1
        </p>
      </div>
    </MobileFrame>
  );
}
