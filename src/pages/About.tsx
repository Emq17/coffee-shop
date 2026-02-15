export default function About() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        {/* HERO */}
        <section
          className="card"
          style={{
            padding: 18,
            overflow: "hidden",
            background: "var(--surface2)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 16,
              alignItems: "center",
            }}
            className="aboutHeroGrid"
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                minHeight: 260,
              }}
            >
              <img
                src="/images/about/pop-up-team.jpg"
                alt="Pre & Post pop-up setup at Crunch — serving coffee and matcha."
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "contrast(1.02) saturate(1.02)",
                }}
              />

              {/* Overlay for readability */}
                <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                    "linear-gradient(180deg, rgba(0,0,0,0.00) 55%, rgba(0,0,0,0.55) 100%)",
                    pointerEvents: "none",
                }}
                />

              {/* Caption */}
              <div
                style={{
                  position: "absolute",
                  left: 14,
                  bottom: 12,
                  right: 14,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    border: "1px solid var(--border)",
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.45)",
                    fontWeight: 800,
                    fontSize: 12,
                  }}
                >
                  Pop-up life
                </span>
                <span className="muted" style={{ fontSize: 12 }}>
                  Serving Central Florida — one stop at a time.
                </span>
              </div>
            </div>

            {/* Text */}
<div
  style={{
    maxWidth: 560,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // centers the whole stack vertically
  }}
>
{/* ABOUT US SIGN */}
<div
  className="handwrite"
  style={{
    fontSize: 56,
    fontWeight: 900,
    letterSpacing: -0.4,
    lineHeight: 1,
    transform: "none",     // ✅ straight
    opacity: 1,
    alignSelf: "center",
    textAlign: "center",
    margin: 0,             // ✅ no hacks
    marginBottom: 10,      // small separation before pills
  }}
>
  ABOUT US
</div>

  {/* everything else stays the same below */}
  <div
    style={{
      display: "inline-flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 10,
    }}
  >
    <span
      style={{
        padding: "6px 10px",
        borderRadius: 9999,
        border: "1px solid var(--border)",
        color: "var(--gold)",
        fontWeight: 900,
        fontSize: 13,
      }}
    >
      Our story
    </span>
    <span className="muted" style={{ fontSize: 13 }}>
      Coffee • Matcha • Protein
    </span>
  </div>

  <h1 style={{ margin: 0, fontSize: 44, letterSpacing: -0.6, lineHeight: 1.05 }}>
    A pop-up café built for the before and after.
  </h1>

  <p className="muted" style={{ marginTop: 12, lineHeight: 1.7 }}>
    Pre &amp; Post is for the moments that matter — before work, before training, after
    training, after a long day. We keep it simple: drinks that taste good and feel clean.
  </p>

  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
    <a className="btn btnPrimary" href="/menu">
      View Menu
    </a>
    <a className="btn" href="/pop-ups">
      See Pop-Ups
    </a>
    <a className="btn" href="/contact">
      Contact
    </a>
  </div>
</div>
          </div>

          {/* Responsive grid rule */}
          <style>{`
            @media (min-width: 980px){
              .aboutHeroGrid{
                grid-template-columns: 1.1fr 0.9fr !important;
              }
            }
          `}</style>
        </section>

        {/* MISSION + VALUES (restored) */}
        <section style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18 }}>Our mission</div>
            <p className="muted" style={{ marginTop: 8, lineHeight: 1.8, maxWidth: 860 }}>
              Make café-inspired drinks that feel clean, fun, and repeatable — no weird ingredients,
              no fake “health” branding. Just real flavor with purpose.
            </p>

            <div
              style={{
                marginTop: 14,
                display: "grid",
                gap: 12,
                gridTemplateColumns: "1fr",
              }}
              className="aboutCards"
            >
              <div className="card" style={{ padding: 14, background: "var(--surface)" }}>
                <div style={{ fontWeight: 900 }}>Taste first</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  If it doesn’t taste good, it doesn’t make the menu.
                </div>
              </div>

              <div className="card" style={{ padding: 14, background: "var(--surface)" }}>
                <div style={{ fontWeight: 900 }}>Ingredients that make sense</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Simple builds, clean options, no gimmicks.
                </div>
              </div>

              <div className="card" style={{ padding: 14, background: "var(--surface)" }}>
                <div style={{ fontWeight: 900 }}>Pop-up energy</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Community-first. Show up, hang out, leave better.
                </div>
              </div>
            </div>

            <style>{`
              @media (min-width: 900px){
                .aboutCards{
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* FOLLOW ALONG (restored) */}
        <section style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18 }}>Follow along</div>
            <p className="muted" style={{ marginTop: 8 }}>
              Pop-up announcements, behind-the-scenes, and new drops.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <a className="btn" href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">
                Instagram
                </a>
                <a className="btn" href="https://tiktok.com/@preandpostcoffee" target="_blank" rel="noreferrer">
                TikTok
                </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}