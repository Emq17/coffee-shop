export default function Marquee({
  text = "Pre & Post Coffee • Pop-ups • Coffee • Matcha • Protein • ",
}: {
  text?: string;
}) {
  return (
    <section style={{ marginTop: 18 }}>
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "rgba(18, 24, 36, 0.35)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", width: "max-content" }}>
          <div className="marqueeTrack" aria-hidden="true">
            {text.repeat(12)}
          </div>
          <div className="marqueeTrack" aria-hidden="true">
            {text.repeat(12)}
          </div>
        </div>
      </div>

      <style>{`
        .marqueeTrack{
          display:inline-block;
          padding: 14px 0;
          font-weight: 900;
          letter-spacing: -0.2px;
          opacity: .9;
          white-space: nowrap;
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee{
          from{ transform: translateX(0); }
          to{ transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce){
          .marqueeTrack{ animation: none; }
        }
      `}</style>
    </section>
  );
}
