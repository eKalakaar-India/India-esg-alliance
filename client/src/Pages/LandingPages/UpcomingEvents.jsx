import { useState, useEffect } from 'react'
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
import RegistrationModal from '../../components/Landing Components/RegistrationModal'
import './UpcomingEvents.css'
import esgexports from '../../assets/esg-exports.png'
import Navbar from '../../components/Landing Components/Navbar'
import Footer from '../../components/Landing Components/Footer'
import events1 from '../../assets/events1.jpeg'
import events2 from '../../assets/events2.jpeg'
import events3 from '../../assets/events3.jpeg'


const carouselImages = [
  { src: events1, alt: "National Summit Conclave Overview 1" },
  { src: events2, alt: "National Summit Keynote Session 2" },
  { src: events3, alt: "National Summit Panel Discussion 3" }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  return (
    <div className="page">
        <Navbar />
      <header className="site-header">
        <div className="brand">
          <span className="brand-name">INDIA ESG ALLIANCE</span>
          <span className="brand-tagline">LEARN &nbsp;|&nbsp; GROW &nbsp;|&nbsp; BUILD A SUSTAINABLE FUTURE</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="pill">ONE DAY TRAINING WORKSHOP</span>
            <h1>
              Business Opportunities <span className="accent">and ESG</span>
              <br />
              — Exclusively for MSMEs
            </h1>
            <p className="hero-sub">
              Training by industry veterans, professors from premier institutions (IITs/IIMs), provides opportunity to get new business opportunities with diverse stakeholders - government, export and other businesses.
            </p>

            <div className="fact-row">
              <div className="fact">
                <span className="fact-label">Date</span>
                <span className="fact-value">17th October 2026</span>
              </div>
              <div className="fact">
                <span className="fact-label">Venue</span>
                <span className="fact-value">Mumbai</span>
              </div>
              <div className="fact">
                <span className="fact-label">Timing</span>
                <span className="fact-value">10:00 AM – 5:00 PM</span>
              </div>
              <div className="fact">
                <span className="fact-label">Training Fee</span>
                <span className="fact-value">₹2,500/-</span>
              </div>
            </div>

            <button className="cta-button" onClick={() => setIsModalOpen(true)}>
              Register Now
            </button>
          </div>

          <div className="hero-image">
            {/* <img src={esgexports} alt="ESG Exports" /> */}
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
          </div>

        </section>
        <div className='event-body'>
          <section className="about">
            <h2>About the Program</h2>
            <p>
              The programme addresses the growing need for MSMEs to integrate ESG into business strategy, improve operational efficiency, strengthen governance, manage risks, and enhance access to domestic and international markets. It also supports alignment with responsible business conduct and emerging export requirements. The workshop will also provide MSMEs the opportunity to be able to get new business from diverse stakeholders - government, export and other businesses - learn ways to increase their market access and reach, and about the new regulatory and compliance landscape evolving in India and globally.
            </p>
          </section>

          <section className="attendance">
            <h2>Who should attend</h2>
            <div className="attendance-list">
              MSMEs   •   Exporters   •   Startups   •   Industry associations   •   Cluster development orgs   •   Consultants   •   CSR & sustainability professionals   •   Financial institutions   •   Government agencies
            </div>
          </section>

          <section className="benefits">
            <h2>What You Will Gain</h2>
            <ul className="benefits-list">
              <li>Increase your market access and reach, learn about evolving regulatory and compliance landscape. </li>
              <li>Explore new business opportunities (domestic and export market)</li>
              <li>Understand the fundamentals of ESG and their growing importance for businesses</li>
              <li>Training delivery by experts from industry, IITs and IIMs</li>
              <li>Certificate on completion</li>
            </ul>
          </section>

        </div>


        <section className="cta-band">
          <h2>Limited seats for this one-day workshop in Mumbai.</h2>
          <button className="cta-button" onClick={() => setIsModalOpen(true)}>
            Reserve Your Seat
          </button>
        </section>
      </main>

      {/* <footer className="site-footer">
        <p>Let's build responsible businesses. Let's build a sustainable India.</p>
        <p className="footer-contact">
          www.indiaesgalliance.com &nbsp;·&nbsp; indiaesgalliance@gmail.com
        </p>
      </footer> */}

      <Footer />

      {isModalOpen && <RegistrationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}
