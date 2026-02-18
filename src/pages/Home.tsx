import Marquee from "../components/sections/Marquee";
import PhotoGrid from "../components/sections/PhotoGrid";

export default function Home() {
  const photos = [
    { src: "/images/ig/ig-3.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-5.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-6.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-2.png", alt: "Pre & Post drink" },
    { src: "/images/ig/ig-4.png", alt: "Pre & Post drink" },
  ];

  return (
    <main style={{ paddingTop: 96, paddingBottom: 40 }}>
      <div className="container">
        {/* MARQUEE */}
        <Marquee text="Pre & Post Coffee • Pop-ups • Coffee • Matcha • Protein • " />

        {/* WELLNESS SPOTLIGHT (first impression) */}
        <section className="wellnessSpotlight">
          <style>{`
            .wellnessSpotlight {
              margin: 0;
              padding: 0;
              position: relative;
              overflow: hidden;
            }

            .wellnessSpotlight::after {
              content: "";
              position: absolute;
              inset: 0;
              pointer-events: none;
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 95%,
                var(--bg) 100%
              );
              opacity: 0.08;
            }

            .wellnessPoster {
              display: block;
              width: 100%;
              height: auto;
              object-fit: contain;
              background: transparent;
              -webkit-mask-image: linear-gradient(
                to bottom,
                #000 0%,
                #000 95%,
                transparent 100%
              );
              mask-image: linear-gradient(
                to bottom,
                #000 0%,
                #000 95%,
                transparent 100%
              );
            }
          `}</style>

          <img
            className="wellnessPoster"
            src="/images/wellness-poster.jpg"
            alt="Pre & Post wellness specialties poster"
          />
        </section>

        {/* HERO (open, not boxed) */}
        <section style={{ padding: "34px 0 10px" }}>
          <style>{`
            .heroCtaDark {
              background: rgba(255, 255, 255, 0.45);
              border-color: rgba(255, 255, 255, 0.68);
              color: #111;
            }
            .heroCtaDark:hover {
              background: rgba(255, 255, 255, 0.6);
            }
          `}</style>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a className="btn btnPrimary heroCtaDark" href="/menu">
              View Menu
            </a>
            <a className="btn btnPrimary heroCtaDark" href="/home#next-pop-up">
              Next Pop-Up
            </a>
          </div>
          <section style={{ marginTop: 24 }}>
            <div className="card tintedCard" style={{ padding: 18 }}>
              <div style={{ fontWeight: 950, letterSpacing: -0.2 }}>What We're About</div>
              <p className="muted" style={{ marginTop: 8, lineHeight: 1.8 }}>
                Our mission: Serving nutritious cafe-inspired drinks in Central Florida.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <a className="btn" href="/about">
                  About
                </a>

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

        </section>

        {/* EDITORIAL PHOTOS */}
        <PhotoGrid photos={photos} />

        {/* NEXT POP-UP (home preview style, intentionally different from /pop-ups page) */}
        <section id="next-pop-up" style={{ marginTop: 14 }}>
          <div className="card tintedCard homePopCard" style={{ padding: 18 }}>
            <div className="homePopTop">
              <span className="homePopKicker">Next Pop-Up</span>
              <a className="homePopMiniLink" href="/home#next-pop-up">
                Updated Here
              </a>
            </div>

            <div className="homePopLayout">
              <div className="homePopInfo">
                <h3 className="homePopTitle">Coffee &amp; Matcha Pop-Up Event</h3>
                <p className="homePopLead">
                  Pull up for handcrafted coffee, matcha, and wellness blends at our next stop.
                </p>

                <div className="homePopMeta">
                  <div className="homePopMetaItem">
                    <span>Date</span>
                    <strong>Saturday, February 28, 2026</strong>
                  </div>
                  <div className="homePopMetaItem">
                    <span>Hours</span>
                    <strong>9:00am - 1:00pm EST</strong>
                  </div>
                  <div className="homePopMetaItem">
                    <span>Location</span>
                    <strong>Crunch Fitness Kissimmee - 850 Osceola Pkwy, Kissimmee, FL 34741</strong>
                  </div>
                </div>

                <div className="homePopActions">
                  <a className="btn btnPrimary" href="/home#next-pop-up">
                    Event Details
                  </a>
                  <a
                    className="btn"
                    href="https://www.google.com/maps/search/?api=1&query=Crunch+Fitness+Kissimmee+850+Osceola+Pkwy+Kissimmee+FL+34741"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>

              <aside className="homePopPosterShell">
                <img src="/popup-latest.png" alt="Pre & Post Pop-Up Flyer" className="homePopPoster" />
              </aside>
            </div>
          </div>

          {/* Local CSS for this section */}
          <style>{`
            .tintedCard{
              background:
                linear-gradient(160deg, rgba(20, 18, 17, 0.88), rgba(45, 35, 28, 0.78));
              border-color: rgba(169, 128, 74, 0.45);
            }

            .homePopCard{
              position: relative;
              overflow: hidden;
            }

            .homePopCard::before{
              content: "";
              position: absolute;
              inset: 0;
              pointer-events: none;
              background:
                radial-gradient(circle at 10% 0%, rgba(214, 178, 111, 0.15), transparent 34%),
                radial-gradient(circle at 92% 88%, rgba(255, 255, 255, 0.08), transparent 34%);
            }

            .homePopTop{
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              flex-wrap: wrap;
              position: relative;
              z-index: 1;
            }

            .homePopKicker{
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 1px;
              text-transform: uppercase;
              color: #f2d39f;
              border: 1px solid rgba(214, 178, 111, 0.45);
              border-radius: 999px;
              padding: 5px 11px;
              background: rgba(255, 255, 255, 0.04);
            }

            .homePopMiniLink{
              font-size: 12px;
              font-weight: 700;
              color: rgba(243, 236, 226, 0.86);
              text-decoration: underline;
              text-underline-offset: 3px;
            }

            .homePopLayout{
              margin-top: 12px;
              display: grid;
              gap: 16px;
              grid-template-columns: 1fr;
              align-items: start;
              position: relative;
              z-index: 1;
            }

            .homePopInfo{
              border: 1px solid rgba(214, 178, 111, 0.22);
              border-radius: 14px;
              background: rgba(255, 255, 255, 0.03);
              padding: 14px;
            }

            .homePopTitle{
              margin: 0;
              font-size: clamp(20px, 2.4vw, 28px);
              line-height: 1.08;
              letter-spacing: -0.3px;
            }

            .homePopLead{
              margin: 8px 0 0;
              color: rgba(243, 236, 226, 0.84);
              line-height: 1.65;
            }

            .homePopMeta{
              margin-top: 12px;
              display: grid;
              gap: 8px;
            }

            .homePopMetaItem{
              border: 1px solid rgba(214, 178, 111, 0.2);
              border-radius: 10px;
              padding: 9px 10px;
              background: rgba(0, 0, 0, 0.15);
            }

            .homePopMetaItem span{
              display: block;
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.8px;
              color: rgba(243, 236, 226, 0.66);
              margin-bottom: 4px;
              font-weight: 700;
            }

            .homePopMetaItem strong{
              font-size: 14px;
              line-height: 1.45;
              font-weight: 700;
              color: #f7f1e7;
            }

            .homePopActions{
              margin-top: 12px;
              display: flex;
              gap: 10px;
              flex-wrap: wrap;
            }

            .homePopPosterShell{
              width: 100%;
              max-width: 430px;
              justify-self: center;
              border-radius: 16px;
              border: 1px solid rgba(214, 178, 111, 0.3);
              background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
              padding: 10px;
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
            }

            .homePopPoster{
              width: 100%;
              height: auto;
              display: block;
              border-radius: 12px;
              object-fit: contain;
            }

            @media (min-width: 980px){
              .homePopLayout{
                grid-template-columns: minmax(0, 1.12fr) minmax(310px, .88fr);
                gap: 20px;
                align-items: center;
              }

              .homePopPosterShell{
                justify-self: end;
              }
            }
          `}</style>
        </section>

      </div>
    </main>
  );
}
