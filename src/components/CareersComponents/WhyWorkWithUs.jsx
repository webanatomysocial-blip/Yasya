import React from 'react';
import { MdFavorite, MdLightbulb, MdBarChart, MdEmojiEvents, MdBolt } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import '../../css/CareersComponents/WhyWorkWithUs.css';

const perks = [
  {
    icon: <MdFavorite />,
    title: "Mission-Driven Work",
    desc: "Be part of real digital transformation — your work directly impacts enterprise outcomes across global industries."
  },
  {
    icon: <MdLightbulb />,
    title: "Innovation Culture",
    desc: "We co-innovate products, experiment with emerging tech, and encourage bold ideas at every level."
  },
  {
    icon: <MdBarChart />,
    title: "Accelerated Growth",
    desc: "Structured mentorship, certifications, and hands-on exposure to SAP S/4HANA, AI, and cloud platforms."
  },
  {
    icon: <FaUsers />,
    title: "Expert Leadership",
    desc: "Work directly alongside promoters with 25+ years of SAP experience — global heads who still get their hands dirty."
  },
  {
    icon: <MdEmojiEvents />,
    title: "Recognition & Rewards",
    desc: "Performance is celebrated. From increments to promotions, your contributions are seen and rewarded."
  },
  {
    icon: <MdBolt />,
    title: "Global Exposure",
    desc: "Engage with clients across India, Singapore, Canada and beyond — building a truly global career."
  }
];

const WhyWorkWithUs = () => {
  return (
    <div className="wwwu-con">
      {/* Top row — heading left, desc right */}
      <div className="wwwu-top-row">
        <div className="wwwu-top-left">
          <p className="sub-para-text" style={{ padding: 0 }}>
            <span className="leadership-blue-square"></span>OUR CULTURE
          </p>
          <h1 className="head-text">Why work with us</h1>
        </div>
        <div className="wwwu-top-right">
          <p className="para-text">
            The values that define our culture, drive our innovation, and shape our customer success.
          </p>
        </div>
      </div>

      {/* 3×2 grid */}
      <div className="wwwu-grid">
        {perks.map((perk, i) => (
          <div className="wwwu-card" key={i}>
            <div className="wwwu-icon">{perk.icon}</div>
            <h3 className="wwwu-card-title">{perk.title}</h3>
            <p className="wwwu-card-desc">{perk.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
