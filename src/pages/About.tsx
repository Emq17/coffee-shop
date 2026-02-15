// src/pages/About.tsx

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
            className="aboutHeroGrid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 16,
              alignItems: "center",
            }}
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
                className="aboutHeroImage"
              />

              {/* Overlay for readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.08) 100%)",
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
                justifyContent: "center",
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
                  transform: "none",
                  opacity: 1,
                  alignSelf: "center",
                  textAlign: "center",
                  margin: 0,
                  marginBottom: 10,
                }}
              >
                ABOUT US
              </div>

              <div
                style={{
                  display: "inline-flex",
                  gap: 10,
                  alignItems: "center",
                  marginBottom: 10,
                  flexWrap: "wrap",
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
                training, after a long day. We keep it simple: drinks that taste good and feel
                clean.
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

          {/* Responsive layout + mobile crop */}
          <style>{`
            /* Image defaults (all sizes) */
            .aboutHeroImage{
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: 50% 32%;
              display: block;
              /* slightly brighter so it doesn't feel "dark" */
              filter: brightness(1.06) contrast(1.03) saturate(1.03);
            }

            /* Desktop: two columns */
            @media (min-width: 980px){
              .aboutHeroGrid{
                grid-template-columns: 1.1fr 0.9fr !important;
              }
            }

            /* Mobile: keep SAME layout style, just shrink/crop image */
            @media (max-width: 640px){
              .aboutHeroGrid{
                /* still two columns, but tighter so it resembles desktop */
                grid-template-columns: 0.95fr 1.05fr !important;
                gap: 12px !important;
              }

              /* slightly smaller overall text column */
              .aboutHeroGrid > div:last-child{
                max-width: 520px !important;
              }

              /* crop up a bit more on mobile so faces/logo stay in view */
              .aboutHeroImage{
                object-position: 50% 22%;
              }
            }

            /* Super small phones: allow stacking to avoid unreadable text */
            @media (max-width: 390px){
              .aboutHeroGrid{
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* MISSION + VALUES */}
        <section style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18 }}>Our mission</div>
            <p className="muted" style={{ marginTop: 8, lineHeight: 1.8, maxWidth: 860 }}>
              Make café-inspired drinks that feel clean, fun, and repeatable — no weird ingredients,
              no fake “health” branding. Just real flavor with purpose.
            </p>

            <div
              className="aboutCards"
              style={{
                marginTop: 14,
                display: "grid",
                gap: 12,
                gridTemplateColumns: "1fr",
              }}
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

        {/* FOLLOW ALONG */}
        <section style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, fontSize: 18 }}>Follow along</div>
            <p className="muted" style={{ marginTop: 8 }}>
              Pop-up announcements, behind-the-scenes, and new drops.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <a className="btn" href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="btn" href="https://tiktok.com" target="_blank" rel="noreferrer">
                TikTok
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}