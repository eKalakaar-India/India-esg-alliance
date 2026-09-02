import React from 'react'
import './about.css'
import arrow from '../../assets/arrow.svg'
import container from '../../assets/Container.svg'
import shield from '../../assets/shield.svg'

const WhyESG = () => {
  return (
    <div className='esg-about'>
        <div className='about'>
            <p className="about-title">Why ESG Matters</p>
            <p className="about-desc">Beyond compliance, ESG is a strategic lever for value creation and long-term resilience.</p>
        </div>
        <div className="about-card-section">
            <div className="about-card">
                <img src={arrow} alt="icon" width={80} height={80} style={{backgroundColor:"#f1f6ff", padding:"10px", border:"1px solid #d3d3d3", borderRadius:"10px"}} />
                <p style={{fontSize:"60px", fontWeight:"bold", color:"#00450D"}}>2.5x</p>
                <p style={{fontSize:"24px", fontWeight:"600"}}>Capital Access</p>
                <p style={{fontSize:"16px", color:"#41493E"}}>Companies with high ESG scores enjoy significantly better access to green financing.</p>
            </div>
            <div className="about-card" style={{outline:"1px solid #1B6D24", borderTop:"5px solid #1B6D24"}}>
                <img src={container} alt="icon" width={80} height={80} style={{backgroundColor:"#f1f6ff", padding:"10px", border:"1px solid #d3d3d3", borderRadius:"10px"}} />
                <p style={{fontSize:"60px", fontWeight:"bold", color:"#1B6D24"}}>80%</p>
                <p style={{fontSize:"24px", fontWeight:"600"}}>Buyer Preference</p>
                <p style={{fontSize:"16px", color:"#41493E"}}>Global buyers now prioritize suppliers with documented ESG compliance.</p>
            </div>
            <div className="about-card">
                <img src={shield} alt="icon" width={80} height={80} style={{backgroundColor:"#deedf8", padding:"10px", border:"1px solid #d3d3d3", borderRadius:"10px"}} />
                <p style={{fontSize:"60px", fontWeight:"bold", color:"#003A75"}}>40%</p>
                <p style={{fontSize:"24px", fontWeight:"600"}}>Risk Mitigation</p>
                <p style={{fontSize:"16px", color:"#41493E"}}>Early ESG adoption reduces legal liabilities and operational risks.</p>
            </div>
            
        </div>
    </div>
  )
}

export default WhyESG