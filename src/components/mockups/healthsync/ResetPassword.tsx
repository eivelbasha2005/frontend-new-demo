import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

export function ResetPassword() {
  return (
    <MobileFrame bg="#FAFBFE">
      <div style={{ height: 820, display: "flex", flexDirection: "column", padding: "16px 24px 32px" }}>

        {/* Back */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
          <div style={{ width: 38, height: 38, borderRadius: 11, border: "1.5px solid #E4EBF5", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(15,31,61,0.05)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 5L7 9L11 13" stroke="#0F1F3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Visual — minimal, distinctive */}
        <div style={{ marginBottom: 32, position: "relative" }}>
          {/* Decorative background mark */}
          <div style={{
            position: "absolute",
            top: -20,
            left: -24,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #EBF3FF, #E6FAF8)",
            zIndex: 0,
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              background: "white",
              border: "1.5px solid #E4EBF5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              boxShadow: "0 4px 16px rgba(15,31,61,0.08)",
            }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="6" y="16" width="24" height="17" rx="3" stroke="#1A6BCC" strokeWidth="2"/>
                <path d="M11 16V10.5C11 7.46 13.46 5 16.5 5H18C21.04 5 23.5 7.46 23.5 10.5V16" stroke="#1A6BCC" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="18" cy="25" r="2.5" fill="#1A6BCC"/>
                <path d="M18 27.5V30" stroke="#1A6BCC" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F1F3D", margin: "0 0 8px", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Reset your<br />password
            </h2>
            <p style={{ fontSize: 15, color: "#8BA3C0", margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
              Enter your email and we'll send you a reset link right away.
            </p>
          </div>
        </div>

        {/* Email input */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>Email Address</p>
          <div style={{
            background: "#EBF3FF",
            border: "1.5px solid #C3DAFE",
            borderRadius: 14,
            padding: "0 16px",
            height: 54,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="4.5" width="14" height="9" rx="1.5" stroke="#1A6BCC" strokeWidth="1.4"/>
              <path d="M2 6L9 10.5L16 6" stroke="#1A6BCC" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <input
              defaultValue="ahmad@example.com"
              style={{ border: "none", background: "transparent", fontSize: 15, color: "#0F1F3D", outline: "none", flex: 1, fontFamily: "inherit", fontWeight: 600 }}
            />
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#1A6BCC", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5L4.5 8L9 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>

        <button style={{
          width: "100%",
          height: 54,
          borderRadius: 16,
          border: "none",
          background: "#0F2A5C",
          color: "white",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: "-0.01em",
          marginBottom: 16,
          position: "relative",
          overflow: "hidden",
        }}>
          Send Reset Link
          <div style={{ position: "absolute", right: -10, top: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(13,201,177,0.15)" }} />
        </button>

        {/* Helper note */}
        <div style={{
          background: "white",
          border: "1.5px solid #E4EBF5",
          borderRadius: 14,
          padding: "14px 16px",
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
          marginBottom: "auto",
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="9" cy="9" r="7" stroke="#B0C4DE" strokeWidth="1.4"/>
            <path d="M9 7V10" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="9" cy="12.5" r="0.75" fill="#B0C4DE"/>
          </svg>
          <p style={{ fontSize: 13, color: "#8BA3C0", margin: 0, lineHeight: 1.55, fontWeight: 400 }}>
            Check your spam folder if the email doesn't arrive within a few minutes.
          </p>
        </div>

        <p style={{ textAlign: "center", fontSize: 14, color: "#8BA3C0", margin: "20px 0 0", fontWeight: 500 }}>
          Remembered it?{" "}
          <span style={{ color: "#1A6BCC", fontWeight: 700, cursor: "pointer" }}>Back to sign in</span>
        </p>
      </div>
    </MobileFrame>
  );
}
