import React from 'react'
import './visionmission.css'
import education from '../../assets/education.svg'
import setting from '../../assets/setting.svg'
import assesment from '../../assets/assesment.svg'
import funding from '../../assets/Funding.svg'
import capacity from '../../assets/capacity.png'
import fundingimg from '../../assets/funding.png'
import aboutcheck from '../../assets/aboutcheck.svg' 


const VisionMission = () => {
  return (
    <div className='vision-mission-div'>
        <div className="vision-section">
            <div className='vision-main'>
                <p style={{fontSize:"18px", color:"#00450D", fontWeight:"500", letterSpacing:"1.6px"}}>OUR VISION</p>
                <p style={{ fontSize:"48px", color:"#191D17", fontWeight:"bold", width:"70%"}}>"Making India a global leader in
                    sustainable business through ethical
                    stewardship and radical innovation."</p>

                <div className='vision-flexbox'>
                    <div className="vision-metrics">
                        <p style={{fontSize:"48px", fontWeight:"bold", color:"#00450D"}}>1200+</p>
                        <p style={{fontSize:"16px", color:"#41493E"}}>MSMEs Onboarded</p>
                    </div>
                    <div className="vision-metrics" style={{borderLeft:"1px solid #C0C9BB", borderRight:"1px solid #C0C9BB"}}>
                        <p style={{fontSize:"48px", fontWeight:"bold", color:"#00450D"}}>350+</p>
                        <p style={{fontSize:"16px", color:"#41493E"}}>Assessments Completed</p>
                    </div>
                    <div className="vision-metrics">
                        <p style={{fontSize:"48px", fontWeight:"bold", color:"#00450D"}}>$2B+</p>
                        <p style={{fontSize:"16px", color:"#41493E"}}>Impact Capital Facilitated</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mission-section">
            <div className="mission-header">
                <p style={{fontSize:"32px", fontWeight:"700", color:"#191D17"}}>The Pillars of our Mission</p>
                <p style={{ fontSize:"18px", color:"#41493E", width:"50%"}}>We operationalize sustainability through four strategic domains, ensuring measurable
                    value for both people and planet.</p>
            </div>

            <div className="mission-cards-section">
                <div className="mission-card-row">
                    <div className="mission-card1">
                        <div className="card1 education">
                            <img width={50} height={50} src={education} alt='icon' />
                            <p style={{fontSize:"26px", fontWeight:"600", color:"#191D17"}}>ESG Education</p>
                            <p style={{fontSize:"18px", color:"#41493E"}}>Curated academic and professional programs designed to bridge
                                the ESG knowledge gap for C-suite executives and operational
                                managers alike.</p>

                            <div className="details-card1">
                                <div className='tags-mission'>
                                    <p style={{backgroundColor:"#ECEFE6", fontSize:"14px", fontWeight:"600", color:"#191D17", padding:"10px", borderRadius:"12px"}}>Executive Seminars</p>
                                    <p style={{backgroundColor:"#ECEFE6", fontSize:"14px", fontWeight:"600", color:"#191D17", padding:"10px", borderRadius:"12px"}}>Board Readiness</p>
                                </div>
                                <p style={{ color:"#00450D", fontSize:"18px", cursor:"pointer"}}>Learn More{' >'} </p>
                            </div>
                        </div>
                    </div>
                    <div className="mission-card2">
                        <div className="card2 capacity">
                            <img width={50} height={50} src={setting} alt='icon' />
                            <p style={{fontSize:"26px", fontWeight:"600", color:"#191D17"}}>Capacity Building</p>
                            <p style={{fontSize:"18px", color:"#41493E"}}>Technical support for supply chain
                                        optimization and decarbonization
                                        strategy implementation.</p>

                        </div>
                        <div className="details-card2">
                            <img className='img' src={capacity} alt='image' />
                        </div>
                    </div>
                </div>
                <div className="mission-card-row2">
                    <div className="mission-card4">
                        <div className="card4 funding">
                            <img width={50} height={50} src={funding} alt='icon' />
                            <p style={{fontSize:"26px", fontWeight:"600", color:"#191D17"}}>Funding Access</p>
                            <p style={{fontSize:"18px", color:"#41493E"}}>Connecting ESG-compliant enterprises with
                                                                    global impact investors and green finance
                                                                    instruments.</p>
                            <p style={{backgroundColor:"#191D17", color:"white", padding:"15px", borderRadius:"12px", width:"45%", cursor:"pointer"}}>Explorer Fund Partners</p>

                        </div>
                        <div className="details-card4">
                            <img src={fundingimg}  alt='pic' />
                        </div>
                    </div>
                    <div className="mission-card3">
                        <div className="card2 capacity">
                            <img width={50} height={50} src={assesment} alt='icon' />
                            <p style={{fontSize:"26px", fontWeight:"600", color:"#191D17"}}>Assessment</p>
                            <p style={{fontSize:"16px", color:"#41493E"}}>Proprietary ESG scoring models
                                calibrated for the unique challenges of
                                the Indian market.</p>
                            <p style={{color:"#003A75", fontSize:"12px", fontWeight:"bold", display:"flex", justifyContent:"flex-start", gap:"20px" , alignItems:"center"}}> <img width={16} height={16} style={{backgroundColor:"none", padding:"0px"}} src={aboutcheck} alt='icon' /> BRSR Compliant</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisionMission