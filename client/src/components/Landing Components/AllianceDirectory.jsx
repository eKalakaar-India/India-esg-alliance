import React, { useState, useEffect } from "react";
import "./AllianceDirectory.css";
import { FaArrowRight, FaCalendarAlt, FaRegFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const newsletters = [
  "Edition #42: New SEBI Mandates",
  "Edition #41: Global Supply Chain Ethics",
];

// Added ISO dates for accurate sorting
const trainingEvents = [
  {
    id: 2,
    date: "2026-09-10",
    month: "SEPT",
    day: "10",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Delhi",
    location: "Delhi",
    upcoming: false,
  },
  {
    id: 4,
    date: "2026-10-15",
    month: "OCT",
    day: "15",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Delhi/ Faridabad",
    location: "Delhi/ Faridabad",
    upcoming: false,
  },
  {
    id: 5,
    date: "2026-10-21",
    month: "OCT",
    day: "21-23",
    type: "Summit",
    title: "India ESG Summit (State Level)",
    subtitle: "Summit • Bhubaneswar",
    location: "Bhubaneswar",
    upcoming: false,
  },
  {
    id: 7,
    date: "2026-11-27",
    month: "NOV",
    day: "27",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Mumbai",
    location: "Mumbai",
    upcoming: false,
  },
  {
    id: 9,
    date: "2026-12-18",
    month: "DEC",
    day: "18",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Surat",
    location: "Surat",
    upcoming: false,
  },
  {
    id: 11,
    date: "2027-01-13",
    month: "JAN",
    day: "13-15",
    type: "Summit",
    title: "India ESG Summit (State Level)",
    subtitle: "Summit • Mumbai",
    location: "Mumbai",
    upcoming: false,
  },
  {
    id: 12,
    date: "2027-01-28",
    month: "JAN",
    day: "28",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Jaipur",
    location: "Jaipur",
    upcoming: false,
  },
  {
    id: 14,
    date: "2027-02-26",
    month: "FEB",
    day: "26",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Ahmedabad/ Sanand",
    location: "Ahmedabad/ Sanand",
    upcoming: false,
  },
  {
    id: 16,
    date: "2027-03-19",
    month: "MAR",
    day: "19",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Pune",
    location: "Pune",
    upcoming: false,
  },
  {
    id: 17,
    date: "2027-04-15",
    month: "APR",
    day: "15-17",
    type: "Summit",
    title: "India ESG Summit (State Level)",
    subtitle: "Summit • Ahamadabad / Haryana",
    location: "Ahamadabad / Haryana",
    upcoming: false,
  },
  {
    id: 18,
    date: "2027-04-23",
    month: "APR",
    day: "23",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Surat",
    location: "Surat",
    upcoming: false,
  },
  {
    id: 19,
    date: "2027-05-27",
    month: "MAY",
    day: "27",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Ahmedabad/ Sanand",
    location: "Ahmedabad/ Sanand",
    upcoming: false,
  },
  {
    id: 20,
    date: "2027-06-24",
    month: "JUN",
    day: "24",
    type: "Training",
    title: "1 Day Training: ESG Foundation & Business Sustainability",
    subtitle: "Training • Chennai / Tirupur",
    location: "Chennai / Tirupur",
    upcoming: false,
  },
  {
    id: 21,
    date: "2027-06-25",
    month: "JUN",
    day: "25-26",
    type: "Summit",
    title: "India ESG Summit (National Level)",
    subtitle: "Summit • Delhi",
    location: "Delhi",
    upcoming: false,
  },
];

const govtSchemes = [
  "SIDBI Green Finance Scheme",
  "MSME Sustainable (ZED) Certification",
  "Renewable Energy Subsidies 2026",
];

const AllianceDirectory = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    console.log(email);
    setEmail("");
  };

  // Sort upcoming events chronologically and take the top 3
  const topThreeTrainings = [...trainingEvents]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <section className="alliance-directory" id="example-anchor">
      {/* ================= HEADER ================= */}
      <div className="directory-header" data-aos="fade-up">
        <div>
          <h2>Alliance Directory</h2>
          <p>
            Access our curated database of schemes, certifications, training
            programs and sustainability resources for MSMEs.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="directory-grid">
        {/* ================= LEFT (Training Card) ================= */}
        <div
          className="training-card"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="training-header">
            <div className="training-title">
              <FaCalendarAlt />
              <h3>Training Calendar</h3>
            </div>
            <span className="status-pill">Upcoming</span>
          </div>

          <div className="training-list">
            {topThreeTrainings.map((event, idx) => {
              const isRange = event.day.includes("-");
              return (
                <div
                  className={`training-item ${event.upcoming ? "active" : ""}`}
                  key={event.id}
                >
                  {/* Dynamic Date Badge */}
                  <div
                    className={`training-date ${isRange ? "date-range" : ""}`}
                  >
                    <span className="month">{event.month}</span>
                    <h4
                      className={`day-number ${isRange ? "day-range-text" : ""}`}
                    >
                      {event.day}
                    </h4>
                  </div>

                  <div className="training-info">
                    <div className="training-type-badge">{event.type}</div>
                    <h4>{event.title}</h4>
                    <p>{event.subtitle}</p>
                  </div>

                  {idx === 0 && (
                    <button
                      className="register-btn"
                      onClick={() =>
                        window.open(
                          "https://www.indiaesgsummit.com/",
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      Register
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT (Govt Schemes Card) ================= */}
        <div
          className="scheme-card"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div className="scheme-title">
            <FaRegFileAlt />
            <h3>Govt. Schemes</h3>
          </div>

          <p className="scheme-description">
            Key incentives and financial aids for MSMEs adopting sustainable
            practices.
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
