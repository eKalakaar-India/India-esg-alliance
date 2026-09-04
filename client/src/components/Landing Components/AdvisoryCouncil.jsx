import React, { useEffect } from "react";
import "./AdvisoryCouncil.css";
import { FaUserTie, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const advisoryMembers = [
  {
    id: 1,
    name: "Dr. Sobins",
    designation: "Sustainability & Social Governance Expert",
    organization: "Advisor to NGOs, Multilateral Initiatives & Institutions",
    description:
      "Sustainability, governance, and social impact expert with extensive experience advising NGOs, multilateral initiatives, social-impact enterprises, and development institutions.",
    image: "", // Keep empty or provide path when available
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Dr. Arun Kumar Rath, IAS",
    designation: "Former Education Secretary",
    organization: "Government of India",
    description:
      "Eminent policymaker and governance leader championing structural ESG policies, public-private stewardship, and systemic educational reforms across India.",
    image: "",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Rajesh Kumar Chaudhry",
    designation: "Special Secretary, DPE",
    organization: "Ministry of Finance, Government of India",
    description:
      "Public enterprise and fiscal strategy veteran steering governance frameworks, sustainable enterprise scaling, and public sector ESG compliance.",
    image: "",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Prof. Bipin Jojo",
    designation: "Dean – School of Social Work",
    organization: "TISS, Mumbai",
    description:
      "Renowned academician guiding social impact evaluation, community development metrics, and inclusive grassroots sustainability models.",
    image: "",
    linkedin: "https://linkedin.com",
  },
  {
  id: 5,
  name: "Shri Mashar Velapurath",
  designation: "Managing Director",
  organization: "AFC India",
  description:
    "Experienced leader in agriculture and rural development with expertise in policy engagement, project management and technical consultancy.",
  image: "",
  linkedin: "https://linkedin.com",
},

{
  id: 6,
  name: "Shri Ashok Sethi",
  designation: "Ex-Chairman, TCE & Ex-Director, Tata Power",
  organization: "Tata Power / Tata Consulting Engineers",
  description:
    "Power sector veteran with over four decades of experience in strategic operations, regulatory advocacy, energy infrastructure and business growth.",
  image: "",
  linkedin: "https://linkedin.com",
},

{
  id: 7,
  name: "Col. Prakash Tewari (Retd.)",
  designation:
    "Member, Expert Appraisal Committee, Ministry of Environment, Forest & Climate Change",
  organization: "Government of India",
  description:
    "Army veteran and sustainability leader with extensive experience in CSR, social impact, education and environmental initiatives.",
  image: "",
  linkedin: "https://linkedin.com",
},

{
  id: 8,
  name: "Shri P. Udayakumar",
  designation: "Ex-Chairman & Managing Director",
  organization: "National Small Industries Corporation (NSIC)",
  description:
    "Experienced MSME leader with expertise in strategic planning, marketing, enterprise development and growth support for small industries.",
  image: "",
  linkedin: "https://linkedin.com",
},
];

const AdvisoryCouncil = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <section className="advisory-section" id="board-of-advisors">
      <div className="advisory-container">
        {/* Header */}
        <div className="advisory-header" data-aos="fade-up">
          <span className="advisory-badge">Leadership & Governance</span>
          <h2 className="advisory-title">Advisory Council</h2>
          <div className="title-divider">
            <span className="sparkle">✦</span>
            <span className="line"></span>
            <span className="sparkle">✦</span>
          </div>
          <p className="advisory-subtitle">
            Distinguished experts, policymakers, and academics guiding the
            strategic roadmap for India's sustainable enterprise ecosystem.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="advisory-grid">
          {advisoryMembers.map((member, index) => (
            <div
              className="advisory-card"
              key={member.id}
              data-aos="flip-left"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              {/* Photo Card / Avatar Box */}
              <div className="card-photo-wrapper">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-img"
                  />
                ) : (
                  <div className="photo-placeholder">
                    <FaUserTie className="placeholder-icon" />
                    <span className="placeholder-text">Photo Unavailable</span>
                  </div>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-social-btn"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>

              {/* Text / Name Card Details */}
              <div className="card-details">
                <div className="member-meta">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-designation">{member.designation}</p>
                  <p className="member-organization">{member.organization}</p>
                </div>

                <p className="member-bio">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCouncil;
