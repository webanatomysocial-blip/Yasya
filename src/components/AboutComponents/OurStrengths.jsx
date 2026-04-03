import React from 'react';
import GridCard from './GridCard';
import '../../css/AboutComponents/OurStrengths.css';

const OurStrengths = ({title='Our Strengths',icon=null,desc='',subTitle='LOREM IPSUM',align='',strengths=[{
      title: "Promoter Expertise",
      description: "25 years of strong hands-on SAP and technology experience from consultant to global head positions"
    },
    {
      title: "Core SME Partnership",
      description: "Our focal points and core SMEs are partners in the business \u2013 ensuring deep commitment and continuity"
    },
    {
      title: "Continuous Learning",
      description: "Well-focused training programs aligned with current technology trends ensuring team stays at the cutting edge"
    },
    {
      title: "Product Innovation",
      description: "Co-innovated proven products like S4H Right Data Tool for MIS and Media Management Solution"
    },
    {
      title: "Global Presence",
      description: "Operating from 3 locations in India, Singapore, and Canada with a 50+ strong team"
    },
    {
      title: "Financial Stability",
      description: "Zero-debt company with sustainable growth model ensuring long-term client partnership reliability"
    }],
    icons = [],
    border = ""
}) => {
    

  return (
    <div className="strengths-con">
      <div className={`strengths-headings-con ${align === 'center' ? 'strengths-headings-center' : ''}`}>
        <div className="strengths-left-headings">
          {subTitle && (
            <p className='sub-para-text' style={{ paddingBottom: '5px', textAlign: align, justifyContent: align }}>
              <span className="leadership-blue-square"></span>
              {subTitle}
            </p>
          )}
          {title && <h1 className='head-text' style={{ textAlign: align }}>{title}</h1>}
        </div>
        {desc && (
          <div className="strengths-right-headings">
            <p className='para-text' style={{ textAlign: align }}>{desc}</p>
          </div>
        )}
      </div>
      <div className="strengths-grid-container">
        {strengths.map((item, i) => (
            <GridCard 
                key={i}
                index={icons && icons[i] ? null : i + 1}
                icon={icons && icons[i]}
                title={item.title}
                description={item.description}
                bgColor="#fbfbfc"
                border={border}
                cardBorderLeftColor={border ? "" : "#281BCE"}
            />
        ))}
      </div>
    </div>
  );
};

export default OurStrengths;
