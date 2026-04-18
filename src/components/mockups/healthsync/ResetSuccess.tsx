import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function ResetSuccess() {
  return (
    <MobileFrame bg="#F4F7FB">
      <div style={{ height: 820, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 32px", textAlign: "center" }}>
        {/* Success checkmark */}
        <div style={{
          width: 120,
          height: 120,
          borderRadius: 40,
          background: "#DCFCE7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
          position: "relative",
        }}>
          <div style={{
            position: "absolute",
            inset: -8,
            borderRadius: 48,
            border: "2px solid #22C55E",
            opacity: 0.3,
          }} />
          <div style={{
            position: "absolute",
            inset: -16,
            borderRadius: 56,
            border: "2px solid #22C55E",
            opacity: 0.15,
          }} />
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" fill="#22C55E"/>
            <path d="M18 31L26 39L42 22" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
          Email Sent!
        </h2>
        <p style={{ fontSize: 16, color: "#4A6080", lineHeight: 1.6, margin: "0 0 12px" }}>
          We've sent a password reset link to
        </p>
        <p style={{ fontSize: 16, fontWeight: 700, color: "#0F1F3D", margin: "0 0 40px" }}>
          ahmad@example.com
        </p>

        {/* Steps */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {[
            { num: 1, text: "Check your inbox for the reset email" },
            { num: 2, text: "Click the link in the email" },
            { num: 3, text: "Create your new password" },
          ].map((step) => (
            <div key={step.num} style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "white",
              borderRadius: 14,
              padding: "14px 16px",
              boxShadow: "0 2px 8px rgba(15,31,61,0.06)",
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "#EBF3FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 800,
                color: "#1A6BCC",
                flexShrink: 0,
              }}>
                {step.num}
              </div>
              <span style={{ fontSize: 14, color: "#4A6080", fontWeight: 500 }}>{step.text}</span>
            </div>
          ))}
        </div>

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
          marginBottom: 16,
        }}>
          Open Email App
        </button>

        <button style={{
          width: "100%",
          padding: "16px",
          borderRadius: 16,
          border: "1.5px solid #E2EAF4",
          background: "white",
          fontSize: 16,
          fontWeight: 600,
          color: "#4A6080",
          cursor: "pointer",
        }}>
          Resend Email
        </button>
      </div>
    </MobileFrame>
  );
}
