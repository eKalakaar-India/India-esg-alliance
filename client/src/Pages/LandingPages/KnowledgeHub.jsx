import {useEffect} from 'react'
import Navbar from '../../components/Landing Components/Navbar'
import Footer from '../../components/Landing Components/Footer'
import KnowledgeHero from '../../components/Landing Components/KnowledgeHero'
import AllianceDirectory from '../../components/Landing Components/AllianceDirectory'
import ConsultationCTA from '../../components/Landing Components/ConsultationCTA'
import ResearchReports from '../../components/Landing Components/ResearchReports'
import PolicyDirectory from '../../components/Landing Components/PolicyDirectory'
import PractitionerInsights from '../../components/Landing Components/Blogs'
import EsgBriefingsignup from '../../components/Landing Components/Newsletter'

const KnowledgeHub = () => {

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
      <div>
        <Navbar />
      </div>
      <div data-aos="fade-up">
        <KnowledgeHero />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ResearchReports />
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        <PolicyDirectory />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <PractitionerInsights />
      </div>
      <div data-aos="fade-up" data-aos-delay="250">
        <EsgBriefingsignup />
      </div>

      {/* <AllianceDirectory /> 
      <ConsultationCTA /> */}

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default KnowledgeHub