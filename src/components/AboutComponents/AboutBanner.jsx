import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import '../../css/AboutComponents/AboutBanner.css';
import defaultBanner from '../../assets/About/banner.avif';

const AboutBanner = ({
  subtitle = "ABOUT US",
  title = "Built by Digital Transformation Leaders. Driven by Enterprise Outcomes.",
  desc = "Headquartered in Singapore with delivery centers in India. Founded by leaders with 25+ years of hands-on SAP and technology experience — from consultants to global heads — YASYA delivers digital transformation with precision, accountability, and zero debt.",
  cta = false,
  bgImage = defaultBanner
}) => {

  return (
    <div className="about-banner-con" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="banner-overlay"></div>

      <div className="about-banner-contents">
        <p className='sub-para-text' style={{ color: 'white', padding: '0px' }}>
          {subtitle}
        </p>

        <h1 className='head-text' style={{ color: 'white' }}>
          {title}
        </h1>

        <p className='para-text' style={{ color: 'white' }}>
          {desc}
        </p>

        {cta && (
          <div className="banner-btns">
            <Link to="/services" className="red-bg-btn">
              Explore Our Services <FaArrowRight size={14} />
            </Link>

            <Link to="/contact" className="banner-outline-btn">
              Schedule Strategy Call <FaArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutBanner;