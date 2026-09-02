import './CompliancePath.css'
import boardroom from '../../assets/boardroom.png'
import inclusive from '../../assets/inclusive.png'
import certified from '../../assets/certified.png'

export default function Pioneer() {
  return (
    <section className="compliance-section">
      <div className="pioneer-content">
        <div className='img-room'>,
          <img src={boardroom} alt='boardroom' />
          <div className="room-content">
            <p style={{color:"#00450D", fontSize:"48px", fontWeight:"bold"}}>
              15+
            </p>
            <p style={{color:"#41493E", fontSize:"16px"}}>
              Years of Stewardship 
            </p>
          </div>
        </div>

        <div className="pioneer-content-section">
          <p style={{fontSize:"36px"}}>Pioneering Ethics in the Indian Market</p>
          <p style={{fontSize:"18px", color:"#41493E"}}>The India ESG Alliance is the premier multi-stakeholder platform
            dedicated to mainstreaming Environmental, Social, and Governance
            standards across the Indian corporate ecosystem.</p>
          <p style={{fontSize:"16px", color:"#41493E"}}>We bridge the gap between global expectations and local realities, providing
            MSMEs with the tools to become globally competitive while assisting large buyers
            in de-risking their supply chains.</p>
          <div style={{display:"flex", width:"100%", justifyContent:"space-between", gap:"20px", alignItems:"center"}}>
              <div style={{display:"flex", width:"50%", height:"90px", justifyContent:"center", alignItems:"center", backgroundColor:"white", border:"1px solid #717A6D", padding:"15px 0px", borderRadius:"12px", gap:"15px"}} >
                <img src={certified} alt="icon" />
                <div>
                  <p style={{fontSize:"18px", color:"#000"}}>Certified Standards</p>
                  <p style={{fontSize:"14px", color:"#41493E"}}>Aligned with BRSR & GlobalFrameworks</p>
                </div>
              </div>
              <div style={{display:"flex", width:"50%", height:"90px", justifyContent:"center", alignItems:"center", backgroundColor:"white", border:"1px solid #717A6D", padding:"15px 0px", borderRadius:"12px", gap:"15px"}}>
                <img src={inclusive} alt="icon" />
                <div>
                  <p  style={{fontSize:"18px", color:"#000"}}>Inclusive Growth</p>
                  <p style={{fontSize:"14px", color:"#41493E"}}>Focused on MSME empowerment</p>
                </div>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}