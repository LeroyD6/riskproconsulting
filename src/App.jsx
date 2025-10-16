import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Import components
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load page components for better performance
const Hero = lazy(() => import("./components/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));

// Main App Component
const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
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
                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Hero />} />
                </Routes>
              </main>
            </Suspense>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
