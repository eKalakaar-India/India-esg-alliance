import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
  FaShieldAlt,
  FaCertificate,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./FlagshipSummitCard.css";
import national1 from "../../assets/natinal1.jpeg";
import national2 from "../../assets/natinal2.jpeg";
import national3 from "../../assets/natinal3.jpeg";
import national4 from "../../assets/natinal4.jpeg";
import national5 from "../../assets/natinal5.jpeg";
import national6 from "../../assets/natinal6.jpeg";
import national7 from "../../assets/natinal7.jpeg";

const carouselImages = [
  { src: national1, alt: "National Summit Conclave Overview 1" },
  { src: national2, alt: "National Summit Keynote Session 2" },
  { src: national3, alt: "National Summit Panel Discussion 3" },
  { src: national4, alt: "National Summit Regulatory Roundtables 4" },
  { src: national5, alt: "National Summit Industry Delegation 5" },
  { src: national6, alt: "National Summit Executive Workshop 6" },
  { src: national7, alt: "National Summit Networking & Assembly 7" },
];

export default function FlagshipSummitCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handleBrochureDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/India-ESG-Summit-Brochure-2026.pdf";
    link.download = "India-ESG-National-Summit-2026-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article
      className="flagship-card-container"
      data-aos="fade-up"
      data-aos-delay="100"
      id="national-summit"
    >
      {/* Top Banner Bar */}
      <header className="flagship-top-bar">
        <div className="bar-left">
          <span className="ribbon-flag">⚑</span>
          <div className="bar-title-group">
            <span className="bar-lead-title">Flagship National Assembly</span>
            <span className="bar-sub-desc">
              India's premier annual convocation on sustainable governance &amp;
              BRSR assurance
            </span>
          </div>
        </div>
        <div className="bar-right">
          <span className="pill-core">
            <FaCertificate className="mini-badge-icon" /> SEBI CORE MANDATE
            FOCUS
          </span>
          <span className="edition-tag">Annual Edition</span>
        </div>
      </header>

      {/* Main Grid: Media & Content */}
      <div className="flagship-content-grid">
        {/* Left: Interactive Carousel Box */}
        <div className="flagship-image-box">
          <div className="image-conclave-badge">ANNUAL FLAGSHIP CONCLAVE</div>

          <div className="carousel-slide-viewport">
            {carouselImages.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className={`flagship-img carousel-img ${
                  index === currentIndex ? "active" : ""
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Indicator Dots */}
          <div className="carousel-dots-wrapper">
            {carouselImages.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                className={`carousel-dot ${
                  dotIndex === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>

          {/* Meta Overlay */}
          <div className="image-footer-meta">
            <div className="meta-item">
              <FaCalendarAlt className="meta-icon" />
              <span>Oct 14–16, 2026</span>
            </div>
            <div className="meta-item">
              <FaMapMarkerAlt className="meta-icon" />
              <span>Vigyan Bhawan, New Delhi</span>
            </div>
          </div>
        </div>

        {/* Right: Summit Details, KPI boxes & Actions */}
        <div className="flagship-details-box">
          <div className="details-header">
            <div className="dept-tag-wrapper">
              <span className="dept-dot" />
              <span className="dept-tag">
                Ministry of Corporate Affairs Endorsed Session
              </span>
            </div>
            <h2 className="summit-heading">India ESG (National) Summit 2026</h2>
            <p className="summit-theme-desc">
              <strong className="theme-lead">Keynote Theme:</strong>{" "}
              Accelerating BRSR Core Assurance, Decarbonized Value Chains, and
              Transition Financing for Indian Industry. Uniting 1,200+ top
              executives, credit rating agencies, and policymakers.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="kpi-grid">
            <div className="kpi-box">
              <h4>1,200+</h4>
              <span>CXO, MD &amp; ESG DELEGATES</span>
            </div>
            <div className="kpi-box">
              <h4>45+</h4>
              <span>KEYNOTE SPEAKERS</span>
            </div>
            <div className="kpi-box">
              <h4>8</h4>
              <span>MINISTERIAL ROUNDTABLES</span>
            </div>
            <div className="kpi-box">
              <h4>38+</h4>
              <span>COUNCIL SPONSORS</span>
            </div>
          </div>

          {/* Council Avatars & Registration Guarantee */}
          <div className="speakers-preview-row">
            <div className="avatar-group" aria-label="Featured Speakers">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Advisory Member"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Advisory Member"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Advisory Member"
              />
            </div>
            <span className="speaker-text">
              Distinguished Faculty &amp; Regulatory Observers joining
            </span>
            <span className="badge-guaranteed">
              <FaShieldAlt className="shield-icon" /> Early Bird Passes Open
            </span>
          </div>

          {/* Actions */}
          <div className="summit-action-row">
            <button
              type="button"
              className="btn-register"
              onClick={() =>
                window.open(
                  "https://www.indiaesgsummit.com/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <span>Register for National Summit</span>
              <FaArrowRight className="action-arrow" />
            </button>
            <button
              type="button"
              className="btn-brochure"
              onClick={handleBrochureDownload}
            >
              <FaDownload className="download-icon" />
              <span>Download Agenda &amp; Brochure (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}