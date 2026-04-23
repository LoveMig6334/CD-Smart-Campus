"use client";

import { useState } from "react";
import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";

export function AdminAnnounce() {
  const [msg, setMsg] = useState(
    "ประชุมผู้ปกครอง ม.6 วันเสาร์ที่ 25 เม.ย. 09:00 น. ที่หอประชุมใหญ่ กรุณาลงทะเบียนล่วงหน้าผ่านแอป\n\nParent–Teacher Meeting, M.6 · Sat Apr 25, 09:00 · Main auditorium. Please register in advance via app."
  );
  const [audience, setAudience] = useState("all");

  const audiences: [string, string][] = [
    ["all", "All"],
    ["students", "Students"],
    ["parents", "Parents"],
    ["staff", "Staff"],
  ];

  const attachments = [
    { n: "parent-meeting-agenda.pdf", i: "picture_as_pdf", s: "218 KB" },
    { n: "map-auditorium.jpg", i: "image", s: "1.4 MB" },
  ];

  const channels = [
    { n: "LINE Official Account", sub: "@cdsschool · 1,247 friends", on: true, c: "#06c755", i: "chat" },
    { n: "Mobile app push", sub: "In-app announcement banner", on: true, c: "var(--cd-ink)", i: "notifications_active" },
    { n: "School website", sub: "cds.ac.th/announcements", on: false, c: "var(--cd-ink-4)", i: "language" },
    { n: "Email (ผู้ปกครอง)", sub: "SMTP · parents list", on: false, c: "var(--cd-ink-4)", i: "mail" },
  ];

  const posts: Array<{
    when: string;
    title: string;
    audience: string;
    status: "Sent" | "Draft";
    reach: number | null;
    opens: string;
  }> = [
    { when: "22 Apr · 08:12", title: "เมนูอาหารสัปดาห์นี้", audience: "All students", status: "Sent", reach: 1247, opens: "78%" },
    { when: "21 Apr · 16:04", title: "แจ้งปิดถนนหน้าโรงเรียน", audience: "Parents", status: "Sent", reach: 982, opens: "64%" },
    { when: "20 Apr · 11:30", title: "ประกาศผลกีฬาสี Day 1", audience: "All", status: "Sent", reach: 1247, opens: "91%" },
    { when: "—", title: "Draft · Earth Day recap", audience: "M.4–M.6", status: "Draft", reach: null, opens: "—" },
  ];

  return (
    <div className="cd-admin">
      <AdminSide active="pr" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="ประชาสัมพันธ์"
          subtitle="Announcements · connected to LINE Official Account"
          actions={
            <>
              <span className="cd-chip cd-chip-success" style={{ fontFamily: "var(--cd-mono)" }}>
                <span className="cd-dot" style={{ background: "#06c755" }}></span>LINE OA · @cdsschool
              </span>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">
                <MI name="history" size={14} />History
              </button>
            </>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "grid", gridTemplateColumns: "1.35fr .95fr", gap: 18 }}>
            <div className="cd-card" style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>เขียนประกาศใหม่</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--cd-ink-4)",
                      fontFamily: "var(--cd-mono)",
                    }}
                  >
                    Compose · will post to LINE OA on publish
                  </div>
                </div>
                <span className="cd-chip">
                  <MI name="draft" size={11} weight={300} />Draft · autosaved 12s ago
                </span>
              </div>

              <input
                placeholder="หัวข้อ · Title"
                defaultValue="ประชุมผู้ปกครอง ม.6 · 25 เม.ย."
                style={{
                  border: "1px solid var(--cd-line)",
                  borderRadius: 9,
                  padding: "10px 12px",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  outline: "none",
                }}
              />

              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={7}
                style={{
                  border: "1px solid var(--cd-line)",
                  borderRadius: 9,
                  padding: "11px 13px",
                  fontSize: 13,
                  fontFamily: "inherit",
                  lineHeight: 1.55,
                  resize: "vertical",
                  outline: "none",
                  color: "var(--cd-ink)",
                }}
              />

              <div
                style={{
                  border: "1.5px dashed var(--cd-line)",
                  borderRadius: 10,
                  padding: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "var(--cd-surface-2)",
                }}
              >
                <MI name="upload_file" size={22} weight={300} style={{ color: "var(--cd-ink-4)" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500 }}>แนบไฟล์หรือรูปภาพ · Attach files or images</div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: "var(--cd-ink-4)",
                      fontFamily: "var(--cd-mono)",
                      marginTop: 1,
                    }}
                  >
                    Drop here · PDF / JPG / PNG · max 10MB
                  </div>
                </div>
                <button className="cd-btn cd-btn-secondary cd-btn-sm">
                  <MI name="attach_file" size={13} />Browse
                </button>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {attachments.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 9px",
                      borderRadius: 7,
                      background: "#fff",
                      border: "1px solid var(--cd-line)",
                      fontSize: 11,
                      fontFamily: "var(--cd-mono)",
                    }}
                  >
                    <MI name={f.i} size={13} weight={300} />
                    {f.n}
                    <span style={{ color: "var(--cd-ink-4)" }}>· {f.s}</span>
                    <MI
                      name="close"
                      size={12}
                      weight={300}
                      style={{ color: "var(--cd-ink-4)", cursor: "pointer", marginLeft: 4 }}
                    />
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 8,
                  borderTop: "1px solid var(--cd-line-2)",
                }}
              >
                <div className="cd-label" style={{ fontSize: 10 }}>Audience</div>
                <div
                  style={{
                    display: "inline-flex",
                    background: "var(--cd-surface-3)",
                    borderRadius: 8,
                    padding: 3,
                    fontSize: 11,
                    fontFamily: "var(--cd-mono)",
                  }}
                >
                  {audiences.map(([k, l]) => (
                    <button
                      key={k}
                      onClick={() => setAudience(k)}
                      style={{
                        border: "none",
                        padding: "5px 11px",
                        borderRadius: 6,
                        cursor: "pointer",
                        background: audience === k ? "#fff" : "transparent",
                        color: audience === k ? "var(--cd-ink)" : "var(--cd-ink-4)",
                        fontFamily: "inherit",
                        fontWeight: 500,
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                  <button className="cd-btn cd-btn-secondary cd-btn-sm">
                    <MI name="schedule" size={13} />Schedule
                  </button>
                  <button className="cd-btn cd-btn-secondary cd-btn-sm">
                    <MI name="save" size={13} />Save draft
                  </button>
                  <button
                    className="cd-btn cd-btn-primary cd-btn-sm"
                    style={{ background: "#06c755", borderColor: "#06c755" }}
                  >
                    <MI name="campaign" size={13} />Publish to LINE OA
                  </button>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="cd-card" style={{ padding: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>LINE OA Preview</div>
                  <span className="cd-label" style={{ fontSize: 9 }}>Live render</span>
                </div>
                <div style={{ background: "#8fa7c2", borderRadius: 10, padding: 14, position: "relative" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#06c755",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 11,
                        flexShrink: 0,
                        fontFamily: "var(--cd-mono)",
                      }}
                    >
                      CD
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          color: "#fff",
                          fontSize: 10,
                          opacity: 0.85,
                          marginBottom: 3,
                          fontFamily: "var(--cd-mono)",
                        }}
                      >
                        CDS School · @cdsschool
                      </div>
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "4px 14px 14px 14px",
                          padding: "10px 12px",
                          fontSize: 12,
                          lineHeight: 1.55,
                          color: "#111",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>ประชุมผู้ปกครอง ม.6 · 25 เม.ย.</div>
                        {msg}
                        <div
                          style={{
                            marginTop: 8,
                            padding: 8,
                            border: "1px solid #e4e8ef",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 11,
                          }}
                        >
                          <MI name="picture_as_pdf" size={16} weight={300} style={{ color: "#dc2626" }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 500 }}>parent-meeting-agenda.pdf</div>
                            <div
                              style={{
                                fontSize: 10,
                                color: "#64748b",
                                fontFamily: "var(--cd-mono)",
                              }}
                            >
                              218 KB
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,.75)",
                          marginTop: 4,
                          fontFamily: "var(--cd-mono)",
                        }}
                      >
                        9:41 AM · via CD Smart Campus
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cd-card" style={{ padding: 16 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, marginBottom: 10 }}>ช่องทางการส่ง · Channels</div>
                {channels.map((ch, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      borderTop: i > 0 ? "1px solid var(--cd-line-2)" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 7,
                        background: "var(--cd-surface-3)",
                        color: ch.c,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MI name={ch.i} size={15} weight={300} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 500 }}>{ch.n}</div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "var(--cd-ink-4)",
                          fontFamily: "var(--cd-mono)",
                        }}
                      >
                        {ch.sub}
                      </div>
                    </div>
                    <div
                      style={{
                        width: 30,
                        height: 18,
                        borderRadius: 10,
                        background: ch.on ? "#06c755" : "var(--cd-line)",
                        position: "relative",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 2,
                          left: ch.on ? 14 : 2,
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: "#fff",
                          transition: "left .15s",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 22 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.2 }}>ประกาศล่าสุด</div>
                <div className="cd-label" style={{ marginTop: 1, fontSize: 10 }}>Recent posts · performance</div>
              </div>
              <button className="cd-btn cd-btn-ghost cd-btn-sm">
                View all <MI name="arrow_forward" size={13} />
              </button>
            </div>
            <div className="cd-card" style={{ padding: 0, overflow: "hidden" }}>
              <table className="cd-table">
                <thead>
                  <tr>
                    <th style={{ width: 150 }}>Sent</th>
                    <th>Title</th>
                    <th>Audience</th>
                    <th>Status</th>
                    <th style={{ textAlign: "right" }}>Reach</th>
                    <th style={{ textAlign: "right" }}>Open rate</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((p, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: "var(--cd-mono)", fontSize: 11, color: "var(--cd-ink-4)" }}>{p.when}</td>
                      <td style={{ fontWeight: 500, color: "var(--cd-ink)" }}>{p.title}</td>
                      <td>{p.audience}</td>
                      <td>
                        <span className={p.status === "Sent" ? "cd-chip cd-chip-success" : "cd-chip"}>
                          <span
                            className="cd-dot"
                            style={{ background: p.status === "Sent" ? "var(--cd-success)" : "var(--cd-ink-4)" }}
                          ></span>
                          {p.status}
                        </span>
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          fontFamily: "var(--cd-mono)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {p.reach ?? "—"}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          fontFamily: "var(--cd-mono)",
                          fontVariantNumeric: "tabular-nums",
                          color: p.opens === "—" ? "var(--cd-ink-4)" : "var(--cd-ink)",
                        }}
                      >
                        {p.opens}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
