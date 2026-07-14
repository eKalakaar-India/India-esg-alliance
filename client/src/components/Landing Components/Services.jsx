import React from "react";
import "./Services.css";
import screen from '../../assets/screen.png'
import hand from '../../assets/Hand.svg'
import book from '../../assets/book.svg'
import {
  FaArrowRight,
  FaHandshake,
  FaBookOpen,
} from "react-icons/fa";


const ESGSolutions = () => {
  return (
    <section className="esg-solutions">
      <div className="esg-overlay"></div>

      <div className="esg-container">
        {/* Header */}
        <div className="esg-header">
          <div>
            <h2>Integrated ESG Solutions</h2>
            <p>
              Comprehensive ecosystem guide from awareness to compliance.
            </p>
          </div>

          <button className="view-btn">
            View All Solutions <FaArrowRight />
          </button>
        </div>

        {/* Grid */}
        <div className="esg-grid">

          {/* Left Featured Card */}
          <div className="featured-card glass">
            <div className="glass-overlay">,</div>

            <div className="card-image">
              <img
                src={screen}
                alt="Training"
              />
            </div>

            <div className="featured-content">

              <span className="badge">
                Capacity Building
              </span>

              <h3>
                ESG Training & Certifications
              </h3>

              <p>
                Expert-led modules for MSMEs to implement
                sustainable practices effectively.
              </p>

              <button className="primary-btn">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="right-grid">

            {/* Assessment */}

            <div className="assessment-card glass">

              <div className="assessment-left">

                <h3>Digital ESG Assessment</h3>

                <p>
                  Benchmarking tool for industry standards.
                </p>

                <button className="link-btn">
                  Start Assessment
                  <FaArrowRight />
                </button>

              </div>

              <div className="progress-circle">

                <svg width="150" height="150">

                  <circle
                    className="bg"
                    cx="75"
                    cy="75"
                    r="52"
                  />

                  <circle
                    className="progress"
                    cx="75"
                    cy="75"
                    r="52"
                  />

                </svg>

                <span>72%</span>

              </div>

            </div>

            {/* Bottom Cards */}

            <div className="small-cards">

              <div className="small-card glass">

                <div className="icon">
                  <img src={hand} alt='icon' />
                </div>

                <h4>Buyer Connect</h4>

                <p>
                  Matching compliant suppliers
                  with procurement leads.
                </p>

              </div>

              <div className="small-card glass">

                <div className="icon">
                  <img src={book} alt='icon' />
                </div>

                <h4>ESG Library</h4>

                <p>
                  Access policy whitepapers and
                  compliance checklists.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ESGSolutions;