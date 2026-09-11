import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaArrowRight } from "react-icons/fa";
import "./StickyMemberBar.css";

const StickyMemberBar = () => {
  const navigate = useNavigate();

  const handleMemberClick = () => {
    navigate("/contactus"); // or your specific membership/onboarding route
  };

  return (
    <aside
      className="sticky-member-tab"
      onClick={handleMemberClick}
      role="button"
      tabIndex={0}
      aria-label="Become a Member"
      onKeyDown={(e) => e.key === "Enter" && handleMemberClick()}
    >
      <div className="tab-pill-content">
        <span className="tab-icon-wrapper">
          <FaUserPlus className="tab-icon" />
        </span>
        <span className="tab-label">Become a Member</span>
        <span className="tab-arrow-wrapper">
          <FaArrowRight className="tab-arrow" />
        </span>
      </div>
      <div className="tab-glow-layer" />
    </aside>
  );
};

export default StickyMemberBar;