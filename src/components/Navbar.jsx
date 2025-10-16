import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { MoonIcon, SunIcon } from "./Icons";
import "../styles/navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navbarCollapseRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    // Close the navbar on mobile after clicking a link using Bootstrap instance
    if (navbarCollapseRef.current) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-glass shadow-custom sticky-top-custom z-50 transition-colors">
      <div className="container-fluid px-4">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="/RiskPro.PNG"
            alt="Risk Pro Consulting Logo"
            className="navbar-brand-logo me-3"
          />
          <NavLink className="navbar-brand company-name fw-bold" to="/">
            Risk Pro Consulting
          </NavLink>
        </div>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-md-3 mt-2 mt-md-0">
              <button
                onClick={toggleTheme}
                className={`navbar-theme-toggle ${theme === "dark" ? "theme-dark" : "theme-light"}`}
                aria-label="Toggle theme"
                title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              >
                <div className="theme-icon-container">
                  {theme === "light" ? (
                    <MoonIcon className="theme-icon" />
                  ) : (
                    <SunIcon className="theme-icon" />
                  )}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
