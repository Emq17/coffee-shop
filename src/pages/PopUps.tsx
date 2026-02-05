const events = [
  { title: "Next Pop-Up", when: "TBD", where: "TBD" },
  { title: "Previous Pop-Up", when: "TBD", where: "TBD" },
];

export default function PopUps() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <h1 style={{ margin: 0, fontSize: 38, letterSpacing: -0.3 }}>Pop-Ups</h1>
        <p className="muted" style={{ marginTop: 10, maxWidth: 700, lineHeight: 1.6 }}>
          This page mirrors IG posts: dates, locations, and what’s featured.
        </p>

        <section style={{ marginTop: 16, display: "grid", gap: 14 }}>
          {events.map((e) => (
            <div key={e.title} className="card" style={{ padding: 18, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 850, fontSize: 18 }}>{e.title}</div>
                <div className="muted" style={{ marginTop: 8 }}>{e.when} • {e.where}</div>
              </div>
              <a className="btn btnPrimary" href="/contact">Details</a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
