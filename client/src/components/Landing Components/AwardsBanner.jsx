import React from "react";
import "./AwardsBanner.css";
import {
  FaAward,
  FaCheckCircle,
  FaStar,
  FaRecycle,
  FaLightbulb,
  FaInfoCircle,
  FaPlay,
  FaTrophy,
} from "react-icons/fa";

const awardCategories = [
  {
    id: 1,
    icon: <FaCheckCircle />,
    title: "Excellence in BRSR Reporting",
    description:
      "Recognizing utmost transparency, complete scope assurance, and governance rigor.",
  },
  {
    id: 2,
    icon: <FaStar />,
    title: "MSME Champion of the Year",
    description:
      "Honoring small and mid-sized enterprises embedding cost-efficient sustainability.",
  },
  {
    id: 3,
    icon: <FaRecycle />,
    title: "Circular Resource Stewardship",
    description:
      "Zero-waste factory operations, industrial water balance, and material recovery.",
  },
  {
    id: 4,
    icon: <FaLightbulb />,
    title: "Women in Green Leadership",
    description:
      "Exemplary women officers driving board accountability and operational transformation.",
  },
];

export default function AwardsBanner() {
  return (
    <section className="awards-banner-card" data-aos="fade-up" id="awards">
      {/* Top Meta Bar */}
      <div className="awards-top-row">
        <div className="awards-tag">
          <FaAward className="award-medal-icon" />
          <span>NATIONAL HONORS 2026</span>
        </div>

        <div className="nominations-status-pill">
          <span className="live-dot" />
          <span>Nominations Open • Closing August 30, 2026</span>
        </div>
      </div>

      {/* Main Title & Lead Text */}
      <h2 className="awards-main-title">
        India ESG Leadership &amp; Stewardship Awards
      </h2>

      <p className="awards-lead-desc">
        Celebrating trailblazers leading the transition to ethical corporate
        governance, climate resilience, and inclusive social impact across
        India. Rigorously vetted by an independent jury of former SEBI
        regulators, ESG rating partners, and academics.
      </p>

      {/* 4 Category Glass Cards */}
      <div className="award-cards-grid">
        {awardCategories.map((item) => (
          <div className="award-glass-item" key={item.id}>
            <div className="category-icon-circle">{item.icon}</div>
            <h3 className="category-title">{item.title}</h3>
            <p className="category-desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Info & Actions */}
      <div className="awards-footer-row">
        <div className="eval-note">
          <FaInfoCircle className="info-icon" />
          <span>
            No submission fee required. Nominations evaluated under double-blind
            jury protocol.
          </span>
        </div>

        <div className="awards-buttons-deck">
          <button type="button" className="btn-submit-nomination">
            <span>SUBMIT NOMINATION</span>
            <FaPlay className="btn-play-arrow" />
          </button>

          <button type="button" className="btn-hall-of-fame">
            <FaTrophy className="trophy-icon" />
            <span>PAST WINNERS HALL OF FAME</span>
          </button>
        </div>
      </div>
    </section>
  );
}
