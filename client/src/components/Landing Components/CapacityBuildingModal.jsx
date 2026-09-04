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
  FaGlobe,
  FaTrophy,
  FaLightbulb
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
  {
  id: "business-innovation",
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

// {
//   id: "integrated-esg-ecosystem",
//   icon: <FaGlobe />,
//   badge: "Integrated ESG Ecosystem",
//   title: "End-to-End ESG Support & Capacity Building",
//   desc: "An integrated ecosystem combining training, reporting support, assessment, advisory and policy advocacy to help organisations strengthen capabilities, compliance, credibility and long-term sustainable value.",
//   focusAreas: [
//     "ESG training & internal capability building",
//     "Reporting support & compliance readiness",
//     "ESG assessments and organisational evaluations",
//     "Strategic advisory & implementation support",
//     "Policy advocacy & ecosystem collaboration",
//     "Long-term sustainability, competitiveness & global alignment",
//   ],
// },
];

const CapacityBuildingModal = () => {


  return (
      <div
        className="cbm-modal"
      >
        {/* Header */}
        <div className="cbm-header">
          <div className="cbm-header-text">
            <span className="cbm-tag">IEA Framework</span>
            <h2 className="cbm-title">Capacity Building & Training</h2>
          </div>
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
      </div>
  );
};

export default CapacityBuildingModal;
