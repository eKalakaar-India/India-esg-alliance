import React from "react";
import "./PolicyDirectory.css";

const policies = [
  {
    category: "SEBI REGULATORY CIRCULAR",
    tag: "MANDATORY",
    reference: "Ref: SEBI/HO/CFD/CFD-POD-2/CIR/P/2023/122",
    title: "SEBI BRSR Core & Reasonable Assurance Mandate (FY 2024–2025)",
    description:
      "Specifies the non-financial Key Performance Indicators (KPIs) subject to mandatory third-party reasonable assurance for top 1,000 listed entities by market capitalization, with mandatory value chain ESG disclosures.",
    details: [
      ["Effective Applicability:", "Immediate (Listed Q4 Reports)"],
      ["Scope of Coverage:", "Top 1,000 Listed + Value Chain (250)"],
      ["Assurance Standard:", "ISAE 3000 / SAAE 3410 Standard"],
    ],
    date: "Oct 12, 2024",
    type: "Executive Brief",
    action: "Circular",
    theme: "teal",
  },
  {
    category: "MINISTRY OF POWER / BEE",
    tag: "GAZETTED",
    reference: "S.O. 2824(E) · CCTS Rulebook",
    title: "Indian Carbon Credit Trading Scheme (CCTS) Regulatory Framework",
    description:
      "Institutional architecture establishing India's sovereign compliance carbon market. Defines the Carbon Credit Certificates (CCC), compliance registry overseen by Grid Controller of India, and sectoral emission benchmarks.",
    details: [
      ["Obligated Entities:", "Cement, Steel, Thermal, Aluminium"],
      ["Trading Registry:", "BEE & Grid-India Platform"],
      ["Fungibility:", "Domestic Offset Mechanism"],
    ],
    date: "Nov 28, 2024",
    type: "Executive Brief",
    action: "Gazette",
    theme: "forest",
  },
  {
    category: "RESERVE BANK OF INDIA",
    tag: "DRAFT CONSULTATION",
    reference: "RBI/2024-25/DOR.CRE.REC",
    title: "RBI Climate Risk Stress-Testing & Green Finance Taxonomy",
    description:
      "Prudential guidelines for Commercial Banks, All-India Financial Institutions, and NBFCs regarding governance of climate-related financial risks, physical asset stress testing, and green deposit allocation.",
    details: [
      ["Applicability:", "Scheduled Commercial Banks & Tier 1 NBFCs"],
      ["Core Mandate:", "Scope 1-3 Financed Emissions Audit"],
      ["Framework Alignment:", "B3C & NGFS Recommendations"],
    ],
    date: "Jan 14, 2025",
    type: "Banker's Primer",
    action: "Circular",
    theme: "navy",
  },
  {
    category: "MoEFCC / CPCB",
    tag: "IN FORCE",
    reference: "PWM Rules (Fifth Amendment)",
    title: "Extended Producer Responsibility (EPR) Circular Economy Protocols",
    description:
      "Updated mandatory compliance mandates for Producers, Importers, and Brand Owners (PIBs) on e-waste, battery management, and plastic packaging recycling credit certificate purchases on CPCB portal.",
    details: [
      ["Obligation Target:", "100% Packaging Recovery Target"],
      ["Portal Audit:", "Central CPCB Online Ledger"],
      ["Penalty Clause:", "Environmental Compensation Levies"],
    ],
    date: "Feb 02, 2025",
    type: "Implementation Guide",
    action: "Framework",
    theme: "forest",
  },
];

function PolicyCard({ policy }) {
  return (
    <article className={`policy-card ${policy.theme}`}>

      <div className="policy-card-header">
        <div className="policy-labels">
          <span className="policy-category">
            {policy.category}
          </span>

          <span className={`policy-tag ${policy.theme}`}>
            {policy.tag}
          </span>
        </div>

        <span className="policy-reference">
          {policy.reference}
        </span>
      </div>

      <h2>{policy.title}</h2>

      <p className="policy-description">
        {policy.description}
      </p>

      <div className="policy-details">
        {policy.details.map(([label, value], index) => (
          <div className="policy-detail-row" key={index}>
            <span>{label}</span>

            <strong
              className={
                value.includes("Environmental")
                  ? "danger-text"
                  : ""
              }
            >
              {value}
            </strong>
          </div>
        ))}
      </div>

      <div className="policy-card-footer">
        <span className="policy-date">
          <span className="calendar-icon">□</span>
          {policy.date}
        </span>

        <div className="policy-actions">
          <span className="policy-type">
            {policy.type}
          </span>

          <button className={`policy-action ${policy.theme}`}>
            ↓ &nbsp; {policy.action}
          </button>
        </div>
      </div>

    </article>
  );
}

export default function PolicyDirectory() {
  return (
    <section className="policy-section" id="policy">
      <div className="policy-container">

        {/* Header */}
        <header className="policy-header">

          <div>
            <div className="policy-eyebrow">
              <span className="eyebrow-square"></span>
              MANDATORY DIRECTIVES
            </div>

            <h1>
              Government Policy &amp; Statutory Compliance Directory
            </h1>

            <p>
              Direct registry of gazetted notifications, circulars from
              SEBI, Reserve Bank of India, MoEFCC, and Bureau
              of Energy Efficiency.
            </p>
          </div>

          <button className="matrix-download">
            ↓ &nbsp; Download Regulatory Matrix (PDF)
          </button>

        </header>

        {/* Cards */}
        <div className="policy-grid">
          {policies.map((policy, index) => (
            <PolicyCard
              key={index}
              policy={policy}
            />
          ))}
        </div>

      </div>
    </section>
  );
}