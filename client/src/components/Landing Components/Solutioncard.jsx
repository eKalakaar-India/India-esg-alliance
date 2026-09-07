import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./solutioncard.css";
import hat from "../../assets/hat.svg";
import dashboard from "../../assets/dashboard.svg";
import time from "../../assets/time.svg";
import handshake from "../../assets/handshake.svg";
import cash from "../../assets/cash.svg";
import co2 from "../../assets/co2.svg";
import govt from "../../assets/govt.svg";
import assesmentimg from "../../assets/solassesment.png";
import { FaArrowRight } from "react-icons/fa";
import CapacityBuildingModal from "../Landing Components/CapacityBuildingModal";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutioncard = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  // Detect hash changes and smoothly scroll to the target service card
  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 25;

    const interval = setInterval(() => {
      const element = document.getElementById(targetId);
      attempts += 1;

      if (element) {
        clearInterval(interval);
        // Small delay to allow AOS / images to stabilize height
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else if (attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [location.pathname, location.hash]);

  return (
    <>
      <CapacityBuildingModal />
    </>
  );
};

export default Solutioncard;
