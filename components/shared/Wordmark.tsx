import Image from "next/image";

type WordmarkProps = { size?: number };

export function Wordmark({ size = 14 }: WordmarkProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: size * 2.2,
          height: size * 2.2,
          borderRadius: 8,
          background: "var(--cd-ink)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/icon/CD%20Logo%20TH_White.svg"
          alt="CD"
          width={330}
          height={407}
          style={{ height: "62%", width: "auto" }}
        />
      </div>
      <div style={{ lineHeight: 1.1 }}>
        <div style={{ fontSize: size, fontWeight: 600, letterSpacing: -0.3, color: "var(--cd-ink)" }}>
          Smart Campus
        </div>
        <div
          style={{
            fontSize: size * 0.64,
            color: "var(--cd-ink-4)",
            fontFamily: "var(--cd-mono)",
            textTransform: "uppercase",
            letterSpacing: 1,
            marginTop: 1,
          }}
        >
          Chitralada · CDS
        </div>
      </div>
    </div>
  );
}
