import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ marginTop: 16, padding: "8px 0 12px" }}>
      <div className="container">
        <div className="card footerCard" style={{ padding: "9px 12px 8px" }}>
          <div className="footerTop">
            <nav className="footerNav" aria-label="Footer left links">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
            </nav>

            <div className="footerCenter">
              <div className="footerWordmark">Pre &amp; Post Coffee</div>
              <div className="footerTagline">Coffee • Matcha • Protein</div>
            </div>

            <nav className="footerNav footerNavRight" aria-label="Footer right links">
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy</Link>
            </nav>
          </div>

          <div className="footerDivider" />

          <div className="footerBottom">
            <div className="footerLegal">© {new Date().getFullYear()} Pre &amp; Post Coffee</div>
          </div>
        </div>

        <style>{`
          .footerCard {
            position: relative;
            overflow: hidden;
            background: var(--surface);
            border-color: rgba(169, 128, 74, 0.45);
          }

          .footerCard::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              radial-gradient(circle at 6% 2%, rgba(214, 178, 111, 0.12), transparent 30%),
              radial-gradient(circle at 94% 96%, rgba(255, 255, 255, 0.06), transparent 30%);
          }

          .footerTop,
          .footerDivider,
          .footerBottom {
            position: relative;
            z-index: 1;
          }

          .footerTop {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
          }

          .footerNav {
            display: flex;
            flex-direction: row;
            gap: 16px;
            justify-content: center;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            font-weight: 700;
            font-size: 10px;
            width: 100%;
            max-width: 260px;
          }

          .footerNav a {
            color: rgba(243, 236, 226, 0.92);
            border-bottom: 1px solid transparent;
            padding-bottom: 2px;
          }

          .footerNav a:hover {
            border-bottom-color: rgba(214, 178, 111, 0.75);
            color: #fff5e5;
          }

          .footerCenter {
            text-align: center;
          }

          .footerWordmark {
            font-size: clamp(18px, 2.3vw, 24px);
            line-height: 1;
            letter-spacing: -0.2px;
            color: #f6ebd6;
            font-weight: 700;
          }

          .footerTagline {
            margin-top: 2px;
            color: rgba(243, 236, 226, 0.78);
            font-size: 9px;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            font-weight: 700;
          }

          .footerDivider {
            margin: 6px 0 6px;
            border-top: 1px solid rgba(214, 178, 111, 0.34);
          }

          .footerBottom {
            display: grid;
            gap: 4px;
            justify-items: center;
          }

          .footerLegal {
            color: rgba(243, 236, 226, 0.82);
            font-size: 10px;
            text-align: center;
          }

          @media (max-width: 899px) {
            .footerCenter {
              order: 1;
            }

            .footerNav:not(.footerNavRight) {
              order: 2;
            }

            .footerNavRight {
              order: 3;
            }
          }

          @media (min-width: 900px) {
            .footerTop {
              display: grid;
              grid-template-columns: 1fr auto 1fr;
              gap: 6px;
              align-items: center;
            }

            .footerNav {
              flex-direction: row;
              order: 0;
              justify-content: flex-start;
              align-items: center;
              width: auto;
              max-width: none;
            }

            .footerNavRight {
              justify-content: flex-end;
              align-items: center;
              text-align: left;
            }

            .footerCenter {
              grid-column: auto;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
