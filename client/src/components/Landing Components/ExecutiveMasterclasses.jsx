import React from "react";
import "./ExecutiveMasterclasses.css";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaFileAlt,
  FaBroadcastTower,
  FaUsers,
} from "react-icons/fa";

const webinarSeriesData = [
  {
    id: "leadership-webinar-series",
    badge: "REGULAR KNOWLEDGE FORUM",
    credit: "Interactive Q&A Included",
    title: "IEA Leadership Webinar Series",
    description:
      "Regular knowledge forum connecting founders, executives, and sustainability practitioners with policymakers, regulators, and industry leaders.",
    tags: [
      "BRSR & SEBI Mandates",
      "Sustainable Finance & Lending",
      "Export Supply Chain ESG",
      "Operationalizing Regulations",
    ],
    targetGroup: "Business Owners, CXOs, ESG Leads, & Operations Managers",
    nextBatch: "Next: Sept 25, 2026",
    link: "https://www.indiaesgsummit.com/",
    syllabusPdf: "/pdfs/IEA-Leadership-Webinar-Series.pdf",
  },
  {
    id: "carbon-accounting-briefing",
    badge: "EXECUTIVE ROUNDTABLE",
    credit: "CPD Certified • 2 Hrs",
    title: "Carbon Accounting & CBAM Compliance",
    description:
      "Deep dive into EU Carbon Border Adjustment Mechanism (CBAM) readiness, Scope 1 & 2 verification, and cross-border emission tax mitigation.",
    tags: [
      "CBAM Reporting Formats",
      "Emissions Factor Calculation",
      "Exporter Tariffs & Exemptions",
      "Audit Trail Documentation",
    ],
    targetGroup: "Export MDs, Compliance Officers, & Plant Heads",
    nextBatch: "Next: Oct 08, 2026",
    link: "https://www.indiaesgsummit.com/",
    syllabusPdf: "/pdfs/CBAM-Executive-Briefing.pdf",
  },
  {
    id: "sustainable-finance-dialogue",
    badge: "FINANCE & POLICY FORUM",
    credit: "Banking Partner Panel",
    title: "Green Lending & Transition Bonds for MSMEs",
    description:
      "Navigating priority sector green credit lines, interest subvention schemes, and ESG risk profiling used by leading scheduled commercial banks.",
    tags: [
      "Concessional Green Lines",
      "Sustainability-Linked Loans",
      "BRSR Core Assurance for Credit",
      "Bank ESG Risk Scoring",
    ],
    targetGroup: "CFOs, Finance Directors, & Treasury Leads",
    nextBatch: "Next: Oct 22, 2026",
    link: "https://www.indiaesgsummit.com/",
    syllabusPdf: "/pdfs/Green-Finance-Guide.pdf",
  },
];

export default function ExecutiveMasterclasses() {
  const downloadSyllabus = (fileUrl, title) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${title}-Brief.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="executive-training-wrapper"
      id="leadership-webinar-series"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="training-head-row">
        <div>
          <div className="title-with-icon">
            <span className="training-ribbon-icon">
              <FaBroadcastTower />
            </span>
            <h2 className="training-main-heading">
              Executive Briefings &amp; Knowledge Forums
            </h2>
          </div>
          <p className="training-subtitle">
            Direct regulatory updates, transition finance dialogues, and open
            access CXO deliberations.
          </p>
        </div>

        <div className="accreditation-pill">
          Ministry &amp; Regulatory Observer Sessions
        </div>
      </div>

      {/* 3-Card Grid */}
      <div className="training-cards-grid">
        {webinarSeriesData.map((item) => (
          <div className="program-card" key={item.id}>
            {/* Top Badges */}
            <div className="program-badges-row">
              <span className="badge-duration">{item.badge}</span>
              <span className="badge-credit">{item.credit}</span>
            </div>

            {/* Title & Desc */}
            <h3 className="program-title">{item.title}</h3>
            <p className="program-desc">{item.description}</p>

            {/* Key Focus Tags */}
            <div className="focus-heading-label">KEY FOCUS AREAS</div>
            <div className="program-tags-row">
              {item.tags.map((tag, idx) => (
                <span className="feature-pill" key={idx}>
                  <FaCheckCircle className="pill-check" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Target Group Audience */}
            <div className="target-group-row">
              <FaUsers className="target-icon" />
              <span>
                <strong>Target Group:</strong> {item.targetGroup}
              </span>
            </div>

            {/* Next Scheduled Date */}
            <div className="next-batch-row">
              <FaCalendarAlt className="cal-icon" />
              <span>{item.nextBatch}</span>
            </div>

            {/* Action Buttons */}
            <div className="program-actions-row">
              <button
                type="button"
                className="btn-enroll-dark"
                onClick={() =>
                  window.open(item.link, "_blank", "noopener,noreferrer")
                }
              >
                JOIN WEBINAR &gt;
              </button>
              <button
                type="button"
                className="btn-syllabus-light"
                onClick={() => downloadSyllabus(item.syllabusPdf, item.title)}
              >
                <FaFileAlt className="file-icon" /> AGENDA BRIEF
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}