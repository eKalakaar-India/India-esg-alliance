import React from "react";
import "./ResearchReports.css";

const colors = {
  navy: "#0F2747",
  forest: "#166534",
  teal: "#2F7F7B",
  cobalt: "#2563EB",
  orange: "#EA7A2F",
  coral: "#E76F61",
  sand: "#D6B98C",
  slate: "#475569",
  lightBg: "#F8FAFC",
  offWhite: "#FAF9F6",
  white: "#FFFFFF",
};

const sideReports = [
  {
    type: "SURVEY REPORT",
    quarter: "Q4 · 2024",
    title:
      "BRSR Assurance Preparedness Survey: Scope 3 GHG Accounting in MSME Supply Chains",
    description:
      "Assessment of 500 tier-1 suppliers across automotive, chemicals, and consumer retail sectors highlighting verification bottlenecks under GHG Protocol Scope 3.",
    metricLabel: "68% Sample Unaudited",
    metric: "N=520 Firms",
    pages: "38 Pages · PDF",
  },
  {
    type: "POLICY BRIEF",
    quarter: "Q1 · 2025",
    title:
      "Financing the Sovereign Transition: Blended Finance & Sovereign Green Bonds in India",
    description:
      "Taxonomic analysis of coupon performance, ESG reporting compliance, and institutional investor appetite for municipal & corporate transition bonds.",
    metricLabel: "Yield Spread: -14 bps",
    metric: "₹28,000 Cr Annualized",
    pages: "28 Pages · PDF",
  },
];

function ReportBadge({ children, green = false }) {
  return (
    <span className={`report-badge ${green ? "report-badge-green" : ""}`}>
      {children}
    </span>
  );
}

function SideReport({ report }) {
  return (
    <article className="side-report">
      <div className="side-report-top">
        <span className="side-type">{report.type}</span>
        <span className="side-quarter">{report.quarter}</span>
      </div>

      <h3>{report.title}</h3>

      <p className="side-description">{report.description}</p>

      <div className="side-metric">
        <span>{report.metricLabel}</span>
        <strong>{report.metric}</strong>
      </div>

      <div className="side-report-footer">
        <span>{report.pages}</span>

        <button className="download-link">
          Download <span>↓</span>
        </button>
      </div>
    </article>
  );
}

function ResearchReports() {
  return (
    <section className="research-section" id="research">
      <div className="research-container">

        {/* Header */}
        <header className="research-header">
          <div className="research-header-section">
            <div className="section-eyebrow">Our Research</div>

            <h1>Flagship Research Reports &amp; Sectoral Benchmarks</h1>

            <p>
              Peer-reviewed empirical studies authored by the IEA Research
              Directorate in partnership with IIT Delhi, IIM Ahmedabad, and
              the Sovereign Green Fund Council.
            </p>
          </div>

          <a href="#all-reports" className="all-reports-link">
            View All 34 Research Publications
            <span>→</span>
          </a>
        </header>

        {/* Main Grid */}
        <div className="research-grid">

          {/* Featured Report */}
          <article className="featured-report">

            <div className="featured-meta">
              <div className="featured-badges">
                <ReportBadge>IEA FLAGSHIP WHITEPAPER #09</ReportBadge>
                <ReportBadge green>PEER REVIEWED</ReportBadge>
              </div>

              <span className="isbn">
                ISBN: 978-93-5493-219-1 · 52 Pages
              </span>
            </div>

            <div className="report-divider" />

            <h2>
              The Indian Decarbonisation
              <br />
              Playbook: Decoupling Industrial
              <br />
              Growth from Carbon Intensity
              <br />
              (2025–2030)
            </h2>

            <p className="featured-description">
              An empirical blueprint for India’s heavy industry—analyzing
              techno-commercial roadmaps for green hydrogen adoption, direct
              reduced iron (DRI) in steel manufacturing, and waste heat
              recovery across 400 manufacturing hubs.
            </p>

            {/* Metrics */}
            <div className="metrics-box">

              <div className="metric">
                <span className="metric-label">SCOPE 1 ABATEMENT</span>
                <strong className="metric-value teal">
                  32.4%
                </strong>
                <small>
                  Achievable by FY29 with present subsidies
                </small>
              </div>

              <div className="metric">
                <span className="metric-label">CAPITAL EXPENDITURE</span>
                <strong className="metric-value forest">
                  ₹1.8L Cr
                </strong>
                <small>
                  Blended public-private debt required
                </small>
              </div>

              <div className="metric">
                <span className="metric-label">COMPLIANCE OFFSET</span>
                <strong className="metric-value navy">
                  84 MT
                </strong>
                <small>
                  Annual CO₂ reduction potential
                </small>
              </div>

            </div>

            {/* Authors */}
            <div className="authors">

              <div>
                <strong>Lead Authors:</strong>
                <span>
                  Dr. Vikramaditya Ghosh, Sanchita Sen, IEA Energy Council
                </span>
              </div>

              <div>
                <strong>Review Board:</strong>
                <span>
                  Bureau of Energy Efficiency, TERI, CII Climate Committee
                </span>
              </div>

            </div>

            <div className="featured-bottom">
              <div className="worksheet">
                <span className="shield-icon">◉</span>
                Includes SEBI Materiality Mapping Worksheet
              </div>

              <div className="featured-actions">
                <button className="cite-button">
                  Cite Study (BibTeX)
                </button>

                <button className="download-button">
                  ↓ &nbsp; Download Full Paper (8.4 MB)
                </button>
              </div>
            </div>

          </article>

          {/* Side Reports */}
          <aside className="side-reports">
            {sideReports.map((report, index) => (
              <SideReport key={index} report={report} />
            ))}
          </aside>

        </div>
      </div>
    </section>
  );
}

export default ResearchReports;