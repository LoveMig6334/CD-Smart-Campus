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
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: size * 0.85,
          letterSpacing: -0.5,
          fontFamily: "var(--cd-mono)",
        }}
      >
        CD
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
