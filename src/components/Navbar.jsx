import React from "react";
import { useTheme } from "./ThemeProvider";
import "../styles/navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "About Us", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-md navbar-glass shadow-custom sticky-top-custom z-50 transition-colors">
      <div className="container-fluid px-4">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="./RiskPro.PNG"
            alt="Risk Pro Consulting Logo"
            className="navbar-brand-logo me-3"
          />
          <a
            className="navbar-brand company-name fw-bold"
            href="#"
            onClick={() => setCurrentPage("home")}
          >
            Risk Pro Consulting
          </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.page);
                    // Close the navbar on mobile after clicking a link
                    const navbarCollapse = document.getElementById("navbarNav");
                    if (navbarCollapse.classList.contains("show")) {
                      navbarCollapse.classList.remove("show");
                    }
                  }}
                  className="nav-link"
                >
                  {item.name}
                </a>
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
                    <svg
                      className="theme-icon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  ) : (
                    <svg
                      className="theme-icon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
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
