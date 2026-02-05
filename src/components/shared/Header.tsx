import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const nav = [
    { label: "Home", to: "/home" },
    { label: "Menu", to: "/menu" },
    { label: "Pop-Ups", to: "/pop-ups" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(11, 15, 20, 0.72)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container" style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/home" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/android-chrome-192x192.png"
            alt="Pre & Post Coffee Shop"
            style={{ width: 42, height: 42, borderRadius: 9999, border: "1px solid var(--border)" }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>Pre &amp; Post Coffee Shop</div>
            <div className="muted" style={{ fontSize: 13 }}>Serving nutritious café-inspired drinks in Central Florida</div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 8 }}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                padding: "10px 12px",
                borderRadius: 9999,
                border: `1px solid ${isActive ? "rgba(226, 185, 121, 0.55)" : "var(--border)"}`,
                background: isActive ? "rgba(200, 155, 90, 0.16)" : "transparent",
                color: "var(--text)",
                fontWeight: 650,
                fontSize: 14,
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
