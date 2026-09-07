import React from "react";
import "./ConferencesHeader.css";

const filterTabs = [
  { id: "all", label: "National Summits & Programs" },
  { id: "flagship", label: "Flagship Assemblies" },
  { id: "certifications", label: "Certifications & Masterclasses" },
  { id: "state", label: "State Chapters (State Summits)" },
  { id: "national", label: "Awards and Recognition" },
];

export default function ConferencesHeader({ activeTab, setActiveTab }) {
  return (
    <div className="events-header" data-aos="fade-up" id="training-programs">
      {/* Top green tag badge */}
      <div className="events-tag-badge">
        <span className="dot" />
        EST. 2020 • ESG ECOSYSTEM &amp; SUMMIT SERIES
      </div>

      <div className="events-title-row">
        <div>
          <h1 className="events-main-title">
            Conferences, Summits &amp; Masterclasses
          </h1>
          <p className="events-main-desc">
            Empowering enterprises, MSMEs, regulatory leaders, and supply chain
            partners with actionable ESG governance, compliance certifications,
            and national policy dialogues.
          </p>
        </div>
      </div>

      {/* Horizontal Tabs */}
      <div className="events-tabs-bar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
