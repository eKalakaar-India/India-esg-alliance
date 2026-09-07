import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ConferencesHeader from "../../components/Landing Components/ConferencesHeader";
import FlagshipSummitCard from "../../components/Landing Components/FlagshipSummitCard";
import StateSummitsSection from "../../components/Landing Components/StateSummitsSection";
import ExecutiveMasterclasses from "../../components/Landing Components/ExecutiveMasterclasses";
import AwardsBanner from "../../components/Landing Components/AwardsBanner";
import CorporateWorkshopBanner from "../../components/Landing Components/CorporateWorkshopBanner";
import Navbar from "../../components/Landing Components/Navbar";
import Footer from "../../components/Landing Components/Footer";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();

  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  // Handle smooth scroll when navigating from other pages via hash links
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setActiveTab("all"); // Ensure all components are rendered in DOM

      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <main
        className="events-page-wrapper"
        style={{
          width: "100%",
          backgroundColor: "#f7f9f6",
          minHeight: "100vh",
          padding: "40px 20px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="events-inner-container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <ConferencesHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* National Summit */}
          {(activeTab === "all" || activeTab === "flagship") && (
            <div id="national-summit" style={{ scrollMarginTop: "120px" }}>
              <FlagshipSummitCard />
            </div>
          )}

          {/* State Summits */}
          {(activeTab === "all" || activeTab === "state") && (
            <div id="state-summits" style={{ scrollMarginTop: "120px" }}>
              <StateSummitsSection />
            </div>
          )}

          {/* Training & Masterclasses */}
          {(activeTab === "all" || activeTab === "certifications") && (
            <div id="training-programs" style={{ scrollMarginTop: "120px" }}>
              <ExecutiveMasterclasses />
            </div>
          )}

          {/* Awards and Recognition */}
          <div id="awards" style={{ scrollMarginTop: "120px" }}>
            <AwardsBanner />
          </div>

          <CorporateWorkshopBanner />
        </div>
      </main>

      <Footer />
    </>
  );
}
