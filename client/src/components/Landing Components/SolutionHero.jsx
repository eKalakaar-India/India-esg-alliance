import React from 'react'
import ParticlesBackground from './ParticlesBackround'
import './SolutionHero.css'

const SolutionHero = () => {
  return (
    <div className='solutionhero'>
        <ParticlesBackground link={true} />
        <div className="solhero-content">
            <p className="sol-hero-subtitle">
                SUSTAINABLE EXCELLENCE
            </p>
            <p className="sol-hero-title">
                Strategic <span> ESG Frameworks </span> for Global Competitiveness
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