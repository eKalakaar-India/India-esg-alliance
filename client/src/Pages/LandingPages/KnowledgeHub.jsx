import React from 'react'
import Navbar from '../../components/Landing Components/Navbar'
import Footer from '../../components/Landing Components/Footer'
import KnowledgeHero from '../../components/Landing Components/KnowledgeHero'
import AllianceDirectory from '../../components/Landing Components/AllianceDirectory'
import ConsultationCTA from '../../components/Landing Components/ConsultationCTA'


const KnowledgeHub = () => {
  return (
    <div>
      <Navbar />
      <KnowledgeHero />
      <AllianceDirectory /> 
      <ConsultationCTA />
      <Footer />
    </div>
  )
}

export default KnowledgeHub