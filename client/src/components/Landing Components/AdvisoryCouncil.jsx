import React, { useEffect } from "react";
import "./AdvisoryCouncil.css";
import { FaUserTie, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import prakash from "../../assets/Colonel Prakash Tewari (Retd.).png";
import krishna from "../../assets/Dr. Krishna Prasad.png";
import subhransu from "../../assets/Dr. Subhransu Sekhar Acharya.png";
import shankar from "../../assets/Prof. Shankar Murthy.png";
import awanesh from "../../assets/Mr. Awanesh Kalik.png";
import ashok from "../../assets/Shri Ashok Sethi.png";
import mashar from "../../assets/Shri Mashar Velapurath.png";
import sobins from "../../assets/Sobins Kuriakose.png";



const advisoryMembers = [
  {
    id: 1,
    name: "Colonel Prakash Tewari (Retd.)",
    designation: "Environment, Sustainability and Social Impact Expert",
    organization: "Advisor to NGOs, Multilateral Initiatives & Institutions",
    description:
      "Sustainability, governance, and social impact expert with extensive experience advising NGOs, multilateral initiatives, social-impact enterprises, and development institutions.",
    image: prakash, // Keep empty or provide path when available
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Dr. Krishna Prasad",
    designation: "Member of Parliament and Former IPS Officer",
    organization: "Government of India",
    description:
      "Eminent policymaker and governance leader championing structural ESG policies, public-private stewardship, and systemic educational reforms across India.",
    image: krishna,
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Dr. Subhransu Sekhar Acharya",
    designation: "Chairman-cum-Managing Director, NSIC",
    organization: "Ministry of Finance, Government of India",
    description:
      "Public enterprise and fiscal strategy veteran steering governance frameworks, sustainable enterprise scaling, and public sector ESG compliance.",
    image: subhransu,
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Prof. Shankar Murthy",
    designation: "Professor, Environmental Engineering and Management",
    organization: "IIM Mumbai",
    description:
      "Renowned academician guiding social impact evaluation, community development metrics, and inclusive grassroots sustainability models.",
    image: shankar,
    linkedin: "https://linkedin.com",
  },
  {
  id: 5,
  name: "Mr. Awanesh Kalik",
  designation: "DGM & CEO",
  organization: "AFC India",
  description:
    "Experienced leader in agriculture and rural development with expertise in policy engagement, project management and technical consultancy.",
  image: awanesh,
  linkedin: "https://linkedin.com",
},

{
  id: 6,
  name: "Shri Ashok Sethi",
  designation: "Sustainability and Corporate Leadership Expert",
  organization: "Tata Power / Tata Consulting Engineers",
  description:
    "Power sector veteran with over four decades of experience in strategic operations, regulatory advocacy, energy infrastructure and business growth.",
  image: ashok,
  linkedin: "https://linkedin.com",
},

{
  id: 7,
  name: "Shri Mashar Velapurath",
  designation:
    "Managing Director, AFC India Limited",
  organization: "Government of India",
  description:
    "Army veteran and sustainability leader with extensive experience in CSR, social impact, education and environmental initiatives.",
  image: mashar,
  linkedin: "https://linkedin.com",
},

{
  id: 8,
  name: "Sobins Kuriakose",
  designation: "Institution Development & Public Policy Specialist",
  organization: "National Small Industries Corporation (NSIC)",
  description:
    "Experienced MSME leader with expertise in strategic planning, marketing, enterprise development and growth support for small industries.",
  image: sobins,
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
