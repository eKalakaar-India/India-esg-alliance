import React from 'react'
import Navbar from '../../components/Landing Components/Navbar'
import Footer from '../../components/Landing Components/Footer'
import SolutionHero from '../../components/Landing Components/SolutionHero'
import Solutioncard from '../../components/Landing Components/Solutioncard'
import WhyPartner from '../../components/Landing Components/WhyPartner'


const SolutionPage = () => {
  return (
    <div>
      <Navbar />
      <SolutionHero />
      <Solutioncard />
      <WhyPartner />
      <Footer />
    </div>
  )
}

export default SolutionPage