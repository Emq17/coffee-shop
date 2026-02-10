import { useMemo, useState } from "react";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  subtitle?: string;
  category: string;

  // New fields for “More info”
  description?: string;
  ingredients?: string[];
  notes?: string[];
};

function money(n: number) {
  return `$${n.toFixed(2).replace(/\.00$/, "")}`;
}

export default function Menu() {
  // --- DATA (edit anytime) ---
  const items: MenuItem[] = useMemo(
    () => [
      // Protein Shakes
      {
        id: "ps1",
        category: "Protein Shakes",
        name: "Sweet Cocoa Protein Shake",
        price: 8,
        subtitle: "38 grams*",
        description: "Rich cocoa protein shake made for post-workout fuel.",
        ingredients: ["Whey protein", "Cocoa", "Ice", "Sweetener (optional)"],
        notes: ["38g protein*", "Cold drink"],
      },
      {
        id: "ps2",
        category: "Protein Shakes",
        name: "Caramel Protein Shake",
        price: 8,
        description: "Smooth caramel protein shake with a dessert vibe.",
        ingredients: ["Whey protein", "Caramel flavor", "Ice"],
        notes: ["38g protein*", "Cold drink"],
      },
      {
        id: "ps3",
        category: "Protein Shakes",
        name: "Vanilla Protein Shake",
        price: 8,
        description: "Classic vanilla protein shake—clean and simple.",
        ingredients: ["Whey protein", "Vanilla flavor", "Ice"],
        notes: ["38g protein*", "Cold drink"],
      },

      // Ceremonial Matcha & Korean Mugwort
      {
        id: "m1",
        category: "Ceremonial Matcha & Korean Mugwort",
        name: "Matcha Latte",
        price: 6.5,
        subtitle: "Add Strawberry or Blueberry +$0.75",
        description: "Ceremonial matcha latte with your choice of milk.",
        ingredients: ["Ceremonial matcha", "Milk of choice", "Ice (optional)"],
        notes: ["Hot or iced"],
      },
      {
        id: "m2",
        category: "Ceremonial Matcha & Korean Mugwort",
        name: "Mugwort Latte",
        price: 6.5,
        subtitle: "Add Strawberry or Blueberry +$0.75",
        description: "Korean mugwort latte—earthy, smooth, and calming.",
        ingredients: ["Korean mugwort", "Milk of choice", "Ice (optional)"],
        notes: ["Hot or iced"],
      },

      // Health Specialties
      {
        id: "h1",
        category: "Health Specialties",
        name: "Matcha Health Latte",
        price: 7.5,
        subtitle: "Choice of: Whey Protein, Collagen, or Mushroom + Ashwagandha",
        description: "Matcha latte boosted with functional add-ins.",
        ingredients: ["Matcha", "Milk of choice", "Ashwagandha", "Protein/Collagen/Mushroom"],
        notes: ["Hot or iced"],
      },
      {
        id: "h2",
        category: "Health Specialties",
        name: "Super Mugwort Latte",
        price: 7.5,
        subtitle: "Choice of: Whey Protein, Collagen, or Mushroom + Ashwagandha",
        description: "Mugwort latte with wellness-focused add-ins.",
        ingredients: ["Mugwort", "Milk of choice", "Ashwagandha", "Protein/Collagen/Mushroom"],
        notes: ["Hot or iced"],
      },
      {
        id: "h3",
        category: "Health Specialties",
        name: "Skinny Iced Latte",
        price: 7,
        description: "Iced latte with a lighter profile.",
        ingredients: ["Espresso", "Milk of choice", "Ice"],
        notes: ["Cold drink"],
      },
      {
        id: "h4",
        category: "Health Specialties",
        name: "Mocha Wellness Latte",
        price: 7,
        description: "Mocha latte with a wellness twist.",
        ingredients: ["Espresso", "Cocoa", "Milk of choice"],
        notes: ["Hot or iced"],
      },
      {
        id: "h5",
        category: "Health Specialties",
        name: "Caramel Gains Latte",
        price: 7,
        description: "Caramel latte built for the ‘gains’ crowd.",
        ingredients: ["Espresso", "Caramel flavor", "Milk of choice"],
        notes: ["Hot or iced"],
      },

      // Iced Coffee
      {
        id: "ic1",
        category: "Iced Coffee",
        name: "Iced Mocha / Caramel Latte",
        price: 6,
        description: "Iced latte with mocha or caramel.",
        ingredients: ["Espresso", "Mocha or caramel", "Milk of choice", "Ice"],
        notes: ["Cold drink"],
      },

      // Hot Coffee
      { id: "hc1", category: "Hot Coffee", name: "Espresso", price: 2.5, description: "Straight espresso shot(s).", ingredients: ["Espresso"] },
      { id: "hc2", category: "Hot Coffee", name: "Americano", price: 3.7, description: "Espresso + hot water.", ingredients: ["Espresso", "Hot water"] },
      { id: "hc3", category: "Hot Coffee", name: "Macchiato", price: 3.5, description: "Espresso with a touch of foam.", ingredients: ["Espresso", "Foam"] },
      { id: "hc4", category: "Hot Coffee", name: "Flat White", price: 4.5, description: "Velvety espresso + steamed milk.", ingredients: ["Espresso", "Steamed milk"] },
      { id: "hc5", category: "Hot Coffee", name: "Cafe Latte", price: 4.5, description: "Espresso + steamed milk.", ingredients: ["Espresso", "Steamed milk"] },
      { id: "hc6", category: "Hot Coffee", name: "Cappuccino", price: 4.5, description: "Espresso + steamed milk + foam.", ingredients: ["Espresso", "Steamed milk", "Foam"] },
      { id: "hc7", category: "Hot Coffee", name: "Mocha/Caramel Latte", price: 5.5, description: "Latte with mocha or caramel.", ingredients: ["Espresso", "Steamed milk", "Mocha or caramel"] },
    ],
    []
  );

  const categories = useMemo(() => {
    const map = new Map<string, MenuItem[]>();
    for (const it of items) {
      if (!map.has(it.category)) map.set(it.category, []);
      map.get(it.category)!.push(it);
    }
    return Array.from(map.entries()).map(([category, items]) => ({ category, items }));
  }, [items]);

  // --- “More info” modal state ---
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<MenuItem | null>(null);

  function openInfo(item: MenuItem) {
    setActive(item);
    setOpen(true);
  }
  function closeInfo() {
    setOpen(false);
    setActive(null);
  }

  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      {/* Local styles so you don't have to touch CSS files */}
      <style>{`
        .menuTop {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
          align-items: start;
        }
        @media (min-width: 980px) {
          .menuTop {
            grid-template-columns: 1fr;
          }
        }

        /* Masonry layout (NO gaps) */
        .menuMasonry {
          column-gap: 16px;
          margin-top: 18px;
          columns: 1;
        }
        @media (min-width: 740px) {
          .menuMasonry { columns: 2; }
        }
        @media (min-width: 1080px) {
          .menuMasonry { columns: 3; }
        }
        .menuSection {
          break-inside: avoid;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px 0;
          padding: 14px;
        }

        .menuSectionHead {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .menuSectionTitle { font-size: 18px; font-weight: 900; margin: 0; }
        .menuSectionSub { margin: 3px 0 0 0; font-size: 13px; opacity: .75; }

        .menuChip {
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          white-space: nowrap;
        }

        .menuItemRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 10px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
        }
        .menuItemRow + .menuItemRow { margin-top: 10px; }

        .thumb {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: radial-gradient(circle at top, rgba(255,255,255,0.10), rgba(255,255,255,0.02));
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          font-size: 11px;
          opacity: .7;
        }

        .menuItemLeft {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex: 1;
        }
        .menuItemName { font-weight: 900; margin: 0; line-height: 1.2; }
        .menuItemSubtitle { margin: 4px 0 0 0; font-size: 12px; opacity: .75; line-height: 1.35; }

        .menuItemRight {
          display: grid;
          gap: 8px;
          justify-items: end;
          flex: 0 0 auto;
        }
        .price {
          font-weight: 900;
          letter-spacing: -0.2px;
        }

        /* Ensure nothing looks “active/highlighted” */
        .btn, .btnPrimary {
          filter: none !important;
          box-shadow: none !important;
        }
        .btn:focus, .btnPrimary:focus { outline: none; }
      `}</style>

      <div className="container">
        <div className="menuTop">
          <div>
            <h1 style={{ margin: 0, fontSize: 44, letterSpacing: -0.6 }}>Menu</h1>
            <p className="muted" style={{ marginTop: 10, maxWidth: 820, lineHeight: 1.6 }}>
              Nutritious café-inspired drinks — espresso, matcha, protein shakes, and wellness specialties.
            </p>
          </div>
        </div>

        <section className="menuMasonry">
          {categories.map(({ category, items }) => (
            <div key={category} className="card menuSection">
              <div className="menuSectionHead">
                <div>
                  <h2 className="menuSectionTitle">{category}</h2>
                  {category === "Protein Shakes" && <p className="menuSectionSub">38 grams*</p>}
                </div>
                <div className="menuChip">Crafted fresh</div>
              </div>

              {items.map((it) => (
                <div key={it.id} className="menuItemRow">
                  <div className="menuItemLeft">
                    <div className="thumb">Image</div>
                    <div style={{ minWidth: 0 }}>
                      <p className="menuItemName">{it.name}</p>
                      {it.subtitle ? <p className="menuItemSubtitle">{it.subtitle}</p> : null}
                    </div>
                  </div>

                  <div className="menuItemRight">
                    <div className="price">{money(it.price)}</div>
                    <button className="btn" onClick={() => openInfo(it)}>
                      More info
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>

      <DrinkInfoModal open={open} item={active} onClose={closeInfo} />
    </main>
  );
}

function DrinkInfoModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: MenuItem | null;
}) {
  if (!open || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 80,
        display: "grid",
        placeItems: "center",
        padding: 16,
      }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(720px, 100%)",
          padding: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18 }}>{item.name}</div>
            <div className="muted" style={{ marginTop: 6 }}>
              {money(item.price)}
            </div>
          </div>

          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>

        {/* Big image placeholder */}
        <div
          style={{
            marginTop: 14,
            width: "100%",
            height: 220,
            borderRadius: 14,
            border: "1px solid var(--border)",
            background:
              "radial-gradient(circle at top, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
            display: "grid",
            placeItems: "center",
            opacity: 0.85,
          }}
        >
          Image coming soon
        </div>

        {item.description ? (
          <p className="muted" style={{ marginTop: 12, lineHeight: 1.6 }}>
            {item.description}
          </p>
        ) : null}

        {item.ingredients?.length ? (
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 900 }}>Ingredients</div>
            <ul className="muted" style={{ marginTop: 8, lineHeight: 1.7, paddingLeft: 18 }}>
              {item.ingredients.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.notes?.length ? (
          <div style={{ marginTop: 10 }}>
            <div style={{ fontWeight: 900 }}>Notes</div>
            <div className="muted" style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {item.notes.map((n) => (
                <span
                  key={n}
                  style={{
                    border: "1px solid var(--border)",
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 12,
                  }}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
