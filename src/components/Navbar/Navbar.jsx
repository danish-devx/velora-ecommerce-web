import { useState } from "react";
import "./Navbar.css";
import { supabase } from "../../lib/supabase";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const menuItems = [
    {
      label: "Home",
      link: "#home",
    },
    {
      label: "Collections",
      link: "#collections",
    },
    {
      label: "Products",
      link: "#products",
    },
    {
      label: "Trending",
      link: "#trending",
    },
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error);
      setLoggingOut(false);
      return;
    }

    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="navbar-logo">
          VELORA<span>.</span>
        </a>

        <div className="navbar-actions">
          <button className="nav-icon" aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          <button className="nav-icon cart-icon" aria-label="Shopping Cart">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            <span className="cart-count">0</span>
          </button>

          <button
            className="logout-button"
            onClick={handleLogout}
            disabled={loggingOut}
            aria-label="Logout"
            title="Logout"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M21 3v18" />
            </svg>

            <span>{loggingOut ? "..." : "Logout"}</span>
          </button>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`staggered-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-overlay"></div>

        <div className="menu-panel">
          <div className="menu-heading">
            <span>EXPLORE</span>
            <span>VELORA</span>
          </div>

          <div className="menu-links">
            {menuItems.map((item, index) => (
              <a
                href={item.link}
                key={item.label}
                className="menu-link"
                style={{
                  "--index": index,
                }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu-number">0{index + 1}</span>

                <span className="menu-title">{item.label}</span>

                <span className="menu-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="menu-footer">
            <div>
              <span>FOLLOW</span>

              <div className="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

            <div className="menu-status">
              <span className="status-dot"></span>
              ONLINE STORE
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
