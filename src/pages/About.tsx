import { Link } from "react-router-dom";

export default function About() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 28 }}>
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

              <h1 className="aboutTitle">A little love story served one cup at a time.</h1>

              <p className="muted aboutBody">
                Pre &amp; Post started with two people - Angel and his fiancée, Paola - dreaming up a
                coffee pop-up that felt warm, intentional, and full of heart. What began as shared
                mornings, recipes, and gym stops turned into a space for the "before" and "after"
                moments that make up real life.
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

          <div className="aboutSectionDivider" />

          <div className="aboutUnifiedTop">
            <div>
              <div className="aboutSectionTitle">Our story</div>
              <p className="muted aboutSectionBody" style={{ marginTop: 10 }}>
                This brand reflects our own life: early mornings, full schedules, and the joy
                of sharing something beautiful with our community. Pre &amp; Post is our way of
                turning ordinary days into something warm and memorable.
              </p>
            </div>
            <Link className="btn aboutUnifiedBtn" to="/home#next-pop-up">
              Next Pop-Up Details
            </Link>
          </div>

          <div className="aboutValuesGrid">
            <article className="card aboutValueCard aboutValueBlock">
              <div className="aboutValueTitle">Made with love</div>
              <p className="muted aboutValueBody">
                If we would not serve it to each other, it does not make the menu.
              </p>
            </article>

            <article className="card aboutValueCard aboutValueBlock">
              <div className="aboutValueTitle">Simple and intentional</div>
              <p className="muted aboutValueBody">
                Clean ingredients, thoughtful combinations, and no extra noise.
              </p>
            </article>

            <article className="card aboutValueCard aboutValueBlock">
              <div className="aboutValueTitle">Community first</div>
              <p className="muted aboutValueBody">
                We love creating spaces where people connect, recharge, and leave smiling.
              </p>
            </article>
          </div>

          <div className="aboutFollowBar">
            <div>
              <div className="aboutSectionTitle" style={{ fontSize: 18 }}>
                Follow along
              </div>
              <p className="muted" style={{ margin: "6px 0 0", lineHeight: 1.7 }}>
                Pop-up dates, behind-the-scenes moments, and little updates from Angel and Paola.
              </p>
            </div>
            <div className="aboutFollowActions">
              <a
                className="btn aboutUnifiedBtn"
                href="https://instagram.com/preandpostcoffee"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="btn aboutUnifiedBtn"
                href="https://tiktok.com/@preandpostcoffee"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
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

            .aboutSectionDivider {
              margin: 18px 0 16px;
              border-top: 1px solid rgba(217, 188, 132, 0.2);
            }

            .aboutUnifiedTop {
              display: grid;
              gap: 12px;
              grid-template-columns: 1fr;
              align-items: start;
            }

            .aboutValuesGrid {
              margin-top: 14px;
              display: grid;
              grid-template-columns: 1fr;
              gap: 12px;
            }

            .aboutValueBlock {
              border: 1px solid rgba(217, 188, 132, 0.24);
              background: rgba(255, 255, 255, 0.035) !important;
              border-radius: 14px;
              padding: 14px;
            }

            .aboutValueTitle {
              font-weight: 900;
              letter-spacing: -0.2px;
            }

            .aboutValueBody {
              margin: 6px 0 0;
              line-height: 1.65;
            }

            .aboutFollowBar {
              margin-top: 14px;
              border: 1px solid rgba(217, 188, 132, 0.24);
              border-radius: 14px;
              padding: 14px;
              display: grid;
              gap: 12px;
              background: rgba(255, 255, 255, 0.03);
            }

            .aboutFollowActions {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .aboutUnifiedBtn {
              color: var(--textOnSurface);
              background: var(--activeBg);
              border-color: var(--activeBorder);
            }

            .aboutUnifiedBtn:hover {
              background: rgba(200, 155, 90, 0.36);
              border-color: var(--activeBorder);
            }

            @media (min-width: 900px) {
              .aboutUnifiedTop {
                grid-template-columns: minmax(0, 1fr) auto;
                align-items: end;
              }

              .aboutValuesGrid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }

              .aboutFollowBar {
                grid-template-columns: minmax(0, 1fr) auto;
                align-items: center;
              }
            }

            @media (max-width: 520px) {
              .aboutImgWrap {
                min-height: 0;
                height: clamp(320px, 48vh, 420px);
              }

              .aboutSign {
                margin-bottom: 12px;
                align-self: center;
              }

              .aboutTitle {
                font-size: 40px;
              }

              .aboutTextWrap,
              .aboutSectionBody,
              .aboutValueBody,
              .aboutSectionTitle,
              .aboutValueTitle {
                text-align: center;
              }

              .aboutMetaRow,
              .aboutCtas,
              .aboutFollowActions,
              .aboutCaption {
                justify-content: center;
              }

              .aboutBody {
                text-align: center;
              }

              .aboutUnifiedTop {
                justify-items: center;
              }

              .aboutFollowBar {
                text-align: center;
              }
            }
          `}</style>
        </section>
      </div>
    </main>
  );
}
