import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ marginTop: 22, padding: "14px 0 18px" }}>
      <div className="container">
        <div className="card footerCard" style={{ padding: "12px 14px 10px" }}>
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
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            align-items: center;
          }

          .footerNav {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            font-weight: 700;
            font-size: 11px;
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
            font-size: clamp(20px, 2.8vw, 28px);
            line-height: 1;
            letter-spacing: -0.2px;
            color: #f6ebd6;
            font-weight: 700;
          }

          .footerTagline {
            margin-top: 4px;
            color: rgba(243, 236, 226, 0.78);
            font-size: 10px;
            letter-spacing: 0.6px;
            text-transform: uppercase;
            font-weight: 700;
          }

          .footerDivider {
            margin: 9px 0 8px;
            border-top: 1px solid rgba(214, 178, 111, 0.34);
          }

          .footerBottom {
            display: grid;
            gap: 6px;
            justify-items: center;
          }

          .footerLegal {
            color: rgba(243, 236, 226, 0.82);
            font-size: 11px;
            text-align: center;
          }

          @media (min-width: 900px) {
            .footerTop {
              grid-template-columns: 1fr auto 1fr;
            }

            .footerNav {
              justify-content: flex-start;
            }

            .footerNavRight {
              justify-content: flex-end;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
