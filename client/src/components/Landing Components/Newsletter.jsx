import React, { useState } from "react";

const focusOptions = [
  { id: "sebi", label: "SEBI BRSR Core Mandates", checked: true },
  { id: "carbon", label: "Carbon Markets & BEE CCTS", checked: true },
  { id: "banking", label: "Sustainable Banking & RBI Risk", checked: false },
  { id: "msme", label: "MSME Supply Chain Guides", checked: false },
];

const trustPoints = ["SEBI BRSR Updates", "CCTS Carbon Trends", "Exclusive Roundtables"];

export default function ESGBriefingSignup() {
  const [checks, setChecks] = useState(
    Object.fromEntries(focusOptions.map((o) => [o.id, o.checked]))
  );

  const toggle = (id) => setChecks((c) => ({ ...c, [id]: !c[id] }));

  return (
    <section className="esg-section" id="newsletter">
      <style>{`
        .esg-section {
          background: #EEF2F6;
          padding: 48px 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          display: flex;
          justify-content: center;
        }

        .esg-panel {
          position: relative;
          max-width: 1260px;
          width: 100%;
          background: linear-gradient(155deg, #16324A 0%, #0F2747 60%, #0C1F3A 100%);
          border-radius: 14px;
          padding: 48px 56px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          overflow: hidden;
          box-shadow: 0 24px 48px -20px rgba(15, 39, 71, 0.45);
        }

        .esg-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 5px;
          background: linear-gradient(180deg, #2F7F7B, #166534);
        }

        .esg-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(47, 127, 123, 0.55);
          background: rgba(47, 127, 123, 0.12);
          color: #5FC9C0;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 6px;
          margin-bottom: 24px;
        }

        .esg-heading {
          color: #FFFFFF;
          font-size: 40px;
          font-weight: 800;
          line-height: 1.18;
          margin: 0 0 20px 0;
          letter-spacing: -0.01em;
        }

        .esg-body {
          color: #AEB9C7;
          font-size: 15.5px;
          line-height: 1.7;
          margin: 0 0 28px 0;
          max-width: 520px;
        }

        .esg-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
        }

        .esg-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #C7D0DB;
          font-size: 14px;
        }

        .esg-trust-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1.5px solid #3EA893;
          color: #3EA893;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .esg-form-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 10px;
          padding: 28px 28px 24px 28px;
          align-self: center;
        }

        .esg-label {
          display: block;
          color: #93A2B5;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .esg-input {
          width: 100%;
          box-sizing: border-box;
          background: #0F2130;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 7px;
          padding: 13px 14px;
          color: #FFFFFF;
          font-size: 14.5px;
          margin-bottom: 22px;
        }

        .esg-input::placeholder {
          color: #64748B;
        }

        .esg-input:focus {
          outline: none;
          border-color: #2F7F7B;
        }

        .esg-checks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 12px;
          column-gap: 16px;
          margin-bottom: 24px;
        }

        .esg-check-option {
          display: flex;
          align-items: center;
          gap: 9px;
          cursor: pointer;
        }

        .esg-checkbox {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1.5px solid #5B6B80;
          background: transparent;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .esg-checkbox.checked {
          background: #2F7F7B;
          border-color: #2F7F7B;
        }

        .esg-check-option span {
          color: #D6DEE7;
          font-size: 13.5px;
        }

        .esg-submit {
          width: 100%;
          background: #2F7F7B;
          color: #FFFFFF;
          border: none;
          border-radius: 7px;
          padding: 15px 20px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.15s ease;
        }

        .esg-submit:hover {
          background: #266763;
        }

        .esg-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }

        .esg-footer-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #7C8AA0;
          font-size: 12px;
        }

        @media (max-width: 860px) {
          .esg-panel {
            grid-template-columns: 1fr;
            padding: 36px 24px;
          }
          .esg-heading {
            font-size: 30px;
          }
          .esg-checks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="esg-panel">
        <div>
          <span className="esg-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                fill="currentColor"
              />
            </svg>
            Statutory Intelligence Dispatch
          </span>

          <h2 className="esg-heading">
            Stay Ahead of India's Rapidly Evolving ESG Regulatory Landscape
          </h2>

          <p className="esg-body">
            Join 14,000+ chief sustainability officers, investment directors, CXOs,
            and legal compliance officers. Receive our bi-weekly dispatch delivering
            SEBI circular breakdowns, national carbon market pricing signals, and
            assurance audit checklists.
          </p>

          <div className="esg-trust-row">
            {trustPoints.map((point) => (
              <div className="esg-trust-item" key={point}>
                <span className="esg-trust-icon">
                  <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="esg-form-card">
          <label className="esg-label" htmlFor="esg-email">
            Official Corporate Email Address *
          </label>
          <input
            id="esg-email"
            className="esg-input"
            type="email"
            placeholder="director.sustainability@enterprise.co.in"
          />

          <span className="esg-label">Select Your Regulatory Focus:</span>
          <div className="esg-checks-grid">
            {focusOptions.map((opt) => (
              <label className="esg-check-option" key={opt.id}>
                <span
                  className={`esg-checkbox ${checks[opt.id] ? "checked" : ""}`}
                  onClick={() => toggle(opt.id)}
                >
                  {checks[opt.id] && (
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span>{opt.label}</span>
              </label>
            ))}
          </div>

          <button className="esg-submit" type="button">
            Subscribe to ESG Briefing
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="esg-footer-row">
            <span className="esg-footer-item">
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 7V5a4 4 0 018 0v2m-9 0h10a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
              DPDP Act 2023 Compliant
            </span>
            <span className="esg-footer-item">Bi-weekly Dispatch • Zero Spam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
