export default function Footer() {
  return (
    <footer style={{ marginTop: 28, padding: "28px 0 40px" }}>
      <div className="container">
        <div
          className="card"
          style={{
            padding: 18,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div>
            <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>Pre &amp; Post Coffee</div>
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
              Pop-up based • Central Florida
              <br />
              Coffee • Matcha • Protein
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900 }}>Contact</div>
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
              Instagram: @preandpostcoffee
              <br />
              Email: hello@preandpostcoffee.com
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
              <a className="btn" href="https://www.instagram.com/preandpostcoffee/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="btn" href="/home#next-pop-up">
                Next Pop-Up
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900 }}>Next Pop-Up</div>
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
              2/11/2026 • 9:00am – 1:00pm
              <br />
              Crunch Fitness Lake Nona
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
              <a
                className="btn btnPrimary"
                href="https://www.google.com/maps/search/?api=1&query=11926%20Narcoossee%20Rd%2C%20Suite%20100%2C%20Orlando%2C%20FL%2032832"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
              <a className="btn" href="/menu">
                Menu
              </a>
            </div>
          </div>
        </div>

        <div className="muted" style={{ marginTop: 14, fontSize: 12, opacity: 0.7 }}>
          © {new Date().getFullYear()} Pre &amp; Post Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
