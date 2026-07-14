import React from 'react'
import './solutioncard.css'
import hat from '../../assets/hat.svg'
import dashboard from '../../assets/dashboard.svg'
import time from '../../assets/time.svg'
import handshake from '../../assets/handshake.svg'
import cash from '../../assets/cash.svg'
import co2 from '../../assets/co2.svg'
import govt from '../../assets/govt.svg'
import assesmentimg from '../../assets/solassesment.png'
import { FaArrowRight } from 'react-icons/fa'


const Solutioncard = () => {
  return (
    <div className='sol-cards-div'>
        <div className="card small1" style={{ borderTop:"4px solid #003A75"}}>
            <div className="flexcol">
                <img src={hat} alt="icon" />
                <p className="sol-card-title">Training and Capacity Building</p>
                <p className="sol-card-desc">Executive coaching and organizational
                    workshops designed to embed
                    sustainability into core corporate strategy
                    and operational workflows.</p>

                <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
            </div>
        </div>
        <div className="card med2" style={{ borderTop:"4px solid #F9A825"}}>
            <div className="flexrow">
                <div className="flexcol">
                    <img src={dashboard} alt="icon" />
                    <p className="sol-card-title">Online Assessment Tool</p>
                    <p className="sol-card-desc">Rapid digital diagnostics to identify gaps in
                        your current ESG disclosures and performance
                        metrics against global benchmarks.</p>

                    <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
                </div>
                <img className='asses-img' src={assesmentimg} alt="img" />
            </div>
        </div>
        <div className="card small3" style={{ borderTop:"4px solid #1B6D24"}}>
            <div className="flexcol">
                <img src={time} alt="icon" />
                <p className="sol-card-title">ESG Maturity Score</p>
                <p className="sol-card-desc">A standardized scoring mechanism
                    validated by the India ESG Alliance to
                    communicate performance to investors
                    and stakeholders.</p>

                <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
            </div></div>
        <div className="card small4" style={{ borderTop:"4px solid #003A75"}}>
            <div className="flexcol">
                <img src={handshake} alt="icon" />
                <p className="sol-card-title">Connect with Buyers</p>
                <p className="sol-card-desc">Exclusive B2B marketplace connecting
                    ESG-compliant suppliers with global procurement leads seeking sustainable
                    supply chain partners.</p>

                <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
            </div>
        </div>
        <div className="card small5" style={{ borderTop:"4px solid #F9A825"}}>
            <div className="flexcol">
                <img src={cash} alt="icon" />
                <p className="sol-card-title">Green Finance Opportunities</p>
                <p className="sol-card-desc">Advisory and access to climate-aligned
                    capital, sustainability-linked loans, and specialized green investment vehicles.</p>

                <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
            </div>
        </div>
        <div className="card med6" style={{ borderTop:"4px solid #1B6D24"}}>
            <div className="flexcol">
                <img src={co2} alt="icon" />
                <p className="sol-card-title">Carbon Credits</p>
                <p className="sol-card-desc">End-to-end management of carbon offsetting
                    strategies, from project identification to credit
                    trading on international registries.</p>

                <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
            </div>
        </div>
        <div className="card med7" style={{ borderTop:"4px solid #003A75"}}>
            <div className="flexcol">
                <img src={govt} alt="icon" />
                <p className="sol-card-title">Government Schemes</p>
                <p className="sol-card-desc">Detailed repository and navigation support for national incentives,
                    MSME subsidies, and policy-driven ESG benefits provided by the
                    Government of India.</p>

                <p className="sol-card-learnmore"> Learn More <FaArrowRight /> </p>
            </div>
        </div>
    </div>
  )
}

export default Solutioncard