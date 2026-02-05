const menu = [
  { name: "Signature Latte", notes: "Espresso • milk • house twist" },
  { name: "Cold Brew", notes: "Smooth • bold • low acidity" },
  { name: "Protein Mocha", notes: "Nutritious • café-inspired" },
  { name: "Seasonal Special", notes: "Rotates • limited" },
];

export default function Menu() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <h1 style={{ margin: 0, fontSize: 38, letterSpacing: -0.3 }}>Menu</h1>
        <p className="muted" style={{ marginTop: 10, maxWidth: 700, lineHeight: 1.6 }}>
          Placeholder menu — we’ll mirror the exact items from IG next.
        </p>

        <section style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {menu.map((item) => (
            <div key={item.name} className="card" style={{ padding: 18 }}>
              <div style={{ fontWeight: 850, fontSize: 18 }}>{item.name}</div>
              <div className="muted" style={{ marginTop: 8 }}>{item.notes}</div>
              <div style={{ marginTop: 12, color: "var(--gold2)", fontWeight: 800 }}>$ —</div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
