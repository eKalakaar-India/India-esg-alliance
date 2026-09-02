import React from 'react'
import './Hero.css'
import { FaArrowRight } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const Hero = () => {

  
  return (
    <div className='hero-main'>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows={false}
        // keyBoardControl
        // draggable
        // swipeable
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-20-px"
      >
        <div className="hero-slide" style={{backgroundImage:`url(${hero1})`, height:"100%"}}></div>
        <div className="hero-slide" style={{backgroundImage:`url(${hero2})`, height:"100%"}}></div>
        <div className="hero-slide" style={{backgroundImage:`url(${hero3})`, height:"100%"}}></div>
      </Carousel>
      <div className="hero-overlay" />

      <div className="glass-card">
        <div className='hero-tag'>
          <div className="green"></div>
          Advancing Sustainable MSMEs
        </div>
        <p className='hero-header'>
          Empowering Indian MSMEs for <span style={{color:"#88D982"}}> Global ESG Excellence </span>
        </p>
        <p className="hero-para">
          Driving sustainable growth through innovation, ethics, and compliance. Unlocking the potential of Indian MSMEs in the global marketplace.
        </p>

        <div className="glass-btn">
          <div className='hero-btn1'>
            Get Started Today <FaArrowRight />
          </div>
          <div className="hero-btn2">
            Explore ESG Toolkit
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero