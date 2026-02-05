export default function PopUps() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <h1 style={{ margin: 0, fontSize: 38, letterSpacing: -0.3 }}>Pop-Ups</h1>
        <p
          className="muted"
          style={{ marginTop: 10, maxWidth: 760, lineHeight: 1.6 }}
        >
          Dates, locations, and featured drinks. Updated as new events drop.
        </p>

        <section
          className="card"
          style={{
            marginTop: 16,
            padding: 18,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ fontWeight: 900, fontSize: 20 }}>
              Coffee &amp; Matcha Pop-Up Event
            </div>

            <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
              <div>
                <b>Date:</b> 2/07/2026
              </div>
              <div>
                <b>Hours:</b> 9:00am – 1:00pm EST
              </div>
              <div>
                <b>Location:</b> Dwell Nona Place — 10207 Dwell Ct, Orlando, FL
                32832
              </div>
              <div style={{ marginTop: 10 }}>
                Valentine special:{" "}
                <span style={{ color: "var(--gold2)", fontWeight: 900 }}>
                  Ube Latte
                </span>
              </div>
            </div>

            <div
              style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}
            >
              <a
                className="btn btnPrimary"
                href="https://www.google.com/maps/search/?api=1&query=10207%20Dwell%20Ct%2C%20Orlando%2C%20FL%2032832"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
              <a className="btn" href="/menu">
                See Menu
              </a>
            </div>
          </div>

          <div>
            <img
              src="/popup-latest.png"
              alt="Pre & Post Pop-Up Flyer"
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid var(--border)",
                display: "block",
              }}
            />
            <div className="muted" style={{ marginTop: 10, lineHeight: 1.5 }}>
        Be sure to check back for the next location & featured drinks!
            </div>
          </div>
        </section>

        <section style={{ marginTop: 14, display: "grid", gap: 14 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900 }}>More events coming soon</div>
            <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
              We’ll add future and past pop-ups here as cards—same style, clean
              and easy to scan.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
