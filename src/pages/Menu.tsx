// src/pages/Menu.tsx (or wherever your Menu lives)
import { useMemo, useState } from "react";
import { useCart } from "../cart/CartContext";

// -------------------- Types --------------------
type Money = number;

type MenuItem = {
  id: string;
  name: string;
  desc?: string;
  price?: Money; // numeric for cart math
  tag?: string;
};

type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

type CartOption = { id: string; name: string; price: number };

// -------------------- Data --------------------
const sections: MenuSection[] = [
  {
    title: "Protein Shakes",
    subtitle: "38 grams*",
    items: [
      { id: "shake-sweet-cocoa", name: "Sweet Cocoa Protein Shake", price: 8 },
      { id: "shake-caramel", name: "Caramel Protein Shake", price: 8 },
      { id: "shake-vanilla", name: "Vanilla Protein Shake", price: 8 },
    ],
  },
  {
    title: "Ceremonial Matcha & Korean Mugwort",
    subtitle: "Add Strawberry or Blueberry +$0.75",
    items: [
      { id: "matcha-latte", name: "Matcha Latte", price: 6.5 },
      { id: "mugwort-latte", name: "Mugwort Latte", price: 6.5 },
    ],
  },
  {
    title: "Health Specialties",
    subtitle: "Choice of: Whey Protein, Collagen or Mushroom + Ashwagandha",
    items: [
      { id: "matcha-health-latte", name: "Matcha Health Latte", price: 7.5 },
      { id: "super-mugwort-latte", name: "Super Mugwort Latte", price: 7.5 },
      { id: "skinny-iced-latte", name: "Skinny Iced Latte", price: 7 },
      { id: "mocha-wellness-latte", name: "Mocha Wellness Latte", price: 7 },
      { id: "caramel-gains-latte", name: "Caramel Gains Latte", price: 7 },
    ],
  },
  {
    title: "Iced Coffee",
    items: [
      { id: "iced-mocha-caramel-latte", name: "Iced Mocha / Caramel Latte", price: 6 },
      { id: "iced-latte", name: "Iced Latte", price: 5 },
    ],
  },
  {
    title: "Hot Coffee",
    items: [
      // Split so cart math is clean
      { id: "espresso-single", name: "Espresso", price: 2.5 },
      { id: "espresso-double", name: "Double Espresso", price: 3.0 },

      { id: "americano", name: "Americano", price: 3.7 },
      { id: "macchiato", name: "Macchiato", price: 3.5 },
      { id: "flat-white", name: "Flat White", price: 4.5 },
      { id: "cafe-latte", name: "Cafe Latte", price: 4.5 },
      { id: "cappuccino", name: "Cappuccino", price: 4.5 },
      { id: "mocha-caramel-latte-hot", name: "Mocha / Caramel Latte", price: 5.5 },
    ],
  },
];

const milkChoices: MenuItem[] = [
  { id: "milk-cow", name: "Cow Milk" },
  { id: "milk-oat", name: "Oat Milk", price: 0.5 },
  { id: "milk-almond", name: "Almond Milk", price: 0.5 },
  { id: "milk-coconut", name: "Coconut Milk", price: 0.5 },
];

const addIns: MenuItem[] = [
  { id: "addin-espresso-shot", name: "Shot of Espresso", price: 0.75 },
  { id: "addin-cocoa-drizzle", name: "Cocoa Drizzle", price: 0.5 },
  { id: "addin-caramel-drizzle", name: "Caramel Drizzle", price: 0.5 },
  { id: "addin-cinnamon", name: "Cinnamon Powder", price: 0.1 },
];

const sweetCreamFoam: MenuItem[] = [
  { id: "foam-matcha", name: "Matcha Cream Foam", price: 1.5 },
  { id: "foam-mugwort", name: "Mugwort Cream Foam", price: 1.5 },
  { id: "foam-spirulina", name: "Spirulina Cream Foam", price: 1.5 },
  { id: "foam-vanilla", name: "Vanilla Cream Foam", price: 1 },
];

// -------------------- Helpers --------------------
function formatMoney(n: number) {
  return `$${n.toFixed(2).replace(/\.00$/, "")}`;
}

function formatPrice(price?: Money) {
  if (price === undefined) return "";
  return formatMoney(price);
}

function makeLineId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}

function toOption(it: MenuItem): CartOption {
  return { id: it.id, name: it.name, price: it.price ?? 0 };
}

function itemTotal(base: number, milk?: CartOption, foam?: CartOption, addInsArr: CartOption[] = []) {
  const opts = (milk?.price ?? 0) + (foam?.price ?? 0) + addInsArr.reduce((s, a) => s + a.price, 0);
  return base + opts;
}

// -------------------- Cart UI --------------------
function CartSummary() {
  const { state, subtotal, inc, dec, remove, clear } = useCart();
  const count = state.lines.reduce((s, l) => s + l.qty, 0);

  const orderText = useMemo(() => {
    if (!state.lines.length) return "";
    const lines = state.lines.map((l) => {
      const parts: string[] = [];
      if (l.milk) parts.push(`Milk: ${l.milk.name}`);
      if (l.addIns?.length) parts.push(`Add-ins: ${l.addIns.map((a) => a.name).join(", ")}`);
      if (l.foam) parts.push(`Foam: ${l.foam.name}`);
      if (l.notes) parts.push(`Notes: ${l.notes}`);

      const opts = parts.length ? ` (${parts.join(" • ")})` : "";
      return `${l.qty}x ${l.name}${opts}`;
    });
    return `PRE-ORDER\n\n${lines.join("\n")}\n\nSubtotal: ${formatMoney(subtotal)}`;
  }, [state.lines, subtotal]);

  const copyOrder = async () => {
    try {
      await navigator.clipboard.writeText(orderText);
      alert("Order copied to clipboard.");
    } catch {
      alert("Could not copy. Try selecting and copying manually.");
    }
  };

  if (state.lines.length === 0) {
    return (
      <div className="card" style={{ padding: 12, borderRadius: 14, minWidth: 280 }}>
        <div className="muted" style={{ fontSize: 13 }}>Cart</div>
        <div style={{ fontWeight: 900 }}>Empty</div>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 12, borderRadius: 14, minWidth: 320 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <div>
          <div className="muted" style={{ fontSize: 13 }}>Cart</div>
          <div style={{ fontWeight: 900 }}>{count} item(s)</div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={copyOrder}>Copy</button>
          <button className="btn" onClick={clear}>Clear</button>
        </div>
      </div>

      <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
        {state.lines.map((l) => (
          <div
            key={l.lineId}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: 10,
              background: "rgba(18, 24, 36, 0.55)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "start" }}>
              <div>
                <div style={{ fontWeight: 900 }}>{l.name}</div>
                <div className="muted" style={{ marginTop: 4, fontSize: 13, lineHeight: 1.45 }}>
                  {l.milk ? `Milk: ${l.milk.name}` : ""}
                  {l.addIns?.length ? ` • Add-ins: ${l.addIns.map((a) => a.name).join(", ")}` : ""}
                  {l.foam ? ` • Foam: ${l.foam.name}` : ""}
                  {l.notes ? ` • Notes: ${l.notes}` : ""}
                </div>
              </div>

              <button className="btn" onClick={() => remove(l.lineId)}>Remove</button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", marginTop: 10 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button className="btn" onClick={() => dec(l.lineId)}>-</button>
                <div style={{ fontWeight: 900 }}>{l.qty}</div>
                <button className="btn" onClick={() => inc(l.lineId)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 12 }}>
        <div className="muted">Subtotal</div>
        <div style={{ fontWeight: 900, color: "var(--gold2)" }}>{formatMoney(subtotal)}</div>
      </div>

      <div className="muted" style={{ marginTop: 10, fontSize: 13, lineHeight: 1.45 }}>
        Pre-order MVP: tap <b>Copy</b> and paste your order at the event (or into a form).
      </div>
    </div>
  );
}

// -------------------- Modal --------------------
function CustomizeModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: MenuItem | null;
}) {
  const cart = useCart();

  const [milkId, setMilkId] = useState<string>("milk-cow");
  const [foamId, setFoamId] = useState<string>("foam-none");
  const [addInIds, setAddInIds] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState<string>("");
  const [qty, setQty] = useState<number>(1);

  const foamOptions = useMemo(() => [{ id: "foam-none", name: "No Foam", price: 0 } as MenuItem, ...sweetCreamFoam], []);

  const selectedMilk = useMemo(() => {
    const m = milkChoices.find((x) => x.id === milkId);
    return m ? toOption(m) : undefined;
  }, [milkId]);

  const selectedFoam = useMemo(() => {
    if (foamId === "foam-none") return undefined;
    const f = foamOptions.find((x) => x.id === foamId);
    return f ? { id: f.id, name: f.name, price: f.price ?? 0 } : undefined;
  }, [foamId, foamOptions]);

  const selectedAddIns = useMemo(() => {
    return addIns.filter((a) => Boolean(addInIds[a.id])).map((a) => toOption(a));
  }, [addInIds]);

  const basePrice = item?.price ?? 0;
  const perItem = itemTotal(basePrice, selectedMilk, selectedFoam, selectedAddIns);
  const total = perItem * qty;

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
        zIndex: 60,
        display: "grid",
        placeItems: "center",
        padding: 16,
      }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "min(720px, 100%)", padding: 18, borderRadius: 16 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: -0.2 }}>{item.name}</div>
            <div className="muted" style={{ marginTop: 6 }}>Customize your drink for pickup.</div>
          </div>
          <button className="btn" onClick={onClose}>Close</button>
        </div>

        <div
          style={{
            marginTop: 14,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {/* Milk */}
          <section className="card" style={{ padding: 14, borderRadius: 14 }}>
            <div style={{ fontWeight: 900 }}>Milk</div>
            <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>Choose one.</div>

            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              {milkChoices.map((m) => (
                <label
                  key={m.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: "1px solid rgba(200, 155, 90, 0.18)",
                    background: "rgba(18, 24, 36, 0.55)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontWeight: 800 }}>{m.name}</span>
                  <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
                      {m.price ? `+${formatPrice(m.price)}` : ""}
                    </span>
                    <input type="radio" name="milk" checked={milkId === m.id} onChange={() => setMilkId(m.id)} />
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Foam */}
          <section className="card" style={{ padding: 14, borderRadius: 14 }}>
            <div style={{ fontWeight: 900 }}>Sweet Cream Foam</div>
            <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>Optional.</div>

            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              {foamOptions.map((f) => (
                <label
                  key={f.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: "1px solid rgba(200, 155, 90, 0.18)",
                    background: "rgba(18, 24, 36, 0.55)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontWeight: 800 }}>{f.name}</span>
                  <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
                      {f.price ? `+${formatPrice(f.price)}` : ""}
                    </span>
                    <input type="radio" name="foam" checked={foamId === f.id} onChange={() => setFoamId(f.id)} />
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Add-ins */}
          <section className="card" style={{ padding: 14, borderRadius: 14 }}>
            <div style={{ fontWeight: 900 }}>Add-Ins</div>
            <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>Choose any.</div>

            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              {addIns.map((a) => (
                <label
                  key={a.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: "1px solid rgba(200, 155, 90, 0.18)",
                    background: "rgba(18, 24, 36, 0.55)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontWeight: 800 }}>{a.name}</span>
                  <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
                      {a.price !== undefined ? `+${formatPrice(a.price)}` : ""}
                    </span>
                    <input
                      type="checkbox"
                      checked={Boolean(addInIds[a.id])}
                      onChange={(e) => setAddInIds((prev) => ({ ...prev, [a.id]: e.target.checked }))}
                    />
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Notes + Qty + Add */}
          <section className="card" style={{ padding: 14, borderRadius: 14 }}>
            <div style={{ fontWeight: 900 }}>Notes</div>
            <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>Optional (e.g., light ice).</div>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add a note…"
              style={{
                marginTop: 10,
                width: "100%",
                minHeight: 90,
                resize: "vertical",
                padding: 10,
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "rgba(18, 24, 36, 0.55)",
                color: "inherit",
                outline: "none",
              }}
            />

            <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button className="btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                <div style={{ fontWeight: 900 }}>{qty}</div>
                <button className="btn" onClick={() => setQty((q) => q + 1)}>+</button>
              </div>

              <div style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
                {formatMoney(total)}
              </div>
            </div>

            <button
              className="btn"
              style={{ width: "100%", marginTop: 12 }}
              onClick={() => {
                cart.addLine({
                  lineId: makeLineId(),
                  itemId: item.id,
                  name: item.name,
                  basePrice,
                  qty,
                  milk: selectedMilk,
                  foam: selectedFoam,
                  addIns: selectedAddIns,
                  notes: notes.trim() ? notes.trim() : undefined,
                });
                onClose();
              }}
            >
              Add to Cart
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

// -------------------- Menu Card --------------------
function SectionCard({
  title,
  subtitle,
  items,
  onCustomize,
}: MenuSection & { onCustomize: (item: MenuItem) => void }) {
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
            key={it.id}
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

            <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
              <div style={{ color: "var(--gold2)", fontWeight: 900, whiteSpace: "nowrap" }}>
                {formatPrice(it.price)}
              </div>

              <button className="btn" style={{ padding: "8px 10px", borderRadius: 10 }} onClick={() => onCustomize(it)}>
                Customize
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------- Page --------------------
export default function Menu() {
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const openCustomize = (item: MenuItem) => {
    setActiveItem(item);
    setCustomizeOpen(true);
  };

  const closeCustomize = () => {
    setCustomizeOpen(false);
    setActiveItem(null);
  };

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

          <div style={{ display: "grid", gap: 12 }}>
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

            <CartSummary />
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
            <SectionCard key={s.title} {...s} onCustomize={openCustomize} />
          ))}
        </div>

        {/* Customization reference cards */}
        <div
          style={{
            marginTop: 14,
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <section className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>Choice of Milk</div>
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.45 }}>Oat/Almond/Coconut available.</div>
            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              {milkChoices.map((it) => (
                <div
                  key={it.id}
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
                    {it.price ? `+${formatPrice(it.price)}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>Extra Add-Ins</div>
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.45 }}>Boost flavor or caffeine.</div>
            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              {addIns.map((it) => (
                <div
                  key={it.id}
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

          <section className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>Sweet Cream Foam</div>
            <div className="muted" style={{ marginTop: 6, lineHeight: 1.45 }}>Add a creamy top layer.</div>
            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              {sweetCreamFoam.map((it) => (
                <div
                  key={it.id}
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
        </div>

        <section className="card" style={{ marginTop: 14, padding: 18 }}>
          <div style={{ fontWeight: 900, color: "var(--gold2)" }}>Note</div>
          <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
            Menu items and pricing may vary by pop-up. We’ll keep this updated as new drops and seasonal specials roll in.
          </div>
        </section>
      </div>

      <CustomizeModal open={customizeOpen} onClose={closeCustomize} item={activeItem} />
    </main>
  );
}
