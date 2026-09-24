import React, {useEffect} from 'react'
import Navbar from '../../components/Landing Components/Navbar';
import Footer from '../../components/Landing Components/Footer';
import BusinessOpportunitiesHero from '../../components/Landing Components/BusinessOpportunitiesHero';
import ExportGlobalMarkets from '../../components/Landing Components/ExportGlobalMarkets';
import GemPortal from '../../components/Landing Components/GemPortal';
import BuyerSellerMeets from '../../components/Landing Components/BuyersMeet';
import FourStepOpportunity from '../../components/Landing Components/FourStepOpportunity';
import MsmeMarketplace from '../../components/Landing Components/MsmeMarketplace';


const BusinessOpportunities = () => {

    useEffect(() => {
        const hash = window.location.hash;
    
        if (hash) {
          const id = hash.substring(1);
    
          // Wait for the page/sections to render
          setTimeout(() => {
            const element = document.getElementById(id);
    
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 100);
        }
    }, []);
  return (
    <div>
      <Navbar />
      <BusinessOpportunitiesHero />
      <ExportGlobalMarkets />
      <GemPortal />
      <BuyerSellerMeets />
      <MsmeMarketplace />
      <FourStepOpportunity />
      <Footer />
    </div>
  )
}

export default BusinessOpportunities
