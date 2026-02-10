export default function Home() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <section className="card heroCard">
          <div className="heroGrid">
            <div>
              <div style={{ display: "inline-flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
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

              <h1 className="heroTitle">Pre &amp; Post Coffee Shop</h1>

              <p className="muted heroDesc">
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
                  className="flyerImg"
                />
              </div>

              <div style={{ marginTop: 12, fontWeight: 900, fontSize: 16 }}>
                Coffee &amp; Matcha Pop-Up Event
              </div>

              <div className="muted" style={{ marginTop: 6, lineHeight: 1.55 }}>
                <div><b>Date:</b> 2/07/2026</div>
                <div><b>Hours:</b> 9:00am – 1:00pm EST</div>
                <div><b>Location:</b> Dwell Nona Place — 10207 Dwell Ct, Orlando, FL 32832</div>
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href="/pop-ups">View Details</a>
                <a
                  className="btn"
                  href="https://www.google.com/maps/search/?api=1&query=10207%20Dwell%20Ct%2C%20Orlando%2C%20FL%2032832"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="triGrid" style={{ marginTop: 18 }}>
          {[
            { title: "Featured Drinks", desc: "Top sellers + seasonal drops." },
            { title: "About", desc: "What “Pre & Post” means." },
            { title: "Follow Along", desc: "Latest posts + updates." },
          ].map((x) => (
            <div key={x.title} className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 800 }}>{x.title}</div>
              <div className="muted" style={{ marginTop: 8, lineHeight: 1.5 }}>{x.desc}</div>
            </div>
          ))}
        </section>

        <section className="card" style={{ marginTop: 18, padding: 18 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800 }}>Instagram</div>
              <div className="muted" style={{ marginTop: 6 }}>
                Mirror the IG vibe here — photos, menu highlights, pop-up posts.
              </div>
            </div>
            <a className="btn btnPrimary" href="https://www.instagram.com/preandpostcoffee/" target="_blank" rel="noreferrer">
              Open Instagram
            </a>
          </div>
        </section>
      </div>

      <style>{`
        .heroCard { padding: 22px; }
        .heroGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          align-items: center;
        }
        .heroTitle {
          margin: 12px 0 0;
          font-size: 44px;
          line-height: 1.05;
          letter-spacing: -0.4px;
        }
        .heroDesc {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.6;
          max-width: 620px;
        }
        .flyerImg {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--border);
          display: block;
        }
        .triGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        @media (max-width: 900px) {
          .heroGrid { grid-template-columns: 1fr; }
          .heroTitle { font-size: 38px; }
          .triGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
