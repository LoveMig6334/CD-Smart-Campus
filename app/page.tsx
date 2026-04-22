import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/shared/PhoneFrame";
import { DesktopFrame } from "@/components/shared/DesktopFrame";
import { HomeScreen } from "@/components/mobile/HomeScreen";
import { CalendarScreen } from "@/components/mobile/CalendarScreen";
import { SportScreen } from "@/components/mobile/SportScreen";
import { LunchScreen } from "@/components/mobile/LunchScreen";
import { BookingScreen } from "@/components/mobile/BookingScreen";
import { LostScreen } from "@/components/mobile/LostScreen";
import { PortfolioScreen } from "@/components/mobile/PortfolioScreen";
import { LoginScreen } from "@/components/mobile/LoginScreen";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { AdminCalendar } from "@/components/admin/AdminCalendar";
import { AdminSport } from "@/components/admin/AdminSport";
import { AdminBooking } from "@/components/admin/AdminBooking";

type ArtboardProps = {
  label: string;
  children: ReactNode;
};

function Artboard({ label, children }: ArtboardProps) {
  return (
    <div className="dc-artboard">
      <div className="dc-artboard-label">{label}</div>
      {children}
    </div>
  );
}

type SectionProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="dc-section">
      <div className="dc-section-header">
        <div className="dc-section-title">{title}</div>
        <div className="dc-section-sub">{subtitle}</div>
      </div>
      <div className="dc-row">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="dc-root">
      <header className="dc-header">
        <div className="dc-brand">
          <div className="dc-brand-badge">CD</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: -0.3 }}>Smart Campus · Design Review</div>
            <div
              style={{
                fontSize: 11,
                color: "var(--cd-ink-4)",
                fontFamily: "var(--cd-mono)",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginTop: 2,
              }}
            >
              Chitralada · CDS · v2.0 · Next.js 16
            </div>
          </div>
        </div>
      </header>

      <Section title="CD Smart Campus" subtitle="Refined glass/editorial · IBM Plex Sans Thai · bilingual TH/EN">
        <div
          className="dc-frame"
          style={{
            width: 1100,
            borderRadius: 10,
            overflow: "hidden",
            background: "linear-gradient(180deg,#fbfcfe 0%,#fff 100%)",
            padding: 48,
            fontFamily: "IBM Plex Sans Thai, IBM Plex Sans, sans-serif",
            color: "#0b1a2c",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            minHeight: 620,
            border: "1px solid var(--cd-line)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 400,
              height: 400,
              background: "radial-gradient(circle,rgba(26,86,219,.08) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          ></div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "#0b1a2c",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: -0.8,
                fontFamily: "IBM Plex Mono, monospace",
              }}
            >
              CD
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.3 }}>Smart Campus</div>
              <div
                style={{
                  fontSize: 10,
                  color: "#64748b",
                  fontFamily: "IBM Plex Mono, monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Chitralada · CDS · v2.0
              </div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", alignItems: "center", marginTop: 20 }}>
            <div style={{ maxWidth: 640 }}>
              <div
                style={{
                  fontSize: 11,
                  color: "#64748b",
                  fontFamily: "IBM Plex Mono, monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 18,
                }}
              >
                Design review · 22 apr 2026
              </div>
              <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05, color: "#0b1a2c" }}>
                ระบบจัดการโรงเรียน
                <br />
                <span style={{ color: "#64748b" }}>ที่เบาและคมขึ้น</span>
              </div>
              <div style={{ fontSize: 14, color: "#475569", marginTop: 18, lineHeight: 1.6, maxWidth: 520 }}>
                A refined take on the CD Smart Campus prototype — tighter typography, clearer information hierarchy,
                monochrome iconography, and editorial rhythm. Bilingual Thai/English throughout.
                <br />
                <br />
                <span
                  style={{
                    color: "#64748b",
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  Scroll down → 8 mobile screens + 4 admin desktop views
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 14,
              paddingTop: 24,
              borderTop: "1px solid #e4e8ef",
              marginTop: 24,
            }}
          >
            {[
              { l: "Mobile screens", v: "8", s: "for students" },
              { l: "Admin views", v: "4", s: "for staff" },
              { l: "Font family", v: "Plex", s: "IBM thai/en" },
              { l: "Framework", v: "Next", s: "app router" },
            ].map((x, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 10,
                    color: "#64748b",
                    fontFamily: "IBM Plex Mono, monospace",
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  {x.l}
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    letterSpacing: -0.8,
                    marginTop: 4,
                    fontFamily: "IBM Plex Mono, monospace",
                  }}
                >
                  {x.v}
                </div>
                <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{x.s}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Student · Mobile" subtitle="Primary experience · iOS 390×844 equivalent · bilingual TH/EN">
        <Artboard label="01 · Home · หน้าหลัก">
          <PhoneFrame><HomeScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="02 · Calendar · ปฏิทิน">
          <PhoneFrame><CalendarScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="03 · Sport · กีฬาสี">
          <PhoneFrame><SportScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="04 · Lunch · เมนูอาหาร">
          <PhoneFrame><LunchScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="05 · Booking · จองห้อง">
          <PhoneFrame><BookingScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="06 · Lost & Found">
          <PhoneFrame><LostScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="07 · Portfolio · รุ่นพี่">
          <PhoneFrame><PortfolioScreen /></PhoneFrame>
        </Artboard>
        <Artboard label="08 · Login · เข้าสู่ระบบ">
          <PhoneFrame><LoginScreen /></PhoneFrame>
        </Artboard>
      </Section>

      <Section title="Admin · Desktop" subtitle="Teacher/staff dashboard · 1280×780 · content-first tables and timelines">
        <Artboard label="01 · Overview · ภาพรวม">
          <DesktopFrame url="admin.cds.ac.th/overview"><AdminOverview /></DesktopFrame>
        </Artboard>
        <Artboard label="02 · Calendar · จัดการปฏิทิน">
          <DesktopFrame url="admin.cds.ac.th/calendar"><AdminCalendar /></DesktopFrame>
        </Artboard>
        <Artboard label="03 · Sport · คะแนนกีฬาสี">
          <DesktopFrame url="admin.cds.ac.th/sport"><AdminSport /></DesktopFrame>
        </Artboard>
        <Artboard label="04 · Bookings · ตารางจอง">
          <DesktopFrame url="admin.cds.ac.th/bookings"><AdminBooking /></DesktopFrame>
        </Artboard>
      </Section>
    </div>
  );
}
