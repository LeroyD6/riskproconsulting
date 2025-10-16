import { MailIcon, FacebookIcon, InstagramIcon } from "./Icons";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-4 mt-5">
      <div className="container px-4">
        <div className="row">
          <div className="col-12 text-center">
            <div className="mb-3">
              <p className="footer-tagline fw-light">Safer Systems. Smarter Solutions.</p>
            </div>

            <div className="footer-social-container mb-3">
              <a
                href="mailto:jacques@riskproconsulting.co.za"
                className="footer-social-link mx-2"
                aria-label="Email"
              >
                <MailIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578627070530"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link mx-2"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/riskproconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link mx-2"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>

            <p className="footer-copyright mb-0 fw-light">
              &copy; {new Date().getFullYear()} Risk Pro Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
