import React from "react";
import "../styles/about.css";

const AboutUs = () => {
  return (
    <section className="about-section container px-4">
      <h2 className="about-title">About Us</h2>

      {/* Vision and Mission Cards */}
      <div className="row g-4 mb-5">
        <div className="col-lg-6">
          <div
            className="card h-100 shadow-custom border-0 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="card-body">
              <h3 className="card-title fs-2 fw-semibold text-primary mb-4">Our Vision</h3>
              <p className="card-text text-dark lh-lg fs-5">
                To be one of South Africa's leading integrated safety and security advisory firms.
                Delivering proactive, compliant, and reliable solutions that protect people, assets,
                and operations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="card h-100 shadow-custom border-0 fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="card-body">
              <h3 className="card-title fs-2 fw-semibold text-primary mb-4">Our Mission</h3>
              <p className="card-text text-dark lh-lg fs-5">
                Risk Pro Consulting empowers businesses by offering comprehensive risk management,
                safety compliance, and security consulting services tailored to all industries,
                thereby ensuring operational continuity and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Background Card */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card shadow-custom border-0 fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="card-body">
              <h3 className="card-title fs-2 fw-semibold text-primary mb-4">
                Founder Background - Jacques Botha
              </h3>
              <img
                src="./founder.jpg"
                alt="Founder - Jacques Botha"
                className="founder img-fluid mb-4"
              />
              <p className="card-text text-dark lh-lg fs-5 mb-3">
                With extensive experience in managing site safety and security operations, Jacques
                Botha brings a strong foundation in engineering coupled with hands-on leadership in
                compliance and risk management. His career began in engineering, where he developed
                a deep understanding of technical systems before transitioning into site management
                roles. Over the years, he has overseen multiple sites, ensuring full compliance with
                health, safety, and security regulations.
              </p>
              <p className="card-text text-dark lh-lg fs-5 mb-3">
                His responsibilities have included managing complex security operations during
                high-risk events such as strikes, emergency incidents, and on-site investigations.
                He has also led the development and implementation of Standard Operating Procedures
                (SOPs) for both operational and engineering teams, fostering a culture of safety and
                accountability. This strategic focus has consistently strengthened workplace safety
                practices and operational resilience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are and Why Choose Us Cards */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-custom border-0">
            <div className="card-body">
              <h3 className="card-title fs-4 fw-semibold text-primary mb-3">Who We Are</h3>
              <ul className="list-unstyled text-dark mb-0">
                <li className="mb-2">
                  • Industry veterans with firsthand expertise in risk, safety, and security.
                </li>
                <li className="mb-2">
                  • Dedicated to delivering proactive, compliant, and reliable solutions.
                </li>
                <li className="mb-2">• Committed to protecting people, assets, and operations.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 shadow-custom border-0">
            <div className="card-body">
              <h3 className="card-title fs-4 fw-semibold text-primary mb-3">
                Why Choose Risk Pro Consulting?
              </h3>
              <ul className="list-unstyled text-dark mb-0">
                <li className="mb-2">• Deep compliance knowledge across various industries.</li>
                <li className="mb-2">• Industry-tailored services and solutions.</li>
                <li className="mb-2">• Customised reports and site-specific recommendations.</li>
                <li className="mb-2">
                  • Proven track record in risk management and operational resilience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
