export default function About() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <section style={{ padding: "18px 0 10px" }}>
          <div style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
            <span
              style={{
                padding: "6px 10px",
                borderRadius: 9999,
                border: "1px solid var(--border)",
                color: "var(--gold2)",
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              Our story
            </span>
            <span className="muted" style={{ fontSize: 13 }}>
              Orlando, FL
            </span>
          </div>

          <h1
            style={{
              margin: "14px 0 0",
              fontSize: 46,
              lineHeight: 1.04,
              letterSpacing: -0.8,
              maxWidth: 920,
            }}
          >
            A pop-up café built for the before and after.
          </h1>

          <p className="muted" style={{ marginTop: 12, fontSize: 16, lineHeight: 1.75, maxWidth: 780 }}>
            Pre &amp; Post is for the moments that matter — before work, before training, after training,
            after a long day. We serve espresso, ceremonial matcha, wellness lattes, and protein shakes
            made to taste good and hit right.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
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
        </section>

        {/* Mission / Values */}
        <section style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>Our mission</div>
            <p className="muted" style={{ marginTop: 8, lineHeight: 1.8 }}>
              Make café-inspired drinks that feel clean, fun, and repeatable — no weird ingredients,
              no fake “health” branding. Just real flavor with purpose.
            </p>

            <div
              style={{
                marginTop: 14,
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {[
                { t: "Taste first", d: "If it doesn’t taste good, it doesn’t make the menu." },
                { t: "Ingredients that make sense", d: "Simple builds, clean options, no gimmicks." },
                { t: "Pop-up energy", d: "Community-first. Show up, hang out, leave better." },
              ].map((x) => (
                <div
                  key={x.t}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: 14,
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <div style={{ fontWeight: 900 }}>{x.t}</div>
                  <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                    {x.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social */}
        <section style={{ marginTop: 14 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>Follow along</div>
            <div className="muted" style={{ marginTop: 8 }}>
              Pop-up announcements, behind-the-scenes, and new drops.
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <a
                className="btn"
                href="https://www.instagram.com/preandpostcoffee/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="btn"
                href="https://www.tiktok.com/@preandpostcoffee?_r=1&_t=ZT-92kOsWdobfh&fbclid=PAdGRleAP4cAtleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacEGoL718xX-OSk5r9t_Nea1SOKyBUqGntdd-Zj1zTEJDl3uUF3Cf2HyrqEag_aem_bTe893o6jPSVTghXOeqkNA"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
