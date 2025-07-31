import React, { useState } from "react";
import "../styles/services.css";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleToggleDetails = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const coreServices = [
    {
      title: "Risk & Compliance Advisory",
      description:
        "Comprehensive audits and assessments to ensure full compliance with health and safety regulations.",
      details: [
        "OHS audits",
        "SANS compliance",
        "Site assessments",
        "Machine Safe Operating Procedures development and training",
        "Planned Job Observations",
        "Machine specific Maintenance manuals",
        "Accident Investigations",
        "Contractor compliance / management",
      ],
    },
    {
      title: "Security Systems Consulting",
      description:
        "Expert evaluation and optimisation of your security and CCTV infrastructure for maximum coverage and functionality.",
      details: [
        "Conduct comprehensive Security and CCTV system audits to evaluate coverage, functionality, compliance, and integration",
        "Provide recommendations for system optimisation and risk mitigation",
      ],
    },
    {
      title: "Training and Workshops",
      description:
        "Customised training programs and workshops to enhance safety awareness and operational readiness.",
      details: [
        "Induction design and training",
        "Safety talks",
        "Facilitate on-site factory safety meetings",
        "Facilitate on-site fire drills or any other specific training required.",
      ],
    },
    {
      title: "Project Management",
      description:
        "Professional planning and oversight for site maintenance, security upgrades, and other critical projects.",
      details: [
        "Plan or manage project work",
        "Site maintenance contracting work",
        "CCTV / security upgrades on-site",
      ],
    },
    {
      title: "Monthly Retainers",
      description:
        "Ongoing support and regular check-ins to maintain compliance and continuously improve safety standards.",
      details: [
        "Spend one day a month on site to do monthly safety check-ins",
        "Report for improvements / deviations or any other assistance required.",
      ],
    },
  ];

  const pricingPackages = [
    {
      name: "Monthly Retainer",
      includes:
        "Spend one day a month on site to do monthly safety check-ins, report for improvements / deviations or any other assistance required.",
    },
    {
      name: "Full House Defender",
      includes: "Full safety, security, and CCTV audit.",
    },
    {
      name: "CCTV Guardian",
      includes:
        "Conduct a comprehensive CCTV system audit to evaluate coverage, functionality, compliance, and integration, and to provide recommendations for system optimisation and risk mitigation.",
    },
    {
      name: "Safety and Security Guardian",
      includes:
        "Conduct a comprehensive site-specific safety and security audit and provide recommendations for optimal safety and security practices.",
    },
    {
      name: "Contractor Management",
      includes:
        "Manage contractors' safety and ensure that they have a valid safety file. Manage contractor activities on site. Manage maintenance work/upgrades on site with project timelines.",
    },
  ];

  const sectors = [
    "Industrial & manufacturing facilities",
    "Agricultural Sector",
    "Logistics & warehousing companies",
    "Schools, clinics, retail chains",
  ];

  return (
    <section className="services-section container px-4">
      <h2 className="services-title">Our Services</h2>

      {/* Core Services Section */}
      <div className="services-section-container">
        <h3 className="services-section-title">Core Services</h3>
        <p className="services-intro">
          At Risk Pro Consulting, we offer comprehensive safety and security solutions tailored to
          your specific needs. We assist in achieving compliance, risk mitigation and operational efficiency within your organization. Explore our core services below:
        </p>
        <div className="row g-4">
          {coreServices.map((service, index) => (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" key={index}>
              <div className="card services-card h-100">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-text flex-grow-1">{service.description}</p>
                  <div className="mt-auto">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleToggleDetails(index)}
                      aria-expanded={expandedService === index}
                    >
                      {expandedService === index ? "Hide Details" : "Show Details"}
                    </button>
                  </div>
                </div>
                {expandedService === index && (
                  <div className="card-footer services-detail-list">
                    <ul className="list-unstyled mb-0">
                      {service.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Packages Section */}
      <div className="services-section-container">
        <h3 className="services-section-title">Service Packages</h3>
        <p className="services-intro">
          Choose from our carefully designed service packages that address specific safety and
          security needs. Each package is structured to deliver maximum value while addressing your
          unique requirements:
        </p>
        <div className="row g-4">
          {pricingPackages.map((pkg, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="pricing-card fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div>
                  <h4>{pkg.name}</h4>
                  <p className="pricing-description">{pkg.includes}</p>
                </div>
                <div className="mt-auto">
                  <p className="pricing-amount">{pkg.price}</p>
                  <p className="pricing-frequency">{pkg.frequency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors Section */}
      <div>
        <h3 className="services-section-title">Sectors We Work With</h3>
        <p className="services-intro">
          Our expertise spans across various industries, providing specialised safety and security
          solutions for the following sectors:
        </p>
        <div className="sectors-container">
          {sectors.map((sector, index) => (
            <span key={index} className="sector-badge">
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
