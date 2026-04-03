import React from 'react';
import '../../css/AboutComponents/Different.css';

const Different = () => {
  const valuesData = [
    {
      title: "End-to-End Digital Partner",
      description: "One partner for Product Engineering, Quality Engineering, and ERP Systems \u2013 no fragmented vendor management",
      bgClass: "diff-bg-cyan" 
    },
    {
      title: "Promoter-Led Delivery",
      description: "Our founders and directors with 15\u201325 years of hands-on experience personally oversee key engagements",
      bgClass: "diff-bg-pink" 
    },
    {
      title: "Zero Debt, Stable Partner",
      description: "Financially sound, zero-debt company ensuring long-term partnership stability and reinvestment in capabilities",
      bgClass: "diff-bg-pink" 
    },
    {
      title: "Agile & Right-Sized",
      description: "50+ specialists operating from 3 global locations \u2013 large enough to deliver, small enough to care",
      bgClass: "diff-bg-cyan" 
    },
    {
      title: "Innovation DNA",
      description: "Co-innovated proven products like S4H Right Data Tool for MIS and Media Management, with more in active development",
      bgClass: "diff-bg-cyan"
    },
    {
      title: "Domain Depth",
      description: "Deep industry expertise across Manufacturing, Process, Energy, FMCG, and Logistics with proven reference cases",
      bgClass: "diff-bg-pink" 
    }
  ];

  return (
    <div className="diff-con">
      <div className="diff-headings-con">

        <p className='sub-para-text' style={{padding:'5px'}}><span className="leadership-blue-square"></span>WHAT MAKES US DIFFERENT</p>
        <h1 className='head-text'>Why YASYA Technologies?</h1>  
      </div>
      <div className="diff-grid-container">
        {valuesData.map((item, index) => (
          <div className={`diff-card ${item.bgClass}`} key={index}>
             <div className="diff-card-top">
                <div className="diff-card-pipe"></div>
                <span className="diff-card-num">{index + 1}</span>
                <h3 className="diff-card-heading">{item.title}</h3>
             </div>
             <div className="diff-card-body">
                <p>{item.description}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Different;