import React from 'react';
import GridCard from './GridCard';
import img from '../../assets/About/banner.avif'; // Update to the correct image later
import '../../css/AboutComponents/OurValues.css';

const OurValues = () => {
  // Vision & Mission Data
  const visionMissionData = [
    {
      title: "Our Vision",
      description: "To establish a strong global footprint by delivering excellence through innovative technologies and digital transformations. We aspire to be the partner of choice for organizations seeking comprehensive digital capabilities — from product ideation to enterprise-grade ERP deployments.",
      bgColor: "#f4fafe", // very light blue from screenshot
      cardBorderLeftColor: "#0033bf" // yasya blue
    },
    {
      title: "Our Mission",
      description: "Being the trusted digital transformation partner, we serve as the focal point for our customers' technology challenges. We adopt their goals with prime priority, delivering innovative solutions across Product Engineering, Quality Engineering, and ERP Systems that accelerate business outcomes.",
      bgColor: "#f1fdf9", // very light mint green
      cardBorderLeftColor: "#0033bf"
    }
  ];

  // Core Values Data
  const valuesData = [
    {
      title: "Integrity",
      description: "Ethical practices, honesty, and transparency in every engagement with unwavering commitment to trust",
      bgColor: "#eef2ff", // light lavender
      cardBorderTopColor: "#A32A2F" // dark red
    },
    {
      title: "Innovation",
      description: "Continuously pushing boundaries in technology to deliver cutting-edge solutions that drive real business value",
      bgColor: "#f0f8ff", // Alice blue
      cardBorderTopColor: "#A32A2F" 
    },
    {
      title: "Customer First",
      description: "Every decision guided by the customer's success - their challenges are our challenges, their wins are our wins",
      bgColor: "#fbeeec", // light pink
      cardBorderTopColor: "#A32A2F" 
    },
    {
      title: "Excellence",
      description: "Relentless pursuit of quality in every deliverable, from a single test case to enterprise-wide implementations",
      bgColor: "#fafafa", // Light grey
      cardBorderTopColor: "#A32A2F" 
    }
  ];

  return (
    <div className="our-values-con">
      
      {/* 1. Header & Hero Image Section */}
      <div className="values-header-section">
        <div className="values-header-text">
            <div className="our-val-left-con">
                <p className='sub-para-text' style={{padding:'0px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <span className="leadership-blue-square"></span> OUR VALUES
                </p>
                <h1 className='head-text'>Vision, Mission & Values</h1>
            </div>
            <div className="our-val-right-con">
                <p className='para-text'>
                    Built on leadership, engineered with precision,<br/> and delivered with accountability.
                </p>
            </div>
        </div>
        
        <div className="values-hero-image">
            <img src={img} alt="Yasya Core Values" />
        </div>
      </div>

      {/* 2. Vision and Mission Grid (2 Columns) */}
      <div className="vision-mission-grid">
        {visionMissionData.map((item, index) => (
            <GridCard 
                key={index}
                title={item.title}
                description={item.description}
                bgColor={item.bgColor}
                cardBorderLeftColor={item.cardBorderLeftColor}
                minHeight="280px"
            />
        ))}
      </div>

      <div className="core-values-grid">
        {valuesData.map((item, index) => (
            <GridCard 
                key={index}
                title={item.title}
                description={item.description}
                bgColor={item.bgColor}
                cardBorderTopColor={item.cardBorderTopColor}
                minHeight="260px"
            />
        ))}
      </div>

    </div>
  )
}

export default OurValues