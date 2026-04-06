import React, { useState } from 'react'
import "../../css/HomeComponents/AboutComp.css"
import { FaAngleDoubleRight, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { TbChartBar } from 'react-icons/tb'
import { MdOutlinePublic, MdOutlineDescription, MdOutlineAdminPanelSettings } from 'react-icons/md'
import Tab1 from '../../assets/Home/Tab1.avif'
import Tab2 from '../../assets/Home/Tab2.jpg'
import Tab3 from '../../assets/Home/Tab3.jpg'
import Tab4 from '../../assets/Home/Tab4.webp'

const tabs = [
  {
    icon: TbChartBar,
    title: 'Lean, Cost-Effective & ROI-Driven',
    description: 'Every SAP initiative aligned with measurable ROI. PMO-monitored delivery ensuring business excellence and cost efficiency.',
    image: Tab1,
    caption: 'We craft a plan that fits business kinds timeline & values',
  },
  {
    icon: MdOutlinePublic,
    title: 'Innovative, Future-Ready Approach',
    description: 'Global Capability Center in Bangalore with 24rchitects dedicated to new dimensional SAP products. Technology collaboration with RV Universit',
    image: Tab2,
    caption: 'Smart plans, expert advice, growth with momentum',
  },
  {
    icon: MdOutlineDescription,
    title: 'Proven Industry Expertise',
    description: '40% Technical crew for new dimensions, 50% Functional experts, plus 7 Industry SMEs leading our COE team.',
    image: Tab3,
    caption: 'Lean financial tactics designed for maximum ROI.',
  },
  {
    icon: MdOutlineAdminPanelSettings,
    title: 'Scalable & Adaptive Systems',
    description: 'Technology-agnostic organisation. Active vendor for multinational companies. Zero debt, stable delivery partner.',
    image: Tab4,
    caption: 'Scale wealth with disciplined plans & advisor expertise.',
  },
]

const AboutComp = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (idx) => {
    if (idx === activeTab) return
    setActiveTab(idx)
  }
  return (
    <div className="home-about-con">
      <div className="home-about-left-con">
        <h2 className='sub-para-text'><span className="leadership-blue-square"></span>ABOUT US</h2>
        <h1 className='sub-head-text'>Enterprise ERP Transformation services</h1>
        <div className="home-about-buttons">
          <Link to="#" className='red-bg-btn'>
            Explore All Services <FaArrowRight />
          </Link>
          <Link to="#" className='black-bg-btn'>
            Read More
          </Link>
        </div>

        <div className="home-about-tabs">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon
            const isActive = activeTab === idx
            return (
              <div
                key={idx}
                className={`home-about-tab ${isActive ? 'active' : ''}`}
                onClick={() => handleTabClick(idx)}
              >
                <div className="tab-header">
                  <Icon className="tab-icon" />
                  <span className="tab-title">{tab.title}</span>
                </div>
                <div className="tab-body">
                  <p>{tab.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="home-about-right-con">
        {tabs.map((tab, idx) => (
          <div 
            key={idx} 
            className={`about-image-wrap ${activeTab === idx ? 'active-img' : ''}`}
          >
            <img
              src={tab.image}
              alt={tab.title}
              className="about-tab-image"
            />
            <div className="about-image-caption">
              <span className="caption-arrows"><FaAngleDoubleRight /></span>
              <p>{tab.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutComp