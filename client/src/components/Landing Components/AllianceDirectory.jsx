import React, {useState} from "react";
import "./AllianceDirectory.css";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaRegFileAlt,
  FaPlay,
  FaEnvelope,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";


import webinarImage from "../../assets/webinarImage.png";
// import storyImage from "../../assets/impact-story.jpg";

const newsletters = [
  "Edition #42: New SEBI Mandates",
  "Edition #41: Global Supply Chain Ethics",
];

const trainingEvents = [
  {
    id: 1,
    month: "OCT",
    day: "12",
    title: "BRSR Framework Intensive",
    subtitle: "Online Workshop • 4 Hours",
    upcoming: true,
  },
  {
    id: 2,
    month: "OCT",
    day: "24",
    title: "Scope 3 Emissions for Supply Chains",
    subtitle: "Mumbai Office • Full Day",
    upcoming: false,
  },
];

const govtSchemes = [
  "SIDBI Green Finance Scheme",
  "MSME Sustainable (ZED) Certification",
  "Renewable Energy Subsidies 2024",
];

const AllianceDirectory = () => {
     const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    console.log(email);
    setEmail("");
  };
  return (
    <section className="alliance-directory">

      {/* ================= HEADER ================= */}

      <div className="directory-header">

        <div>
          <h2>
            Alliance Directory
          </h2>

          <p>
            Access our curated database of schemes,
            certifications, training programs and
            sustainability resources for MSMEs.
          </p>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="directory-grid">

        {/* ================= LEFT ================= */}

        <div className="training-card">

          <div className="training-header">

            <div className="training-title">

              <FaCalendarAlt />

              <h3>Training Calendar</h3>

            </div>

            <span className="status-pill">
              Upcoming
            </span>

          </div>

          <div className="training-list">

            {trainingEvents.map((event) => (

              <div
                className={`training-item ${
                  event.upcoming ? "active" : ""
                }`}
                key={event.id}
              >

                <div className="training-date">

                  <span className="month">
                    {event.month}
                  </span>

                  <h4>{event.day}</h4>

                </div>

                <div className="training-info">

                  <h4>{event.title}</h4>

                  <p>{event.subtitle}</p>

                </div>

                <button className="register-btn">
                  Register
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="scheme-card">

          <div className="scheme-title">

            <FaRegFileAlt />

            <h3>Govt. Schemes</h3>

          </div>

          <p className="scheme-description">
            Key incentives and financial aids for MSMEs
            adopting sustainable practices.
          </p>

          <ul className="scheme-list">

            {govtSchemes.map((scheme, index) => (

              <li key={index}>

                <FaRegFileAlt />

                <span>{scheme}</span>

              </li>

            ))}

          </ul>

          <button className="scheme-btn">
            Explore Schemes
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
};

export default AllianceDirectory;