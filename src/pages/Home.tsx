export default function Home() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <section className="card" style={{ padding: 22 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 18,
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: 9999,
                    border: "1px solid var(--border)",
                    color: "var(--gold2)",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  Pop-up coffee
                </span>
                <span className="muted" style={{ fontSize: 13 }}>Orlando, FL</span>
              </div>

              <h1 style={{ margin: "12px 0 0", fontSize: 44, lineHeight: 1.05, letterSpacing: -0.4 }}>
                Pre &amp; Post Coffee Shop
              </h1>

              <p className="muted" style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6, maxWidth: 620 }}>
                Nutritious café-inspired drinks. Built for your before &amp; after — training, work, or whatever you’re chasing.
              </p>

              <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href="/menu">View Menu</a>
                <a className="btn" href="/pop-ups">See Next Pop-Up</a>
              </div>
            </div>

            <div className="card" style={{ padding: 18, borderRadius: 16 }}>
              <div style={{ fontWeight: 800, color: "var(--gold2)" }}>Next Pop-Up</div>

              <div style={{ marginTop: 10 }}>
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
              </div>

              <div style={{ marginTop: 12, fontWeight: 900, fontSize: 16 }}>
                Coffee &amp; Matcha Pop-Up Event
              </div>

              <div className="muted" style={{ marginTop: 6, lineHeight: 1.55 }}>
                <div><b>Date:</b> 2/11/2026</div>
                <div><b>Hours:</b> 9:00am – 1:00pm EST</div>
                <div><b>Location:</b> Crunch Fitness Lake Nona — 11926 Narcoossee Rd, Suite 100, Orlando, FL, 32832</div>
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href="/pop-ups">View Details</a>
                <a
                  className="btn"
                  href="https://www.google.com/maps/search/?api=1&query=11926%20Narcoossee%20Rd%2C%20Suite%20100%2C%20Orlando%2C%20FL%2032832"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3 cards (cleaned so Follow Along isn't duplicated) */}
        <section style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {[
            { title: "Featured Drinks", desc: "Top sellers + seasonal drops." },
            { title: "About", desc: "What “Pre & Post” means." },
            { title: "Next Drop", desc: "New flavors + pop-up locations soon." },
          ].map((x) => (
            <div key={x.title} className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 800 }}>{x.title}</div>
              <div className="muted" style={{ marginTop: 8, lineHeight: 1.5 }}>{x.desc}</div>
            </div>
          ))}
        </section>

        {/* Follow Along (single section with icons + links) */}
        <section className="card" style={{ marginTop: 18, padding: 18 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 800 }}>Follow Along</div>
              <div className="muted" style={{ marginTop: 6 }}>
                Follow us for pop-up announcements, drink drops, and behind-the-scenes.
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                className="btn btnPrimary"
                href="https://www.instagram.com/preandpostcoffee/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Instagram"
                style={{ padding: "10px 14px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Instagram
              </a>

              <a
                className="btn"
                href="https://www.tiktok.com/@preandpostcoffee?_r=1&_t=ZT-92kOsWdobfh&fbclid=PAdGRleAP4cAtleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacEGoL718xX-OSk5r9t_Nea1SOKyBUqGntdd-Zj1zTEJDl3uUF3Cf2HyrqEag_aem_bTe893o6jPSVTghXOeqkNA"
                target="_blank"
                rel="noreferrer"
                aria-label="Open TikTok"
                style={{ padding: "10px 14px" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 3v10.2a4.8 4.8 0 1 1-4-4.73V6.2a7.2 7.2 0 1 0 8 7.07V8.5c1.16.82 2.55 1.3 4 1.35V6.8c-2.4-.2-4.4-1.77-5-3.8H14Z"
                    fill="currentColor"
                  />
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
