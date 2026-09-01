import React, { useEffect } from "react";
import "./visionmission.css";
import education from "../../assets/education.svg";
import setting from "../../assets/setting.svg";
import assesment from "../../assets/assesment.svg";
import funding from "../../assets/Funding.svg";
import capacity from "../../assets/capacity.png";
import fundingimg from "../../assets/funding.png";
import aboutcheck from "../../assets/aboutcheck.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <div className="vision-mission-div">
      {/* Vision Section */}
      <div className="vision-section" id="vision">
        <div
          className="vision-main"
          data-aos="flip-right"
          data-aos-duration="800"
        >
          <div className="vision-badge">
            <span className="vision-dot"></span>
            OUR VISION
          </div>
          <blockquote className="vision-quote">
            “Making India a global leader in sustainable business through
            ethical stewardship and radical innovation.”
          </blockquote>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section" id="mission">
        <div className="mission-header" data-aos="fade-up">
          <p
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#191D17",
              margin: 0,
            }}
          >
            The Pillars of our Mission
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#41493E",
              width: "50%",
              margin: 0,
            }}
          >
            We operationalize sustainability through four strategic domains,
            ensuring measurable value for both people and planet.
          </p>
        </div>

        <div className="mission-cards-section">
          {/* Row 1 */}
          <div className="mission-card-row">
            {/* Card 1: ESG Education */}
            <div
              className="mission-card1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card1 education">
                <div className="mission-card-top">
                  <div className="mission-icon-box">
                    <img width={28} height={28} src={education} alt="icon" />
                  </div>
                  <p className="mission-card-title">ESG Education</p>
                  <p className="mission-card-desc">
                    Curated academic and professional programs designed to
                    bridge the ESG knowledge gap for C-suite executives and
                    operational managers alike.
                  </p>
                </div>

                {/* Boxed Tags and Learn More */}
                <div className="details-card1">
                  <div className="tags-mission">
                    <span className="mission-tag-box">Executive Seminars</span>
                    <span className="mission-tag-box">Board Readiness</span>
                  </div>
                  <button className="mission-action-box">
                    Learn More <span className="arrow">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Capacity Building */}
            <div
              className="mission-card2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card2 capacity">
                <img width={50} height={50} src={setting} alt="icon" />
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    color: "#191D17",
                    margin: 0,
                  }}
                >
                  Capacity Building
                </p>
                <p style={{ fontSize: "18px", color: "#41493E", margin: 0 }}>
                  Technical support for supply chain optimization and
                  decarbonization strategy implementation.
                </p>
              </div>
              <div className="details-card2">
                <img className="img" src={capacity} alt="capacity" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mission-card-row2">
            {/* Card 4: Funding Access */}
            <div
              className="mission-card4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card4 funding">
                <img width={50} height={50} src={funding} alt="icon" />
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    color: "#191D17",
                    margin: 0,
                  }}
                >
                  Funding Access
                </p>
                <p style={{ fontSize: "18px", color: "#41493E", margin: 0 }}>
                  Connecting ESG-compliant enterprises with global impact
                  investors and green finance instruments.
                </p>
                <p
                  style={{
                    backgroundColor: "#191D17",
                    color: "white",
                    padding: "15px",
                    borderRadius: "12px",
                    width: "45%",
                    cursor: "pointer",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Explore Fund Partners
                </p>
              </div>
              <div className="details-card4">
                <img src={fundingimg} alt="funding" />
              </div>
            </div>

            {/* Card 3: Assessment */}
            <div
              className="mission-card3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card2 capacity">
                <img width={50} height={50} src={assesment} alt="icon" />
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    color: "#191D17",
                    margin: 0,
                  }}
                >
                  Assessment
                </p>
                <p style={{ fontSize: "16px", color: "#41493E", margin: 0 }}>
                  Proprietary ESG scoring models calibrated for the unique
                  challenges of the Indian market.
                </p>
                <p
                  style={{
                    color: "#003A75",
                    fontSize: "12px",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "10px",
                    alignItems: "center",
                    margin: 0,
                  }}
                >
                  <img
                    width={16}
                    height={16}
                    style={{ backgroundColor: "transparent", padding: 0 }}
                    src={aboutcheck}
                    alt="icon"
                  />
                  BRSR Compliant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
