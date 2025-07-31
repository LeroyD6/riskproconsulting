import React from "react";
import "../styles/hero.css";

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero-section">
      {/* Background Animation */}
      <div className="hero-background-animation">
        <div className="hero-animation-circle hero-animation-circle-1 animate-pulse-slow"></div>
        <div className="hero-animation-circle hero-animation-circle-2 animate-pulse-slow-delay"></div>
        <div className="hero-animation-circle hero-animation-circle-3 animate-pulse-slow-reverse"></div>
        <div className="hero-animation-circle hero-animation-circle-4 animate-pulse-slower"></div>
        <div className="hero-animation-circle hero-animation-circle-5 animate-pulse-slower-delay"></div>
      </div>

      <div className="hero-content">
        <img src="./RiskPro.PNG" alt="Risk Pro Consulting Logo" className="hero-logo" />
        <h1 className="hero-title">Risk Pro Consulting</h1>
        <p className="hero-subtitle">Safer Systems. Smarter Solutions.</p>
        <button onClick={() => setCurrentPage("services")} className="hero-cta-button">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
