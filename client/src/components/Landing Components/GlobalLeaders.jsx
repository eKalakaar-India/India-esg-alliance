import React from 'react'
import './Globalleader.css'
import global from '../../assets/greenfinance.svg'
import msme from '../../assets/MSME.svg'
import sustain from '../../assets/Sustain.svg'
import gov from '../../assets/GovIndia.svg'
import clean from '../../assets/Cleanenergy.svg'

const GlobalLeaders = () => {
  return (
    <div className='leader-div'>
        <p style={{fontSize:"20px", fontWeight:"300", letterSpacing:"3.2px", color:"#41493E"}}>SUPPORTED BY GLOBAL LEADERS</p>
        <div className="logo-section">
            <img src={global} alt= "icon"  />
            <img src={msme} alt= "icon"  />
            <img src={sustain} alt= "icon"  />
            <img src={gov} alt= "icon"  />
            <img src={clean} alt= "icon"  />
        </div>
    </div>
  )
}

export default GlobalLeaders