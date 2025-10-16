import { useState } from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "./Icons";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : "";
      case "subject":
        return value.trim().length < 3 ? "Subject must be at least 3 characters" : "";
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (validated) {
      const error = validateField(name, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    setFieldErrors(errors);
    setValidated(true);

    // Check if the form is valid
    if (Object.keys(errors).length > 0 || form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    setMessage("");
    setMessageType("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xldlnzor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage("Thank you for your message! We will get back to you shortly.");
        setMessageType("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setValidated(false);
        setFieldErrors({});
      } else {
        setMessage("Sorry, there was a problem sending your message. Please try again later.");
        setMessageType("error");
      }
    } catch {
      setMessage("Sorry, there was a problem sending your message. Please try again later.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }

    // Auto-hide the message after 5 seconds
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  return (
    <section className="contact-section container px-4">
      <h2 className="contact-title">Contact Us</h2>

      <div className="row g-5 fade-in-stagger">
        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="contact-card h-100">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-description">
              We are here to answer any questions you may have about our services. Reach out to us
              and we'll respond as soon as we can.
            </p>

            <div className="contact-info-list mb-4">
              <div className="contact-info-item">
                <PhoneIcon className="contact-info-icon" />
                <span>+27 73 995 5686</span>
              </div>

              <div className="contact-info-item">
                <MailIcon className="contact-info-icon" />
                <span>jacques@riskproconsulting.co.za</span>
              </div>

              <div className="contact-info-item">
                <MapPinIcon className="contact-info-icon" />
                <span>Durban, South Africa</span>
              </div>
            </div>

            <h4 className="fs-5 mb-3">Connect With Us</h4>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578627070530"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                aria-label="Facebook Page"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/riskproconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                aria-label="Instagram Profile"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="contact-card h-100">
            <h3 className="contact-form-title">Send Us a Message</h3>

            {message && (
              <div
                className={`alert ${
                  messageType === "success" ? "alert-success" : "alert-danger"
                } mb-4`}
                role="alert"
              >
                {message}
              </div>
            )}

            <form
              className={`needs-validation ${validated ? "was-validated" : ""}`}
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Name</label>
                <div className="invalid-feedback">Please enter your name.</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback">Please enter a valid email address.</div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    validated && fieldErrors.name
                      ? "is-invalid"
                      : validated && !fieldErrors.name
                      ? "is-valid"
                      : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="name">Your Name</label>
                {fieldErrors.name && <div className="invalid-feedback">{fieldErrors.name}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${
                    validated && fieldErrors.email
                      ? "is-invalid"
                      : validated && !fieldErrors.email
                      ? "is-valid"
                      : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="email">Email address</label>
                {fieldErrors.email && <div className="invalid-feedback">{fieldErrors.email}</div>}
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    validated && fieldErrors.subject
                      ? "is-invalid"
                      : validated && !fieldErrors.subject
                      ? "is-valid"
                      : ""
                  }`}
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="subject">Subject</label>
                {fieldErrors.subject && (
                  <div className="invalid-feedback">{fieldErrors.subject}</div>
                )}
              </div>

              <div className="form-floating mb-4">
                <textarea
                  className={`form-control ${
                    validated && fieldErrors.message
                      ? "is-invalid"
                      : validated && !fieldErrors.message
                      ? "is-valid"
                      : ""
                  }`}
                  id="message"
                  name="message"
                  placeholder="Leave a message here"
                  style={{ height: "150px" }}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
                {fieldErrors.message && (
                  <div className="invalid-feedback">{fieldErrors.message}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
