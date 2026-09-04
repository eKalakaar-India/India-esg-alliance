import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <CapacityBuildingModal/>
    </>
  );
};

export default Solutioncard;
