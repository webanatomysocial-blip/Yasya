import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
import dummyImage from '../../assets/About/banner.avif';
import '../../css/AboutComponents/Leadership.css';

const Leadership = () => {
  const leaders = [
    {
      name: "Anantha Yellapragada",
      title: "Founder & Director",
      points: [
        "25+ years of SAP hands-on experience",
        "Former Vice President \u2013 Global Technology, Sumaratech (Sutherland)",
        "Former Vice President \u2013 Global Technology, Sumaratech (Sutherland)",
        "Regional Delivery Manager, SEAL Infotech (HCL)",
        "Deep domain in Manufacturing, Process & Energy industries",
        "Independent Director, Abhinnyata (India/Singapore)"
      ]
    },
    {
      name: "Srinivas Reddy Chinnam ( CSR )",
      title: "Co-Founder & Director",
      points: [
        "20+ years of SAP and IT leadership experience",
        "UI/UX Design & Prototyping",
        "API Design & Microservices",
        "DevOps & CI/CD Pipelines",
        "Product Modernization & Re-engineering",
        "Strong track record in AMS and large-scale programs"
      ]
    }
  ];

  return (
    <div className="leadership-con">
      <div className="leadership-headings-con">
        <p className="sub-para-text" style={{padding:'5px'}}>
            <span className="leadership-blue-square"></span> MEET OUR FOUNDERS
        </p>
        <h1 className="head-text">Leadership</h1>
      </div>
      
      <div className="leadership-cards-grid">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <div className="leader-image-container">
              <img src={dummyImage} alt={leader.name} className="leader-img" />
            </div>
            <div className="leader-info">
              <h2 className="leader-name">{leader.name}</h2>
              <p className="leader-title">{leader.title}</p>
              
              <ul className="leader-points-list">
                {leader.points.map((point, idx) => (
                  <li key={idx} className="leader-point-item">
                    <span className="leader-point-icon">
                      <BsChevronDoubleRight />
                    </span>
                    <span className="leader-point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
