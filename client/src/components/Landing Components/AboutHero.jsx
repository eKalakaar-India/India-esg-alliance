import React from 'react'
import './Abouthero.css'
import hero from '../../assets/Abouthero.png'
import { FaArrowRight } from 'react-icons/fa'

const AboutHero = () => {
  return (
    <div className='about-hero'>
        <div className='about-typo'>
            <p className='tag-about'>Est. 2020 • Driving Sustainability</p>
            <p className="about-hero-title">Accelerating <span style={{color:"#00450D"}}> ESG Adoption </span> across the Indian landscape.</p>
            <p className="about-hero-desc">India ESG Alliance is the premier multi-stakeholder platform
                dedicated to empowering Indian corporations, investors, and
                MSMEs with the tools and intelligence required to lead in the
                circular economy.</p>

            <div className="about-hero-btn">Our Impact Report <FaArrowRight /> </div>
        </div>

        <div className='about-hero-img'>
            <img src={hero} alt='hero' />
        </div>

    </div>
  )
}

export default AboutHero