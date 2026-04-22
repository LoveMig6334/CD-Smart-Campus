import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";
import { KPI, SPORT_COLORS, BOOKINGS, EVENTS } from "@/lib/data";

export function AdminOverview() {
  const sparkline = [20, 28, 22, 35, 40, 38, 52, 48, 58, 55, 68, 72];
  const maxSpark = Math.max(...sparkline);

  const pts = sparkline.map((v, i) => [i * (480 / (sparkline.length - 1)), 160 - ((v / maxSpark) * 130 + 10)] as const);
  const pts2 = sparkline.map(
    (v, i) => [i * (480 / (sparkline.length - 1)), 160 - ((v * 0.55) / maxSpark * 130 + 10)] as const
  );
  const line = pts.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const line2 = pts2.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const area = line + ` L480,160 L0,160 Z`;

  return (
    <div className="cd-admin">
      <AdminSide active="overview" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="ภาพรวมระบบ"
          subtitle="Overview · Term 1/2569"
          actions={
            <button className="cd-btn cd-btn-primary cd-btn-sm">
              <MI name="download" size={14} />Export
            </button>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.5 }}>สวัสดี อ.สุภาวดี</div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--cd-ink-4)",
                  fontFamily: "var(--cd-mono)",
                  marginTop: 3,
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                }}
              >
                Wednesday · 22 April 2026 · 09:41
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">7 วัน · 7d</button>
              <button className="cd-btn cd-btn-sm" style={{ background: "var(--cd-ink)", color: "#fff" }}>
                30 วัน · 30d
              </button>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">ภาคเรียน · Term</button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
            {KPI.map((k, i) => (
              <div key={i} className="cd-kpi">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div className="cd-kpi-label">{k.en}</div>
                    <div className="cd-kpi-value">{k.value}</div>
                    <div style={{ fontSize: 11, color: "var(--cd-ink-3)", marginTop: 2 }}>{k.label}</div>
                  </div>
                  <span className="cd-chip cd-chip-success" style={{ fontSize: 10 }}>{k.delta}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginBottom: 14 }}>
            <div className="cd-card" style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>การใช้งานระบบ</div>
                  <div className="cd-label" style={{ marginTop: 2 }}>System engagement · daily active users</div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
                    <span className="cd-dot" style={{ background: "var(--cd-ink)" }}></span>
                    <span style={{ color: "var(--cd-ink-3)" }}>นักเรียน</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
                    <span className="cd-dot" style={{ background: "var(--cd-primary)" }}></span>
                    <span style={{ color: "var(--cd-ink-3)" }}>ครู</span>
                  </div>
                </div>
              </div>
              <svg viewBox="0 0 480 160" style={{ width: "100%", height: 160 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="0" y1={i * 40} x2="480" y2={i * 40} stroke="#eef1f6" strokeDasharray="2 3" />
                ))}
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0b1a2c" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#0b1a2c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={area} fill="url(#spark)" />
                <path d={line} fill="none" stroke="#0b1a2c" strokeWidth="2" />
                <path d={line2} fill="none" stroke="#1a56db" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.8" />
                {pts.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="2.5" fill="#fff" stroke="#0b1a2c" strokeWidth="1.5" />
                ))}
              </svg>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 10,
                  color: "var(--cd-ink-4)",
                  fontFamily: "var(--cd-mono)",
                  marginTop: 8,
                  textTransform: "uppercase",
                }}
              >
                {["w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "w10", "w11", "w12"].map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            </div>

            <div className="cd-card" style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>กีฬาสี · Live</div>
                  <div className="cd-label" style={{ marginTop: 2 }}>Day 2 of 3</div>
                </div>
                <span className="cd-chip cd-chip-danger">
                  <span className="cd-dot" style={{ background: "var(--cd-danger)" }}></span>LIVE
                </span>
              </div>
              {SPORT_COLORS.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 3 ? 12 : 0 }}>
                  <div style={{ width: 16, fontSize: 10, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>#{i + 1}</div>
                  <div style={{ width: 4, height: 22, borderRadius: 2, background: c.hex }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 11.5, fontWeight: 500 }}>{c.th}</span>
                      <span style={{ fontSize: 12, fontFamily: "var(--cd-mono)", fontWeight: 600 }}>{c.score}</span>
                    </div>
                    <div className="cd-score-bar">
                      <div className="cd-score-bar-fill" style={{ background: c.hex, width: `${(c.score / 245) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="cd-btn cd-btn-secondary" style={{ width: "100%", marginTop: 16 }}>
                <MI name="edit" size={14} weight={300} />บันทึกผลการแข่งขัน
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div className="cd-card" style={{ overflow: "hidden" }}>
              <div
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--cd-line-2)",
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>การจองห้องวันนี้</div>
                  <div className="cd-label" style={{ marginTop: 2 }}>Today&apos;s bookings</div>
                </div>
                <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ color: "var(--cd-primary)", padding: 0 }}>
                  ดูทั้งหมด →
                </button>
              </div>
              <table className="cd-table">
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>User</th>
                    <th>Time</th>
                    <th style={{ textAlign: "right" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {BOOKINGS.map((b, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500, color: "var(--cd-ink)" }}>{b.room}</td>
                      <td style={{ fontFamily: "var(--cd-mono)", fontSize: 11.5 }}>{b.user}</td>
                      <td style={{ fontFamily: "var(--cd-mono)", fontSize: 11.5 }}>
                        {b.start}–{b.end}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <span
                          className={
                            b.status === "confirmed"
                              ? "cd-chip cd-chip-success"
                              : b.status === "pending"
                              ? "cd-chip cd-chip-warn"
                              : "cd-chip"
                          }
                        >
                          {b.status === "confirmed" ? "ยืนยัน" : b.status === "pending" ? "รอ" : "ตรวจสอบ"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cd-card" style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>กิจกรรมที่จะมาถึง</div>
                  <div className="cd-label" style={{ marginTop: 2 }}>Upcoming · this month</div>
                </div>
                <button className="cd-btn cd-btn-primary cd-btn-sm">
                  <MI name="add" size={14} />New
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {EVENTS.slice(0, 5).map((e, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "var(--cd-surface-2)",
                      border: "1px solid var(--cd-line)",
                    }}
                  >
                    <div style={{ width: 36, textAlign: "center" }}>
                      <div className="cd-label" style={{ fontSize: 9 }}>APR</div>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          letterSpacing: -0.4,
                          fontFamily: "var(--cd-mono)",
                          lineHeight: 1,
                        }}
                      >
                        {e.day}
                      </div>
                    </div>
                    <MI name={e.icon} size={16} weight={300} style={{ color: "var(--cd-ink-3)" }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 500 }}>{e.title}</div>
                      <div style={{ fontSize: 10.5, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>{e.en}</div>
                    </div>
                    <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 6px" }}>
                      <MI name="more_horiz" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
