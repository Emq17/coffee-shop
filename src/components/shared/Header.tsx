import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const nav = [
    { label: "Home", to: "/home" },
    { label: "Menu", to: "/menu" },
    { label: "About", to: "/about" },
    { label: "Pop-Ups", to: "/pop-ups" },
    { label: "Contact Us", to: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu when you navigate
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "var(--surface)", // ✅ flat charcoal
        borderBottom: "1px solid var(--border)",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      }}
    >
      <div
        className="container"
        style={{
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {/* Brand */}
        <Link
          to="/home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minWidth: 0, // ✅ allows truncation on small screens
            flex: "1 1 auto",
            textDecoration: "none",
          }}
        >
          <img
            src="/android-chrome-192x192.png"
            alt="Pre & Post Coffee"
            style={{
              width: 42,
              height: 42,
              borderRadius: 9999,
              border: "1px solid var(--border)",
              background: "var(--surface2)",
              display: "block",
              flex: "0 0 auto",
            }}
          />

          <div style={{ lineHeight: 1.1, minWidth: 0 }}>
            <div
              style={{
                fontWeight: 900,
                letterSpacing: 0.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Pre &amp; Post Coffee
            </div>
            <div
              className="muted"
              style={{
                fontSize: 13,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Coffee • Matcha • Protein
            </div>
          </div>
        </Link>

        {/* Desktop nav (hidden on mobile) */}
        <nav
          aria-label="Primary navigation"
          style={{
            display: "none",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
          className="desktopNav"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                padding: "10px 12px",
                borderRadius: 9999,
                border: `1px solid ${
                  isActive ? "var(--activeBorder)" : "var(--border)"
                }`,
                background: isActive ? "var(--activeBg)" : "transparent",
                color: "var(--text)",
                fontWeight: 750,
                fontSize: 14,
                lineHeight: 1,
                textDecoration: "none",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger (hidden on desktop) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mobileMenuBtn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 9999,
            border: "1px solid var(--border)",
            background: "var(--surface2)",
            color: "var(--text)",
            fontWeight: 900,
            flex: "0 0 auto",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          className="mobileMenu"
          style={{
            padding: "10px 12px 14px",
            borderTop: "1px solid var(--border)",
            background: "var(--surface)", // ✅ matches header
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 12px",
              display: "grid",
              gap: 10,
            }}
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  padding: "12px 14px",
                  borderRadius: 16,
                  border: `1px solid ${
                    isActive ? "var(--activeBorder)" : "var(--border)"
                  }`,
                  background: isActive ? "var(--activeBg)" : "var(--surface2)",
                  color: "var(--text)",
                  fontWeight: 800,
                  fontSize: 14,
                  lineHeight: 1,
                  textDecoration: "none",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Tiny CSS (no new file needed) */}
      <style>{`
        /* Show desktop nav at >= 768px */
        @media (min-width: 768px) {
          .desktopNav { display: flex !important; }
          .mobileMenuBtn { display: none !important; }
          .mobileMenu { display: none !important; }
        }
      `}</style>
    </header>
  );
}