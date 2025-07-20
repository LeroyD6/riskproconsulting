import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Import components
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Default page
  const [darkMode, setDarkMode] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  // Update body and HTML classes based on current page
  useEffect(() => {
    const isHome = currentPage === "home";
    setIsHomePage(isHome);

    if (isHome) {
      document.body.classList.add("home-page");
      document.documentElement.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
      document.documentElement.classList.remove("home-page");
    }
  }, [currentPage]);

  // Check for dark mode changes
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.getAttribute("data-bs-theme") === "dark";
      setDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Create observer to watch for attribute changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Hero setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div
        className={`d-flex flex-column min-vh-100 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 ${
          darkMode && !isHomePage ? "dark-theme-bg" : ""
        }`}
        style={{
          backgroundColor: darkMode && !isHomePage ? "#111827" : "",
          backgroundImage:
            darkMode && !isHomePage
              ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23001257'/%3E%3Cstop offset='1' stop-color='%23001e75'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%23333333'/%3E%3Cstop offset='0.09' stop-color='%23474747'/%3E%3Cstop offset='0.18' stop-color='%23525252'/%3E%3Cstop offset='0.31' stop-color='%23636363'/%3E%3Cstop offset='0.44' stop-color='%23707070'/%3E%3Cstop offset='0.59' stop-color='%23777777'/%3E%3Cstop offset='0.75' stop-color='%23808080'/%3E%3Cstop offset='1' stop-color='%23212121'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.7' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E\")"
              : "",
          backgroundAttachment: darkMode && !isHomePage ? "fixed" : "",
          backgroundRepeat: darkMode && !isHomePage ? "no-repeat" : "",
          backgroundPosition: darkMode && !isHomePage ? "top left" : "",
        }}
      >
        <Navbar setCurrentPage={setCurrentPage} />
        <main className="flex-grow-1">{renderPage()}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
