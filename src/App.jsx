import React, { useState, useEffect, lazy, Suspense } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Import components
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Lazy load page components for better performance
const Hero = lazy(() => import("./components/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

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
        try {
          return <Services />;
        } catch (error) {
          console.error("Error rendering Services:", error);
          return (
            <div className="container py-5">Error loading services. Please try again later.</div>
          );
        }
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
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <main className="flex-grow-1 position-relative">
            <div className={`page-container fade-in page-${currentPage}`}>{renderPage()}</div>
          </main>
        </Suspense>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
