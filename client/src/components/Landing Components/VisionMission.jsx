import React, { useEffect } from "react";
import "./visionmission.css";
import bg1 from '../../assets/esgprop1.png'
import bg2 from '../../assets/esgprop2.png'

import {EyeDashed, Flag} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <div className="vision-mission-div"  style={{
        // backgroundImage: `url(${bg1})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backdropFilter:"10px"
        backgroundColor:"#2f7f7b2c"
      }}>
      {/* Vision Section */}
      <div className="vision-section" id="vision">
        <div
          className="vision-main"
          data-aos="flip-right"
          data-aos-duration="800"
        >
          <div className="vision-badge" style={{width:"30%"}}>
            <span className="vision-dot">
              <EyeDashed />
            </span>
            OUR VISION
          </div>
          <blockquote className="vision-quote">
            “Making India a global leader in sustainable business through
            ethical stewardship and radical innovation.”
          </blockquote>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section" id="mission">
        <div
          className="vision-main"
          data-aos="flip-right"
          data-aos-duration="800"
        >
          <div className="vision-badge" style={{width:"30%"}}>
            <span className="vision-dot" >
              <Flag />
            </span>
            OUR MISSION
          </div>
          <blockquote className="vision-quote">
            “To enable a credible and inclusive ESG ecosystem through knowledge, partnerships, and sustainable action.”
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
