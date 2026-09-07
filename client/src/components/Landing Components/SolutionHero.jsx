import React, { useEffect } from "react";
import "./SolutionHero.css";
import esgServices from "../../assets/esg-services.png";
import { FaArrowRight, FaPlay, FaRegCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SolutionHero = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  const handleScrollToPrograms = () => {
    const section = document.getElementById("board-cxo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="solution-hero-wrapper">
      <div className="solution-hero-container">
        {/* Left Column: Typography & CTAs */}
        <div
          className="solution-hero-typo"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="tag-solution-hero">
            <span className="pulsing-dot" />
            <span>Empowering Sustainable Leadership</span>
          </div>

          <h1 className="solution-hero-title">
            Capacity Building <br />
            <span className="highlight-text">&amp; Training Solutions</span>
          </h1>

          <p className="solution-hero-desc">
            Empowering Indian enterprises with institutional-grade tools,
            governance frameworks, and green capital accessibility to navigate
            the evolving ESG landscape. Through targeted training, practical
            guidance, and knowledge-sharing, we enable organizations to build
            lasting capabilities and integrate sustainability into their core
            operations.
          </p>

          {/* Quick Pillar Points */}
          <div className="solution-hero-features">
            <div className="feature-item">
              <FaRegCheckCircle className="feature-icon" />
              <span>SEBI BRSR Core Aligned</span>
            </div>
            <div className="feature-item">
              <FaRegCheckCircle className="feature-icon" />
              <span>Executive &amp; MSME Focus</span>
            </div>
            <div className="feature-item">
              <FaRegCheckCircle className="feature-icon" />
              <span>Cross-Border Compliance</span>
            </div>
          </div>

          {/* Action Group */}
          <div className="solution-hero-actions">
            <button
              type="button"
              className="solution-hero-btn primary"
              onClick={handleScrollToPrograms}
            >
              <span>Explore Programs</span>
              <FaArrowRight className="btn-arrow" />
            </button>

            <button
              type="button"
              className="solution-hero-btn secondary"
              onClick={handleScrollToPrograms}
            >
              <FaPlay className="play-icon" />
              <span>Framework Overview</span>
            </button>
          </div>
        </div>

        {/* Right Column: Framed Media Display */}
        <div
          className="solution-hero-img"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="hero-img-card">
            <div className="hero-img-glow" />
            <img
              src={esgServices}
              alt="Capacity Building and ESG Services"
              className="main-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;