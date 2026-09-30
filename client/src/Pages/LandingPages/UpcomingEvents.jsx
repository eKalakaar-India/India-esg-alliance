import { useState } from 'react'
import RegistrationModal from '../../components/Landing Components/RegistrationModal'
import './UpcomingEvents.css'
import esgexports from '../../assets/esg-exports.png'
import Navbar from '../../components/Landing Components/Navbar'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        {/* <section className="hero">
          <div className="hero-content">
            <span className="pill">ONE DAY TRAINING WORKSHOP</span>
            <h1>
              Business Opportunities <span className="accent">and ESG</span>
              <br />
              — Exclusively for MSMEs
            </h1>
            <p className="hero-sub">
              Unlock sustainable growth, access new markets and build a resilient future for your business.
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
            <img src={esgexports} alt="Business Opportunities and ESG - Exclusively for MSMEs" />
          </div>
        </section> */}
        <section className="workshop-banner" aria-labelledby="workshop-banner-title">
          <div className="workshop-banner__container">
            <header className="workshop-banner__header">
              <p className="workshop-banner__eyebrow">One-Day Training Workshop on</p>

              <h2 id="workshop-banner-title" className="workshop-banner__title">
                Business Opportunities & ESG – Exclusively for MSMEs
              </h2>

              <p className="workshop-banner__meta">
                <time className="workshop-banner__date" dateTime={"2026-10-17"}>
                  17 October 2026
                </time>
                <span className="workshop-banner__separator" aria-hidden="true">
                  ·
                </span>
                <span className="workshop-banner__day">Saturday</span>
                <span className="workshop-banner__separator" aria-hidden="true">
                  ·
                </span>
                <span className="workshop-banner__location">Mumbai</span>
              </p>
            </header>

            <div className="workshop-banner__cta-block">
              <h3 className="workshop-banner__cta-heading">Reserve your seat</h3>
              <p className="workshop-banner__cta-description">Limited seats for this one-day workshop in Mumbai.</p>

              <button
                className="workshop-banner__button"
                onClick={() => setIsModalOpen(true)}
              >
                Register Now
              </button>
            </div>
          </div>
        </section>
        <div className='event-body'>
          <section className="about">
            <h2>About the Program</h2>
            <p>
              Environmental, Social and Governance (ESG) principles have become central to business
              competitiveness, access to finance, responsible supply chains and export readiness. MSMEs
              increasingly face sustainability expectations from regulators, buyers, investors and financial
              institutions. This one-day workshop by India ESG Alliance is designed to build practical ESG
              capacity among MSMEs, entrepreneurs and professionals by combining conceptual understanding
              with hands-on tools and action planning.
            </p>
          </section>

          <section className="benefits">
            <h2>What You Will Gain</h2>
            <ul className="benefits-list">
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

      <footer className="site-footer">
        <p>Let's build responsible businesses. Let's build a sustainable India.</p>
        <p className="footer-contact">
          www.indiaesgalliance.com &nbsp;·&nbsp; indiaesgalliance@gmail.com
        </p>
      </footer>

      {isModalOpen && <RegistrationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}
