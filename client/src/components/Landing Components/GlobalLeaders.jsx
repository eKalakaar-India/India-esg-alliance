import React, { useEffect } from "react";
import "./Globalleader.css";
import iimlucknow from '../../assets/iimlucknow.webp'
import afc from '../../assets/afc.webp'
import kpf from '../../assets/kpf.webp'
import pantiss from '../../assets/pantiss.webp'
import see from '../../assets/see.webp'
import si from '../../assets/si.webp'
import upgovt from '../../assets/upgovt.webp'
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalLeaders = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);


  const brands = [ { src: iimlucknow, alt: "IIM Lucknow" }, { src: afc, alt: "AFC" }, { src: kpf, alt: "KPF" }, { src: pantiss, alt: "Pantiss" }, { src: see, alt: "SEE" }, { src: si, alt: "SI" }, { src: upgovt, alt: "UP Government" }, ];

  return (
    <div
      className="leader-div"
      data-aos="zoom-out-up"
      data-aos-anchor-placement="top-bottom"
    >
      <p
        style={{
          fontSize: "30px",
          fontWeight: "600",
          letterSpacing: "3.2px",
          color: "#0F2747",
        }}
      >
        OUR PARTNERS
      </p>
      <div className="brandcarousel-container">
         <div className="brandcarousel-track"> {/* First set */} 
          <div className="brandcarousel-group"> {brands.map((brand, index) => ( 
            <div className="brand-container" key={`first-${index}`}> 
            <img src={brand.src} alt={brand.alt} className="brand-logo" /> 
            </div> ))} 
          </div> {/* Identical second set */} 
          <div className="brandcarousel-group" aria-hidden="true"> 
            {brands.map((brand, index) => ( 
              <div className="brand-container" key={`second-${index}`}> 
              <img src={brand.src} alt="" className="brand-logo" /> 
              </div> ))} 
            </div> 
            </div> 
            </div>
    </div>
  );
};

export default GlobalLeaders;
