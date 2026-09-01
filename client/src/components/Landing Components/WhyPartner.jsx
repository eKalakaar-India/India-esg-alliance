import React, { useEffect } from "react";
import "./WhyPartner.css";
import { FaCheckCircle, FaChartBar } from "react-icons/fa";
import dashboardImage from "../../assets/whypartner.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyPartner = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  const features = [
    {
      title: "REGULATORY ALIGNMENT",
      description:
        "Stay ahead of SEBI's BRSR mandates and emerging global standards like CSRD and ISSB.",
    },
    {
      title: "INSTITUTIONAL INTEGRITY",
      description:
        "Access a network of ethical peers and world-class governance specialists.",
    },
    {
      title: "MARKET ACCESS",
      description:
        "Unlocking supply chains of Fortune 500 companies seeking vetted sustainable partners.",
    },
  ];

  return (
    <>
      <section className="why-partner">
        <div className="why-container">
          {/* LEFT: fade-right */}
          <div
            className="why-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2>Why Partner with the Alliance?</h2>

            <p className="section-description">
              Join India's leading ESG ecosystem and gain access to compliance
              expertise, strategic partnerships, capacity building, and
              sustainable business opportunities.
            </p>

            <div className="feature-list">
              {features.map((item, index) => (
                <div
                  className="feature-item"
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 120}
                  data-aos-duration="700"
                >
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>

                  <div className="feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: fade-left */}
          <div
            className="why-right"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Decorative Rings */}
            <div className="circle-bg">
              <div className="circle-inner">
                <img src={dashboardImage} alt="Dashboard" />
              </div>
            </div>

            {/* Floating Card */}
            <div
              className="floating-card"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <div className="floating-icon">
                <FaChartBar />
              </div>

              <div>
                <h3>450+</h3>
                <span>MEMBER ENTERPRISES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta2">
        <div className="cta2-card" data-aos="fade-up" data-aos-duration="800">
          {/* Decorative Leaf */}
          <div className="cta2-leaf">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M160 30C120 35 80 60 55 95C35 123 30 155 40 175C63 160 90 130 110 92C128 58 145 42 160 30Z"
                fill="none"
                stroke="#ECECE8"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M52 170C78 135 110 94 160 35"
                fill="none"
                stroke="#ECECE8"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="cta2-content">
            <h2>Ready to Lead with Purpose?</h2>

            <p>
              Join the alliance today and gain full access to our proprietary
              assessment tools and green finance network.
            </p>

            <div className="cta2-buttons">
              <button className="cta2-primary">Become a Member</button>
              <button className="cta2-secondary">Book a Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPartner;
