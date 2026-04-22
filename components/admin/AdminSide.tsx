import { MI } from "../shared/MI";
import { Wordmark } from "../shared/Wordmark";

type AdminSideProps = { active?: string };

const items = [
  { id: "overview", th: "ภาพรวม", en: "Overview", icon: "dashboard" },
  { id: "calendar", th: "ปฏิทิน", en: "Calendar", icon: "calendar_month" },
  { id: "sport", th: "กีฬาสี", en: "Sport Day", icon: "emoji_events" },
  { id: "booking", th: "จองห้อง", en: "Bookings", icon: "meeting_room" },
  { id: "lunch", th: "เมนูอาหาร", en: "Lunch Menu", icon: "restaurant" },
  { id: "lost", th: "ของหาย", en: "Lost & Found", icon: "search" },
  { id: "port", th: "Portfolio", en: "Portfolios", icon: "work" },
  { id: "pr", th: "ประชาสัมพันธ์", en: "Announcements", icon: "campaign" },
];

export function AdminSide({ active = "overview" }: AdminSideProps) {
  return (
    <aside className="cd-admin-side">
      <div style={{ padding: "20px 22px 16px", borderBottom: "1px solid var(--cd-line)" }}>
        <Wordmark size={13} />
      </div>
      <div style={{ padding: "14px 0", flex: 1, overflowY: "auto" }}>
        <div style={{ padding: "0 22px 10px" }} className="cd-label">Admin · จัดการ</div>
        {items.map((it) => (
          <button key={it.id} className={`cd-nav-item ${it.id === active ? "active" : ""}`}>
            <MI name={it.icon} size={18} weight={300} />
            <div style={{ flex: 1 }}>
              <div>{it.th}</div>
              <span className="cd-nav-en">{it.en}</span>
            </div>
          </button>
        ))}
      </div>
      <div style={{ padding: 16, borderTop: "1px solid var(--cd-line)" }}>
        <div className="cd-card" style={{ padding: 12, display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "var(--cd-surface-3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              color: "var(--cd-ink)",
              fontSize: 13,
              fontFamily: "var(--cd-mono)",
            }}
          >
            อส
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500 }}>อ.สุภาวดี ช.</div>
            <div style={{ fontSize: 10, color: "var(--cd-ink-4)", fontFamily: "var(--cd-mono)" }}>Admin · ฝ่ายกิจการฯ</div>
          </div>
          <MI name="logout" size={16} weight={300} style={{ color: "var(--cd-ink-4)", cursor: "pointer" }} />
        </div>
      </div>
    </aside>
  );
}
