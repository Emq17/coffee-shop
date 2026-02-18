export default function Privacy() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <section className="card" style={{ padding: 20, background: "rgba(32, 26, 24, 0.92)" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(30px, 4vw, 42px)", letterSpacing: -0.4 }}>
            Privacy Policy
          </h1>
          <p className="muted" style={{ marginTop: 8 }}>
            Last updated: February 18, 2026
          </p>

          <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
            <div>
              <div style={{ fontWeight: 900 }}>Information We Collect</div>
              <p className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
                If you contact us by email or social media, we may receive the information you
                choose to share (such as your name, message, or handle).
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 900 }}>How We Use Information</div>
              <p className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
                We use this information to respond to messages, provide pop-up updates, and improve
                our customer experience.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 900 }}>Sharing</div>
              <p className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
                We do not sell personal information. Information may be shared only when required by
                law or to protect our rights.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 900 }}>Third-Party Links</div>
              <p className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
                Our site links to third-party platforms (such as Instagram, TikTok, and Google
                Maps). Their privacy policies apply when you use those services.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 900 }}>Contact</div>
              <p className="muted" style={{ marginTop: 6, lineHeight: 1.7 }}>
                Questions about this policy can be sent to{" "}
                <a href="mailto:hello@preandpostcoffee.com">hello@preandpostcoffee.com</a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
