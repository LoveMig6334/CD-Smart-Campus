import { MI } from "./MI";

type BottomNavProps = {
  active?: string;
};

const items = [
  { id: "home", th: "หน้าหลัก", en: "Home", icon: "home" },
  { id: "calendar", th: "ปฏิทิน", en: "Calendar", icon: "calendar_month" },
  { id: "booking", th: "จองห้อง", en: "Book", icon: "meeting_room" },
  { id: "lost", th: "ของหาย", en: "Lost", icon: "search" },
  { id: "profile", th: "โปรไฟล์", en: "Profile", icon: "person" },
];

export function BottomNav({ active = "home" }: BottomNavProps) {
  return (
    <nav className="cd-bnav">
      {items.map((it) => {
        const a = it.id === active;
        return (
          <button key={it.id} className={`cd-bnav-item ${a ? "active" : ""}`}>
            <MI name={it.icon} size={22} weight={a ? 500 : 300} fill={a ? 1 : 0} />
            <span
              className="cd-bnav-label"
              style={{ marginTop: 3, color: a ? "var(--cd-ink)" : "var(--cd-ink-4)" }}
            >
              {it.th}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
