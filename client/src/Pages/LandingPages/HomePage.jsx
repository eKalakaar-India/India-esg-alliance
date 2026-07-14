import React from 'react'
import Navbar from '../../components/Landing Components/Navbar';
import Hero from '../../components/Landing Components/Hero'
import WhyESG from '../../components/Landing Components/WhyESG';
import Pioneer from '../../components/Landing Components/CompliancePath';
import Services from '../../components/Landing Components/Services';
import Footer from '../../components/Landing Components/Footer';
import IndustryExperts from '../../components/Landing Components/IndustryExperts';
import GlobalLeaders from '../../components/Landing Components/GlobalLeaders';


const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pioneer />
        <WhyESG />
        <Services />
        <GlobalLeaders />
        {/* <IndustryExperts /> */}
        <Footer />
    </div>
  )
}

export default HomePage