import { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// 1. Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./Pages/LandingPages/HomePage";
import AboutPage from "./Pages/LandingPages/AboutPage";
import SolutionPage from "./Pages/LandingPages/SolutionPage";
import KnowledgeHub from "./Pages/LandingPages/KnowledgeHub";
import ContactUsPage from "./Pages/LandingPages/ContactUsPage";
import ScrollToTop from "./components/Landing Components/ScrollToTop";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out", // Default easing
      once: true, // Whether animation should happen only once while scrolling down
      offset: 100, // Offset (in px) from the original trigger point
    });
  }, []);

  // Refresh AOS calculations whenever the route/page changes
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  // Root redirect to /home
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/knowledgehub" element={<KnowledgeHub />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
