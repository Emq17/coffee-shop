export default function Contact() {
  return (
    <main style={{ paddingTop: 96, paddingBottom: 72 }}>
      <div className="container">
        <section
          className="card contactCard"
          style={{
            marginTop: 0,
            padding: 22,
            background: "rgba(32, 26, 24, 0.92)",
          }}
        >
          <div className="contactTop">
            <div>
              <span className="contactKicker">Get In Touch</span>
              <h1 className="contactTitle">Contact Us</h1>
              <p className="muted contactLead">
                Questions, private events, or partnerships. Reach us any time and we will point you
                to the fastest next step.
              </p>
            </div>
            <div className="contactReplyPill">Typical reply time: within 24 hours</div>
          </div>

          <div className="contactGrid">
            <div className="contactInfoCard">
              <div className="contactItem">
                <div className="contactLabel">Instagram</div>
                <a
                  className="contactValue"
                  href="https://www.instagram.com/preandpostcoffee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @preandpostcoffee
                </a>
              </div>

              <div className="contactItem">
                <div className="contactLabel">TikTok</div>
                <a
                  className="contactValue"
                  href="https://www.tiktok.com/@preandpostcoffee"
                  target="_blank"
                  rel="noreferrer"
                >
                  @preandpostcoffee
                </a>
              </div>

              <div className="contactItem">
                <div className="contactLabel">Email</div>
                <a className="contactValue" href="mailto:hello@preandpostcoffee.com">
                  hello@preandpostcoffee.com
                </a>
              </div>

              <div className="contactItem">
                <div className="contactLabel">Region</div>
                <div className="contactValue">Pop-up based • Central Florida</div>
              </div>
            </div>

            <div className="contactActionCard">
              <div className="contactActionTitle">Quick Actions</div>
              <p className="muted contactBookLine">
                Booking requests, collaborations, and event questions.
              </p>
              <div className="contactActions">
                <a
                  className="btn"
                  href="https://www.instagram.com/preandpostcoffee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message on IG
                </a>
                <a
                  className="btn"
                  href="https://www.tiktok.com/@preandpostcoffee"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message on TikTok
                </a>
                <a className="btn" href="/home#next-pop-up">
                  Next Pop-Up Details
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="card contactEventsCard"
          style={{
            marginTop: 16,
            padding: 22,
            background: "rgba(32, 26, 24, 0.92)",
          }}
        >
          <div className="eventsGrid">
            <div>
              <span className="eventsBadge">For Events</span>
              <h2 className="eventsTitle">
                Turn your next event into a <strong>coffee bar experience.</strong>
              </h2>
              <p className="eventsBody">
                We bring a premium pop-up setup with espresso, ceremonial matcha, and wellness
                drinks that guests actually remember. Great for gyms, offices, brand activations,
                birthdays, and community events.
              </p>

              <div className="eventsActions">
                <a
                  className="btn btnPrimary"
                  href="mailto:hello@preandpostcoffee.com?subject=Book%20an%20Event%20-%20Pre%20%26%20Post%20Coffee"
                >
                  Book Us for an Event
                </a>
              </div>
            </div>

            <aside className="eventsPanel">
              <h3 className="eventsPanelTitle">What You Get</h3>
              <ul className="eventsList">
                <li>Signature drinks and wellness specialties</li>
                <li>Friendly team with polished service</li>
                <li>Flexible event formats and timing</li>
              </ul>

              <div className="eventsProof">
                <div className="eventsProofLine">Popular for gym events and wellness communities</div>
                <div className="eventsProofLine">Convenient setup, smooth service, and zero stress for your team</div>
              </div>
            </aside>
          </div>

          <style>{`
            .contactCard {
              border: 1px solid rgba(217, 188, 132, 0.28);
              box-shadow:
                0 24px 40px rgba(0, 0, 0, 0.28),
                inset 0 1px 0 rgba(255, 255, 255, 0.07);
              background:
                radial-gradient(circle at 14% -10%, rgba(217, 188, 132, 0.14), transparent 34%),
                radial-gradient(circle at 90% 105%, rgba(255, 255, 255, 0.06), transparent 32%),
                rgba(32, 26, 24, 0.92) !important;
            }

            .contactTop {
              margin-bottom: 16px;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              gap: 12px;
              flex-wrap: wrap;
            }

            .contactKicker {
              display: inline-block;
              margin-bottom: 10px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              font-weight: 800;
              color: #f7e7c8;
              border: 1px solid rgba(217, 188, 132, 0.52);
              border-radius: 999px;
              padding: 4px 10px;
              background: rgba(255, 255, 255, 0.04);
            }

            .contactTitle {
              margin: 0;
              font-size: clamp(34px, 5vw, 48px);
              letter-spacing: -0.6px;
              line-height: 1.05;
            }

            .contactLead {
              margin-top: 10px;
              max-width: 58ch;
              line-height: 1.6;
            }

            .contactReplyPill {
              border: 1px solid rgba(217, 188, 132, 0.36);
              border-radius: 999px;
              padding: 8px 12px;
              font-size: 12px;
              font-weight: 700;
              color: #ead6b5;
              background: rgba(255, 255, 255, 0.04);
            }

            .contactGrid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 14px;
            }

            .contactInfoCard,
            .contactActionCard {
              border: 1px solid rgba(217, 188, 132, 0.28);
              border-radius: 16px;
              background: rgba(255, 255, 255, 0.03);
              padding: 16px;
            }

            .contactItem + .contactItem {
              margin-top: 14px;
              padding-top: 14px;
              border-top: 1px solid rgba(217, 188, 132, 0.2);
            }

            .contactLabel {
              font-weight: 900;
              color: #f0e4ce;
            }

            .contactValue {
              margin-top: 6px;
              color: #d8cab1;
              text-decoration: none;
              display: inline-block;
            }

            .contactValue:hover {
              color: #fff0d6;
              text-decoration: underline;
              text-underline-offset: 3px;
            }

            .contactActionTitle {
              font-weight: 900;
              font-size: 18px;
              margin-bottom: 12px;
              color: #f0e4ce;
            }

            .contactActions {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .contactActions .btn {
              min-height: 44px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }

            .contactBookLine {
              margin: 0 0 12px;
              line-height: 1.5;
            }

            .contactEventsCard {
              border: 1px solid rgba(217, 188, 132, 0.3);
              box-shadow:
                0 20px 32px rgba(0, 0, 0, 0.25),
                inset 0 1px 0 rgba(255, 255, 255, 0.06);
              background:
                linear-gradient(90deg, rgba(32, 26, 24, 0.95), rgba(49, 45, 39, 0.9), rgba(32, 26, 24, 0.95)),
                rgba(32, 26, 24, 0.92) !important;
            }

            .eventsGrid {
              display: grid;
              gap: 22px;
              grid-template-columns: 1fr;
              align-items: center;
            }

            .eventsBadge {
              display: inline-block;
              margin-bottom: 12px;
              padding: 0;
              color: #f3d7a9;
              font-size: 12px;
              letter-spacing: 1px;
              text-transform: uppercase;
              font-weight: 700;
            }

            .eventsTitle {
              margin: 0;
              font-size: clamp(30px, 4.6vw, 52px);
              line-height: 1.12;
              letter-spacing: -0.8px;
              max-width: 14ch;
              font-weight: 700;
            }

            .eventsTitle strong {
              color: #ead3a4;
            }

            .eventsBody {
              margin: 16px 0 0;
              color: rgba(243, 236, 226, 0.84);
              line-height: 1.85;
              max-width: 58ch;
              font-size: clamp(15px, 1.8vw, 19px);
              font-weight: 500;
            }

            .eventsActions {
              margin-top: 20px;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              gap: 12px;
            }

            .eventsPanel {
              border: 1px solid rgba(214, 178, 111, 0.3);
              border-radius: 18px;
              background: rgba(255, 255, 255, 0.03);
              padding: 18px;
            }

            .eventsPanelTitle {
              margin: 0;
              color: #ead3a4;
              text-transform: uppercase;
              font-size: 24px;
              letter-spacing: 0.3px;
              font-weight: 700;
            }

            .eventsList {
              margin: 12px 0 0;
              padding-left: 22px;
              color: rgba(255, 255, 255, 0.9);
              line-height: 1.78;
              font-size: 17px;
              font-weight: 500;
            }

            .eventsList li::marker {
              color: #ead3a4;
            }

            .eventsList li + li {
              margin-top: 4px;
            }

            .eventsProof {
              margin-top: 16px;
              display: grid;
              gap: 10px;
            }

            .eventsProofLine {
              border: 1px solid rgba(214, 178, 111, 0.24);
              border-radius: 12px;
              padding: 9px 11px;
              background: rgba(255, 255, 255, 0.02);
              color: rgba(243, 236, 226, 0.84);
              font-weight: 500;
              font-size: 15px;
            }

            @media (min-width: 920px) {
              .contactGrid {
                grid-template-columns: 1.15fr 0.85fr;
              }

              .eventsGrid {
                grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
                gap: 24px;
              }
            }
          `}</style>
        </section>
      </div>
    </main>
  );
}
