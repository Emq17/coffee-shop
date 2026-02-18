type MenuLine = {
  name: string;
  price?: string;
};

type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuLine[];
};

const leftColumn: MenuSection[] = [
  {
    title: "Protein Shakes",
    subtitle: "38 grams*",
    items: [
      { name: "Sweet Cocoa Protein Shake", price: "8" },
      { name: "Caramel Protein Shake", price: "8" },
      { name: "Vanilla Protein Shake", price: "8" },
    ],
  },
  {
    title: "Ceremonial Matcha & Korean Mugwort",
    subtitle: "Add Strawberry or Blueberry for +.75",
    items: [
      { name: "Matcha Latte", price: "6.50" },
      { name: "Mugwort Latte", price: "6.50" },
    ],
  },
  {
    title: "Iced Coffee",
    items: [
      { name: "Iced Mocha/Caramel Latte", price: "6" },
      { name: "Iced Latte", price: "5" },
    ],
  },
  {
    title: "Choice of Milk",
    items: [
      { name: "Cow Milk" },
      { name: "Oat Milk", price: ".50" },
      { name: "Almond Milk", price: ".50" },
      { name: "Coconut Milk", price: ".50" },
    ],
  },
  {
    title: "Extra Add-Ins",
    items: [
      { name: "Shot of Espresso", price: ".75" },
      { name: "Cocoa Drizzle", price: ".50" },
      { name: "Caramel Drizzle", price: ".50" },
      { name: "Cinnamon Powder", price: ".10" },
    ],
  },
];

const rightColumn: MenuSection[] = [
  {
    title: "Health Specialties",
    subtitle: "Choice of: Whey Protein, Collagen or Mushroom + Ashwagandha",
    items: [
      { name: "Matcha Health Latte", price: "7.50" },
      { name: "Super Mugwort Latte", price: "7.50" },
      { name: "Skinny Iced Latte", price: "7" },
      { name: "Mocha Wellness Latte", price: "7" },
      { name: "Caramel Gains Latte", price: "7" },
    ],
  },
  {
    title: "Hot Coffee",
    items: [
      { name: "Espresso/Double", price: "2.50/3" },
      { name: "Americano", price: "3.70" },
      { name: "Macchiato", price: "3.50" },
      { name: "Flat White", price: "4.50" },
      { name: "Cafe Latte", price: "4.50" },
      { name: "Cappuccino", price: "4.50" },
      { name: "Mocha/Caramel Latte", price: "5.50" },
    ],
  },
  {
    title: "Sweet Cream Foam",
    items: [
      { name: "Matcha Cream Foam", price: "1.50" },
      { name: "Mugwort Cream Foam", price: "1.50" },
      { name: "Spirulina Cream Foam", price: "1.50" },
      { name: "Vanilla Cream Foam", price: "1" },
    ],
  },
];

function MenuGroup({ section }: { section: MenuSection }) {
  return (
    <article className="menuGroup">
      <h2 className="menuGroupTitle">{section.title}</h2>
      {section.subtitle ? <p className="menuGroupSubtitle">{section.subtitle}</p> : null}
      <div className="menuLines">
        {section.items.map((item) => (
          <div key={`${section.title}-${item.name}`} className="menuLine">
            <span>{item.name}</span>
            {item.price ? <strong>{item.price}</strong> : <strong>&nbsp;</strong>}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <main style={{ paddingTop: 84, paddingBottom: 28 }}>
      <style>{`
        .menuPageWrap {
          --menu-panel-left: #2e2b27;
          --menu-panel-right: #262522;
          --menu-gold: #d6b784;
          --menu-gold-soft: #c9a973;
          --menu-cream: #f2e6d3;
          --menu-cream-strong: #f8ecda;
          --menu-white: #f7f4ed;
          --menu-line: rgba(214, 183, 132, 0.22);
          --menu-font-head: "Avenir Next", "Montserrat", "Poppins", "Segoe UI", sans-serif;
          --menu-font-body: "Avenir Next", "Poppins", "Nunito Sans", "Segoe UI", sans-serif;
        }

        .menuBoard {
          width: min(920px, 100%);
          margin: 0 auto;
          border-radius: 22px;
          padding: 20px 18px 16px;
          color: var(--menu-cream);
          font-family: var(--menu-font-body);
          background: linear-gradient(90deg, var(--menu-panel-left), var(--menu-panel-right));
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
          font-variant-numeric: lining-nums tabular-nums;
        }

        .menuBoard::before {
          content: none;
        }

        .menuBoard::after {
          content: none;
        }

        .menuHeader {
          text-align: center;
          border-bottom: 1px solid var(--menu-line);
          padding-bottom: 14px;
          margin-bottom: 14px;
          position: relative;
        }

        .menuBrandRing {
          width: clamp(136px, 22vw, 188px);
          height: clamp(136px, 22vw, 188px);
          margin: 0 auto;
          border-radius: 50%;
          display: grid;
          place-items: center;
          padding: 10px;
        }

        .menuBrandLogo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          background: rgba(255, 255, 255, 0.05);
        }

        .menuColumns {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          position: relative;
        }

        .menuGroup + .menuGroup {
          margin-top: 14px;
        }

        .menuGroupTitle {
          margin: 0;
          color: var(--menu-gold);
          font-family: var(--menu-font-head);
          text-transform: uppercase;
          font-size: clamp(20px, 1.9vw, 27px);
          line-height: 0.95;
          letter-spacing: 0.2px;
          font-weight: 700;
        }

        .menuGroupSubtitle {
          margin: 6px 0 10px;
          color: var(--menu-gold-soft);
          font-size: 14px;
          max-width: 42ch;
          line-height: 1.35;
          font-weight: 500;
        }

        .menuLines {
          display: grid;
          gap: 8px;
        }

        .menuLine {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 8px;
          align-items: baseline;
          border-bottom: 1px dotted rgba(212, 175, 120, 0.13);
          padding-bottom: 4px;
          font-size: clamp(16px, 1.3vw, 19px);
          line-height: 1.3;
          font-weight: 500;
        }

        .menuLine strong {
          color: var(--menu-white);
          letter-spacing: 0.2px;
          font-weight: 600;
        }

        .menuLine span {
          color: var(--menu-white);
        }

        .menuFooter {
          margin-top: 16px;
          border-top: 1px solid var(--menu-line);
          padding-top: 14px;
          display: grid;
          gap: 12px;
        }

        .sizeStrip {
          display: inline-flex;
          flex-wrap: wrap;
          justify-self: center;
          justify-content: center;
          gap: 8px;
          color: var(--menu-gold);
          font-family: var(--menu-font-head);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          font-size: clamp(14px, 1.15vw, 18px);
        }

        .sizeBadge {
          border: 0;
          border-radius: 0;
          padding: 0;
          color: inherit;
          background: transparent;
        }

        .pledgeRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: space-between;
          align-items: flex-end;
        }

        .pledgeText {
          margin: 0;
          color: var(--menu-gold);
          font-size: clamp(13px, 1vw, 16px);
          line-height: 1.35;
          font-weight: 500;
        }

        .pledgeText em {
          font-style: italic;
        }

        .pledgeText b {
          color: var(--menu-cream-strong);
        }

        .instaCard {
          border: 1px solid rgba(217, 188, 132, 0.42);
          border-radius: 10px;
          padding: 8px 12px;
          text-align: center;
          background: rgba(255, 255, 255, 0.03);
          min-width: 164px;
          margin-inline: auto;
        }

        .instaIcon {
          width: 26px;
          height: 26px;
          margin: 0 auto 6px;
          border: 2px solid var(--menu-gold);
          border-radius: 8px;
          position: relative;
        }

        .instaIcon::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border: 2px solid var(--menu-gold);
          border-radius: 50%;
          left: 6px;
          top: 6px;
        }

        .instaIcon::after {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--menu-gold);
          border-radius: 50%;
          right: 5px;
          top: 5px;
        }

        .instaHandle {
          margin: 0;
          color: var(--menu-gold);
          font-size: 12px;
          letter-spacing: 0.6px;
        }

        .instaLink {
          color: inherit;
          text-decoration: none;
          display: block;
        }

        .instaLink:hover .instaHandle {
          color: var(--menu-cream-strong);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (min-width: 940px) {
          .menuBoard {
            padding: 24px 24px 18px;
          }
          .menuColumns {
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
          }
          .menuColumns::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: calc(50% - 0.5px);
            width: 1px;
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(217, 188, 132, 0.3) 10%,
              rgba(217, 188, 132, 0.3) 90%,
              transparent
            );
          }
        }

        @media (max-width: 939px) {
          .pledgeRow {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .pledgeText {
            text-align: center;
          }
        }
      `}</style>

      <div className="container menuPageWrap">
        <section className="menuBoard">
          <header className="menuHeader">
            <div className="menuBrandRing">
              <img
                className="menuBrandLogo"
                src="/android-chrome-192x192.png"
                alt="Pre & Post Coffee logo"
              />
            </div>
          </header>

          <div className="menuColumns">
            <div>
              {leftColumn.map((section) => (
                <MenuGroup key={section.title} section={section} />
              ))}
            </div>
            <div>
              {rightColumn.map((section) => (
                <MenuGroup key={section.title} section={section} />
              ))}
            </div>
          </div>

          <footer className="menuFooter">
            <div className="sizeStrip">
              <span>Hot Drinks:</span>
              <span className="sizeBadge">10 oz</span>
              <span>/</span>
              <span>Cold Drinks: 16 oz</span>
            </div>

            <div className="pledgeRow">
              <p className="pledgeText">
                <em>"We pledge </em>
                <b>no artificial ingredients.</b>
                <em>"</em>
                <br />
                Pre & Post Coffee Shop
              </p>

              <aside className="instaCard" aria-label="Instagram handle">
                <a
                  className="instaLink"
                  href="https://www.instagram.com/preandpostcoffee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="instaIcon" />
                  <p className="instaHandle">@PREANDPOSTCOFFEE</p>
                </a>
              </aside>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
