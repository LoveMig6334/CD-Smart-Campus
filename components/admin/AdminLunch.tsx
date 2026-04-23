"use client";

import { useState } from "react";
import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";
import { LUNCH_MENU } from "@/lib/data";

export function AdminLunch() {
  const [selWeek, setSelWeek] = useState("current");

  const weekTabs: [string, string][] = [
    ["prev", "‹ Prev"],
    ["current", "This week"],
    ["next", "Next ›"],
  ];

  const tags = ["🌶️ Spicy", "🥗 Veg", "🥜 Nuts"];

  return (
    <div className="cd-admin">
      <AdminSide active="lunch" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="จัดการเมนูอาหาร"
          subtitle="Lunch menu · weekly editor"
          actions={
            <>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">
                <MI name="content_copy" size={14} />Duplicate week
              </button>
              <button className="cd-btn cd-btn-primary cd-btn-sm">
                <MI name="publish" size={14} />Publish
              </button>
            </>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.4 }}>สัปดาห์ที่ 17 · 20–24 เม.ย.</div>
              <div className="cd-label" style={{ marginTop: 2 }}>Week 17 · April 20 – 24, 2026</div>
            </div>
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
              {weekTabs.map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setSelWeek(k)}
                  style={{
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: 6,
                    cursor: "pointer",
                    background: selWeek === k ? "#fff" : "transparent",
                    color: selWeek === k ? "var(--cd-ink)" : "var(--cd-ink-4)",
                    boxShadow: selWeek === k ? "var(--cd-shadow-xs)" : "none",
                    fontFamily: "inherit",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <span className="cd-chip cd-chip-warn" style={{ marginLeft: "auto" }}>
              <span className="cd-dot" style={{ background: "#b45309" }}></span>Draft · unpublished
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 24 }}>
            {LUNCH_MENU.map((d, i) => (
              <div key={i} className="cd-card" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{d.day}</div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "var(--cd-ink-4)",
                      fontFamily: "var(--cd-mono)",
                      letterSpacing: 0.6,
                    }}
                  >
                    {d.en} · {i + 20} เม.ย.
                  </div>
                </div>
                <div className="cd-ph" style={{ height: 90, borderRadius: 8 }}>
                  <MI name="add_photo_alternate" size={18} weight={300} />
                  <div style={{ fontSize: 9 }}>Upload photo</div>
                </div>
                <div>
                  <div className="cd-label" style={{ fontSize: 9, marginBottom: 4 }}>เมนูหลัก · Main</div>
                  <textarea
                    defaultValue={d.menu}
                    rows={2}
                    style={{
                      width: "100%",
                      fontFamily: "inherit",
                      fontSize: 12,
                      border: "1px solid var(--cd-line)",
                      borderRadius: 7,
                      padding: "7px 9px",
                      background: "#fff",
                      resize: "none",
                      color: "var(--cd-ink)",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <div className="cd-label" style={{ fontSize: 9, marginBottom: 4 }}>ของหวาน · Dessert</div>
                  <input
                    defaultValue={d.dessert}
                    style={{
                      width: "100%",
                      fontFamily: "inherit",
                      fontSize: 12,
                      border: "1px solid var(--cd-line)",
                      borderRadius: 7,
                      padding: "7px 9px",
                      background: "#fff",
                      outline: "none",
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {tags.map((t, ti) => (
                    <button
                      key={ti}
                      style={{
                        border: "1px solid var(--cd-line)",
                        background: "var(--cd-surface-2)",
                        color: "var(--cd-ink-3)",
                        padding: "3px 7px",
                        borderRadius: 999,
                        fontSize: 10,
                        fontFamily: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="cd-card" style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
            <MI name="schedule" size={20} weight={300} style={{ color: "var(--cd-ink-4)" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>กำหนดการเผยแพร่</div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--cd-ink-4)",
                  fontFamily: "var(--cd-mono)",
                  marginTop: 1,
                }}
              >
                Schedule publish — pushes to mobile app + LINE OA
              </div>
            </div>
            <input
              type="date"
              defaultValue="2026-04-19"
              style={{
                padding: "7px 10px",
                border: "1px solid var(--cd-line)",
                borderRadius: 8,
                fontFamily: "var(--cd-mono)",
                fontSize: 12,
              }}
            />
            <input
              type="time"
              defaultValue="18:00"
              style={{
                padding: "7px 10px",
                border: "1px solid var(--cd-line)",
                borderRadius: 8,
                fontFamily: "var(--cd-mono)",
                fontSize: 12,
              }}
            />
            <button className="cd-btn cd-btn-primary cd-btn-sm">
              <MI name="send" size={14} />Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
