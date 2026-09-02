import React, { useEffect } from "react";
import "./about.css";
import arrow from "../../assets/arrow.svg";
import container from "../../assets/Container.svg";
import shield from "../../assets/shield.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyESG = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <div className="esg-about" data-aos="zoom-in" data-aos-duration="800">
      <div className="about">
        <p className="about-title">Why ESG Matters</p>
        <p className="about-desc">
          Beyond compliance, ESG is a strategic lever for value creation and
          long-term resilience.
        </p>
      </div>

      <div className="about-card-section">
        {/* Card 1 */}
        <div
          className="about-card"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="800"
          // style={{ padding: "18px 16px" }}
        >
          <img
            src={arrow}
            alt="icon"
            width={48}
            height={48}
            style={{
              backgroundColor: "#f1f6ff",
              padding: "8px",
              border: "1px solid #d3d3d3",
              borderRadius: "8px",
            }}
          />
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#00450D",
              margin: "8px 0 4px",
            }}
          >
            2.5x
          </p>
          <p style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px" }}>
            Capital Access
          </p>
          <p style={{ fontSize: "14px", color: "#41493E", margin: 0 }}>
            Companies with high ESG scores enjoy significantly better access to
            green financing.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="about-card"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
          style={{
            // padding: "18px 16px",
            outline: "1px solid #1B6D24",
            borderTop: "4px solid #1B6D24",
          }}
        >
          <img
            src={container}
            alt="icon"
            width={48}
            height={48}
            style={{
              backgroundColor: "#f1f6ff",
              padding: "8px",
              border: "1px solid #d3d3d3",
              borderRadius: "8px",
            }}
          />
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1B6D24",
              margin: "8px 0 4px",
            }}
          >
            80%
          </p>
          <p style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px" }}>
            Buyer Preference
          </p>
          <p style={{ fontSize: "14px", color: "#41493E", margin: 0 }}>
            Global buyers now prioritize suppliers with documented ESG
            compliance.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="about-card"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="800"
          // style={{ padding: "18px 16px" }}
        >
          <img
            src={shield}
            alt="icon"
            width={48}
            height={48}
            style={{
              backgroundColor: "#deedf8",
              padding: "8px",
              border: "1px solid #d3d3d3",
              borderRadius: "8px",
            }}
          />
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#003A75",
              margin: "8px 0 4px",
            }}
          >
            40%
          </p>
          <p style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 6px" }}>
            Risk Mitigation
          </p>
          <p style={{ fontSize: "14px", color: "#41493E", margin: 0 }}>
            Early ESG adoption reduces legal liabilities and operational risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyESG;
