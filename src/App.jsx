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

  // Check for dark mode changes
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.getAttribute("data-bs-theme") === "dark";
      setDarkMode(isDark);
    };

    // Initial check - force light mode by default
    document.documentElement.setAttribute("data-bs-theme", "light");
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
      <div className="d-flex flex-column min-vh-100 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar setCurrentPage={setCurrentPage} />
        <main className="flex-grow-1">
          {currentPage === "home" ? <Hero setCurrentPage={setCurrentPage} /> : renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
