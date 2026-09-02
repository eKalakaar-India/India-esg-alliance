import React, { useEffect } from "react";
import "./CapacityBuildingModal.css";
import {
  FaTimes,
  FaCheckCircle,
  FaUserTie,
  FaAward,
  FaComments,
  FaFileAlt,
  FaUsers,
  FaIndustry,
} from "react-icons/fa";

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
];

const CapacityBuildingModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cbm-overlay" onClick={onClose}>
      <div
        className="cbm-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cbm-header">
          <div className="cbm-header-text">
            <span className="cbm-tag">IEA Framework</span>
            <h2 className="cbm-title">Capacity Building & Training</h2>
          </div>
          <button
            className="cbm-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content Body */}
        <div className="cbm-body">
          {/* Top Mandate Banner */}
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

          {/* Dynamic Program Modules Grid */}
          <div className="cbm-grid">
            {programModules.map((module) => (
              <div key={module.id} className="cbm-card">
                <div className="cbm-card-header">
                  <div className="cbm-card-icon">{module.icon}</div>
                  <span className="cbm-card-badge">{module.badge}</span>
                </div>

                <h3 className="cbm-card-title">{module.title}</h3>
                <p className="cbm-card-desc">{module.desc}</p>

                {/* Focus Areas List */}
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

                {/* Sector Badges */}
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

                {/* Target Audience Footer */}
                {module.targetGroup && (
                  <div className="cbm-target-box">
                    <FaUsers className="cbm-target-icon" />
                    <div>
                      <strong>Target Group:</strong> {module.targetGroup}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="cbm-footer">
          <button className="cbm-btn-secondary" onClick={onClose}>
            Close
          </button>
          {/* <button className="cbm-btn-primary" onClick={onClose}>
            Inquire About Programs
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CapacityBuildingModal;
