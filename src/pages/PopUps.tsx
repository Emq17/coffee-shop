export default function PopUps() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <section
          className="card popupsCard"
          style={{
            marginTop: 0,
            padding: 22,
            background: "rgba(32, 26, 24, 0.92)",
          }}
        >
          <div className="popupsDetails">
            <div className="popupsDetailsCard">
              <span className="popupsKicker">Upcoming Event</span>
              <div style={{ fontWeight: 900, fontSize: 34, letterSpacing: -0.5, lineHeight: 1.05 }}>
                Catch us at the next popup
              </div>

              <div className="popupsActions" style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  className="btn btnPrimary"
                  href="https://www.google.com/maps/search/?api=1&query=10207%20Dwell%20Ct%2C%20Orlando%2C%20FL%2032832"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
                <a
                  className="btn"
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pre+%26+Post+Coffee+Pop-Up&dates=20260228T140000Z/20260228T180000Z&location=Crunch+Fitness+Kissimmee+850+Osceola+Pkwy+Kissimmee+FL+34741&details=Coffee+%26+Matcha+Pop-Up+Event"
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to Calendar
                </a>
              </div>

              <div className="popupsFollowRow">
                <span className="muted">Never miss a pop-up:</span>
                <a
                  className="btn"
                  href="https://instagram.com/preandpostcoffee"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="btn"
                  href="https://tiktok.com/@preandpostcoffee"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </div>

              <p className="muted popupsUpdateNote">Next updates are posted weekly.</p>
            </div>
          </div>

          <div className="popupsFlyer">
            <img
              className="popupsFlyerImg"
              src="/popup-latest.png"
              alt="Pre & Post Pop-Up Flyer"
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid var(--border)",
                display: "block",
              }}
            />
          </div>

          <style>{`
            .popupsCard {
              display: grid;
              gap: 20px;
              grid-template-columns: 1fr;
              align-items: stretch;
              border: 1px solid rgba(217, 188, 132, 0.28);
              box-shadow:
                0 24px 40px rgba(0, 0, 0, 0.28),
                inset 0 1px 0 rgba(255, 255, 255, 0.07);
              position: relative;
              overflow: hidden;
              isolation: isolate;
              background:
                radial-gradient(circle at 82% 52%, rgba(186, 144, 84, 0.2), transparent 40%),
                radial-gradient(circle at 92% 22%, rgba(120, 130, 148, 0.18), transparent 34%),
                radial-gradient(circle at 16% -12%, rgba(217, 188, 132, 0.12), transparent 34%),
                rgba(32, 26, 24, 0.92) !important;
            }

            .popupsCard::before {
              content: "";
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 0;
              background:
                linear-gradient(to left, rgba(191, 150, 93, 0.08), transparent 34%),
                linear-gradient(to bottom, rgba(107, 117, 136, 0.08), transparent 40%);
            }

            .popupsKicker {
              display: inline-block;
              margin-bottom: 10px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              font-weight: 800;
              color: #f7e7c8;
              border: 1px solid rgba(217, 188, 132, 0.52);
              border-radius: 999px;
              padding: 4px 10px;
              background: rgba(255, 255, 255, 0.04);
            }

            .popupsDetails {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              position: relative;
              z-index: 1;
            }

            .popupsDetailsCard {
              width: 100%;
              max-width: 620px;
              border: 1px solid rgba(217, 188, 132, 0.28);
              border-radius: 16px;
              background: rgba(255, 255, 255, 0.03);
              padding: 20px 20px 18px;
            }

            .popupsActions {
              justify-content: center;
            }

            .popupsFollowRow {
              margin-top: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              flex-wrap: wrap;
            }

            .popupsUpdateNote {
              margin: 12px 0 0;
              font-size: 13px;
              opacity: 0.85;
            }

            .popupsFlyer {
              width: 100%;
              padding: 10px;
              border-radius: 16px;
              border: 1px solid rgba(217, 188, 132, 0.28);
              background:
                linear-gradient(165deg, rgba(190, 149, 90, 0.1), rgba(106, 118, 140, 0.08));
              position: relative;
              z-index: 1;
            }

            .popupsFlyerImg {
              width: 100%;
              height: 100%;
              min-height: 560px;
              object-fit: cover;
            }

            @media (min-width: 900px) {
              .popupsCard {
                grid-template-columns: minmax(0, 1fr) minmax(520px, 50%);
              }

              .popupsFlyer {
                justify-self: end;
                width: 100%;
              }
            }

            @media (max-width: 899px) {
              .popupsCard {
                padding: 18px !important;
              }

              .popupsDetailsCard {
                padding: 18px 14px;
              }

              .popupsFlyerImg {
                min-height: 0;
                height: auto;
                object-fit: contain;
              }
            }
          `}</style>
        </section>
      </div>
    </main>
  );
}
