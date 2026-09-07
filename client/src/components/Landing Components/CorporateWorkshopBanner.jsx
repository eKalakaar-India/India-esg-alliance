import React from "react";
import "./CorporateWorkshopBanner.css";
import { FaHandshake, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function CorporateWorkshopBanner() {
  return (
    <section className="workshop-banner-card" data-aos="fade-up">
      {/* Left Icon + Text */}
      <div className="workshop-content-left">
        <div className="workshop-icon-badge">
          <FaHandshake />
        </div>

        <div className="workshop-copy">
          <h3 className="workshop-title">
            Host a Custom In-House Corporate Workshop
          </h3>
          <p className="workshop-desc">
            Bring certified ESG auditors and sector analysts directly to your
            leadership board, procurement council, or Tier-1 vendor cluster.
            Tailored specifically to your industry sector, compliance deadlines,
            and SEBI BRSR Core timelines.
          </p>
        </div>
      </div>

      {/* Right Action Buttons */}
      <div className="workshop-actions-right">
        <button
          type="button"
          className="btn-secretariat"
          onClick={() => (window.location.href = "mailto:info@ekalakaar.com")}
        >
          <FaEnvelope className="envelope-icon" />
          <span>CONTACT SECRETARIAT</span>
        </button>

        <a
          href="tel:+917701872112"
          className="btn-phone-round"
          aria-label="Call Secretariat"
          title="Call Secretariat"
        >
          <FaPhoneAlt />
        </a>
      </div>
    </section>
  );
}
