"use client";

import { useState } from "react";
import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";

export function BookingScreen() {
  const [selectedDay, setSelectedDay] = useState(22);
  const [selectedPeriod, setSelectedPeriod] = useState("midday");
  const monthLen = 30;
  const firstDow = 3;
  const today = 22;
  const fullyBooked = [4, 11, 18, 25];
  const weekHeads = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= monthLen; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const periods = [
    { id: "morning", th: "เช้า", en: "Morning", time: "08:00 – 11:00", icon: "wb_twilight" },
    { id: "midday", th: "กลางวัน", en: "Midday", time: "11:30 – 14:30", icon: "light_mode" },
    { id: "evening", th: "เย็น", en: "Evening", time: "15:00 – 18:00", icon: "nights_stay" },
  ];

  return (
    <div className="cd-phone">
      <div className="cd-phone-bg" />
      <StatusBar />
      <div className="cd-phone-inner">
        <div className="cd-appbar" style={{ paddingTop: 12, paddingBottom: 12 }}>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
            <MI name="arrow_back" size={18} />
          </button>
          <div style={{ flex: 1 }}>
            <div className="cd-appbar-title">จองห้อง</div>
            <div className="cd-appbar-sub">Room booking</div>
          </div>
          <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 32, height: 32, padding: 0 }}>
            <MI name="history" size={18} />
          </button>
        </div>

        <div style={{ padding: "4px 20px 14px" }}>
          <div style={{ display: "flex", background: "var(--cd-surface-3)", borderRadius: 10, padding: 3 }}>
            <button
              className="cd-btn cd-btn-sm"
              style={{ flex: 1, background: "#fff", color: "var(--cd-ink)", boxShadow: "var(--cd-shadow-xs)" }}
            >
              <MI name="graphic_eq" size={14} weight={300} />ห้องดนตรี
            </button>
            <button
              className="cd-btn cd-btn-sm"
              style={{ flex: 1, background: "transparent", color: "var(--cd-ink-4)" }}
            >
              <MI name="groups" size={14} weight={300} />ห้องประชุม
            </button>
          </div>
        </div>

        <div style={{ padding: "0 20px 16px" }}>
          <div className="cd-card" style={{ padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 28, height: 28, padding: 0 }}>
                <MI name="chevron_left" size={16} />
              </button>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>เมษายน 2569</div>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--cd-ink-4)",
                    fontFamily: "var(--cd-mono)",
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                    marginTop: 1,
                  }}
                >
                  April 2026
                </div>
              </div>
              <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ width: 28, height: 28, padding: 0 }}>
                <MI name="chevron_right" size={16} />
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 4 }}>
              {weekHeads.map((w, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 9.5,
                    color: "var(--cd-ink-4)",
                    fontFamily: "var(--cd-mono)",
                    textTransform: "uppercase",
                    letterSpacing: 0.4,
                    textAlign: "center",
                    padding: "4px 0",
                  }}
                >
                  {w}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
              {cells.map((d, i) => {
                if (d == null) return <div key={i} style={{ height: 34 }} />;
                const isSel = d === selectedDay;
                const isToday = d === today && !isSel;
                const isFull = fullyBooked.includes(d);
                const isPast = d < today;
                return (
                  <button
                    key={i}
                    onClick={() => !isFull && !isPast && setSelectedDay(d)}
                    disabled={isFull || isPast}
                    style={{
                      height: 34,
                      border: "none",
                      cursor: isFull || isPast ? "not-allowed" : "pointer",
                      borderRadius: 8,
                      fontFamily: "var(--cd-mono)",
                      fontWeight: isSel ? 700 : 500,
                      fontSize: 12,
                      background: isSel ? "var(--cd-ink)" : "transparent",
                      color: isSel ? "#fff" : isPast ? "var(--cd-ink-4)" : isFull ? "var(--cd-ink-4)" : "var(--cd-ink)",
                      opacity: isPast ? 0.4 : 1,
                      position: "relative",
                      outline: isToday ? "1px solid var(--cd-line)" : "none",
                      outlineOffset: -1,
                      textDecoration: isFull ? "line-through" : "none",
                    }}
                  >
                    {d}
                    {isFull && !isSel && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 3,
                          height: 3,
                          borderRadius: "50%",
                          background: "var(--cd-danger)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 10,
                paddingTop: 10,
                borderTop: "1px solid var(--cd-line-2)",
                fontSize: 10,
                color: "var(--cd-ink-4)",
                fontFamily: "var(--cd-mono)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: "var(--cd-ink)" }} /> Selected
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--cd-danger)" }} /> Full
              </span>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 20px 14px" }}>
          <div
            className="cd-label"
            style={{ marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <span>เลือกช่วงเวลา · Select time</span>
            <span style={{ color: "var(--cd-ink)", fontWeight: 600 }}>{selectedDay} เม.ย.</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
            {periods.map((p) => {
              const isSel = p.id === selectedPeriod;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPeriod(p.id)}
                  style={{
                    padding: "10px 6px",
                    borderRadius: 10,
                    cursor: "pointer",
                    border: "1px solid",
                    borderColor: isSel ? "var(--cd-ink)" : "var(--cd-line)",
                    background: isSel ? "var(--cd-ink)" : "#fff",
                    color: isSel ? "#fff" : "var(--cd-ink)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                    fontFamily: "inherit",
                  }}
                >
                  <MI name={p.icon} size={18} weight={300} style={{ opacity: isSel ? 0.9 : 0.7 }} />
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: -0.1 }}>{p.th}</div>
                  <div
                    style={{
                      fontSize: 9,
                      fontFamily: "var(--cd-mono)",
                      opacity: isSel ? 0.75 : 0.6,
                      letterSpacing: 0.3,
                    }}
                  >
                    {p.time}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ padding: "16px 20px 20px" }}>
          <button className="cd-btn cd-btn-primary" style={{ width: "100%", padding: "12px", fontSize: 13 }}>
            <MI name="event_available" size={16} weight={400} />ยืนยันการจอง · Confirm booking
          </button>
        </div>
      </div>
      <BottomNav active="booking" />
    </div>
  );
}
