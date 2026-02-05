export default function Contact() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <h1 style={{ margin: 0, fontSize: 38, letterSpacing: -0.3 }}>Contact</h1>
        <p className="muted" style={{ marginTop: 10, maxWidth: 700, lineHeight: 1.6 }}>
          Drop IG link, email, and location details here.
        </p>

        <section className="card" style={{ marginTop: 16, padding: 18, display: "grid", gap: 12 }}>
          <div>
            <div style={{ fontWeight: 850 }}>Instagram</div>
            <div className="muted" style={{ marginTop: 6 }}>Add the real handle here</div>
          </div>
          <div>
            <div style={{ fontWeight: 850 }}>Email</div>
            <div className="muted" style={{ marginTop: 6 }}>hello@preandpostcoffee.com</div>
          </div>
          <div>
            <div style={{ fontWeight: 850 }}>Location</div>
            <div className="muted" style={{ marginTop: 6 }}>Pop-up based • Miami, FL</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 6 }}>
            <a className="btn btnPrimary" href="https://instagram.com/" target="_blank" rel="noreferrer">Message on IG</a>
            <a className="btn" href="/pop-ups">See Pop-Ups</a>
          </div>
        </section>
      </div>
    </main>
  );
}
