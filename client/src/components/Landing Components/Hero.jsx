import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const textSlides = [
  <>
    Empowering Indian MSMEs for{" "}
    <span className="text-highlight1">Global ESG Excellence</span>
  </>,
  <>
    Building Responsible. <span className="text-highlight2">Competitive.</span>{" "}
    Future-Ready Businesses.
  </>,
  <>
    Grow Your Business. Access New Markets.{" "}
    <span className="text-highlight3">Build a Sustainable India.</span>
  </>,
  <>
    Grow Faster. Go Global, Make ESG Your{" "}
    <span className="text-highlight2">Competitive Advantage</span>
  </>,
  <>
    Powering MSME Growth Through{" "}
    <span className="text-highlight3">ESG, Innovation</span> & Global Market
    Access.
  </>,
  <>
    Grow Your Business.{" "}
    <span className="text-highlight1">Access Export Market</span>
  </>,
];

const Hero = () => {
  return (
    <div className="hero-main">
      {/* Background Image Carousel */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4500}
        showDots={false}
        arrows={false}
        transitionDuration={700}
        containerClass="carousel-container"
        itemClass="hero-bg-item"
      >
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${hero1})` }}
        />
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${hero2})` }}
        />
        <div
          className="hero-slide"
          style={{ backgroundImage: `url(${hero3})` }}
        />
      </Carousel>

      <div className="hero-overlay" />

      {/* Glassmorphic Center Card */}
      <div className="glass-card">
        <div className="hero-tag">
          <div className="green" />
          Advancing Sustainable MSMEs
        </div>

        {/* Independent Text Slider */}
        <div className="hero-text-slider">
          <Carousel
            responsive={responsive}
            infinite
            draggable={false}
            autoPlay
            autoPlaySpeed={3000}
            arrows={false}
            showDots={false}
            transitionDuration={500}
            containerClass="text-carousel-container"
          >
            {textSlides.map((item, index) => (
              <div key={index} className="hero-header">
                {item}
              </div>
            ))}
          </Carousel>
        </div>

        <p className="hero-para">
          Driving sustainable growth through innovation, ethics, and compliance.
          Unlocking the potential of Indian MSMEs in the global marketplace.
        </p>

        <div className="glass-btn">
          <div className="hero-btn1">
            Become A Member <FaArrowRight />
          </div>
          <div className="hero-btn2">Explore ESG Toolkit</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
