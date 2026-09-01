import React, { useEffect } from "react";
import "./WhyIEA.css";
import {
  FaGraduationCap,
  FaUsers,
  FaBookReader,
  FaHandshake,
  FaUserTie,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your director images (or replace with appropriate assets)
import sanjay from "../../assets/Sanjaya.png";
import stalin from "../../assets/stalin.jpeg";

const rolesData = [
  {
    icon: <FaGraduationCap />,
    title: "Training & Capacity-Building",
    description:
      "A dedicated platform empowering MSMEs, corporates, CXOs, boards, and ESG practitioners with actionable sustainability skills.",
    tag: "Education & Skills",
  },
  {
    icon: <FaUsers />,
    title: "Neutral Convening Forum",
    description:
      "Bringing together industry leaders, investors, policymakers, academia, and technology providers for transparent dialogue.",
    tag: "Multi-Stakeholder",
  },
  {
    icon: <FaBookReader />,
    title: "Knowledge & Research Hub",
    description:
      "Supporting applied ESG research, sector-specific insights, and proactive policy advocacy aligned with global standards.",
    tag: "Applied Insights",
  },
  {
    icon: <FaHandshake />,
    title: "Ecosystem Enabler",
    description:
      "Facilitating impactful partnerships across specialized training, emerging technologies, assurance, and industry networks.",
    tag: "Strategic Alliance",
  },
];

const directorsData = [
  {
    name: "Dr. Sanjaya Pradhan",
    role: "Director & Social Entrepreneur",
    bio: "Dr. Sanjaya Pradhan is a serial social entrepreneur. In past he has worked with NSDC, Tata Power and Mahindra Group. He is founder of Ekalakaar and serves on the boards of PSUs and Development Organizations.",
    image: sanjay,
  },
  {
    name: "Mr. Stalin Nayak",
    role: "Director & Senior Development Professional",
    bio: "Mr. Stalin Nayak is a senior development professional and social entrepreneur. He is the founder of PANTISS group and is well known for his work on sustainability in mining areas.",
    image: stalin,
  },
];

const WhyIEA = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <section className="why-iea-section">
      {/* 1. Why INDIA ESG ALLIANCE Section - zoom-in */}
      <div
        className="why-iea-header"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <span className="why-tag">Why INDIA ESG ALLIANCE</span>
        <h2 className="why-title">
          Bridging the ESG Implementation Gap for Indian Enterprises
        </h2>
        <div className="why-intro-grid">
          <p className="why-lead-text">
            India's ESG landscape is evolving rapidly. Regulatory expectations,
            investor scrutiny, and global supply-chain mandates are reshaping
            how businesses compete. Yet many organizations—particularly
            MSMEs—face roadblocks such as limited expertise, fragmented
            frameworks, weak data systems, high compliance costs, and a lack of
            practical guidance.
          </p>
          <div className="why-highlight-box">
            <p>
              <strong>IEA bridges this gap.</strong> We bring ESG knowledge,
              experts, tools, and ecosystem partnerships together through an
              India-first, globally aligned approach.
            </p>
          </div>
        </div>
      </div>

      <br />

      {/* 2. Purpose & Role Section - zoom-in */}
      <div
        className="why-purpose-wrapper"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div className="why-purpose-subhead">
          <h1 className="purpose-and-role">Purpose & Role</h1>
          <p>
            Building a coordinated ESG ecosystem focused on capacity building,
            standardization, and long-term institution building rather than
            transactional interventions.
          </p>
        </div>

        <div className="why-roles-grid">
          {rolesData.map((item, index) => (
            <div
              key={index}
              className="why-card"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              data-aos-duration="700"
            >
              <div className="why-card-icon">{item.icon}</div>
              <h4 className="why-card-title">{item.title}</h4>
              <p className="why-card-desc">{item.description}</p>
              <div className="why-card-footer">
                <span className="why-card-pill">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />

      {/* 3. Directors Section - zoom-out-up */}
      <div
        className="why-directors-wrapper"
        data-aos="zoom-out-up"
        data-aos-duration="800"
      >
        <div className="why-purpose-subhead">
          <h1 className="director-header">Directors</h1>
          <p>
            Visionary leaders driving the alliance's mission with decades of
            impact in social entrepreneurship and sustainability.
          </p>
        </div>

        <div className="why-directors-grid">
          {directorsData.map((director, index) => (
            <div
              key={index}
              className="director-profile-card"
              data-aos="zoom-out-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              <div className="director-img-box">
                {director.image ? (
                  <img src={director.image} alt={director.name} />
                ) : (
                  <div className="director-placeholder">
                    <FaUserTie className="placeholder-icon" />
                  </div>
                )}
              </div>

              <div className="director-info-box">
                <div className="director-header-meta">
                  <h3 className="director-name">{director.name}</h3>
                  <p className="director-role">{director.role}</p>
                </div>
                <p className="director-bio">{director.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIEA;
