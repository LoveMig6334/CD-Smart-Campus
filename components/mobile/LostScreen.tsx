import { MI } from "../shared/MI";
import { StatusBar } from "../shared/StatusBar";
import { BottomNav } from "../shared/BottomNav";
import { LOST_ITEMS } from "@/lib/data";

export function LostScreen() {
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
            <div className="cd-appbar-title">ของหาย / ของเจอ</div>
            <div className="cd-appbar-sub">Lost &amp; found board</div>
          </div>
          <button className="cd-btn cd-btn-primary cd-btn-sm" style={{ padding: "7px 10px" }}>
            <MI name="add" size={14} />แจ้ง
          </button>
        </div>

        <div style={{ padding: "4px 20px 14px" }}>
          <div style={{ position: "relative" }}>
            <MI
              name="search"
              size={16}
              weight={300}
              style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--cd-ink-4)" }}
            />
            <input
              placeholder="ค้นหาของ · search item..."
              style={{
                width: "100%",
                padding: "10px 12px 10px 36px",
                border: "1px solid var(--cd-line)",
                borderRadius: 10,
                fontFamily: "inherit",
                fontSize: 12.5,
                background: "#fff",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div style={{ padding: "0 20px 14px", display: "flex", gap: 6 }}>
          <button className="cd-btn cd-btn-sm" style={{ background: "var(--cd-ink)", color: "#fff" }}>
            ทั้งหมด <span style={{ opacity: 0.5 }}>· 8</span>
          </button>
          <button className="cd-btn cd-btn-secondary cd-btn-sm">
            <span className="cd-dot" style={{ background: "var(--cd-danger)" }}></span>หาย · 4
          </button>
          <button className="cd-btn cd-btn-secondary cd-btn-sm">
            <span className="cd-dot" style={{ background: "var(--cd-success)" }}></span>เจอ · 4
          </button>
        </div>

        <div style={{ padding: "0 20px 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {LOST_ITEMS.map((it, i) => (
              <div key={i} className="cd-card" style={{ overflow: "hidden", cursor: "pointer" }}>
                <div
                  className="cd-ph"
                  style={{ height: 76, borderRadius: 0, border: "none", borderBottom: "1px solid var(--cd-line)" }}
                >
                  <MI name={it.icon} size={22} weight={300} />
                </div>
                <div style={{ padding: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "var(--cd-ink)" }}>{it.title}</div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "var(--cd-ink-4)",
                      fontFamily: "var(--cd-mono)",
                      marginTop: 1,
                    }}
                  >
                    {it.en}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                    <span style={{ fontSize: 10, color: "var(--cd-ink-4)" }}>{it.loc}</span>
                    <span
                      className={it.status === "lost" ? "cd-chip cd-chip-danger" : "cd-chip cd-chip-success"}
                      style={{ fontSize: 9 }}
                    >
                      {it.status === "lost" ? "หาย" : "เจอ"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="lost" />
    </div>
  );
}
