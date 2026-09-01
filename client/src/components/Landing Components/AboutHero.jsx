import React, { useEffect } from "react";
import "./Abouthero.css";
import hero from "../../assets/Abouthero.png";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <div className="about-hero">
      {/* Left side sliding in from the left */}
      <div className="about-typo" data-aos="fade-right" data-aos-duration="800">
        <p className="tag-about">Est. 2020 • Driving Sustainability</p>
        <p className="about-hero-title">
          <span style={{ color: "#00450D" }}>
            Welcome to INDIA ESG Alliance
          </span>
        </p>
        <p className="about-hero-desc">
          India ESG Alliance (IEA) is a one-stop ESG platform helping Indian
          businesses, MSMEs, and institutions adopt sustainable and responsible
          practices. It provides training, ESG assessments, reporting support,
          advisory, and ecosystem collaboration, helping organizations meet SEBI
          BRSR/BRSR Core and global standards while integrating practical,
          value-driven sustainability beyond basic compliance.
        </p>

        <div className="about-hero-btn">
          Our Impact Report <FaArrowRight />
        </div>
      </div>

      {/* Right side sliding in from the right */}
      <div
        className="about-hero-img"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default AboutHero;
