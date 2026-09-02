import React from 'react'
import Navbar from '../../components/Landing Components/Navbar';
import AboutHero from '../../components/Landing Components/AboutHero'
import WhyESG from '../../components/Landing Components/WhyESG';
import VisionMission from '../../components/Landing Components/VisionMission';
import Services from '../../components/Landing Components/Services';
import Footer from '../../components/Landing Components/Footer';
import IndustryExperts from '../../components/Landing Components/IndustryExperts';
import GlobalLeaders from '../../components/Landing Components/GlobalLeaders';
import CallToAction from '../../components/Landing Components/CalltoAction';


const AboutPage = () => {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <VisionMission />
        <IndustryExperts />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default AboutPage