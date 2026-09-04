import React from 'react'
import './SolutionHero.css'

const SolutionHero = () => {
  return (
    <div className='solutionhero'>
        <div className='sol-hero-overlay' />
        <div className="solhero-content">
            <p className="sol-hero-subtitle">
                SUSTAINABLE EXCELLENCE
            </p>
            <p className="sol-hero-title">
                Capacity <span>Building & Training </span> 
            </p>
            <p className="sol-hero-desc">
                Empowering Indian enterprises with institutional-grade tools, governance
                frameworks, and green capital accessibility to navigate the evolving ESG
                landscape.
            </p>
        </div>
    </div>
  )
}

export default SolutionHero