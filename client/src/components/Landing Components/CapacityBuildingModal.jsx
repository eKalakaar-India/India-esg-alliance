import React from "react";
import "./CapacityBuildingModal.css";
import {
  FaCheckCircle,
  FaUserTie,
  FaAward,
  FaComments,
  FaFileAlt,
  FaUsers,
  FaIndustry,
  FaTrophy,
  FaLightbulb,
  FaHandshake,
  FaFemale,
} from "react-icons/fa";

import img1 from "../../assets/board-cxo.png";
import img2 from "../../assets/esg-program.png";
import img3 from "../../assets/roundtables.png";
import img4 from "../../assets/audits.png";
import img5 from "../../assets/buyers–sellers.png";
import img6 from "../../assets/business-and-innovation.png";
import img7 from "../../assets/summit-and-awards.png";
import img8 from "../../assets/mdpw.png";

const alignmentPoints = [
  "SEBI BRSR & BRSR Core",
  "Indian regulatory requirements",
  "Investor expectations",
  "Global ESG frameworks (GRI, SASB, TCFD)",
  "Sector-specific materiality",
];

const programModules = [
  {
    id: "board-cxo",
    image: img1,
    imageAlt: "Board & CXO ESG Leadership Program",
    icon: <FaUserTie />,
    badge: "Executive Leadership",
    title: "Board & CXO ESG Leadership Program",
    desc: "Strategic orientation for senior leadership and boards to embed ESG into governance and top-level decision making.",
    focusAreas: [
      "ESG as a strategic and fiduciary responsibility",
      "Board oversight under BRSR guidelines",
      "Risk, reputation, and capital market implications",
      "Data governance and mandatory disclosures",
    ],
    targetGroup: "Board Members, Managing Directors, CXOs, & Senior VPs",
  },
  {
    id: "foundational",
    image: img2,
    imageAlt: "Foundational ESG Program",
    icon: <FaAward />,
    badge: "Flagship • One-Day",
    title: "Foundational ESG Program",
    desc: "Comprehensive entry-level masterclass for MSMEs and cross-functional teams beginning their sustainability journey.",
    focusAreas: [
      "ESG fundamentals & core terminology",
      "Evolving domestic & international regulatory expectations",
      "BRSR & BRSR Core compliance requirements",
      "Materiality analysis & baseline data infrastructure",
      "Risk mitigation, ESG opportunities & value creation",
    ],
    targetGroup:
      "Sustainability, CSR, HR, Finance, Operations, & Marketing Teams",
  },
  {
    id: "roundtables",
    image: img3,
    imageAlt: "Monthly ESG Roundtables & Sector Modules",
    icon: <FaComments />,
    badge: "Monthly Series",
    title: "Monthly ESG Roundtables & Sector Modules",
    desc: "Industry-focused sessions addressing sector-specific risks, material KPIs, and tailored compliance frameworks.",
    sectors: [
      "Manufacturing & Industrials",
      "Mining & Extractives",
      "Infrastructure & Real Estate",
      "Financial Services & Banking",
      "IT & Technology",
      "Agriculture & Agri-business",
      "Global Supply Chains",
    ],
  },
  {
    id: "reporting-solutions",
    image: img4,
    imageAlt: "ESG Reporting Solutions & Audits",
    icon: <FaFileAlt />,
    badge: "Assessments & Assurance",
    title: "ESG Reporting Solutions & Audits",
    desc: "End-to-end technical support and evaluation systems to prepare enterprises for rigorous internal and external validation.",
    focusAreas: [
      "ESG maturity assessments & scoring",
      "Data verification & validation support",
      "Regulatory compliance readiness checks",
      "Internal audit facilitation & governance review",
      "Actionable improvement roadmaps & transition plans",
    ],
  },
  {
    id: "reverse-buyer-seller",
    image: img5,
    imageAlt: "Reverse Buyers–Sellers Meet for Export Promotion",
    icon: <FaHandshake />,
    badge: "Export Promotion & B2B Matchmaking",
    title: "Reverse Buyers–Sellers Meet for Export Promotion",
    desc: "Targeted B2B matchmaking connecting MSMEs and small industries with potential domestic and international buyers based on sector-specific sourcing requirements.",
    focusAreas: [
      "Buyer identification based on sectors, products, and target markets",
      "Readiness support: product catalogues, pricing models, and presentations",
      "ESG credentials, compliance, and international export certifications",
      "Structured B2B buyer meetings, demonstrations, and negotiations",
      "Expanding global supply chain footprints and new market access",
    ],
    targetGroup: "Export-oriented MSMEs, Manufacturers, & Trade Leads",
    isCenterCard: true,
  },
  {
    id: "business-innovation",
    image: img6,
    imageAlt: "ESG Business & Innovation Solutions",
    icon: <FaLightbulb />,
    badge: "Business & Innovation",
    title: "ESG Business & Innovation Solutions",
    desc: "Practical, expert-led solutions that help organisations turn ESG challenges into opportunities for resilience, innovation, competitive advantage and sustainable growth.",
    focusAreas: [
      "Expert empanelment & domain specialist networks",
      "Industry advisory clinics & strategic consultations",
      "ESG innovation hackathons & student competitions",
      "Technology-enabled sustainability pilot projects",
      "Development of sustainable and commercially viable business solutions",
    ],
  },
  {
    id: "esg-summit-awards",
    image: img7,
    imageAlt: "Annual ESG Summit & Awards for Excellence",
    icon: <FaTrophy />,
    badge: "Ecosystem & Recognition",
    title: "Annual ESG Summit & Awards for Excellence",
    desc: "A flagship platform bringing together industry, government, academia, experts and ecosystem partners to advance ESG dialogue, collaboration, leadership and innovation.",
    focusAreas: [
      "Strategic ESG dialogue & knowledge exchange",
      "Industry best-practice sharing",
      "Recognition of ESG leadership & innovation",
      "Sector-specific ESG awards with transparent methodology",
      "Independent jury & credible evaluation framework",
      "Replicable ESG case studies for wider adoption",
    ],
  },
  {
    id: "women-founders-mdp",
    image: img8,
    imageAlt: "Management Development Program for Women Founders",
    icon: <FaFemale />,
    badge: "Leadership & Enterprise Growth",
    title: "Management Development Program for Women Founders",
    desc: "Empowering women entrepreneurs to transition from operational management to strategic leadership, investment readiness, and enterprise scale.",
    focusAreas: [
      "Strategic leadership, enterprise governance, and ESG compliance",
      "Financial management, capital access, and government subsidies",
      "Digital transformation, e-commerce adoption, and market expansion",
      "Expert mentorship, branding clinics, and investment pitching",
      "Peer-learning networks for growth-ready women-led enterprises",
    ],
    targetGroup: "Women Founders, Co-founders, & Women-led Enterprise Leaders",
  },
];

const CapacityBuildingModal = () => {
  return (
    <div className="cbm-modal">
      <div className="cbm-header">
        <div className="cbm-header-text">
          <span className="cbm-tag">IEA Framework</span>
          <h2 className="cbm-title">Capacity Building &amp; Training</h2>
        </div>
      </div>

      <div className="cbm-body">
        <div className="cbm-mandate-card">
          <p className="cbm-mandate-desc">
            Capacity building forms the core of IEA’s mandate. Our training
            architecture empowers organizations across all stages of ESG
            maturity, ensuring continuous alignment with:
          </p>
          <div className="cbm-alignment-pills">
            {alignmentPoints.map((point, index) => (
              <div key={index} className="cbm-pill">
                <FaCheckCircle className="cbm-pill-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alternate Side-by-Side Rows */}
        <div className="cbm-alternate-list">
          {programModules.map((module) => (
            <div
              key={module.id}
              id={module.id}
              className="cbm-row-pair"
            >
              {/* Content Card */}
              <div
                className={`cbm-card ${
                  module.isCenterCard ? "cbm-center-card" : ""
                }`}
              >
                <div className="cbm-card-header">
                  <div className="cbm-card-icon">{module.icon}</div>
                  <span className="cbm-card-badge">{module.badge}</span>
                </div>

                <h3 className="cbm-card-title">{module.title}</h3>
                <p className="cbm-card-desc">{module.desc}</p>

                {module.focusAreas && (
                  <div className="cbm-focus-section">
                    <span className="cbm-section-label">Key Focus Areas</span>
                    <ul className="cbm-bullet-list">
                      {module.focusAreas.map((item, idx) => (
                        <li key={idx}>
                          <span className="cbm-bullet-dot" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {module.sectors && (
                  <div className="cbm-focus-section">
                    <span className="cbm-section-label">
                      <FaIndustry style={{ marginRight: 6 }} /> Sector Focus
                    </span>
                    <div className="cbm-sector-tags">
                      {module.sectors.map((sector, idx) => (
                        <span key={idx} className="cbm-sector-tag">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {module.targetGroup && (
                  <div className="cbm-target-box">
                    <FaUsers className="cbm-target-icon" />
                    <div>
                      <strong>Target Group:</strong> {module.targetGroup}
                    </div>
                  </div>
                )}
              </div>

              {/* Companion Side Image */}
              <div className="cbm-image-wrapper">
                <img
                  src={module.image}
                  alt={module.imageAlt}
                  className="cbm-row-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapacityBuildingModal;