import React from 'react'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { FaArrowRight } from 'react-icons/fa'
import "../../css/HomeComponents/Enterprise.css"

const data = [
  {
    id:1,
    title: "Product Engineering",
    desc: "Our engineering teams leverage modern tech stacks, cloud-native architectures, and DevOps best practices to deliver scalable, maintainable products that drive measurable business outcomes."
  },
  {
    id:2,
    title: "Quality Engineering",
    desc: "We adopt a shift-left quality strategy that embeds testing from day one."
  },
  {   
    id:3,
    title: "ERP Systems",
    desc: "SAP BTP, CPI/PI/PO integration, MDG, SAC analytics, GRC, and third-party system connectivity"
  },
  {
    id:4,
    title: "S/4HANA Implementation",
    desc: "End-to-end greenfield/brownfield implementations, ECC to S/4H conversions, SoH migrations, and RISE/GROW with SAP"
  },
  {
    id:5,
    title: "Application Management",
    desc: "24x7 support with hybrid onsite/offshore models, incident management, SLA-driven operations, and continuous improvement"
  },
  {
    id:6,
    title: "Tech Factory",
    desc: "Predictive support. Intelligent automation. Proactive governance. From reactive to predictive intelligence."
  },
  {
    id:7,
    title: "Solution CIO & Bluefield",
    desc: "Expert SAP consultants on-demand, flexible engagement models for enterprise needs."
  },
  {
    id:8,
    title: "Talent on Demand",
    desc: "Certified functional and technical consultants for project augmentation and corporate SAP training programs"
  },
  {
    id:9,
    title: "Integration & BTP",
    desc: "SAP BTP, CPI/PI/PO integration, MDG, SAC analytics, GRC, and third-party system connectivity"
  }
];

const EnterpriseCards = () => {
    return (
      <div className="enterprise-cards-con">
        {data.map((card) => (
          <div className="enterprise-card" key={card.id}>
            <div className="enterprise-inner-card">
              
              <div className="enterprise-icon">
                <HiOutlineBuildingOffice2 />
              </div>

              <h3 className="enterprise-card-title">{card.title}</h3>
              <p className="enterprise-card-desc">{card.desc}</p>

              <button className="enterprise-card-btn">
                <span>Explore More</span> <FaArrowRight size={12} />
              </button>
              
            </div>
          </div>
        ))}
      </div>
    )
}


const Enterprise = () => {
  return (
    <>
      <div className="enterprise-con">
          <div className="enterprise-headings-left">
              <p className='sub-para-text' style={{color:"#B51B20", fontWeight: "600", marginBottom: "12px"}}>
               ERP Systems & SAP Services
              </p>
              <h1 className='head-text'>Your Trusted & Enterprise Solutions Partner</h1>
          </div>
          <div className="enterprise-headings-right">
              <p className='sub-para-text'>
               With 15–25 years of hands-on SAP experience across our leadership team, YASYA delivers comprehensive ERP solutions – from greenfield implementations to complex S/4HANA migrations. We combine deep functional expertise with a modern Technical Factory, ensuring seamless integration of SAP with broader digital ecosystems.
              </p>
          </div>
      </div>
      <EnterpriseCards />
     
    </>
  )
}

export default Enterprise