import { Link } from "react-router-dom";

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
          <div className="aboutHeroGrid">
            {/* Image */}
            <div className="aboutHeroImageWrap">
              <img
                src="/images/about/pop-up-team.jpg"
                alt="Pre & Post pop-up setup at Crunch — serving coffee and matcha."
                className="aboutHeroImage"
              />

              {/* Overlay for readability (lighter so photo isn't too dark) */}
              <div className="aboutHeroOverlay" />

              {/* Caption */}
              <div className="aboutHeroCaption">
                <span className="aboutHeroTag">Pop-up life</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  Serving Central Florida — one stop at a time.
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="aboutHeroText">
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
                  textAlign: "center",
                  marginBottom: 12,
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
                training, after a long day. We keep it simple: drinks that taste good and feel clean.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <Link className="btn btnPrimary" to="/menu">
                  View Menu
                </Link>
                <Link className="btn" to="/pop-ups">
                  See Pop-Ups
                </Link>
                <Link className="btn" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* HERO CSS */}
          <style>{`
            /* Always keep 2 columns (desktop vibe on mobile) */
            .aboutHeroGrid{
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              align-items: stretch;
            }

            .aboutHeroImageWrap{
              position: relative;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid var(--border);
              background: var(--surface);
              min-height: 260px;
            }

            .aboutHeroImage{
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
              /* brighten slightly so it doesn't look crushed */
              filter: brightness(1.06) contrast(1.03) saturate(1.03);
            }

            .aboutHeroOverlay{
              position: absolute;
              inset: 0;
              background: linear-gradient(
                90deg,
                rgba(0,0,0,0.55) 0%,
                rgba(0,0,0,0.28) 55%,
                rgba(0,0,0,0.10) 100%
              );
              pointer-events: none;
            }

            .aboutHeroCaption{
              position: absolute;
              left: 14px;
              right: 14px;
              bottom: 12px;
              display: flex;
              gap: 10px;
              flex-wrap: wrap;
              align-items: center;
            }

            .aboutHeroTag{
              border: 1px solid var(--border);
              padding: 6px 10px;
              border-radius: 999px;
              background: rgba(0,0,0,0.45);
              font-weight: 800;
              font-size: 12px;
            }

            .aboutHeroText{
              max-width: 560px;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            /* Mobile tuning: same layout, just tighter + smaller text */
            @media (max-width: 640px){
              .aboutHeroGrid{
                grid-template-columns: 0.92fr 1.08fr;
                gap: 12px;
              }
              .aboutHeroImageWrap{
                min-height: 220px;
              }
              .aboutHeroText .handwrite{
                font-size: 40px !important;
                margin-bottom: 10px !important;
              }
              .aboutHeroText h1{
                font-size: 28px !important;
                line-height: 1.12 !important;
              }
              .aboutHeroText p{
                margin-top: 10px !important;
              }
            }

            /* Desktop ratio like your original */
            @media (min-width: 980px){
              .aboutHeroGrid{
                grid-template-columns: 1.1fr 0.9fr;
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

            <div className="aboutCards">
              <div className="card aboutCardInner">
                <div style={{ fontWeight: 900 }}>Taste first</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  If it doesn’t taste good, it doesn’t make the menu.
                </div>
              </div>

              <div className="card aboutCardInner">
                <div style={{ fontWeight: 900 }}>Ingredients that make sense</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Simple builds, clean options, no gimmicks.
                </div>
              </div>

              <div className="card aboutCardInner">
                <div style={{ fontWeight: 900 }}>Pop-up energy</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Community-first. Show up, hang out, leave better.
                </div>
              </div>
            </div>

            <style>{`
              .aboutCards{
                margin-top: 14px;
                display: grid;
                gap: 12px;
                grid-template-columns: 1fr;
              }
              .aboutCardInner{
                padding: 14px;
                background: var(--surface);
              }
              @media (min-width: 900px){
                .aboutCards{
                  grid-template-columns: repeat(3, 1fr);
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
              {/* Replace # with your real URLs when ready */}
              <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                TikTok
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}