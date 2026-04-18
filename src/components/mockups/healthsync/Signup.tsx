import "./_group.css";
import { MobileFrame } from "./_shared/MobileFrame";

function Field({ label, placeholder, icon, type = "text", note }: {
  label: string; placeholder: string; icon: React.ReactNode; type?: string; note?: string;
}) {
  return (
    <div style={{ marginBottom: 14 }}>
      <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>{label}</p>
      <div style={{
        background: "white",
        border: "1.5px solid #E4EBF5",
        borderRadius: 13,
        padding: "0 14px",
        height: 50,
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
      }}>
        {icon}
        <input placeholder={placeholder} type={type}
          style={{ border: "none", background: "transparent", fontSize: 15, color: "#0F1F3D", outline: "none", flex: 1, fontFamily: "inherit", fontWeight: 500 }} />
      </div>
      {note && <p style={{ fontSize: 11, color: "#B0C4DE", margin: "5px 0 0", fontWeight: 500 }}>{note}</p>}
    </div>
  );
}

export function Signup() {
  return (
    <MobileFrame bg="#FAFBFE">
      <div style={{ height: 820, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Nav */}
        <div style={{ padding: "16px 24px 0", display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 38, height: 38, borderRadius: 11, border: "1.5px solid #E4EBF5", background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(15,31,61,0.05)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 5L7 9L11 13" stroke="#0F1F3D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#0F1F3D" }}>Create Account</span>
        </div>

        {/* Steps */}
        <div style={{ padding: "0 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
            {[1, 2].map(s => (
              <div key={s} style={{ flex: 1, height: 3.5, borderRadius: 2, background: s === 1 ? "#1A6BCC" : "#E4EBF5", position: "relative", overflow: "hidden" }}>
                {s === 1 && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #1A6BCC, #0DC9B1)" }} />}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "#1A6BCC", fontWeight: 700 }}>Step 1 — Account</span>
            <span style={{ fontSize: 12, color: "#B0C4DE", fontWeight: 500 }}>Step 2 — Health Info</span>
          </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "0 24px 24px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F1F3D", margin: "0 0 6px", letterSpacing: "-0.03em" }}>Account details</h2>
          <p style={{ fontSize: 13, color: "#8BA3C0", margin: "0 0 22px", fontWeight: 400 }}>These are used to sign in and contact you</p>

          {/* Full name */}
          <Field label="Full Name" placeholder="Ahmad Al-Rashidi"
            icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="5.5" r="3" stroke="#B0C4DE" strokeWidth="1.4"/><path d="M2.5 14.5C2.5 11.74 5.19 9.5 8.5 9.5C11.81 9.5 14.5 11.74 14.5 14.5" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/></svg>}
          />

          {/* Email */}
          <Field label="Email Address" placeholder="your@email.com" type="email"
            icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="4.5" width="13" height="9" rx="1.5" stroke="#B0C4DE" strokeWidth="1.4"/><path d="M2 6L8.5 10L15 6" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/></svg>}
          />

          {/* Phone */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>Phone Number</p>
            <div style={{ display: "flex", gap: 8 }}>
              {/* Country code */}
              <div style={{
                width: 76,
                height: 50,
                background: "white",
                border: "1.5px solid #E4EBF5",
                borderRadius: 13,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
                cursor: "pointer",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#0F1F3D" }}>+966</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Number input */}
              <div style={{
                flex: 1,
                height: 50,
                background: "white",
                border: "1.5px solid #E4EBF5",
                borderRadius: 13,
                padding: "0 14px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
              }}>
                <input placeholder="5X XXX XXXX" type="tel"
                  style={{ border: "none", background: "transparent", fontSize: 15, color: "#0F1F3D", outline: "none", width: "100%", fontFamily: "inherit", fontWeight: 500 }} />
              </div>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 14 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#8BA3C0", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 7px" }}>Password</p>
            <div style={{
              background: "white",
              border: "1.5px solid #E4EBF5",
              borderRadius: 13,
              padding: "0 14px",
              height: 50,
              display: "flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 1px 3px rgba(15,31,61,0.04)",
              marginBottom: 8,
            }}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="3" y="8" width="11" height="7.5" rx="1.5" stroke="#B0C4DE" strokeWidth="1.4"/><path d="M5.5 8V5.5C5.5 3.84 6.84 2.5 8.5 2.5C10.16 2.5 11.5 3.84 11.5 5.5V8" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/></svg>
              <input placeholder="Min. 8 characters" type="password"
                style={{ border: "none", background: "transparent", fontSize: 15, color: "#0F1F3D", outline: "none", flex: 1, fontFamily: "inherit", fontWeight: 500 }} />
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><ellipse cx="8.5" cy="8.5" rx="6.5" ry="4" stroke="#B0C4DE" strokeWidth="1.4"/><circle cx="8.5" cy="8.5" r="2" stroke="#B0C4DE" strokeWidth="1.4"/></svg>
            </div>
            {/* Strength indicator */}
            <div style={{ display: "flex", gap: 4 }}>
              {["#22C55E", "#22C55E", "#F59E0B", "#E4EBF5"].map((c, i) => (
                <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: c }} />
              ))}
            </div>
            <p style={{ fontSize: 11, color: "#F59E0B", fontWeight: 600, margin: "4px 0 0" }}>Medium strength</p>
          </div>

          {/* Confirm password */}
          <Field label="Confirm Password" placeholder="Re-enter your password" type="password"
            icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="3" y="8" width="11" height="7.5" rx="1.5" stroke="#B0C4DE" strokeWidth="1.4"/><path d="M5.5 8V5.5C5.5 3.84 6.84 2.5 8.5 2.5C10.16 2.5 11.5 3.84 11.5 5.5V8" stroke="#B0C4DE" strokeWidth="1.4" strokeLinecap="round"/><path d="M6 12L7.5 13.5L11 10" stroke="#22C55E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          />

          {/* Terms */}
          <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, background: "#1A6BCC", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p style={{ fontSize: 13, color: "#4A6080", margin: 0, lineHeight: 1.55 }}>
              I agree to the <span style={{ color: "#1A6BCC", fontWeight: 700 }}>Terms of Service</span> and <span style={{ color: "#1A6BCC", fontWeight: 700 }}>Privacy Policy</span>
            </p>
          </div>

          {/* CTA */}
          <button style={{
            width: "100%", height: 54, borderRadius: 16, border: "none",
            background: "#0F2A5C", color: "white", fontSize: 16, fontWeight: 700,
            cursor: "pointer", letterSpacing: "-0.01em", position: "relative", overflow: "hidden", marginBottom: 16,
          }}>
            <span style={{ position: "relative", zIndex: 1 }}>Continue to Step 2</span>
            <div style={{ position: "absolute", right: -10, top: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(13,201,177,0.15)" }} />
          </button>

          <p style={{ textAlign: "center", fontSize: 14, color: "#8BA3C0", margin: 0, fontWeight: 500 }}>
            Have an account?{" "}
            <span style={{ color: "#1A6BCC", fontWeight: 700, cursor: "pointer" }}>Sign in</span>
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
