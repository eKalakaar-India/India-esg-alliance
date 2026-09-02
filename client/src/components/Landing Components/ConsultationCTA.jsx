import React from "react";
import "./ConsultationCTA.css";
import { FaRegCommentDots } from "react-icons/fa";

const ConsultationCTA = () => {
  return (
    <section className="consultation-section">

      <div className="consultation-card">

        <div className="consultation-content">

          <div className="consultation-icon">
            <FaRegCommentDots />
          </div>

          <div className="consultation-text">

            <h3>Need Specific Guidance?</h3>

            <p>
              Our ESG experts are available for one-on-one
              consultations for MSMEs.
            </p>

          </div>

        </div>

        <button className="consultation-btn">
          Book a Call
        </button>

      </div>

    </section>
  );
};

export default ConsultationCTA;