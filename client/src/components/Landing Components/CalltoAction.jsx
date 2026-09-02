import React from "react";
import "./CalltoAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <div className="cta-content">

          <h2>
            Ready to lead the ESG
            <br />
            transition?
          </h2>

          <p>
            Join the alliance today and unlock access to the tools,
            networks, and capital driving India's future.
          </p>

        </div>

        <div className="cta-buttons">

          <button className="primary-btn">
            Join the Alliance
          </button>

          <button className="secondary-btn">
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
};

export default CallToAction;