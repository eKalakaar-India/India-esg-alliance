import React from 'react'
import iimlucknow from '../../assets/iimlucknow.webp'
import afc from '../../assets/afc.webp'
import kpf from '../../assets/kpf.webp'
import pantiss from '../../assets/pantiss.webp'
import see from '../../assets/see.webp'
import si from '../../assets/si.webp'
import upgovt from '../../assets/upgovt.webp'


const data =[
    {
        img:afc,
        para:'AFC India Limited - AFC India Ltd. (formerly Agricultural Finance Corporation Ltd.), is a multi-disciplinary cross-functional development organization providing consulting, advisory and implementation support for agriculture, rural development and other strategic socio-economic sectors in India. AFC India Limited is one of the earlier supports for the India ESG Alliance and supports its initiatives like India ESG Summits and capacity building trainings and workshops. '
    },
    {
        img:kpf,
        para:'KP Foundation was established with the vision of creating a society where every individual can live with dignity and access opportunities for sustainable growth and development. Guided by the philosophy of “No Poverty – Only Dignity,” foundation works across aspirational and underserved regions in Andhra Pradesh, Telangana, Uttar Pradesh, Madhya Pradesh and Karnataka and other parts of country to promote inclusive and sustainable development. KP foundation is one of the organizations that supports IEA in developing knowledge resources materials for the trainings and workshops on MDP, EDP and Business Plannings for the MSMEs in Southern state of India like Andhra Pradesh, Telangana and Karnataka. '
    },
    {
        img:pantiss,
        para:'PANTISS is a Not-for-Profit organization that has it headquarter based in Odisha. It is an organization formed to provide social sector consulting, capacity building & to be India’s leading information & knowledge hub for the development sector with a presence in Chhattisgarh, Jharkhand & West Bengal other than Odisha. The organization is working in the areas of Entrepreneurship, Livelihoods, Skilling, WASH and Climate Change majorly for the mining-affected communities and the youth of the state specifically youth from mining-affected communities, tribal communities, PVTGs.  PANTISS being one of the founding sponsors of India ESG Summits provide financial and technical support to the India ESG Alliance. '
    },
    {
        img:see,
        para:'Sustain Edge ESG LLP, an expert consulting firm that specializes in corporate sustainability and Environmental, Social, and Governance (ESG) strategy.SEEL brings specialized expertise in ESG strategy, energy transition, ESG frameworks and regulatory compliance, capacity building, ESG assurance and ESG rating support. India ESG Alliance provides the broader ecosystem, strategic direction, stakeholder engagement, industry networks and market linkages, while SEEL contributes technical expertise and domain-specific solutions. Together, we aim to facilitate ESG adoption, strengthen responsible business practices, build institutional capacity and create meaningful business opportunities aligned with sustainable development. Collaborative assignments are undertaken on a mutually agreed basis, with the scope, deliverables and commercial terms defined for each engagement.'
    },
    {
        img:si,
        para:'Sustainability Intelligence India ESG Alliance have joined the hands to promote informed, evidence-based engagement on emerging sustainability issues and facilitate partnerships among businesses, institutions and key stakeholders to accelerate a sustainable future for South Asia. We supports organizations in strengthening how sustainability decisions are understood and addressed across complex and evolving areas such as environmental quality, biodiversity, social development and climate change.'
    },
    {
        img:upgovt,
        para:'Government of Uttar Pradesh is one of the first government entity that supported India ESG Alliance in organizing India ESG Alliance summit in Lucknow.'
    },
    {
        img:iimlucknow,
        para:"IIM Lucknow (IIM Lucknow) is globally recognized as one of India's premier public business schools. Operating from its flagship 200-acre academic core in Lucknow and a dedicated executive campus in Noida, the institute is celebrated for its rigorous academic programs, world-class research, and global accreditations. IIM Lucknow was academic collaborator of the India ESG Alliance, contributing specialized knowledge, academic expertise and institutional resources for the India ESG summit that was organized in IIM Lucknow campus."
    },

]


const PartnersAndClientAboutPage = () => {
  return (
    <div className="cbm-modal">
        <div className="cbm-header">
        <div className="cbm-header-text">
            <span className="cbm-tag"></span>
            <h2 className="cbm-title">Our Partners &amp; Clients</h2>
        </div>
        </div>

        <div className="cbm-body">

        {/* Alternate Side-by-Side Rows */}
        <div className="cbm-alternate-list">
            {data.map((module, index) => (
            <div
                key={index}
                id={index}
                className="cbm-row-pair"
            >
                {/* Content Card */}
                <div
                className={`cbm-card ${
                    module.isCenterCard ? "cbm-center-card" : ""
                }`}
                >
                {/* <div className="cbm-card-header">
                    <div className="cbm-card-icon">{module.icon}</div>
                    <span className="cbm-card-badge">{module.badge}</span>
                </div> */}

                <p className="cbm-card-desc">{module.para}</p>

                {/* {module.focusAreas && (
                    <div className="cbm-focus-section">
                    <span className="cbm-section-label">Key Focus Areas</span>
                    <ul className="cbm-bullet-list">
                        {module.focusAreas.map((item, idx) => (
                        <li key={idx}>
                            <span className="cbm-bullet-dot" />
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}

                {module.sectors && (
                    <div className="cbm-focus-section">
                    <span className="cbm-section-label">
                        <FaIndustry style={{ marginRight: 6 }} /> Sector Focus
                    </span>
                    <div className="cbm-sector-tags">
                        {module.sectors.map((sector, idx) => (
                        <span key={idx} className="cbm-sector-tag">
                            {sector}
                        </span>
                        ))}
                    </div>
                    </div>
                )}

                {module.targetGroup && (
                    <div className="cbm-target-box">
                    <FaUsers className="cbm-target-icon" />
                    <div>
                        <strong>Target Group:</strong> {module.targetGroup}
                    </div>
                    </div>
                )} */}
                </div>

                {/* Companion Side Image */}
                <div className="cbm-image-wrapper-about">
                <img
                    src={module.img}
                    alt="Image"
                    className="cbm-row-img-about"
                    loading="lazy"
                />
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default PartnersAndClientAboutPage
