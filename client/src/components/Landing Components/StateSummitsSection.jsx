import React from "react";
import "./StateSummitsSection.css";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaBuilding,
  FaLeaf,
  FaIndustry,
  FaTint,
} from "react-icons/fa";

const stateChapters = [
  {
    id: 1,
    chapter: "MUMBAI CHAPTER",
    icon: <FaBuilding />,
    date: "July 22, 2026",
    title: "Maharashtra ESG Conclave",
    focus:
      "Supply Chain Decarbonization, Green Municipal Bonds, and Sustainable Corporate Finance in the Mumbai MMR belt.",
    attendees: "350+ Leaders",
    link: "https://www.indiaesgsummit.com/",
  },
  {
    id: 2,
    chapter: "AHMEDABAD CHAPTER",
    icon: <FaIndustry />,
    date: "August 18, 2026",
    title: "Gujarat Sustainable Industrial Forum",
    focus:
      "Renewable Power Integration, Industrial Parks Zero-Liquid-Discharge (ZLD), and Chemical MSME Export Readiness.",
    attendees: "420+ Leaders",
    link: "https://www.indiaesgsummit.com/",
  },
  {
    id: 3,
    chapter: "BENGALURU CHAPTER",
    icon: <FaLeaf />,
    date: "Sept 05, 2026",
    title: "Karnataka Tech & Green Innovation",
    focus:
      "AI-driven Carbon Accounting, SaaS ESG Auditing, Scope 3 Data Platforms, and ClimateTech Startup Showcases.",
    attendees: "500+ Innovators",
    link: "https://www.indiaesgsummit.com/",
  },
  {
    id: 4,
    chapter: "CHENNAI CHAPTER",
    icon: <FaTint />,
    date: "Sept 26, 2026",
    title: "Tamil Nadu Clean Manufacturing",
    focus:
      "Textile & Auto Sector Water Stewardship, Extended Producer Responsibility (EPR), and Circular Economics.",
    attendees: "300+ Attendees",
    link: "https://www.indiaesgsummit.com/",
  },
];

export default function StateSummitsSection() {
  return (
    <section
      className="state-summits-wrapper"
      data-aos="fade-up"
      id="state-summits"
    >
      {/* Top Section Header */}
      <div className="section-head-row">
        <div>
          <div className="title-with-icon">
            <span className="section-icon-symbol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-minus-icon lucide-map-minus"
              >
                <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" />
                <path d="M15 5.764V14" />
                <path d="M21 18h-6" />
                <path d="M9 3.236v15" />
              </svg>
            </span>
            <h2 className="section-main-heading">India ESG (State) Summits</h2>
          </div>
          <p className="section-subtitle">
            Regional chapters aligning state-specific industrial policies with
            net-zero mandates &amp; tier-2 MSME readiness.
          </p>
        </div>

        <a
          href="https://www.indiaesgsummit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-all-chapters"
        >
          EXPLORE ALL 12 STATE CHAPTERS <FaArrowRight />
        </a>
      </div>

      {/* 4-Card Horizontal Grid */}
      <div className="state-chapters-grid">
        {stateChapters.map((item) => (
          <div className="state-conclave-card" key={item.id}>
            {/* Top Tag & Date */}
            <div className="chapter-meta-top">
              <span className="chapter-badge">
                <span className="badge-ico">{item.icon}</span>
                {item.chapter}
              </span>
              <span className="chapter-date">{item.date}</span>
            </div>

            {/* Title & Detailed Scope */}
            <h3 className="chapter-title">{item.title}</h3>
            <p className="chapter-focus-desc">
              <span className="focus-label">Focus: </span>
              {item.focus}
            </p>

            {/* Bottom Actions & Delegates */}
            <div className="chapter-card-footer">
              <span className="attendee-counter">
                <FaUsers className="user-icon" /> {item.attendees}
              </span>

              <button
                type="button"
                className="btn-view-chapter"
                onClick={() =>
                  window.open(item.link, "_blank", "noopener,noreferrer")
                }
              >
                <span>View Chapter</span>
                <FaArrowRight className="view-arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
