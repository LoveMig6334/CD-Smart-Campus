import type { ReactNode } from "react";
import { MI } from "../shared/MI";

type AdminTopBarProps = {
  title: string;
  subtitle: string;
  actions?: ReactNode;
};

export function AdminTopBar({ title, subtitle, actions }: AdminTopBarProps) {
  return (
    <header className="cd-admin-topbar">
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: -0.3, color: "var(--cd-ink)" }}>{title}</div>
        <div className="cd-label" style={{ marginTop: 1, fontSize: 10 }}>{subtitle}</div>
      </div>
      <div style={{ position: "relative" }}>
        <MI
          name="search"
          size={16}
          weight={300}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "var(--cd-ink-4)",
          }}
        />
        <input
          placeholder="Search · ค้นหา..."
          style={{
            width: 240,
            padding: "8px 12px 8px 34px",
            border: "1px solid var(--cd-line)",
            borderRadius: 8,
            fontFamily: "inherit",
            fontSize: 12.5,
            background: "var(--cd-surface-2)",
            outline: "none",
          }}
        />
      </div>
      <button className="cd-btn cd-btn-secondary cd-btn-sm" style={{ width: 34, height: 34, padding: 0, position: "relative" }}>
        <MI name="notifications" size={16} weight={300} />
        <span
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--cd-danger)",
          }}
        ></span>
      </button>
      {actions}
    </header>
  );
}
