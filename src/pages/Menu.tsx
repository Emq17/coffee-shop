type Price = number | string;

type MenuItem = {
  name: string;
  desc?: string;
  price?: Price;
  tag?: string;
};

type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    title: "Protein Shakes",
    subtitle: "38 grams*",
    items: [
      { name: "Sweet Cocoa Protein Shake", price: 8 },
      { name: "Caramel Protein Shake", price: 8 },
      { name: "Vanilla Protein Shake", price: 8 },
    ],
  },
  {
    title: "Ceremonial Matcha & Korean Mugwort",
    subtitle: "Add Strawberry or Blueberry +$0.75",
    items: [
      { name: "Matcha Latte", price: 6.5 },
      { name: "Mugwort Latte", price: 6.5 },
    ],
  },
  {
    title: "Health Specialties",
    subtitle: "Choice of: Whey Protein, Collagen or Mushroom + Ashwagandha",
    items: [
      { name: "Matcha Health Latte", price: 7.5 },
      { name: "Super Mugwort Latte", price: 7.5 },
      { name: "Skinny Iced Latte", price: 7 },
      { name: "Mocha Wellness Latte", price: 7 },
      { name: "Caramel Gains Latte", price: 7 },
    ],
  },
  {
    title: "Iced Coffee",
    items: [
      { name: "Iced Mocha / Caramel Latte", price: 6 },
      { name: "Iced Latte", price: 5 },
    ],
  },
  {
    title: "Hot Coffee",
    items: [
      { name: "Espresso / Double", price: "2.50 / 3.00" },
      { name: "Americano", price: 3.7 },
      { name: "Macchiato", price: 3.5 },
      { name: "Flat White", price: 4.5 },
      { name: "Cafe Latte", price: 4.5 },
      { name: "Cappuccino", price: 4.5 },
      { name: "Mocha / Caramel Latte", price: 5.5 },
    ],
  },
];

const milkChoices: MenuItem[] = [
  { name: "Cow Milk", price: undefined },
  { name: "Oat Milk", price: 0.5 },
  { name: "Almond Milk", price: 0.5 },
  { name: "Coconut Milk", price: 0.5 },
];

const addIns: MenuItem[] = [
  { name: "Shot of Espresso", price: 0.75 },
  { name: "Cocoa Drizzle", price: 0.5 },
  { name: "Caramel Drizzle", price: 0.5 },
  { name: "Cinnamon Powder", price: 0.1 },
];

const sweetCreamFoam: MenuItem[] = [
  { name: "Matcha Cream Foam", price: 1.5 },
  { name: "Mugwort Cream Foam", price: 1.5 },
  { name: "Spirulina Cream Foam", price: 1.5 },
  { name: "Vanilla Cream Foam", price: 1 },
];

function formatPrice(price?: Price) {
  if (price === undefined) return "";
  if (typeof price === "string") return `$${price}`;
  // show .00 or .50 nicely
  return `$${price.toFixed(2).replace(/\.00$/, "")}`;
}

function SectionCard({ title, subtitle, items }: MenuSection) {
  return (
    <section className="card" style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>{title}</div>
          {subtitle ? (
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.45 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            color: "var(--gold2)",
            fontWeight: 800,
            fontSize: 12,
            border: "1px solid var(--border)",
            borderRadius: 9999,
            padding: "6px 10px",
            whiteSpace: "nowrap",
          }}
        >
          Crafted fresh
        </div>
      </div>

      <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
        {items.map((it) => (
          <div
            key={it.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 12,
              alignItems: "start",
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(200, 155, 90, 0.18)",
              background: "rgba(18, 24, 36, 0.55)",
            }}
          >
            <div>
              <div style={{ fontWeight: 800 }}>{it.name}</div>
              {it.desc ? (
                <div className="muted" style={{ marginTop: 4, fontSize: 13 }}>
                  {it.desc}
                </div>
              ) : null}
            </div>

            <div style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
              {formatPrice(it.price)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SmallListCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}) {
  return (
    <section className="card" style={{ padding: 18 }}>
      <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>{title}</div>
      {subtitle ? (
        <div className="muted" style={{ marginTop: 6, lineHeight: 1.45 }}>
          {subtitle}
        </div>
      ) : null}

      <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
        {items.map((it) => (
          <div
            key={it.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(200, 155, 90, 0.18)",
              background: "rgba(18, 24, 36, 0.55)",
            }}
          >
            <div style={{ fontWeight: 800 }}>{it.name}</div>
            <div style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
              {it.price !== undefined ? `+${formatPrice(it.price)}` : ""}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Menu() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 40, letterSpacing: -0.4 }}>Menu</h1>
            <p className="muted" style={{ marginTop: 10, maxWidth: 760, lineHeight: 1.6 }}>
              Nutritious café-inspired drinks — espresso, matcha, protein shakes, and wellness specialties.
            </p>
          </div>

          <div
            className="card"
            style={{
              padding: "10px 12px",
              borderRadius: 14,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <span className="muted" style={{ fontSize: 13 }}>Serving sizes:</span>
            <span style={{ fontWeight: 900, color: "var(--gold2)" }}>Hot 10 oz</span>
            <span className="muted">•</span>
            <span style={{ fontWeight: 900, color: "var(--gold2)" }}>Cold 16 oz</span>
          </div>
        </div>

        {/* Main menu sections */}
        <div
          style={{
            marginTop: 16,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {sections.map((s) => (
            <SectionCard key={s.title} {...s} />
          ))}
        </div>

        {/* Customization */}
        <div
          style={{
            marginTop: 14,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <SmallListCard title="Choice of Milk" items={milkChoices} subtitle="Oat/Almond/Coconut available." />
          <SmallListCard title="Extra Add-Ins" items={addIns} subtitle="Boost flavor or caffeine." />
          <SmallListCard title="Sweet Cream Foam" items={sweetCreamFoam} subtitle="Add a creamy top layer." />
        </div>

        <section className="card" style={{ marginTop: 14, padding: 18 }}>
          <div style={{ fontWeight: 900, color: "var(--gold2)" }}>Note</div>
          <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
            Menu items and pricing may vary by pop-up. We’ll keep this updated as new drops and seasonal specials roll in.
          </div>
        </section>
      </div>
    </main>
  );
}
