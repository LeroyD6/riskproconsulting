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
      icon: "shield-check",
    },
    {
      title: "Security Systems Consulting",
      description:
        "Expert evaluation and optimisation of your security and CCTV infrastructure for maximum coverage and functionality.",
      details: [
        "Conduct comprehensive Security and CCTV system audits to evaluate coverage, functionality, compliance, and integration",
        "Provide recommendations for system optimisation and risk mitigation",
      ],
      icon: "camera",
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
      icon: "users",
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
      icon: "clipboard",
    },
    {
      title: "Monthly Retainers",
      description:
        "Ongoing support and regular check-ins to maintain compliance and continuously improve safety standards.",
      details: [
        "Spend one day a month on site to do monthly safety check-ins",
        "Report for improvements / deviations or any other assistance required.",
      ],
      icon: "calendar",
    },
  ];

  const pricingPackages = [
    {
      name: "Monthly Retainer",
      includes:
        "Spend one day a month on site to do monthly safety check-ins, report for improvements / deviations or any other assistance required.",
      features: [
        "Monthly on-site inspection",
        "Detailed safety reports",
        "Compliance monitoring",
        "Safety incident follow-ups",
      ],
    },
    {
      name: "Full House Defender",
      includes: "Full safety, security, and CCTV audit.",
      features: [
        "Comprehensive site assessment",
        "Detailed audit report",
        "Compliance recommendations",
        "Follow-up consultation",
      ],
    },
    {
      name: "CCTV Guardian",
      includes:
        "Conduct a comprehensive CCTV system audit to evaluate coverage, functionality, compliance, and integration, and to provide recommendations for system optimisation and risk mitigation.",
      features: [
        "Camera placement assessment",
        "Coverage optimization",
        "System integration check",
        "Vulnerability analysis",
      ],
    },
    {
      name: "Safety and Security Guardian",
      includes:
        "Conduct a comprehensive site-specific safety and security audit and provide recommendations for optimal safety and security practices.",
      features: [
        "Comprehensive risk assessment",
        "Security protocol evaluation",
        "Regulatory compliance check",
        "Staff safety training",
      ],
    },
    {
      name: "Contractor Management",
      includes:
        "Manage contractors' safety and ensure that they have a valid safety file. Manage contractor activities on site. Manage maintenance work/upgrades on site with project timelines.",
      features: [
        "Safety file verification",
        "On-site contractor supervision",
        "Project timeline management",
        "Compliance documentation",
      ],
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
      <div className="services-section-container fade-in" style={{ animationDelay: "0.1s" }}>
        <h3 className="services-section-title">Core Services</h3>
        <p className="services-intro">
          At Risk Pro Consulting, we offer comprehensive safety and security solutions tailored to
          your specific needs. We assist in achieving compliance, risk mitigation and operational
          efficiency within your organization. Explore our core services below:
        </p>
        <div className="row g-4">
          {coreServices.map((service, index) => (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" key={index}>
              <div
                className="card services-card h-100 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="service-icon mb-3">
                    {service.icon === "shield-check" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                    {service.icon === "camera" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    )}
                    {service.icon === "users" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}
                    {service.icon === "clipboard" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <path d="M9 14h6" />
                        <path d="M9 10h6" />
                        <path d="M9 18h6" />
                      </svg>
                    )}
                    {service.icon === "calendar" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    )}
                  </div>
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
      <div className="services-section-container fade-in" style={{ animationDelay: "0.3s" }}>
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

                  <div className="pricing-features">
                    <ul>
                      {pkg.features
                        ? pkg.features.map((feature, idx) => (
                            <li key={idx}>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feature-icon"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              {feature}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sectors Section */}
      <div className="services-section-container fade-in" style={{ animationDelay: "0.5s" }}>
        <h3 className="services-section-title">Sectors We Work With</h3>
        <p className="services-intro">
          Our expertise spans across various industries, providing specialised safety and security
          solutions for the following sectors:
        </p>
        <div className="sectors-container">
          {sectors.map((sector, index) => (
            <span
              key={index}
              className="sector-badge fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
