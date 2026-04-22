"use client";

import { useState } from "react";
import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";

export function LoginScreen() {
  const [mode, setMode] = useState<"student" | "admin">("student");

  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner" style={{ paddingBottom: 0, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 28px 28px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "var(--cd-ink)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: -1,
              fontFamily: "var(--cd-mono)",
              marginBottom: 14,
            }}
          >
            CD
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.6, textAlign: "center" }}>Smart Campus</div>
          <div className="cd-label" style={{ marginTop: 4 }}>Chitralada School · CDS</div>

          {mode === "student" ? (
            <>
              <div className="cd-card" style={{ width: "100%", padding: 20, marginTop: 28 }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>เข้าสู่ระบบ</div>
                <div className="cd-label" style={{ marginBottom: 18 }}>Sign in with school account</div>
                <button className="cd-btn cd-btn-secondary" style={{ width: "100%", padding: "12px", fontSize: 13 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
                <div
                  style={{
                    marginTop: 14,
                    padding: 12,
                    borderRadius: 10,
                    background: "var(--cd-primary-tint)",
                    border: "1px solid var(--cd-primary-soft)",
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <MI name="info" size={15} weight={300} style={{ color: "var(--cd-primary-2)", flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <div style={{ fontSize: 11.5, color: "var(--cd-primary-2)", fontWeight: 500 }}>ใช้อีเมลโรงเรียนเท่านั้น</div>
                    <div
                      style={{
                        fontSize: 10.5,
                        color: "var(--cd-ink-4)",
                        fontFamily: "var(--cd-mono)",
                        marginTop: 1,
                      }}
                    >
                      0xxxxx@cds.ac.th only
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 22,
                  fontSize: 10,
                  color: "var(--cd-ink-4)",
                  fontFamily: "var(--cd-mono)",
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                }}
              >
                v2.0 · © 2569 Chitralada
              </div>

              <div style={{ marginTop: "auto", paddingTop: 24, width: "100%", display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => setMode("admin")}
                  className="cd-btn cd-btn-ghost cd-btn-sm"
                  style={{
                    padding: "7px 12px",
                    fontSize: 11,
                    color: "var(--cd-ink-3)",
                    border: "1px solid var(--cd-line)",
                    background: "#fff",
                    fontFamily: "var(--cd-mono)",
                    letterSpacing: 0.4,
                  }}
                >
                  <MI name="shield_person" size={12} weight={300} />
                  Administrator login
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="cd-card" style={{ width: "100%", padding: 20, marginTop: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9,
                      background: "var(--cd-ink)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MI name="shield_person" size={17} weight={300} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>สำหรับเจ้าหน้าที่</div>
                    <div className="cd-label" style={{ marginTop: 1 }}>Administrator access</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 12px",
                      background: "#fff",
                      border: "1px solid var(--cd-line)",
                      borderRadius: 9,
                    }}
                  >
                    <MI name="badge" size={15} weight={300} style={{ color: "var(--cd-ink-4)", flexShrink: 0 }} />
                    <input
                      placeholder="Staff ID · รหัสพนักงาน"
                      style={{
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        flex: 1,
                        fontSize: 12.5,
                        fontFamily: "var(--cd-mono)",
                        color: "var(--cd-ink)",
                        minWidth: 0,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "11px 12px",
                      background: "#fff",
                      border: "1px solid var(--cd-line)",
                      borderRadius: 9,
                    }}
                  >
                    <MI name="lock" size={15} weight={300} style={{ color: "var(--cd-ink-4)", flexShrink: 0 }} />
                    <input
                      type="password"
                      placeholder="Password · รหัสผ่าน"
                      style={{
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        flex: 1,
                        fontSize: 12.5,
                        fontFamily: "var(--cd-mono)",
                        color: "var(--cd-ink)",
                        minWidth: 0,
                      }}
                    />
                    <MI
                      name="visibility_off"
                      size={15}
                      weight={300}
                      style={{ color: "var(--cd-ink-4)", flexShrink: 0, cursor: "pointer" }}
                    />
                  </div>
                </div>

                <button className="cd-btn cd-btn-primary" style={{ width: "100%", padding: "12px", fontSize: 13 }}>
                  <MI name="login" size={14} weight={400} />เข้าสู่ระบบผู้ดูแล
                </button>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 12,
                    fontSize: 10.5,
                    color: "var(--cd-ink-4)",
                    fontFamily: "var(--cd-mono)",
                  }}
                >
                  <span style={{ textDecoration: "underline", cursor: "pointer" }}>Forgot password?</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                    <MI name="lock" size={11} weight={400} />SSO · 2FA
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop: 14,
                  padding: "10px 12px",
                  borderRadius: 9,
                  background: "var(--cd-surface-2)",
                  border: "1px dashed var(--cd-line)",
                  display: "flex",
                  gap: 8,
                  width: "100%",
                }}
              >
                <MI name="info" size={14} weight={300} style={{ color: "var(--cd-ink-4)", flexShrink: 0, marginTop: 1 }} />
                <div style={{ fontSize: 10.5, color: "var(--cd-ink-3)", lineHeight: 1.45 }}>
                  Staff and teachers only. All access is logged and monitored.
                </div>
              </div>

              <div style={{ marginTop: "auto", paddingTop: 24, width: "100%", display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => setMode("student")}
                  className="cd-btn cd-btn-ghost cd-btn-sm"
                  style={{
                    padding: "7px 12px",
                    fontSize: 11,
                    color: "var(--cd-ink-3)",
                    fontFamily: "var(--cd-mono)",
                    letterSpacing: 0.4,
                  }}
                >
                  <MI name="arrow_back" size={12} weight={300} />
                  Back to student login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
