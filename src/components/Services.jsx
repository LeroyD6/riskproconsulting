import React from "react";
import "../styles/services.css";

const Services = () => {
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
        "Expert evaluation and optimization of your security and CCTV infrastructure for maximum coverage and functionality.",
      details: [
        "Conduct comprehensive Security and CCTV system audits to evaluate coverage, functionality, compliance, and integration",
        "Provide recommendations for system optimisation and risk mitigation",
      ],
    },
    {
      title: "Training and Workshops",
      description:
        "Customized training programs and workshops to enhance safety awareness and operational readiness.",
      details: [
        "Induction design and training",
        "Safety talks",
        "Facilitate on-site factory safety meetings",
        "Facilitate on-site fire drills or any other specific training required",
      ],
    },
    {
      title: "Project Management",
      description:
        "Professional planning and oversight for site maintenance, security upgrades, and other critical projects.",
      details: [
        "Plan or manage project work",
        "Site maintenance contracting work",
        "CCTV / security upgrades on sites",
      ],
    },
    {
      title: "Monthly Retainers",
      description:
        "Ongoing support and regular check-ins to maintain compliance and continuously improve safety standards.",
      details: [
        "Spend one day a month on site to do monthly safety check-ins",
        "Report for improvements / deviations or any other assistance required",
      ],
    },
  ];

  const pricingPackages = [
    {
      name: "Monthly Retainer",
      idealFor: "Midsize companies",
      includes:
        "Spend one day a month on site to do monthly safety check-ins, report for improvements / deviations or any other assistance required",
    },
    {
      name: "Full House Defender",
      idealFor: "Midsize companies",
      includes: "Full safety, security, and CCTV audit (2 days)",
    },
    {
      name: "CCTV Guardian",
      idealFor: "Small and midsize companies",
      includes:
        "Conduct a comprehensive CCTV system audit to evaluate coverage, functionality, compliance, and integration, and to provide recommendations for system optimisation and risk mitigation (1 day)",
    },
    {
      name: "Safety and Security Guardian",
      idealFor: "Small and midsize companies",
      includes:
        "Conduct a comprehensive site-specific safety and security audit and provide recommendations for optimal safety and security practices (2 days)",
    },
    {
      name: "Contractor Management",
      idealFor: "Small and midsize companies",
      includes:
        "Manage contractors' safety and ensure that they have a valid safety file. Manage contractor activities on site. Manage maintenance work/upgrades on site with project timelines.",
    },
  ];

  const targetMarkets = [
    "Industrial & manufacturing facilities",
    "Agricultural",
    "Logistics & warehousing companies",
    "Schools, clinics, retail chains",
  ];

  return (
    <section className="services-section container px-4">
      <h2 className="services-title">Our Services</h2>

      {/* Core Services Section */}
      <div className="services-section-container">
        <h3 className="services-section-title">Core Services</h3>
        <div className="row g-4">
          {coreServices.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="services-card fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <ul className="services-detail-list">
                  {service.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Packages Section */}
      <div className="services-section-container">
        <h3 className="services-section-title">Service Packages</h3>
        <div className="row g-4">
          {pricingPackages.map((pkg, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="pricing-card fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div>
                  <h4>{pkg.name}</h4>
                  <p className="pricing-ideal-for">Ideal For: {pkg.idealFor}</p>
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

      {/* Target Markets Section */}
      <div>
        <h3 className="services-section-title">Our Target Markets</h3>
        <div className="target-markets-container">
          {targetMarkets.map((market, index) => (
            <span key={index} className="target-market-badge">
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
