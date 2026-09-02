import React, { useState, useEffect } from "react";
import "./solutioncard.css";
import hat from "../../assets/hat.svg";
import dashboard from "../../assets/dashboard.svg";
import time from "../../assets/time.svg";
import handshake from "../../assets/handshake.svg";
import cash from "../../assets/cash.svg";
import co2 from "../../assets/co2.svg";
import govt from "../../assets/govt.svg";
import assesmentimg from "../../assets/solassesment.png";
import { FaArrowRight } from "react-icons/fa";
import CapacityBuildingModal from "../Landing Components/CapacityBuildingModal";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutioncard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <div className="sol-cards-div">
        {/* Card 1: Training and Capacity Building */}
        <div
          className="card small1"
          style={{ borderTop: "4px solid #003A75" }}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
        >
          <div className="flexcol">
            <img src={hat} alt="icon" />
            <p className="sol-card-title">Training and Capacity Building</p>
            <p className="sol-card-desc">
              Executive coaching and organizational workshops designed to embed
              sustainability into core corporate strategy and operational
              workflows.
            </p>
            <p onClick={() => setIsOpen(true)} className="sol-card-learnmore">
              Learn More <FaArrowRight />
            </p>
          </div>
        </div>

        {/* Card 2: Online Assessment Tool */}
        <div
          className="card med2"
          style={{ borderTop: "4px solid #F9A825" }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <div className="flexrow">
            <div className="flexcol">
              <img src={dashboard} alt="icon" />
              <p className="sol-card-title">Online Assessment Tool</p>
              <p className="sol-card-desc">
                Rapid digital diagnostics to identify gaps in your current ESG
                disclosures and performance metrics against global benchmarks.
              </p>
            </div>
            <img className="asses-img" src={assesmentimg} alt="img" />
          </div>
        </div>

        {/* Card 3: ESG Maturity Score */}
        <div
          className="card small3"
          style={{ borderTop: "4px solid #1B6D24" }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <div className="flexcol">
            <img src={time} alt="icon" />
            <p className="sol-card-title">ESG Maturity Score</p>
            <p className="sol-card-desc">
              A standardized scoring mechanism validated by the India ESG
              Alliance to communicate performance to investors and stakeholders.
            </p>
          </div>
        </div>

        {/* Card 4: Connect with Buyers */}
        <div
          className="card small4"
          style={{ borderTop: "4px solid #003A75" }}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="700"
        >
          <div className="flexcol">
            <img src={handshake} alt="icon" />
            <p className="sol-card-title">Connect with Buyers</p>
            <p className="sol-card-desc">
              Exclusive B2B marketplace connecting ESG-compliant suppliers with
              global procurement leads seeking sustainable supply chain
              partners.
            </p>
          </div>
        </div>

        {/* Card 5: Green Finance Opportunities */}
        <div
          className="card small5"
          style={{ borderTop: "4px solid #F9A825" }}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="700"
        >
          <div className="flexcol">
            <img src={cash} alt="icon" />
            <p className="sol-card-title">Green Finance Opportunities</p>
            <p className="sol-card-desc">
              Advisory and access to climate-aligned capital,
              sustainability-linked loans, and specialized green investment
              vehicles.
            </p>
          </div>
        </div>

        {/* Card 6: Carbon Credits */}
        <div
          className="card med6"
          style={{ borderTop: "4px solid #1B6D24" }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <div className="flexcol">
            <img src={co2} alt="icon" />
            <p className="sol-card-title">Carbon Credits</p>
            <p className="sol-card-desc">
              End-to-end management of carbon offsetting strategies, from
              project identification to credit trading on international
              registries.
            </p>
          </div>
        </div>

        {/* Card 7: Government Schemes */}
        <div
          className="card med7"
          style={{ borderTop: "4px solid #003A75" }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="700"
        >
          <div className="flexcol">
            <img src={govt} alt="icon" />
            <p className="sol-card-title">Government Schemes</p>
            <p className="sol-card-desc">
              Detailed repository and navigation support for national
              incentives, MSME subsidies, and policy-driven ESG benefits
              provided by the Government of India.
            </p>
          </div>
        </div>
      </div>

      {/* Modal placed outside the grid container */}
      <CapacityBuildingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Solutioncard;
