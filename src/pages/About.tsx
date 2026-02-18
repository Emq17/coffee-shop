import { Link } from "react-router-dom";

export default function About() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        {/* HERO */}
        <section
          className="card aboutCard aboutHeroCard"
          style={{
            padding: 18,
            overflow: "hidden",
            background: "rgba(32, 26, 24, 0.92)",
          }}
        >
          <div className="aboutHeroGrid">
            {/* Image */}
            <div className="aboutImgWrap">
              <img
                src="/images/about/pop-up-team.jpg"
                alt="Pre & Post pop-up setup at Crunch - serving coffee and matcha."
                className="aboutImg"
              />

              {/* Overlay for readability (bottom fade, not darkening whole image) */}
              <div className="aboutImgOverlay" />

              {/* Caption */}
              <div className="aboutCaption">
                <span className="aboutChip">Pop-up life</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  Serving Central Florida - one stop at a time.
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="aboutTextWrap">
              <div className="aboutSign">About Us</div>

              <div className="aboutMetaRow">
                <span className="aboutPill">Our story</span>
                <span className="muted" style={{ fontSize: 13 }}>
                  Coffee • Matcha • Protein
                </span>
              </div>

              <h1 className="aboutTitle">A pop-up cafe built for the before and after.</h1>

              <p className="muted aboutBody">
                Pre &amp; Post is for the moments that matter - before work, before training, after
                training, after a long day. We keep it simple: drinks that taste good and feel clean.
              </p>

              <div className="aboutCtas">
                <a className="btn btnPrimary" href="/menu">
                  View Menu
                </a>
                <Link className="btn" to="/home#next-pop-up">
                  See Pop-Ups
                </Link>
                <a className="btn" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <style>{`
            .aboutCard {
              border: 1px solid rgba(217, 188, 132, 0.26);
              box-shadow:
                0 24px 40px rgba(0, 0, 0, 0.28),
                inset 0 1px 0 rgba(255, 255, 255, 0.07);
              background:
                radial-gradient(circle at 15% -12%, rgba(217, 188, 132, 0.11), transparent 34%),
                radial-gradient(circle at 95% 115%, rgba(255, 255, 255, 0.05), transparent 30%),
                rgba(32, 26, 24, 0.92) !important;
            }

            .aboutHeroGrid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
              align-items: center;
            }

            @media (min-width: 980px) {
              .aboutHeroGrid {
                grid-template-columns: 1.1fr 0.9fr;
              }
            }

            .aboutImgWrap {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid rgba(217, 188, 132, 0.26);
              background: rgba(32, 26, 24, 0.92);
              min-height: 260px;
            }

            .aboutImg {
              width: 100%;
              height: 100%;
              display: block;
              object-fit: cover;
              object-position: 50% 18%;
              filter: brightness(1.08) contrast(1.02) saturate(1.02);
            }

            .aboutImgOverlay {
              position: absolute;
              inset: 0;
              pointer-events: none;
              background: linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.55) 100%);
            }

            .aboutCaption {
              position: absolute;
              left: 14px;
              right: 14px;
              bottom: 12px;
              display: flex;
              gap: 10px;
              flex-wrap: wrap;
              align-items: center;
            }

            .aboutChip {
              border: 1px solid var(--border);
              padding: 6px 10px;
              border-radius: 999px;
              background: rgba(0, 0, 0, 0.45);
              font-weight: 800;
              font-size: 12px;
            }

            .aboutTextWrap {
              max-width: 560px;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .aboutSign {
              display: inline-block;
              margin: 0 0 10px;
              padding: 4px 10px;
              border-radius: 999px;
              border: 1px solid rgba(217, 188, 132, 0.5);
              background: rgba(255, 255, 255, 0.04);
              color: #f7e7c8;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              font-weight: 800;
              align-self: flex-start;
            }

            .aboutMetaRow {
              display: inline-flex;
              gap: 10px;
              align-items: center;
              margin-bottom: 10px;
            }

            .aboutPill {
              padding: 6px 10px;
              border-radius: 9999px;
              border: 1px solid var(--border);
              color: var(--gold);
              font-weight: 900;
              font-size: 13px;
            }

            .aboutTitle {
              margin: 0;
              font-size: clamp(34px, 4.5vw, 46px);
              letter-spacing: -0.6px;
              line-height: 1.05;
            }

            .aboutBody {
              margin-top: 12px;
              line-height: 1.7;
            }

            .aboutCtas {
              display: flex;
              gap: 10px;
              flex-wrap: wrap;
              margin-top: 14px;
            }

            .aboutSectionTitle {
              font-weight: 950;
              font-size: 20px;
              letter-spacing: -0.3px;
            }

            .aboutSectionBody {
              margin-top: 8px;
              line-height: 1.8;
              max-width: 860px;
            }

            .aboutValueCard {
              border: 1px solid rgba(217, 188, 132, 0.22);
              background: rgba(255, 255, 255, 0.03) !important;
            }

            @media (max-width: 520px) {
              .aboutImgWrap {
                min-height: 0;
                height: clamp(320px, 48vh, 420px);
              }

              .aboutSign {
                margin-bottom: 12px;
              }

              .aboutTitle {
                font-size: 40px;
              }
            }
          `}</style>
        </section>

        {/* MISSION + VALUES */}
        <section style={{ marginTop: 18 }}>
          <div className="card aboutCard" style={{ padding: 18, background: "rgba(32, 26, 24, 0.92)" }}>
            <div className="aboutSectionTitle">Our mission</div>
            <p className="muted aboutSectionBody">
              Make cafe-inspired drinks that feel clean, fun, and repeatable - no weird ingredients,
              no fake "health" branding. Just real flavor with purpose.
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
              <div className="card aboutValueCard" style={{ padding: 14, background: "rgba(32, 26, 24, 0.92)" }}>
                <div style={{ fontWeight: 900 }}>Taste first</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  If it doesn't taste good, it doesn't make the menu.
                </div>
              </div>

              <div className="card aboutValueCard" style={{ padding: 14, background: "rgba(32, 26, 24, 0.92)" }}>
                <div style={{ fontWeight: 900 }}>Ingredients that make sense</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Simple builds, clean options, no gimmicks.
                </div>
              </div>

              <div className="card aboutValueCard" style={{ padding: 14, background: "rgba(32, 26, 24, 0.92)" }}>
                <div style={{ fontWeight: 900 }}>Pop-up energy</div>
                <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                  Community-first. Show up, hang out, leave better.
                </div>
              </div>
            </div>

            <style>{`
              @media (min-width: 900px) {
                .aboutCards {
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
            `}</style>
          </div>
        </section>

        {/* FOLLOW ALONG */}
        <section style={{ marginTop: 18 }}>
          <div className="card aboutCard" style={{ padding: 18, background: "rgba(32, 26, 24, 0.92)" }}>
            <div className="aboutSectionTitle">Follow along</div>
            <p className="muted aboutSectionBody" style={{ maxWidth: "unset" }}>
              Pop-up announcements, behind-the-scenes, and new drops.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <a className="btn" href="https://instagram.com/preandpostcoffee" target="_blank" rel="noreferrer">
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
