"use client";

import { useState } from "react";
import { MI } from "../shared/MI";
import { AdminSide } from "./AdminSide";
import { AdminTopBar } from "./AdminTopBar";
import { PORTFOLIOS } from "@/lib/data";

type PortfolioStatus = "Published" | "Under review" | "Draft";

export function AdminPortfolio() {
  const statuses: Array<"All" | PortfolioStatus> = ["All", "Published", "Under review", "Draft"];
  const [sel, setSel] = useState<(typeof statuses)[number]>("All");

  const rows = PORTFOLIOS.map((p, i) => {
    const status: PortfolioStatus = i % 3 === 0 ? "Published" : i % 3 === 1 ? "Under review" : "Draft";
    return { ...p, status, submitted: `${22 - i * 2} Apr 2026` };
  });
  const filtered = sel === "All" ? rows : rows.filter((r) => r.status === sel);

  const stats: Array<{ l: string; v: string }> = [
    { l: "Total", v: "48" },
    { l: "Published", v: "32" },
    { l: "Under review", v: "11" },
    { l: "Featured", v: "6" },
  ];

  const statusChip = (status: PortfolioStatus): { cls: string; dot: string } => {
    if (status === "Published") return { cls: "cd-chip cd-chip-success", dot: "var(--cd-success)" };
    if (status === "Under review") return { cls: "cd-chip cd-chip-warn", dot: "#b45309" };
    return { cls: "cd-chip", dot: "var(--cd-ink-4)" };
  };

  return (
    <div className="cd-admin">
      <AdminSide active="port" />
      <div className="cd-admin-main">
        <AdminTopBar
          title="Portfolio · โครงงานรุ่นพี่"
          subtitle="Review, publish, and feature senior projects"
          actions={
            <>
              <button className="cd-btn cd-btn-secondary cd-btn-sm">
                <MI name="download" size={14} />Export CSV
              </button>
              <button className="cd-btn cd-btn-primary cd-btn-sm">
                <MI name="add" size={14} />New project
              </button>
            </>
          }
        />
        <div className="cd-admin-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
            {stats.map((s, i) => (
              <div key={i} className="cd-kpi" style={{ padding: 14 }}>
                <div className="cd-kpi-label" style={{ fontSize: 10 }}>{s.l}</div>
                <div className="cd-kpi-value" style={{ fontSize: 26 }}>{s.v}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setSel(s)}
                style={{
                  border: "1px solid",
                  borderColor: sel === s ? "var(--cd-ink)" : "var(--cd-line)",
                  background: sel === s ? "var(--cd-ink)" : "#fff",
                  color: sel === s ? "#fff" : "var(--cd-ink-3)",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                {s}
              </button>
            ))}
            <div style={{ marginLeft: "auto", position: "relative" }}>
              <MI
                name="search"
                size={14}
                weight={300}
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--cd-ink-4)",
                }}
              />
              <input
                placeholder="Search by name, tag..."
                style={{
                  width: 240,
                  padding: "7px 10px 7px 30px",
                  border: "1px solid var(--cd-line)",
                  borderRadius: 8,
                  fontSize: 12,
                  fontFamily: "inherit",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div className="cd-card" style={{ overflow: "hidden", padding: 0 }}>
            <table className="cd-table">
              <thead>
                <tr>
                  <th style={{ width: "28%" }}>Project</th>
                  <th>Author</th>
                  <th>Tags</th>
                  <th>Submitted</th>
                  <th>Status</th>
                  <th style={{ width: 120, textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => {
                  const chip = statusChip(r.status);
                  return (
                    <tr key={i}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div className="cd-ph" style={{ width: 36, height: 36, borderRadius: 6 }}>
                            <MI name="image" size={14} weight={300} />
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cd-ink)" }}>{r.title}</div>
                            <div
                              style={{
                                fontSize: 10.5,
                                color: "var(--cd-ink-4)",
                                fontFamily: "var(--cd-mono)",
                              }}
                            >
                              {r.th}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>{r.name}</div>
                        <div style={{ fontSize: 10, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>{r.year}</div>
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                          {r.tags.slice(0, 2).map((t, ti) => (
                            <span key={ti} className="cd-chip" style={{ fontSize: 10, padding: "2px 7px" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td style={{ fontFamily: "var(--cd-mono)", fontSize: 11, color: "var(--cd-ink-4)" }}>{r.submitted}</td>
                      <td>
                        <span className={chip.cls}>
                          <span className="cd-dot" style={{ background: chip.dot }}></span>
                          {r.status}
                        </span>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 8px" }}>
                          <MI name="edit" size={14} weight={300} />
                        </button>
                        <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 8px" }}>
                          <MI name="visibility" size={14} weight={300} />
                        </button>
                        <button className="cd-btn cd-btn-ghost cd-btn-sm" style={{ padding: "4px 8px" }}>
                          <MI name="more_horiz" size={14} weight={300} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
