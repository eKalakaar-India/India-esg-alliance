import React from "react";
import "./ExecutiveMasterclasses.css";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaFileAlt,
  FaAward,
  FaSlidersH,
} from "react-icons/fa";

const trainingPrograms = [
  {
    id: 1,
    badge: "3-DAY EXECUTIVE INTENSIVE",
    credit: "CPE Credits: 16 Hrs",
    title: "BRSR & BRSR Core Compliance Certification",
    description:
      "Complete clause-by-clause walkthrough of SEBI BRSR Core indicators, data assurance protocols, and internal control verification models.",
    tags: ["SEBI Aligned", "Board Competency"],
    nextBatch: "Next: Aug 12–14",
    link: "https://www.indiaesgsummit.com/",
    syllabusPdf: "/pdfs/BRSR-Executive-Syllabus.pdf",
  },
  {
    id: 2,
    badge: "HANDS-ON LAB • 2 DAYS",
    credit: "Level 2 Certified",
    title: "Carbon Footprint & GHG Protocol for MSMEs",
    description:
      "Practical calculation of Scope 1, Scope 2, and initial Scope 3 emissions using actual industrial utility bills, furnace logs, and logistics models.",
    tags: ["ISO 14064 Aligned", "Toolkits Included"],
    nextBatch: "Next: Aug 28–29",
    link: "https://www.indiaesgsummit.com/",
    syllabusPdf: "/pdfs/GHG-Protocol-MSME-Syllabus.pdf",
  },
  {
    id: 3,
    badge: "VIRTUAL MASTERCLASS",
    credit: "Tier-1 & Tier-2 Audit",
    title: "Sustainable Supply Chain & Scope 3 Auditing",
    description:
      "Frameworks for vendor ESG risk assessment, worker welfare verifications, extended supplier tracing, and verifiable carbon declarations.",
    tags: ["Value-Chain Matrix", "Audit Ready"],
    nextBatch: "Next: Sept 15",
    link: "https://www.indiaesgsummit.com/",
    syllabusPdf: "/pdfs/Scope3-Supply-Chain-Syllabus.pdf",
  },
];

export default function ExecutiveMasterclasses() {
  const downloadSyllabus = (fileUrl, title) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${title}-Syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="executive-training-wrapper" data-aos="fade-up">
      {/* Header */}
      <div className="training-head-row">
        <div>
          <div className="title-with-icon">
            <span className="training-ribbon-icon">
              <FaAward />
            </span>
            <h2 className="training-main-heading">
              Executive Training Programs &amp; Masterclasses
            </h2>
          </div>
          <p className="training-subtitle">
            SEBI-aligned professional upskilling, audit-readiness workshops, and
            MSME competency certificates.
          </p>
        </div>

        <div className="accreditation-pill">
          Accredited by National Sustainability Board
        </div>
      </div>

      {/* 3-Card Grid */}
      <div className="training-cards-grid">
        {trainingPrograms.map((program) => (
          <div className="program-card" key={program.id}>
            {/* Top Badges */}
            <div className="program-badges-row">
              <span className="badge-duration">{program.badge}</span>
              <span className="badge-credit">{program.credit}</span>
            </div>

            {/* Title & Desc */}
            <h3 className="program-title">{program.title}</h3>
            <p className="program-desc">{program.description}</p>

            {/* Feature Tags */}
            <div className="program-tags-row">
              {program.tags.map((tag, idx) => (
                <span className="feature-pill" key={idx}>
                  <FaCheckCircle className="pill-check" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Next Date */}
            <div className="next-batch-row">
              <FaCalendarAlt className="cal-icon" />
              <span>{program.nextBatch}</span>
            </div>

            {/* Buttons: Enroll & Syllabus */}
            <div className="program-actions-row">
              <button
                type="button"
                className="btn-enroll-dark"
                onClick={() =>
                  window.open(program.link, "_blank", "noopener,noreferrer")
                }
              >
                ENROLL NOW &gt;
              </button>
              <button
                type="button"
                className="btn-syllabus-light"
                onClick={() =>
                  downloadSyllabus(program.syllabusPdf, program.title)
                }
              >
                <FaFileAlt className="file-icon" /> SYLLABUS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
