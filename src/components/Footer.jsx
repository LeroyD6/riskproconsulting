import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-3 mt-4">
      <div className="container px-4">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="mb-2">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Risk Pro Consulting
            </p>
          </div>
          <div className="mb-3">
            <p className="footer-tagline">Safer Systems. Smarter Solutions.</p>
          </div>
          <div className="footer-social-row">
            <a
              href="mailto:jacques@riskproconsulting.co.za"
              className="footer-social-link"
              aria-label="Email"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578627070530#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
