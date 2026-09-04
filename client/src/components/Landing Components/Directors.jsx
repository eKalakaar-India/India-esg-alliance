
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./WhyIEA.css";
// Import your director images (or replace with appropriate assets)
import sanjay from "../../assets/sanjaya.png";
import stalin from "../../assets/stalin.jpeg";

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

const Directors = () => {
    useEffect(() => {
        AOS.refreshHard();
      }, []);
  return (
    <div className="esg-directors-section" id="board-of-directors">
      <div className="esg-director-container">
        <header className="esg-director-header">
          <span className="esg-director-pill">Leadership & Governance</span>
          <h2 className="esg-director-title">Board of Directors</h2>
          <div className="title-divider" style={{justifySelf:"center"}}>
            <span className="sparkle">✦</span>
            <span className="line"></span>
            <span className="sparkle">✦</span>
          </div>
          <p className="esg-director-subtitle">
            Visionary leaders driving the alliance's mission with decades of impact in social entrepreneurship, environmental stewardship, and sustainable development.
          </p>
        </header>

        <div className="esg-director-grid">
          {directorsData.map((director) => (
            <article key={director.id} className="esg-director-card">
              <div className="esg-director-card-image-wrapper">
                <img
                  src={director.image}
                  alt={director.name}
                  className="esg-director-card-image"
                  loading="lazy"
                />
                <div className="esg-director-image-overlay" />
              </div>
              <div className="esg-director-card-content">
                <span className="esg-director-role-badge">{director.role}</span>
                <h3 className="esg-director-card-name">{director.name}</h3>
                <div className="esg-director-accent-line" />
                <p className="esg-director-card-bio">{director.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Directors
