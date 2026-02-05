export default function Home() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        {/* Top section (call it whatever you want; not required to be “Hero”) */}
        <section className="card" style={{ padding: 22 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 18, alignItems: "center" }}>
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
              <div style={{ marginTop: 8, fontSize: 18, fontWeight: 750 }}>Add details from IG</div>
              <div className="muted" style={{ marginTop: 6 }}>
                Date • Time • Location
              </div>
              <div style={{ marginTop: 12 }}>
                <a className="btn" href="/contact">Get Directions</a>
              </div>
            </div>
          </div>
        </section>

        {/* IG-style sections */}
        <section style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
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
            <a className="btn btnPrimary" href="https://instagram.com/" target="_blank" rel="noreferrer">
              Open Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
