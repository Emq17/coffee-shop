import { useState } from "react";
import Marquee from "../components/sections/Marquee";
import PhotoGrid from "../components/sections/PhotoGrid";

type MenuItem = {
  id: string;
  name: string;
  price: number;
  subtitle?: string;
  description?: string;
  ingredients?: string[];
  notes?: string[];
};

function money(n: number) {
  return `$${n.toFixed(2).replace(/\.00$/, "")}`;
}

export default function Home() {
  const photos = [
    { src: "/images/ig/ig-3.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-5.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-6.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-2.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-4.png", alt: "Pre & Post drink" },
  ];

  const homeHighlights: MenuItem[] = [
    {
      id: "h-m1",
      name: "Matcha Latte",
      price: 6.5,
      subtitle: "Ceremonial matcha • hot or iced",
      description: "Ceremonial matcha latte with your choice of milk.",
      ingredients: ["Ceremonial matcha", "Milk of choice", "Ice (optional)"],
      notes: ["Hot or iced"],
    },
    {
      id: "h-m2",
      name: "Mugwort Latte",
      price: 6.5,
      subtitle: "Earthy • smooth • calming",
      description: "Korean mugwort latte—earthy, smooth, and calming.",
      ingredients: ["Korean mugwort", "Milk of choice", "Ice (optional)"],
      notes: ["Hot or iced"],
    },
    {
      id: "h-ps1",
      name: "Caramel Protein Shake",
      price: 8,
      subtitle: "Dessert vibe • 38g*",
      description: "Smooth caramel protein shake with a dessert vibe.",
      ingredients: ["Whey protein", "Caramel flavor", "Ice"],
      notes: ["38g protein*", "Cold drink"],
    },
    {
      id: "h-h5",
      name: "Caramel Gains Latte",
      price: 7,
      subtitle: "Espresso • caramel • hot or iced",
      description: "Caramel latte built for the ‘gains’ crowd.",
      ingredients: ["Espresso", "Caramel flavor", "Milk of choice"],
      notes: ["Hot or iced"],
    },
  ];

  const [infoOpen, setInfoOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  function openInfo(item: MenuItem) {
    setActiveItem(item);
    setInfoOpen(true);
  }
  function closeInfo() {
    setInfoOpen(false);
    setActiveItem(null);
  }

  return (
    <main style={{ paddingTop: 96, paddingBottom: 40 }}>
      <div className="container">
        {/* HERO (open, not boxed) */}
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
              Pop-up coffee
            </span>
            <span className="muted" style={{ fontSize: 13 }}>
              Orlando, FL
            </span>
          </div>

          <h1
            style={{
              margin: "14px 0 0",
              fontSize: 54,
              lineHeight: 1.02,
              letterSpacing: -0.9,
              maxWidth: 920,
            }}
          >
            Serving nutritious cafe-inspired drinks in Central Florida.
          </h1>

          <p
            className="muted"
            style={{
              marginTop: 12,
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 720,
            }}
          >
            Pre &amp; Post is a Central Florida pop-up café serving espresso, ceremonial matcha,
            wellness lattes, and protein shakes — built to taste good and hit right.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
            <a className="btn btnPrimary" href="/menu">
              View Menu
            </a>
            <a className="btn" href="/pop-ups">
              Next Pop-Up
            </a>
          </div>
        </section>

        {/* MARQUEE */}
        <Marquee text="Pre & Post Coffee • Pop-ups • Coffee • Matcha • Protein • " />

        {/* EDITORIAL PHOTOS */}
        <PhotoGrid photos={photos} />

        {/* WHAT WE'RE ABOUT (keep untouched) */}
        <section style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>What We're About</div>
            <p className="muted" style={{ marginTop: 8, lineHeight: 1.8 }}>
              “Pre &amp; Post” is for the before and after — before work, before training, after
              training, after a long day. Simple drinks. No artificial ingredients.
            </p>

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

              <a className="btn" href="/contact">
                Contact
              </a>
            </div>

          </div>
        </section>

        {/* NEXT POP-UP (flyer left, details right; stacks on mobile) */}
        <section style={{ marginTop: 14 }}>
          <div className="card" style={{ padding: 18 }}>
            <div style={{ fontWeight: 900, color: "var(--gold2)" }}>Next Pop-Up</div>

            <div className="popRow" style={{ marginTop: 12 }}>
              {/* LEFT: flyer */}
              <div className="flyerFrame">
                <img src="/popup-latest.png" alt="Pre & Post Pop-Up Flyer" className="flyerImg" />
              </div>

              {/* RIGHT: details */}
              <div>
                <div style={{ fontWeight: 950, fontSize: 16 }}>Coffee &amp; Matcha Pop-Up Event</div>

                <div className="muted" style={{ marginTop: 8, lineHeight: 1.75 }}>
                  <div>
                    <b>Date:</b> 2/11/2026
                  </div>
                  <div>
                    <b>Hours:</b> 9:00am – 1:00pm EST
                  </div>
                  <div>
                    <b>Location:</b> Crunch Fitness Lake Nona — 11926 Narcoossee Rd, Suite 100,
                    Orlando, FL 32832
                  </div>
                </div>

                <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn btnPrimary" href="/pop-ups">
                    View Details
                  </a>
                  <a
                    className="btn"
                    href="https://www.google.com/maps/search/?api=1&query=11926%20Narcoossee%20Rd%2C%20Suite%20100%2C%20Orlando%2C%20FL%2032832"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Local CSS for this section */}
          <style>{`
            .popRow{
              display: grid;
              grid-template-columns: 1fr;
              gap: 14px;
              align-items: start;
            }

            @media (min-width: 900px){
              .popRow{
                grid-template-columns: 420px 1fr;
                gap: 18px;
                align-items: center; /* ✅ centers the right-side content vertically */
              }
            }

            .flyerFrame{
              width: 100%;
              border-radius: 14px;
              border: 1px solid var(--border);
              background: rgba(18, 24, 36, 0.35);
              padding: 10px;
            }

            .flyerImg{
              width: 100%;
              height: auto;
              display: block;
              border-radius: 10px;
              object-fit: contain;
            }
          `}</style>
        </section>

        {/* MENU HIGHLIGHTS (same style + modal as Menu page) */}
        <section className="card" style={{ marginTop: 18, padding: 18 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>Menu highlights</div>
              <div className="muted" style={{ marginTop: 6 }}>
                Ceremonial matcha • wellness lattes • protein shakes
              </div>
            </div>

            <a className="btn btnPrimary" href="/menu">
              View Full Menu
            </a>
          </div>

          {/* Local styles so you don't have to touch CSS files */}
          <style>{`
            .homeHighlights{
              margin-top: 14px;
              display: grid;
              gap: 12px;
              grid-template-columns: 1fr;
            }
            @media (min-width: 720px){
              .homeHighlights{ grid-template-columns: 1fr 1fr; }
            }
            @media (min-width: 1100px){
              .homeHighlights{ grid-template-columns: 1fr 1fr; }
            }

            .homeItemRow {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 12px;
              padding: 12px 12px;
              border-radius: 14px;
              border: 1px solid var(--border);
              background: rgba(255,255,255,0.02);
            }

            .homeItemLeft{
              display: flex;
              align-items: center;
              gap: 12px;
              min-width: 0;
              flex: 1;
            }

            .homeThumb{
              width: 54px;
              height: 54px;
              border-radius: 12px;
              border: 1px solid var(--border);
              background: radial-gradient(circle at top, rgba(255,255,255,0.10), rgba(255,255,255,0.02));
              flex: 0 0 auto;
              display: grid;
              place-items: center;
              font-size: 11px;
              opacity: .75;
            }

            .homeItemName{
              font-weight: 900;
              margin: 0;
              line-height: 1.2;
            }
            .homeItemSub{
              margin: 4px 0 0 0;
              font-size: 12px;
              opacity: .75;
              line-height: 1.35;
            }

            .homeItemRight{
              display: grid;
              gap: 8px;
              justify-items: end;
              flex: 0 0 auto;
            }

            .price{
              font-weight: 900;
              letter-spacing: -0.2px;
            }
          `}</style>

          {/* Featured rows */}
          <div className="homeHighlights">
            {homeHighlights.map((it) => (
              <div key={it.id} className="homeItemRow">
                <div className="homeItemLeft">
                  <div className="homeThumb">Image</div>
                  <div style={{ minWidth: 0 }}>
                    <p className="homeItemName">{it.name}</p>
                    {it.subtitle ? <p className="homeItemSub">{it.subtitle}</p> : null}
                  </div>
                </div>

                <div className="homeItemRight">
                  <div className="price">{money(it.price)}</div>
                  <button className="btn" onClick={() => openInfo(it)}>
                    More info
                  </button>
                </div>
              </div>
            ))}
          </div>

          <DrinkInfoModal open={infoOpen} item={activeItem} onClose={closeInfo} />
        </section>
      </div>
    </main>
  );
}

/* Modal component (outside Home) */
function DrinkInfoModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: number;
    description?: string;
    ingredients?: string[];
    notes?: string[];
  } | null;
}) {
  if (!open || !item) return null;

  function money(n: number) {
    return `$${n.toFixed(2).replace(/\.00$/, "")}`;
  }

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
            <div
              className="muted"
              style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}
            >
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
